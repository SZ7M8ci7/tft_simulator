const data = window.SET16_DATA || { traits: {}, units: [] };
const traits = data.traits || {};
const units = data.units || [];

const selected = new Set();
const unitMap = new Map(units.map((unit) => [unit.id, unit]));
const unitButtons = new Map();
let currentMode = "add";
const selectedCostFilters = new Set(["1", "2"]);

const unitGroupsEl = document.getElementById("unitGroups");
const activeSynergiesEl = document.getElementById("activeSynergies");
const simResultsEl = document.getElementById("simResults");
const tabAddEl = document.getElementById("tabAdd");
const tabSwapEl = document.getElementById("tabSwap");
const costFiltersEl = document.getElementById("costFilters");
const traitTooltipEl = document.getElementById("traitTooltip");

function makeIcon(src, alt) {
  const img = document.createElement("img");
  img.className = "icon";
  img.loading = "lazy";
  img.src = src;
  img.alt = alt;
  return img;
}

function escapeHtmlAttr(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function normalizeTraitDesc(desc) {
  return String(desc || "")
    .replace(/@TFTUnitProperty[^@]*@/g, "")
    .replace(/\(\s*\)/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{2,}/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function formatEffectNumber(value) {
  if (!Number.isFinite(value)) return String(value);
  if (Math.abs(value) >= 10) return String(Math.round(value * 100) / 100);
  if (Math.abs(value) >= 1) return String(Math.round(value * 100) / 100);
  return String(Math.round(value * 10000) / 10000);
}

function cleanResolvedLine(text) {
  return text
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\s+([,、。%])/g, "$1")
    .replace(/\(\s*\)/g, "")
    .replace(/\/\s*\/+/g, "/")
    .trim();
}

function resolveTraitLineWithEffect(template, effectRow) {
  let text = normalizeTraitDesc(template);
  if (!effectRow) return cleanResolvedLine(text) || null;

  text = text.replace(/@MinUnits@/g, String(effectRow.minUnits));
  let missing = false;
  text = text.replace(/@([A-Za-z0-9_]+)(\*100)?@/g, (match, key, mul100) => {
    const raw = effectRow.variables?.[key];
    if (raw === undefined || raw === null || !Number.isFinite(raw)) {
      missing = true;
      return "";
    }
    const val = mul100 ? raw * 100 : raw;
    return formatEffectNumber(val);
  });
  // If a placeholder value is missing in this tier, dropping the line is clearer than showing broken text.
  if (missing) return null;
  text = text.replace(/@[A-Za-z0-9_.*:+%-]+@/g, "");
  text = cleanResolvedLine(text);
  return text || null;
}

function splitDescLines(desc) {
  const lines = normalizeTraitDesc(desc)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const deduped = [];
  let prev = "";
  lines.forEach((line) => {
    if (line === prev) return;
    deduped.push(line);
    prev = line;
  });
  return deduped;
}

function extractBaseDesc(desc) {
  const lines = splitDescLines(desc);
  const baseLines = lines.filter((line) => !line.includes("@MinUnits@"));
  return baseLines.join(" ");
}

function extractEffectTemplateLines(desc) {
  const lines = splitDescLines(desc);
  const withMinUnits = lines.filter((line) => line.includes("@MinUnits@"));
  const source = withMinUnits.length ? withMinUnits : lines.filter((line) => /@[A-Za-z0-9_]+/.test(line));
  const uniq = [];
  const seen = new Set();
  source.forEach((line) => {
    if (seen.has(line)) return;
    seen.add(line);
    uniq.push(line);
  });
  return uniq;
}

function buildLocalizedEffectSummary(desc, effectRows) {
  if (!effectRows.length) return "";
  const templates = extractEffectTemplateLines(desc);
  if (!templates.length) {
    return effectRows
      .map((row) => {
        const values = Object.values(row.variables || {})
          .filter((value) => Number.isFinite(value))
          .map((value) => formatEffectNumber(value))
          .join("、");
        return values ? `Lv${row.minUnits}: ${values}` : `Lv${row.minUnits}: -`;
      })
      .join("\n");
  }

  const rows = [];
  let prevLines = [];
  effectRows.forEach((row, index) => {
    // Each tier inherits prior tier templates, and can add new clauses.
    const tierTemplates = templates.slice(0, Math.min(index + 1, templates.length));
    const resolvedLines = tierTemplates
      .map((template) => resolveTraitLineWithEffect(template, row))
      .filter(Boolean)
      .map((line) => line.replace(/^\(\d+\)\s*/, "").trim());
    const deduped = [...new Set(resolvedLines)];
    const delta = deduped.filter((line) => !prevLines.includes(line));
    if (!delta.length) {
      rows.push(`Lv${row.minUnits}: 前段階と同じ`);
      return;
    }
    rows.push(`Lv${row.minUnits}: ${delta.join(" / ")}`);
    prevLines = deduped;
  });
  return rows.join("\n");
}

function buildTraitDetailText(traitName, currentCount) {
  const meta = traits[traitName] || {};
  const thresholds = meta.thresholds || [];
  const effectRows = (meta.effects || []).slice().sort((a, b) => a.minUnits - b.minUnits);
  const currentEffect =
    effectRows.reduce((best, row) => (currentCount >= row.minUnits ? row : best), null) ||
    effectRows[0] ||
    null;
  const baseDesc = extractBaseDesc(meta.desc);
  const desc = resolveTraitLineWithEffect(baseDesc, currentEffect);
  const effectSummary = buildLocalizedEffectSummary(meta.desc, effectRows);
  const activeLevel = thresholds.reduce(
    (best, threshold) => (currentCount >= threshold ? threshold : best),
    0
  );
  const nextLevel = thresholds.find((threshold) => threshold > currentCount);
  const lines = [`特性: ${traitName}`];
  if (desc) lines.push(`効果: ${desc}`);
  if (effectSummary) lines.push(`段階別効果:\n${effectSummary}`);
  if (thresholds.length) lines.push(`ライン: ${thresholds.join(",")}`);
  lines.push(`現在: ${currentCount} / 発動中: ${activeLevel || "-"} / 次: ${nextLevel ?? "なし"}`);
  return lines.join("\n");
}

function getTraitCounts(unitIds) {
  const counts = {};
  unitIds.forEach((id) => {
    const unit = unitMap.get(id);
    if (!unit) return;
    unit.traits.forEach((traitName) => {
      counts[traitName] = (counts[traitName] || 0) + 1;
    });
  });
  return counts;
}

function getActiveLevels(traitCounts) {
  const active = {};
  Object.entries(traitCounts).forEach(([traitName, count]) => {
    const thresholds = traits[traitName]?.thresholds || [];
    const level = thresholds.reduce((best, threshold) => (count >= threshold ? threshold : best), 0);
    if (level > 0) active[traitName] = level;
  });
  return active;
}

function scoreDelta(baseActive, nextActive) {
  const traitNames = new Set([...Object.keys(baseActive), ...Object.keys(nextActive)]);
  const newly = [];
  const upgraded = [];
  const downgraded = [];
  const deactivated = [];

  traitNames.forEach((traitName) => {
    const baseLevel = baseActive[traitName] || 0;
    const nextLevel = nextActive[traitName] || 0;

    if (baseLevel === 0 && nextLevel > 0) {
      newly.push(traitName);
      return;
    }
    if (baseLevel > 0 && nextLevel === 0) {
      deactivated.push(traitName);
      return;
    }
    if (nextLevel > baseLevel) {
      upgraded.push(traitName);
      return;
    }
    if (nextLevel < baseLevel) {
      downgraded.push(traitName);
    }
  });

  return {
    score: newly.length + upgraded.length - downgraded.length - deactivated.length,
    newly,
    upgraded,
    downgraded,
    deactivated,
  };
}

function buildChangedTraits(baseCounts, nextCounts, changedTraits) {
  const rows = [];
  (changedTraits || []).forEach((traitName) => {
    rows.push({ traitName, from: baseCounts[traitName] || 0, to: nextCounts[traitName] || 0 });
  });
  return rows.sort((a, b) => b.to - a.to || a.traitName.localeCompare(b.traitName));
}

function buildUnitGroups() {
  const costs = [...new Set(units.map((unit) => unit.cost))].sort((a, b) => a - b);
  unitGroupsEl.innerHTML = "";

  costs.forEach((cost) => {
    const group = document.createElement("section");
    group.className = "cost-group";
    group.dataset.cost = String(cost);

    const grid = document.createElement("div");
    grid.className = "unit-grid";

    units
      .filter((unit) => unit.cost === cost)
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((unit) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "icon-btn unit-btn";
        button.title = unit.name;
        button.dataset.unitId = unit.id;
        button.dataset.tooltip = `${unit.name} | ${unit.traits.join(" / ")}`;
        button.appendChild(makeIcon(unit.icon, unit.name));
        const selectMark = document.createElement("span");
        selectMark.className = "select-mark";
        selectMark.textContent = "✓";
        button.appendChild(selectMark);

        button.addEventListener("click", () => {
          if (selected.has(unit.id)) {
            selected.delete(unit.id);
          } else {
            selected.add(unit.id);
          }
          updateUnitSelectionStyles();
          renderRightPane();
        });

        unitButtons.set(unit.id, button);
        grid.appendChild(button);
      });

    group.append(grid);
    unitGroupsEl.appendChild(group);
  });
}

function updateUnitSelectionStyles() {
  unitButtons.forEach((button, unitId) => {
    button.classList.toggle("selected", selected.has(unitId));
  });
}

function renderActiveSynergies() {
  const counts = getTraitCounts(selected);
  const active = getActiveLevels(counts);
  const traitNames = Object.keys(counts).sort(
    (a, b) =>
      (active[b] || 0) - (active[a] || 0) || counts[b] - counts[a] || a.localeCompare(b)
  );

  if (!traitNames.length) {
    activeSynergiesEl.innerHTML = '<div class="empty">発動中なし</div>';
    return;
  }

  activeSynergiesEl.innerHTML = traitNames
    .map((traitName) => {
      const current = counts[traitName];
      const activeLevel = active[traitName] || 0;
      const currentHtml =
        activeLevel > 0
          ? `<strong class="synergy-current-hit">${current}</strong>`
          : `<span>${current}</span>`;
      const allLevels = (traits[traitName]?.thresholds || [])
        .map((level) =>
          level === activeLevel
            ? `<strong class="synergy-level-hit">${level}</strong>`
            : `<span>${level}</span>`
        )
        .join("<span class=\"synergy-sep\">,</span>");
      const tooltip = escapeHtmlAttr(buildTraitDetailText(traitName, current));
      return `<div class="synergy-row ${activeLevel > 0 ? "active" : ""}" data-tooltip="${tooltip}"><span>${traitName}</span><span class="synergy-count">${currentHtml}<span class="synergy-slash">/</span>${allLevels}</span></div>`;
    })
    .join("");
}

function computeAddCandidates() {
  const baseCounts = getTraitCounts(selected);
  const baseActive = getActiveLevels(baseCounts);

  return units
    .filter((unit) => !selected.has(unit.id))
    .map((candidate) => {
      const next = new Set([...selected, candidate.id]);
      const nextCounts = getTraitCounts(next);
      const nextActive = getActiveLevels(nextCounts);
      const delta = scoreDelta(baseActive, nextActive);
      return {
        candidate,
        score: delta.score,
        changes: buildChangedTraits(baseCounts, nextCounts, [...delta.newly, ...delta.upgraded]),
      };
    })
    .filter((row) => row.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.candidate.cost - a.candidate.cost ||
        a.candidate.name.localeCompare(b.candidate.name)
    );
}

function computeSwapCandidates() {
  if (!selected.size) return [];

  const selectedIds = [...selected];
  const baseCounts = getTraitCounts(selected);
  const baseActive = getActiveLevels(baseCounts);
  const rows = [];

  selectedIds.forEach((removeId) => {
    units
      .filter((unit) => !selected.has(unit.id))
      .forEach((addUnit) => {
        const next = new Set(selectedIds.filter((id) => id !== removeId));
        next.add(addUnit.id);

        const nextCounts = getTraitCounts(next);
        const nextActive = getActiveLevels(nextCounts);
        const delta = scoreDelta(baseActive, nextActive);
        const adjustedScore = delta.score;
        const hasNegative = delta.deactivated.length > 0 || delta.downgraded.length > 0;
        const hasPositive = delta.newly.length > 0 || delta.upgraded.length > 0;
        const showZeroTradeoff =
          adjustedScore === 0 && hasNegative && hasPositive;
        if (adjustedScore < 0 || (adjustedScore === 0 && !showZeroTradeoff)) return;
        const deactivatedChanges = delta.deactivated.map((traitName) => ({
          traitName,
          from: baseCounts[traitName] || 0,
          to: nextCounts[traitName] || 0,
        }));

        rows.push({
          remove: unitMap.get(removeId),
          add: addUnit,
          score: adjustedScore,
          changes: buildChangedTraits(baseCounts, nextCounts, [
            ...delta.newly,
            ...delta.upgraded,
            ...delta.downgraded,
          ]),
          deactivated: delta.deactivated,
          deactivatedChanges,
        });
      });
  });

  return rows.sort(
    (a, b) => b.score - a.score || b.add.cost - a.add.cost || a.add.name.localeCompare(b.add.name)
  );
}

function formatTraitChangeHtml(change) {
  const tooltip = escapeHtmlAttr(buildTraitDetailText(change.traitName, change.to));
  const label = `${change.traitName} ${change.from}->${change.to}`;
  const toneClass =
    change.to > change.from ? "delta-up" : change.to < change.from ? "delta-down" : "";
  return `<span class="delta-trait ${toneClass}" data-tooltip="${tooltip}">${label}</span>`;
}

function formatChangedHtml(changes) {
  const ups = [];
  const downs = [];
  const neutrals = [];
  (changes || []).forEach((change) => {
    if (change.to > change.from) ups.push(change);
    else if (change.to < change.from) downs.push(change);
    else neutrals.push(change);
  });
  return [...ups, ...neutrals, ...downs].map((change) => formatTraitChangeHtml(change)).join(" / ");
}

function buildResultUnitIcon(unit) {
  const tooltip = escapeHtmlAttr(`${unit.name} | ${unit.traits.join(" / ")}`);
  const name = escapeHtmlAttr(unit.name);
  const icon = escapeHtmlAttr(unit.icon);
  return `<div class="icon-btn result-icon" data-tooltip="${tooltip}"><img class="icon" src="${icon}" alt="${name}" loading="lazy" /></div>`;
}

function buildAddCard(row) {
  const addId = escapeHtmlAttr(row.candidate.id);
  return `<article class="result-card" data-cost="${row.candidate.cost}" data-action="add" data-add-id="${addId}">
    <div class="result-top" title="${row.candidate.name}">
      ${buildResultUnitIcon(row.candidate)}
    </div>
    <div class="delta">${formatChangedHtml(row.changes)}</div>
  </article>`;
}

function buildSwapCard(row) {
  const addId = escapeHtmlAttr(row.add.id);
  const removeId = escapeHtmlAttr(row.remove.id);
  const allChanges = [...(row.changes || []), ...(row.deactivatedChanges || [])];
  return `<article class="result-card" data-cost="${row.add.cost}" data-action="swap" data-add-id="${addId}" data-remove-id="${removeId}">
    <div class="result-top" title="${row.remove.name} -> ${row.add.name}">
      ${buildResultUnitIcon(row.remove)}
      <span class="arrow">-></span>
      ${buildResultUnitIcon(row.add)}
    </div>
    <div class="delta">${formatChangedHtml(allChanges)}</div>
  </article>`;
}

function applyCostFilter(rows) {
  if (!selectedCostFilters.size) return [];
  if (currentMode === "add") {
    return rows.filter((row) => selectedCostFilters.has(String(row.candidate.cost)));
  }
  return rows.filter((row) => selectedCostFilters.has(String(row.add.cost)));
}

function renderSimulation() {
  if (currentMode === "add") {
    const rows = applyCostFilter(computeAddCandidates());
    if (!rows.length) {
      simResultsEl.innerHTML = '<div class="empty">該当候補なし</div>';
      return;
    }
    simResultsEl.innerHTML = rows.map((row) => buildAddCard(row)).join("");
    return;
  }

  const rows = applyCostFilter(computeSwapCandidates());
  if (!rows.length) {
    simResultsEl.innerHTML = '<div class="empty">該当候補なし</div>';
    return;
  }
  simResultsEl.innerHTML = rows.map((row) => buildSwapCard(row)).join("");
}

function renderTabs() {
  tabAddEl.classList.toggle("active", currentMode === "add");
  tabSwapEl.classList.toggle("active", currentMode === "swap");
}

function renderCostFilters() {
  if (!costFiltersEl) return;
  costFiltersEl.querySelectorAll("button[data-cost-filter]").forEach((button) => {
    button.classList.toggle("active", selectedCostFilters.has(button.dataset.costFilter || ""));
  });
}

function positionTooltip(event) {
  if (!traitTooltipEl || traitTooltipEl.hidden) return;
  const offset = 12;
  const maxLeft = window.innerWidth - traitTooltipEl.offsetWidth - 8;
  const maxTop = window.innerHeight - traitTooltipEl.offsetHeight - 8;
  const left = Math.min(maxLeft, Math.max(8, event.clientX + offset));
  const top = Math.min(maxTop, Math.max(8, event.clientY + offset));
  traitTooltipEl.style.left = `${left}px`;
  traitTooltipEl.style.top = `${top}px`;
}

function showTooltip(text, event) {
  if (!traitTooltipEl || !text) return;
  traitTooltipEl.textContent = text;
  traitTooltipEl.hidden = false;
  positionTooltip(event);
}

function hideTooltip() {
  if (!traitTooltipEl) return;
  traitTooltipEl.hidden = true;
}

function setupTooltipHandlers() {
  document.addEventListener("mousemove", (event) => {
    const target = event.target.closest("[data-tooltip]");
    if (!target) {
      hideTooltip();
      return;
    }
    showTooltip(target.dataset.tooltip, event);
  });
  document.addEventListener("scroll", hideTooltip, true);
  document.addEventListener("mouseout", (event) => {
    if (!event.relatedTarget) hideTooltip();
  });
}

function renderRightPane() {
  renderActiveSynergies();
  renderTabs();
  renderCostFilters();
  renderSimulation();
}

function applySimulationAction(cardEl) {
  const action = cardEl.dataset.action;
  const addId = cardEl.dataset.addId;
  const removeId = cardEl.dataset.removeId;
  if (!action || !addId || !unitMap.has(addId)) return;

  if (action === "add") {
    selected.add(addId);
  } else if (action === "swap") {
    if (!removeId || !selected.has(removeId)) return;
    selected.delete(removeId);
    selected.add(addId);
  } else {
    return;
  }

  updateUnitSelectionStyles();
  renderRightPane();
}

function init() {
  buildUnitGroups();
  updateUnitSelectionStyles();
  renderRightPane();
  setupTooltipHandlers();

  tabAddEl.addEventListener("click", () => {
    currentMode = "add";
    renderRightPane();
  });

  tabSwapEl.addEventListener("click", () => {
    currentMode = "swap";
    renderRightPane();
  });

  if (costFiltersEl) {
    costFiltersEl.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-cost-filter]");
      if (!button) return;
      const cost = button.dataset.costFilter;
      if (!cost) return;
      if (selectedCostFilters.has(cost)) selectedCostFilters.delete(cost);
      else selectedCostFilters.add(cost);
      renderRightPane();
    });
  }

  simResultsEl.addEventListener("click", (event) => {
    const card = event.target.closest(".result-card");
    if (!card || !simResultsEl.contains(card)) return;
    applySimulationAction(card);
  });
}

init();
