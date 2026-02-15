// Data source: CommunityDragon Set 16 (ja_jp)
// https://raw.communitydragon.org/latest/cdragon/tft/ja_jp.json
window.SET16_DATA = {
  traits: {
  "アイオニア": {
    "name": "アイオニア",
    "thresholds": [
      3,
      5,
      7,
      10
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_ionia.tft_set16.png",
    "desc": "「アイオニア」がシールド、攻撃力、魔力を獲得する。試合ごとに、別の道を歩む。\n@TFTUnitProperty.trait:TFT16_Ionia_PathTooltip@\n(@MinUnits@) ゲームごとに変化する効果を得る\n(@MinUnits@) ゲームごとに変化する効果を得る\n(@MinUnits@) ゲームごとに変化する効果を得る",
    "effects": [
      {
        "minUnits": 3,
        "variables": {
          "BladesFlatDamage": 3.0,
          "BladesPercentChance": 30.0,
          "DeterminationFlatDamage": 20,
          "DeterminationResists": 15,
          "EnlightenmentADAP": 10.0,
          "EnlightenmentADAPPerLevel": 2.0,
          "EnlightenmentXP": 1,
          "GenerosityADAP": 10,
          "GenerosityIncreasePerGold": 0.02,
          "SpiritADAP": 3.0,
          "SpiritHealth": 0.25,
          "Transcendence3StarBuff": 1.0,
          "TranscendenceHealth": 0.1,
          "TranscendenceMagicDamage": 0.2
        }
      },
      {
        "minUnits": 5,
        "variables": {
          "BladesFlatDamage": 8.0,
          "BladesPercentChance": 38.0,
          "DeterminationFlatDamage": 40,
          "DeterminationResists": 25,
          "EnlightenmentADAP": 15.0,
          "EnlightenmentADAPPerLevel": 3.0,
          "EnlightenmentXP": 2,
          "GenerosityADAP": 25,
          "GenerosityIncreasePerGold": 0.02,
          "SpiritADAP": 4.0,
          "SpiritHealth": 0.3,
          "Transcendence3StarBuff": 1.0,
          "TranscendenceHealth": 0.15,
          "TranscendenceMagicDamage": 0.25
        }
      },
      {
        "minUnits": 7,
        "variables": {
          "BladesFlatDamage": 15.0,
          "BladesPercentChance": 45.0,
          "DeterminationFlatDamage": 60,
          "DeterminationResists": 40,
          "EnlightenmentADAP": 20.0,
          "EnlightenmentADAPPerLevel": 4.0,
          "EnlightenmentXP": 4,
          "GenerosityADAP": 40,
          "GenerosityIncreasePerGold": 0.02,
          "SpiritADAP": 5.0,
          "SpiritHealth": 0.35,
          "Transcendence3StarBuff": 1.0,
          "TranscendenceHealth": 0.2,
          "TranscendenceMagicDamage": 0.3
        }
      },
      {
        "minUnits": 10,
        "variables": {
          "BladesFlatDamage": 25.0,
          "BladesPercentChance": 70.0,
          "DeterminationFlatDamage": 100,
          "DeterminationResists": 75,
          "EnlightenmentADAP": 100.0,
          "EnlightenmentXP": 4,
          "GenerosityADAP": 50,
          "GenerosityIncreasePerGold": 0.02,
          "SpiritADAP": 7.0,
          "SpiritHealth": 0.75,
          "Transcendence3StarBuff": 1.0,
          "TranscendenceHealth": 0.3,
          "TranscendenceMagicDamage": 0.7
        }
      }
    ]
  },
  "アシミレーター": {
    "name": "アシミレーター",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_assimilator.tft_set16.png",
    "desc": "攻撃力と魔力のどちらが高いかによって、カイ＝サのスキルが変化する。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {}
      }
    ]
  },
  "アルカニスト": {
    "name": "アルカニスト",
    "thresholds": [
      2,
      4,
      6
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_6_arcanist.png",
    "desc": "味方チームの魔力が増加する。「アルカニスト」はさらに増加する。\n(@MinUnits@) @AllyAP@% 、「アルカニスト」は@BonusAP@%",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "AllyAP": 18.0,
          "BonusAP": 25.0
        }
      },
      {
        "minUnits": 4,
        "variables": {
          "AllyAP": 25.0,
          "BonusAP": 40.0
        }
      },
      {
        "minUnits": 6,
        "variables": {
          "AllyAP": 40.0,
          "BonusAP": 60.0
        }
      }
    ]
  },
  "イシュタル": {
    "name": "イシュタル",
    "thresholds": [
      3,
      5,
      7
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_ixtal.tft_set16.png",
    "desc": "(@MinUnits@) クエストを完了して「サンシャード」()を獲得し、集めた「サンシャード」を消費して戦利品を手に入れよう！\n(@MinUnits@) PvPラウンドの開始時にプレイヤーの体力を2回復する。\n(@MinUnits@) 戦闘に勝利すると、@BonusClues@ と追加の埋もれた戦利品を獲得する。\n戦闘終了前にクエストを1つ完了すると、次のラウンド開始時に新しいクエストが与えられる。",
    "effects": [
      {
        "minUnits": 3,
        "variables": {}
      },
      {
        "minUnits": 5,
        "variables": {
          "BonusHealth_Pairs": 250,
          "Heal": 2.0
        }
      },
      {
        "minUnits": 7,
        "variables": {
          "BonusClues": 50.0,
          "BonusHealth_Pairs": 250,
          "Heal": 2.0
        }
      }
    ]
  },
  "イモータル": {
    "name": "イモータル",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_immortal.tft_set16.png",
    "desc": "シン・ジャオがボードに配置されていない間は、ザーヘンが「アイオニア」、「デマーシア」、「ワーデン」の特性を獲得する。\nキル時、ザーヘンが戦闘終了まで「不退転」のスタックを獲得する。ザーヘンが倒された時に「不退転」のスタックが@FocusNeededToRevive@以上だった場合、それを消費して蘇生し、最大体力の@PercentMaxHealthHeal*100@%を回復する。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {
          "FocusNeededToRevive": 3,
          "PercentMaxHealthHeal": 0.6,
          "ReviveDuration": 0.5
        }
      }
    ]
  },
  "インヴォーカー": {
    "name": "インヴォーカー",
    "thresholds": [
      2,
      4
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_invoker.png",
    "desc": "味方チームが@TeamBonusMana@のマナ自動回復を獲得する。「インヴォーカー」があらゆるソースから獲得するマナが増加する。\n(@MinUnits@) マナが@PercentManaIncrease*100@%増加",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "PercentManaIncrease": 0.25,
          "TeamBonusMana": 1
        }
      },
      {
        "minUnits": 4,
        "variables": {
          "PercentManaIncrease": 0.4,
          "TeamBonusMana": 1
        }
      }
    ]
  },
  "エターナル": {
    "name": "エターナル",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_5_eternal.png",
    "desc": "キンドレッドが同じ敵に行う通常攻撃3回ごとに、@PercentDamageMult*100@%のダメージを与え、狼が対象に噛みつく。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {
          "PercentDamageMult": 3.25
        }
      }
    ]
  },
  "エンペラー": {
    "name": "エンペラー",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_emperor.tft_set16.png",
    "desc": "2体の「近衛兵」を配備する。「近衛兵」はフィールドのどこにでも配置できる。「近衛兵」は移動も攻撃もせず、アジールが倒されると消滅する。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {}
      }
    ]
  },
  "ガンスリンガー": {
    "name": "ガンスリンガー",
    "thresholds": [
      2,
      4
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_gunslinger.tft_set16.png",
    "desc": "「ガンスリンガー」の攻撃力が増加する。「ガンスリンガー」の通常攻撃@NumAttacks@回ごとに追加物理ダメージを与える。\n(@MinUnits@) @AD*100@% 、@BonusDamage@の追加ダメージ",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "AD": 0.22,
          "BonusDamage": 100,
          "NumAttacks": 4
        }
      },
      {
        "minUnits": 4,
        "variables": {
          "AD": 0.4,
          "BonusDamage": 200,
          "NumAttacks": 4
        }
      }
    ]
  },
  "クロノキーパー": {
    "name": "クロノキーパー",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_chronokeeper.tft_set16.png",
    "desc": "スキルを@CastsToGainXP@回使用するたびに、「時の番人」はXPを@XPPerCast@蓄積する。レベルアップに必要なXPを蓄積すると、そのXPをプレイヤーに移行する。\nプレイヤーレベルが10の場合、代わりに@DAGainAtMaxLevel@%のダメージ増加効果を獲得する。\nXP蓄積量: @TFTUnitProperty.trait:TFT16_ChronoKeeperStoredXP@",
    "effects": [
      {
        "minUnits": 1,
        "variables": {
          "CastsToGainXP": 2,
          "CastsToGainXPPAIRS": 2,
          "DAGainAtMaxLevel": 15,
          "XPPerCast": 1
        }
      }
    ]
  },
  "グラットン": {
    "name": "グラットン",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_glutton.tft_set16.png",
    "desc": "戦闘準備フェーズごとに1回、タム・ケンチにチャンピオン1体を食べさせ、そのチャンピオンのロールとスターレベルに応じて、タム・ケンチの体力、攻撃速度、魔力のいずれかを恒久的に増加させる。\nベンチの味方を食べさせる際は、タム・ケンチまでドラッグして、口が開いてから手をはなす。\n現在のステータス: @TFTUnitProperty.:TFT16_GluttonStat_HP@ 、@TFTUnitProperty.:TFT16_GluttonStat_AS@% 、@TFTUnitProperty.:TFT16_GluttonStat_AP@%",
    "effects": [
      {
        "minUnits": 1,
        "variables": {}
      }
    ]
  },
  "ケアテイカー": {
    "name": "ケアテイカー",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_caretaker.tft_set16.png",
    "desc": "対人戦に勝利すると、ルーンテラのユニットを1体ランダムに獲得する。対人戦に敗北すると無料リロールを獲得する。回数はステージごとに増える。\n敗北時のリロール: @TFTUnitProperty.:TFT16_Caretaker_NumRerolls@",
    "effects": [
      {
        "minUnits": 1,
        "variables": {}
      }
    ]
  },
  "ザ・ボス": {
    "name": "ザ・ボス",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_4_theboss.png",
    "desc": "セトの体力が最初に最大体力の@MaxHealthThreshold*100@%まで低下したとき、戦線離脱して腹筋を始める。腹筋を1回行うごとに最大体力の@HealPercent@%を回復し、攻撃速度と移動速度が@AttackSpeedPercent@%増加する。\n体力が最大になると戦闘に戻り、「パンプアップ」状態となって通常攻撃とスキルによるすべてのダメージが確定ダメージになる。すべての味方が倒された場合は、その時点で戦闘に復帰する。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {
          "AttackSpeedPercent": 60.0,
          "HealPercent": 15.0,
          "MaxHealthThreshold": 0.45
        }
      }
    ]
  },
  "シャドウアイル": {
    "name": "シャドウアイル",
    "thresholds": [
      2,
      3,
      4,
      5
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_shadowisles.tft_set16.png",
    "desc": "対人戦ラウンドでいずれかのチャンピオンがデスするたび、魂()を獲得する。「シャドウアイル」チャンピオンのスキルが、持っている魂の数に応じて独自に強化される。\n「シャドウアイル」チャンピオンの攻撃力と魔力が増加する。\n(@MinUnits@) @SoulMult@x 、@ADAP*100@%\n(@MinUnits@) @SoulMult@x 、@ADAP*100@%\n(@MinUnits@) @SoulMult@x 、@ADAP*100@%\n(@MinUnits@) @SoulMult@x 、@ADAP*100@%\n集めた魂: @TFTUnitProperty.trait:TFT16_ShadowIsles_SoulsPlayerFacing@",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "ADAP": 0.18,
          "SoulMult": 1.0
        }
      },
      {
        "minUnits": 3,
        "variables": {
          "ADAP": 0.2,
          "SoulMult": 1.3
        }
      },
      {
        "minUnits": 4,
        "variables": {
          "ADAP": 0.25,
          "SoulMult": 1.6
        }
      },
      {
        "minUnits": 5,
        "variables": {
          "ADAP": 0.33,
          "SoulMult": 1.9
        }
      }
    ]
  },
  "シュリーマ": {
    "name": "シュリーマ",
    "thresholds": [
      2,
      3,
      4
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_shurima.tft_set16.png",
    "desc": "毎秒、「シュリーマ」チャンピオンの攻撃速度が@ASPerSecond*100@%増加し、体力を@HealthRestorePerSecond@回復する。戦闘開始時、追加効果を獲得する。\n(@MinUnits@) 最大体力@BonusHealth*100@%\n(@MinUnits@) 物理防御と魔法防御@ArmorMR@\n(@MinUnits@) @GodhoodCadence@秒ごとに、「シュリーマ」1体が超越して「神」になる。",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "ASPerSecond": 0.02,
          "BonusHealth": 0.2,
          "HealthRestorePerSecond": 20
        }
      },
      {
        "minUnits": 3,
        "variables": {
          "ASPerSecond": 0.02,
          "ArmorMR": 50.0,
          "BonusHealth": 0.2,
          "HealthRestorePerSecond": 20
        }
      },
      {
        "minUnits": 4,
        "variables": {
          "ASPerSecond": 0.02,
          "ArmorMR": 50.0,
          "BonusHealth": 0.2,
          "GodhoodCadence": 3,
          "HealthRestorePerSecond": 20
        }
      }
    ]
  },
  "ジャガーノート": {
    "name": "ジャガーノート",
    "thresholds": [
      2,
      4,
      6
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_juggernaut.png",
    "desc": "「ジャガーノート」は体力が@HealthBreakpoint*100@%を上回っている間は耐久力が増加する。「ジャガーノート」が倒されると、他の「ジャガーノート」が最大体力の@HealRatio*100@%を回復する。\n(@MinUnits@) @BaseDR*100@%または@IncreasedDR*100@%",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "BaseDR": 0.18,
          "HealRatio": 0.05,
          "HealthBreakpoint": 0.5,
          "IncreasedDR": 0.25
        }
      },
      {
        "minUnits": 4,
        "variables": {
          "BaseDR": 0.2,
          "HealRatio": 0.05,
          "HealthBreakpoint": 0.5,
          "IncreasedDR": 0.3
        }
      },
      {
        "minUnits": 6,
        "variables": {
          "BaseDR": 0.26,
          "HealRatio": 0.05,
          "HealthBreakpoint": 0.5,
          "IncreasedDR": 0.36
        }
      }
    ]
  },
  "スターフォージャー": {
    "name": "スターフォージャー",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_starforger.tft_set16.png",
    "desc": "戦闘に配置されている他の「ターゴン」1種類ごとに、オレリオン・ソルの「星屑」が@BonusStardustPerOneStar*100@/@BonusStardustPerTwoStar*100@/@BonusStardustPerThreeStar*100@%増加する。\n現在のボーナス: @TFTUnitProperty.:TFT16_AurelionSol_StarMod@%",
    "effects": [
      {
        "minUnits": 1,
        "variables": {
          "BonusStardustPerOneStar": 0.25,
          "BonusStardustPerThreeStar": 1.0,
          "BonusStardustPerTwoStar": 0.3
        }
      }
    ]
  },
  "スレイヤー": {
    "name": "スレイヤー",
    "thresholds": [
      2,
      4,
      6
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_slayer.png",
    "desc": "「スレイヤー」のオムニヴァンプと攻撃力が増加する。自身の減少体力に応じて、攻撃力が追加で最大@AmountIncrease*100@%増加する。\n(@MinUnits@) @BonusAD*100@% 、@BonusOmnivamp*100@%",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "AmountIncrease": 0.5,
          "BonusAD": 0.22,
          "BonusOmnivamp": 0.1
        }
      },
      {
        "minUnits": 4,
        "variables": {
          "AmountIncrease": 0.5,
          "BonusAD": 0.33,
          "BonusOmnivamp": 0.16
        }
      },
      {
        "minUnits": 6,
        "variables": {
          "AmountIncrease": 0.5,
          "BonusAD": 0.44,
          "BonusOmnivamp": 0.2
        }
      }
    ]
  },
  "ソウルバウンド": {
    "name": "ソウルバウンド",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_soulbound.tft_set16.png",
    "desc": "ルシアンとセナは共に戦い、どちらかがスキルを発動するたびに交替する。各チャンピオンは固有スキルを持つ。\n味方の最も強い「ソウルバウンド」のペアが、生存中に味方チームにボーナスを付与する。セナが出ている間は、すべての味方が@SennaDR*100@%のダメージ軽減率を獲得する。ルシアンが出ている間は、すべての味方が@LucianDA*100@%のダメージ増加効果を獲得する。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {
          "LucianDA": 0.07,
          "SennaDR": 0.07
        }
      }
    ]
  },
  "ゾウン": {
    "name": "ゾウン",
    "thresholds": [
      3,
      5,
      7
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_zaun.tft_set16.png",
    "desc": "@InitialDelay@秒後、「ゾウン」チャンピオンがシマーフューズになり、耐久力が@ShimmerFuseDurability*100@%、攻撃速度が@ShimmerFuseAttackSpeed*100@%増加する。この攻撃速度は@ShimmerFuseDuration@秒かけて徐々に元に戻る。\n短いクールダウンの後、再びシマーフューズになる。\n(@MinUnits@) @RefreshSeconds@秒ごとにリフレッシュする。\n(@MinUnits@) 体力が@HealThreshold*100@%になると、「ゾウン」チャンピオンが@HealDuration@秒かけて体力の@MaxHealthHeal*100@%を回復し、即座にシマーフューズになる。\n(@MinUnits@) シマーフューズのボーナスが@ShimmerFustMult*100@%増加する。代わりに@RefreshSeconds@秒後にリフレッシュする。",
    "effects": [
      {
        "minUnits": 3,
        "variables": {
          "HealDuration": 3.0,
          "HealThreshold": 0.6,
          "InitialDelay": 4.0,
          "RefreshSeconds": 4.0,
          "ReviveDuration": 3.0,
          "ShimmerFuseAttackSpeed": 0.9,
          "ShimmerFuseDurability": 0.15,
          "ShimmerFuseDuration": 4.0
        }
      },
      {
        "minUnits": 5,
        "variables": {
          "HealDuration": 3.0,
          "HealThreshold": 0.6,
          "InitialDelay": 4.0,
          "MaxHealthHeal": 0.3,
          "RefreshSeconds": 4.0,
          "ReviveDuration": 3.0,
          "ShimmerFuseAttackSpeed": 0.9,
          "ShimmerFuseDurability": 0.15,
          "ShimmerFuseDuration": 4.0
        }
      },
      {
        "minUnits": 7,
        "variables": {
          "HealDuration": 3.0,
          "HealThreshold": 0.6,
          "InitialDelay": 4.0,
          "MaxHealthHeal": 0.3,
          "RefreshSeconds": 3.0,
          "ReviveDuration": 3.0,
          "ShimmerFuseAttackSpeed": 0.9,
          "ShimmerFuseDurability": 0.15,
          "ShimmerFuseDuration": 4.0,
          "ShimmerFustMult": 0.5
        }
      }
    ]
  },
  "タイムワインダー": {
    "name": "タイムワインダー",
    "thresholds": [
      1,
      2
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/teamup_trait_timewinders.tft_set16.png",
    "desc": "エコーが戦闘に参加した後、経験値を@TOOLTIPONLYXP@XP獲得する。エコーが★3になると、ジリアンを1体獲得する。\nエコーの強化通常攻撃は、最も強いジリアンによってダメージを受けているすべての敵に反響し、元のダメージの@DamageShare*100@%を与える。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {
          "DamageShare": 0.1,
          "TOOLTIPONLYXP": 2
        }
      },
      {
        "minUnits": 2,
        "variables": {
          "DamageShare": 0.1,
          "TOOLTIPONLYXP": 2
        }
      }
    ]
  },
  "ターゴン": {
    "name": "ターゴン",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_targon.tft_set16.png",
    "desc": "「ターゴン」チャンピオンは星によって生み出され、特性はないが、通常のチャンピオンよりも強力だ。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {}
      }
    ]
  },
  "ダーキン": {
    "name": "ダーキン",
    "thresholds": [
      1,
      2,
      3
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_darkin.tft_set16.png",
    "desc": "(@MinUnits@) 「ダーキン」のオムニヴァンプが@Vamp*100@%増加する。\n(@MinUnits@) さらに、自身が与えたプレイヤーダメージの@TacticianPercent*100@%にあたる体力を回復する。\n(@MinUnits@) さらに、「ダーキン」が体力を@HealThreshold@回復するたびに、最も近くにいる@EnemyNum@体の敵に@Damage@の魔法ダメージを与える。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {
          "Damage": 333,
          "EnemyNum": 2,
          "HealThreshold": 600,
          "TacticianPercent": 0.25,
          "Vamp": 0.15
        }
      },
      {
        "minUnits": 2,
        "variables": {
          "Damage": 333,
          "EnemyNum": 2,
          "HealThreshold": 600,
          "TacticianPercent": 0.25,
          "Vamp": 0.15
        }
      },
      {
        "minUnits": 3,
        "variables": {
          "Damage": 333,
          "EnemyNum": 2,
          "HealThreshold": 600,
          "TacticianPercent": 0.25,
          "Vamp": 0.15
        }
      }
    ]
  },
  "ダークチャイルド": {
    "name": "ダークチャイルド",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_darkchild.tft_set16.png",
    "desc": "アニーがベンチにティバーズを召喚する。ティバーズはボードに配置可能で、チームスロットを1つ消費する。また、個別にアイテムを装備することができる。ティバーズのスターレベルはアニーと同じである。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {}
      }
    ]
  },
  "チェインブレイカー": {
    "name": "チェインブレイカー",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_chainbreaker.tft_set16.png",
    "desc": "サイラスは、その時にどれが最も効果的かによって、3つの異なるスキルを使い分ける。同じスキルを連続して使用することはできない。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {}
      }
    ]
  },
  "ディスラプター": {
    "name": "ディスラプター",
    "thresholds": [
      2,
      4
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_disruptor.png",
    "desc": "「ディスラプター」のスキルが命中した敵にダズルを付与する。「ディスラプター」はダズルが付与された敵に追加ダメージを与える。\n(@MinUnits@) @DamageAmp*100@%の追加ダメージ\nダズル: 与えるダメージが@DamageReduction*100@%減少",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "DamageAmp": 0.18,
          "DamageReduction": 0.1
        }
      },
      {
        "minUnits": 4,
        "variables": {
          "DamageAmp": 0.4,
          "DamageReduction": 0.1
        }
      }
    ]
  },
  "ディフェンダー": {
    "name": "ディフェンダー",
    "thresholds": [
      2,
      4,
      6
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_defender.png",
    "desc": "味方チームの物理防御と魔法防御が@TeamwideArmorMR@増加する。「ディフェンダー」はより多く増加する。\n(@MinUnits@) @BonusArmorMR@",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "BonusArmorMR": 30.0,
          "TeamwideArmorMR": 12
        }
      },
      {
        "minUnits": 4,
        "variables": {
          "BonusArmorMR": 55.0,
          "TeamwideArmorMR": 12
        }
      },
      {
        "minUnits": 6,
        "variables": {
          "BonusArmorMR": 80.0,
          "TeamwideArmorMR": 12
        }
      }
    ]
  },
  "デマーシア": {
    "name": "デマーシア",
    "thresholds": [
      3,
      5,
      7,
      11
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_demacia.tft_set16.png",
    "desc": "味方チームが最大体力の@MaxHealthLost*100@%を失うたびに、「デマーシア」が「奮起」し、スキルのマナコストが@ManaReductionPct*100@%低下する。「デマーシア」の物理防御と魔法防御が増加する。\n(@MinUnits@) @ArmorMR@\n(@MinUnits@) @ArmorMR@\n(@MinUnits@) @ArmorMR@ 。「奮起」すると、対象の最大体力の@EnemyTrueDamage*100@%にあたるダメージを与える。\n(@MinUnits@) @ArmorMR@ 。デマーシアのために戦え！",
    "effects": [
      {
        "minUnits": 3,
        "variables": {
          "ArmorMR": 12.0,
          "EnemyTrueDamage": 0.05,
          "ManaReductionPct": 0.1,
          "MaxHealthLost": 0.25
        }
      },
      {
        "minUnits": 5,
        "variables": {
          "ArmorMR": 35.0,
          "EnemyTrueDamage": 0.05,
          "ManaReductionPct": 0.1,
          "MaxHealthLost": 0.25
        }
      },
      {
        "minUnits": 7,
        "variables": {
          "ArmorMR": 35.0,
          "EnemyTrueDamage": 0.05,
          "ManaReductionPct": 0.1,
          "MaxHealthLost": 0.25
        }
      },
      {
        "minUnits": 11,
        "variables": {
          "ArmorMR": 150.0,
          "EnemyTrueDamage": 0.05,
          "ManaReductionPct": 0.1,
          "MaxHealthLost": 0.25
        }
      }
    ]
  },
  "ドラゴンの守護者": {
    "name": "ドラゴンの守護者",
    "thresholds": [
      2
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/teamup_trait_uncompromisingwill.tft_set16.png",
    "desc": "ジャーヴァンⅣがスキルを発動すると、シヴァーナが@JarvanShieldShare*100@%のシールドを獲得する。シヴァーナがスキルを使用すると、ジャーヴァンⅣが飛び込んできて、2マスの範囲に物理防御と魔法防御の@JarvanResistDamage1*100@/@JarvanResistDamage2*100@/@JarvanResistDamage3*100@/@JarvanResistDamage4*100@%にあたる魔法ダメージを与える。",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "JarvanResistDamage1": 1.0,
          "JarvanResistDamage2": 1.2,
          "JarvanResistDamage3": 1.55,
          "JarvanResistDamage4": 2.0,
          "JarvanShieldShare": 1.0
        }
      }
    ]
  },
  "ドラゴンボーン": {
    "name": "ドラゴンボーン",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_dragonborn.tft_set16.png",
    "desc": "スキル発動時、シヴァーナのスキルが「フレイムブレス」に置き換わる。変身時は、すべての味方が敵のスキルにより受けるダメージが@AbilityDamageReduction*100@%低下する。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {
          "AbilityDamageReduction": 0.08
        }
      }
    ]
  },
  "ノクサス": {
    "name": "ノクサス",
    "thresholds": [
      3,
      5,
      7,
      10
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_noxus.tft_set16.png",
    "desc": "敵チームが体力の@HPLostTrigger*100@%を失うと、災禍の使者アタカンをを召喚する。自身のスターレベルによって各「ノクサス」チャンピオンのパワーが増加する。\n(@MinUnits@) 敵を切りつけ、魔法ダメージを与える。\n(@MinUnits@) アタカンが長く生存するほど、「ノクサス」チャンピオンがより強力になる。\n(@MinUnits@) スキル発動時に敵の魂を吸い取る。\n(@MinUnits@) @RuinTimer@秒後、破滅をもたらす。",
    "effects": [
      {
        "minUnits": 3,
        "variables": {
          "HPLostTrigger": 0.15,
          "RuinTimer": 10
        }
      },
      {
        "minUnits": 5,
        "variables": {
          "HPLostTrigger": 0.15,
          "RuinTimer": 10
        }
      },
      {
        "minUnits": 7,
        "variables": {
          "HPLostTrigger": 0.15,
          "RuinTimer": 10
        }
      },
      {
        "minUnits": 10,
        "variables": {
          "HPLostTrigger": 0.15,
          "RuinTimer": 10
        }
      }
    ]
  },
  "ハントレス": {
    "name": "ハントレス",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_huntress.tft_set16.png",
    "desc": "最も強いニーコが生存している間、最も強いニダリーは敵の通常攻撃の対象にならず、耐久力が@Durability*100@%増加する。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {
          "Durability": 0.5
        }
      }
    ]
  },
  "ハーベスター": {
    "name": "ハーベスター",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_harvester.tft_set16.png",
    "desc": "敵チャンピオンがデスするたびに、@ManaPerEnemyDeath@マナを獲得する。スキルを使用してもマナを消費しない。\nすべての敵が物理防御と魔法防御を@EnemyArmorMRReduction@失う。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {
          "EnemyArmorMRReduction": 10,
          "ManaPerEnemyDeath": 10.0
        }
      }
    ]
  },
  "ヒロイック": {
    "name": "ヒロイック",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_heroic.tft_set16.png",
    "desc": "ガリオは戦闘に配置できない。その代わり、ベンチのガリオの特性がカウントされ、「デマーシア」が「奮起」すると戦闘に参加する。\nボードに着地時、@HexRadius@マス範囲の衝撃波を作り出し、最大体力の@PercentMaxHP*100@%にあたる魔法ダメージを与える。命中した敵は@KnockupDuration@秒間ノックアップする。この効果は中心から離れるほど低下する。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {
          "HexRadius": 3.0,
          "KnockupDuration": 1.0,
          "PercentMaxHP": 0.1
        }
      }
    ]
  },
  "ビルジウォーター": {
    "name": "ビルジウォーター",
    "thresholds": [
      3,
      5,
      7,
      10
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_bilgewater.png",
    "desc": "対人戦ラウンドごとに、シルバーサーペント()を獲得し、「ビルジウォーター」がキルまたはアシストを獲得するごとに、さらに追加で@SerpentsPerTakedown@獲得する。\nシルバーサーペントはブラックマーケットで使用することで、「ビルジウォーター」チャンピオンのステータスを増加させたり、彼らに特別な戦利品を付与できる。ティアが上がるとレア度の高い戦利品が解除される。\n(@MinUnits@) @SerpentsPerRound@\n(@MinUnits@) @SerpentsPerRound@ 、優れた戦利品\n(@MinUnits@) @SerpentsPerRound@ 、極上の戦利品\n(@MinUnits@) @SerpentsPerRound@ 、ステータスx@StatMult@、大砲発射！\n現在のボーナスステータス:\n@TFTUnitProperty.:TFT16_Bilgewater_BonusAD*100@% 、@TFTUnitProperty.:TFT16_Bilgewater_BonusAS*100@% 、@TFTUnitProperty.:TFT16_Bilgewater_BonusHealth*100@%\n現在のサーペント: @TFTUnitProperty.:TFT16_Bilgewater_SilverSerpents@",
    "effects": [
      {
        "minUnits": 3,
        "variables": {
          "MaxItems": 8.0,
          "SerpentsPerRound": 15.0,
          "SerpentsPerTakedown": 1,
          "StatMult": 1.0
        }
      },
      {
        "minUnits": 5,
        "variables": {
          "MaxItems": 8.0,
          "SerpentsPerRound": 35.0,
          "SerpentsPerTakedown": 1,
          "StatMult": 1.0
        }
      },
      {
        "minUnits": 7,
        "variables": {
          "MaxItems": 8.0,
          "SerpentsPerRound": 65.0,
          "SerpentsPerTakedown": 1,
          "StatMult": 1.0
        }
      },
      {
        "minUnits": 10,
        "variables": {
          "MaxItems": 8.0,
          "SerpentsPerRound": 150.0,
          "SerpentsPerTakedown": 1,
          "StatMult": 2.0
        }
      }
    ]
  },
  "ピルトーヴァー": {
    "name": "ピルトーヴァー",
    "thresholds": [
      2,
      4,
      6
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_piltover.tft_set16.png",
    "desc": "ボードの右側に発明品を組み立てる。@InventionFireTime@秒後、発明品が起動し、各モジュールを発動させる。\n(@MinUnits@) モジュールを選択\n(@MinUnits@) 2つ目のモジュールを選択\n(@MinUnits@) 3つ目のモジュールを選択",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "InventionFireTime": 8.0
        }
      },
      {
        "minUnits": 4,
        "variables": {
          "InventionFireTime": 8.0
        }
      },
      {
        "minUnits": 6,
        "variables": {
          "InventionFireTime": 8.0
        }
      }
    ]
  },
  "フレヨルド": {
    "name": "フレヨルド",
    "thresholds": [
      3,
      5,
      7
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_freljord.tft_set16.png",
    "desc": "「凍った塔」を召喚する。塔の前にいる味方は体力が増加し、塔の後ろにいる味方はダメージ増加効果を獲得する。\n「フレヨルド」チャンピオンは追加で@FreljordBonus*100@%増加する。\n(@MinUnits@) @HealthPercent*100@% 、@DA*100@%\n(@MinUnits@)２つの塔。@HealthPercent*100@% 、@DA*100@%\n(@MinUnits@)塔が倒壊時に敵を@StunDuration@秒間スタンさせる。@HealthPercent*100@% 、@DA*100@%",
    "effects": [
      {
        "minUnits": 3,
        "variables": {
          "DA": 0.1,
          "FreljordBonus": 1.5,
          "HealthPercent": 0.08
        }
      },
      {
        "minUnits": 5,
        "variables": {
          "DA": 0.16,
          "FreljordBonus": 1.5,
          "HealthPercent": 0.12
        }
      },
      {
        "minUnits": 7,
        "variables": {
          "DA": 0.22,
          "FreljordBonus": 1.5,
          "HealthPercent": 0.16,
          "StunDuration": 1.5
        }
      }
    ]
  },
  "ブラックスミス": {
    "name": "ブラックスミス",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_blacksmith.tft_set16.png",
    "desc": "対人戦が終了するたびに、その戦闘に参加していた味方の最も強いオーンがアーティファクトアイテムの鍛造を進める。\nオーンが装備しているアイテム1個ごとに、最大体力が@FlatHealthPerItem1Star@/@FlatHealthPerItem2Star@/@FlatHealthPerItem3Star@増加する。アーティファクトの場合は、効果が@ArtifactMult*100@%増加する。\n鍛造の進行状況: @TFTUnitProperty.:TFT16_OrnnProgress@/@RoundsToCraft@",
    "effects": [
      {
        "minUnits": 1,
        "variables": {
          "ArtifactMult": 3.0,
          "FlatHealthPerItem1Star": 350,
          "FlatHealthPerItem2Star": 600,
          "FlatHealthPerItem3Star": 2000.0,
          "RoundsToCraft": 4
        }
      }
    ]
  },
  "ブルーザー": {
    "name": "ブルーザー",
    "thresholds": [
      2,
      4,
      6
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_bruiser.tft_set16.png",
    "desc": "味方チームの最大体力が@TeamFlatHealth@増加する。「ブルーザー」はより多く増加する。\n(@MinUnits@) @BonusPercentHealth*100@%",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "BonusPercentHealth": 0.25,
          "TeamFlatHealth": 150
        }
      },
      {
        "minUnits": 4,
        "variables": {
          "BonusPercentHealth": 0.45,
          "TeamFlatHealth": 150
        }
      },
      {
        "minUnits": 6,
        "variables": {
          "BonusPercentHealth": 0.65,
          "TeamFlatHealth": 150
        }
      }
    ]
  },
  "ヘクスメック": {
    "name": "ヘクスメック",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_hexmech.tft_set16.png",
    "desc": "「パイロット」のマスを1個獲得する。戦闘開始時: マス内のユニットがT-Hexに乗り込み、体力の@PercentHealth*100@%と、役割とスターレベルに応じた追加ステータスをT-Hexに付与する。\nタンク: +@Vamp1@/@Vamp2@/@Vamp3@%のオムニヴァンプ\nファイター: +@AD1@/@AD2@/@AD3@%の攻撃力\nマークスマン: +@Amp1@/@Amp2@/@Amp3@%のダメージ増加効果\nキャスター: +@Mana1@/@Mana2@/@Mana3@のマナ自動回復\nアサシン: +@Crit1@/@Crit2@/@Crit3@%のクリティカル率\nデス時にパイロットが脱出し、T-Hexが周囲の敵をノックバックして@StunDuration@秒間スタンさせる。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {
          "AD1": 20.0,
          "AD2": 30.0,
          "AD3": 40.0,
          "Amp1": 12.0,
          "Amp2": 20.0,
          "Amp3": 30.0,
          "Crit1": 40.0,
          "Crit2": 70.0,
          "Crit3": 100.0,
          "Mana1": 2.0,
          "Mana2": 4.0,
          "Mana3": 5.0,
          "PercentHealth": 0.8,
          "StunDuration": 1.5,
          "Vamp1": 20.0,
          "Vamp2": 30.0,
          "Vamp3": 40.0
        }
      }
    ]
  },
  "ポイズンパル": {
    "name": "ポイズンパル",
    "thresholds": [
      2
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/teamup_trait_poisonpals.tft_set16.png",
    "desc": "★2のティーモを1体獲得する。シンジドのダメージはティーモの毒効果をリフレッシュし、ティーモのダメージはシンジドの魔力を徐々に増加させる。対人戦が終了するたびに、ティーモを1体獲得する。",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "SingedAPGain": 2,
          "TeemoDamageReq": 100
        }
      }
    ]
  },
  "ヨードル": {
    "name": "ヨードル",
    "thresholds": [
      2,
      4,
      6,
      8,
      10
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_yordle.tft_set16.png",
    "desc": "(@MinUnits@) ボードに配置した固有のヨードル1体ごとに、ヨードルの体力が@BonusHealth@、攻撃速度が@AS*100@%増加する。★3のヨードルなら、追加で@BonusMultiplier*100@%増加！\n(@MinUnits@) さらに、毎ラウンド最初のショップにヨードルが登場する！\n(@MinUnits@) さらに、毎ラウンド@FreeRerolls@回分の無料のリロールを獲得する！\n(@MinUnits@) さらに、毎ラウンド、ヨードルラッキーバッグを1個獲得する！",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "AS": 0.05,
          "BonusHealth": 40.0,
          "BonusMultiplier": 1.0,
          "BonusStatMultiplier": 1.0
        }
      },
      {
        "minUnits": 4,
        "variables": {
          "AS": 0.05,
          "BonusHealth": 40.0,
          "BonusMultiplier": 1.0,
          "BonusStatMultiplier": 1.0
        }
      },
      {
        "minUnits": 6,
        "variables": {
          "AS": 0.05,
          "BonusHealth": 40.0,
          "BonusMultiplier": 1.0,
          "BonusStatMultiplier": 1.0,
          "FreeRerolls": 1.0
        }
      },
      {
        "minUnits": 8,
        "variables": {
          "AS": 0.05,
          "BonusHealth": 40.0,
          "BonusMultiplier": 1.0,
          "BonusStatMultiplier": 1.0,
          "FreeRerolls": 1.0
        }
      },
      {
        "minUnits": 10,
        "variables": {
          "AS": 0.05,
          "BonusHealth": 40.0,
          "BonusMultiplier": 1.0,
          "BonusStatMultiplier": 1.0,
          "FreeRerolls": 1.0
        }
      }
    ]
  },
  "リフトスカージ": {
    "name": "リフトスカージ",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_riftscourge.png",
    "desc": "2スロットを使用するが、「ヴォイド」特性を2獲得する。\n@VoidTime@秒後、ボードが「ヴォイドの裂谷」に入る。「裂谷」では「ヴォイド」ユニットが@DamageAmp*100@%のダメージ増加効果を獲得し、継続的に敵に向かってプラズマボルトで攻撃して最大体力の@LightningPercentHealth*100@%を魔法ダメージとして与える。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {
          "DamageAmp": 0.3,
          "LightningPercentHealth": 0.05,
          "VoidTime": 8.0
        }
      }
    ]
  },
  "ルーンメイジ": {
    "name": "ルーンメイジ",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_runemage.tft_set16.png",
    "desc": "「ルーンメイジ」はすべての発動中の地域特性から恩恵を受けるが、いずれの地域にもカウントされない。\n発動中の地域特性からルーンの力を利用して自身のスキルを変化させ、独自の方法で強化する。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {}
      }
    ]
  },
  "ロングショット": {
    "name": "ロングショット",
    "thresholds": [
      2,
      3,
      4,
      5
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_longshot.tft_set16.png",
    "desc": "「ロングショット」はダメージ増加効果を獲得し、対象が遠いほど与えるダメージが増加する。\n(@MinUnits@) @BaseDamageAmp*100@% + 1マスあたり@PercentDamageIncrease*100@%",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "BaseDamageAmp": 0.18,
          "PercentDamageIncrease": 0.02
        }
      },
      {
        "minUnits": 3,
        "variables": {
          "BaseDamageAmp": 0.24,
          "PercentDamageIncrease": 0.03
        }
      },
      {
        "minUnits": 4,
        "variables": {
          "BaseDamageAmp": 0.28,
          "PercentDamageIncrease": 0.04
        }
      },
      {
        "minUnits": 5,
        "variables": {
          "BaseDamageAmp": 0.32,
          "PercentDamageIncrease": 0.05
        }
      }
    ]
  },
  "ワーデン": {
    "name": "ワーデン",
    "thresholds": [
      2,
      3,
      4,
      5
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_warden.tft_set16.png",
    "desc": "「ワーデン」の体力が初めて@FirstShieldPercentHealth*100@%を下回った時、および@SecondShieldPercentHealth*100@%を下回った時に最大体力に応じたシールドを獲得する。\n(@MinUnits@) @PercentHealthShield*100@%",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "FirstShieldPercentHealth": 0.75,
          "PercentHealthShield": 0.16,
          "SecondShieldPercentHealth": 0.25
        }
      },
      {
        "minUnits": 3,
        "variables": {
          "FirstShieldPercentHealth": 0.75,
          "PercentHealthShield": 0.2,
          "SecondShieldPercentHealth": 0.25
        }
      },
      {
        "minUnits": 4,
        "variables": {
          "FirstShieldPercentHealth": 0.75,
          "PercentHealthShield": 0.26,
          "SecondShieldPercentHealth": 0.25
        }
      },
      {
        "minUnits": 5,
        "variables": {
          "FirstShieldPercentHealth": 0.75,
          "PercentHealthShield": 0.33,
          "SecondShieldPercentHealth": 0.25
        }
      }
    ]
  },
  "ワールドエンダー": {
    "name": "ワールドエンダー",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_9_darkin.png",
    "desc": "エイトロックスの攻撃力が自身のオムニヴァンプの@OmnivampToADRatio*100@%と同量だけ増加する。\n最初に倒されたとき、少しの間対象指定不可になり、@HealDuration@秒かけて体力を完全に回復する。その後最大マナが@ManaReduction@低下し、耐久力が@Durability*100@%増加する。",
    "effects": [
      {
        "minUnits": 1,
        "variables": {
          "Durability": 0.2,
          "HealDuration": 2.0,
          "ManaReduction": 10.0
        }
      }
    ]
  },
  "ヴァンキッシャー": {
    "name": "ヴァンキッシャー",
    "thresholds": [
      2,
      3,
      4,
      5
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_vanquisher.png",
    "desc": "「ヴァンキッシャー」のスキルがクリティカル判定を持つようになる。さらに、クリティカル率とクリティカルダメージが増加する。\n(@MinUnits@) @BaseCritChance@% 、@CritDmg@%",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "BaseCritChance": 15.0,
          "CritDmg": 15.0
        }
      },
      {
        "minUnits": 3,
        "variables": {
          "BaseCritChance": 20.0,
          "CritDmg": 20.0
        }
      },
      {
        "minUnits": 4,
        "variables": {
          "BaseCritChance": 25.0,
          "CritDmg": 25.0
        }
      },
      {
        "minUnits": 5,
        "variables": {
          "BaseCritChance": 30.0,
          "CritDmg": 30.0
        }
      }
    ]
  },
  "ヴォイド": {
    "name": "ヴォイド",
    "thresholds": [
      2,
      4,
      6,
      9
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_void.tft_set16.png",
    "desc": "「ヴォイド」チャンピオンのみに使用可能な「変異」を獲得する。「ヴォイド」チャンピオンの攻撃速度が増加する。\n(@MinUnits@) 「変異」@NumMutations@つ、@BonusAS*100@%\n(@MinUnits@) 「変異」@NumMutations@つ、@BonusAS*100@%\n(@MinUnits@) 「変異」@NumMutations@つ、@BonusAS*100@%\n(@MinUnits@) 「変異」がスーパーチャージされ、そのパワーが@SuperchargedMult*100@%増加する。@BonusAS*100@%\nチャンピオンが一度に所持できる「変異」は１つのみ。チャンピオンをベンチに配置すると「変異」は外れる。",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "BonusAS": 0.08,
          "NumMutations": 1
        }
      },
      {
        "minUnits": 4,
        "variables": {
          "BonusAS": 0.18,
          "NumMutations": 2
        }
      },
      {
        "minUnits": 6,
        "variables": {
          "BonusAS": 0.33,
          "NumMutations": 3
        }
      },
      {
        "minUnits": 9,
        "variables": {
          "BonusAS": 0.4,
          "NumMutations": 3,
          "SuperchargedMult": 1.0
        }
      }
    ]
  },
  "光の番人": {
    "name": "光の番人",
    "thresholds": [
      2
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/teamup_trait_sentinelsoflight.tft_set16.png",
    "desc": "ヴェインが「黒き霧」の影響化にある敵にスキルを使用すると、通常の@BoltEffectiveness*100@%の効果で追加の矢を@NumBonusBolts@本放つ。ヴェインがキルまたはアシストを獲得すると、ルシアンとセナの攻撃速度が@LucianSennaAS*100@%増加する。",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "BoltEffectiveness": 0.25,
          "LucianSennaAS": 0.5,
          "NumBonusBolts": 2
        }
      }
    ]
  },
  "超越者": {
    "name": "超越者",
    "thresholds": [
      1
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_12_ascendant.tft_set12.png",
    "desc": "各戦闘後、「超越のチャーム」がショップに出現する。これらのチャームは、ゴールドで購入可能な強力な効果である。@TFTUnitProperty.trait:TFT16_XerathUnique_PurchasedCharmDisplay@",
    "effects": [
      {
        "minUnits": 1,
        "variables": {}
      }
    ]
  },
  "選ばれし狼": {
    "name": "選ばれし狼",
    "thresholds": [
      2
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/teamup_trait_chosenwolves.tft_set16.png",
    "desc": "キンドレッドがスキルを使用するたびにアンベッサは死を免れる保護を獲得し、その効果中は攻撃力が@AmbessaBonusAD*100@%増加する。\nアンベッサがスキルを使用すると、狼がすべての敵を攻撃して@WolfDamage*100@%のダメージを与える。",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "AmbessaBonusAD": 0.4,
          "WolfDamage": 0.3
        }
      }
    ]
  },
  "韋駄天": {
    "name": "韋駄天",
    "thresholds": [
      2,
      3,
      4,
      5
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_16_quickstriker.png",
    "desc": "味方チームの攻撃速度が@TeamwideAS*100@%増加する。「韋駄天」は対象の減少体力に応じて攻撃速度が増加する。\n(@MinUnits@) @MinBonusAS*100@-@MaxBonusAS*100@%\n(@MinUnits@) @MinBonusAS*100@-@MaxBonusAS*100@%\n(@MinUnits@) @MinBonusAS*100@-@MaxBonusAS*100@%\n(@MinUnits@) @MinBonusAS*100@-@MaxBonusAS*100@%",
    "effects": [
      {
        "minUnits": 2,
        "variables": {
          "MaxBonusAS": 0.3,
          "MinBonusAS": 0.1,
          "TeamwideAS": 0.15
        }
      },
      {
        "minUnits": 3,
        "variables": {
          "MaxBonusAS": 0.45,
          "MinBonusAS": 0.2,
          "TeamwideAS": 0.15
        }
      },
      {
        "minUnits": 4,
        "variables": {
          "MaxBonusAS": 0.6,
          "MinBonusAS": 0.3,
          "TeamwideAS": 0.15
        }
      },
      {
        "minUnits": 5,
        "variables": {
          "MaxBonusAS": 0.8,
          "MinBonusAS": 0.4,
          "TeamwideAS": 0.15
        }
      }
    ]
  }
},
  units: [
  {
    "id": "TFT16_Anivia",
    "name": "アニビア",
    "cost": 1,
    "traits": [
      "フレヨルド",
      "インヴォーカー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_anivia/hud/tft16_anivia_square.tft_set16.png"
  },
  {
    "id": "TFT16_Illaoi",
    "name": "イラオイ",
    "cost": 1,
    "traits": [
      "ビルジウォーター",
      "ブルーザー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_illaoi/hud/tft16_illaoi_square.tft_set16.png"
  },
  {
    "id": "TFT16_Qiyana",
    "name": "キヤナ",
    "cost": 1,
    "traits": [
      "イシュタル",
      "スレイヤー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_qiyana/hud/tft16_qiyana_square.tft_set16.png"
  },
  {
    "id": "TFT16_Caitlyn",
    "name": "ケイトリン",
    "cost": 1,
    "traits": [
      "ピルトーヴァー",
      "ロングショット"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_caitlyn/hud/tft16_caitlyn_square.tft_set16.png"
  },
  {
    "id": "TFT16_KogMaw",
    "name": "コグ＝マウ",
    "cost": 1,
    "traits": [
      "ヴォイド",
      "アルカニスト",
      "ロングショット"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_kogmaw/hud/tft16_kogmaw_square.tft_set16.png"
  },
  {
    "id": "TFT16_Shen",
    "name": "シェン",
    "cost": 1,
    "traits": [
      "アイオニア",
      "ブルーザー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_shen/hud/tft16_shen_square.tft_set16.png"
  },
  {
    "id": "TFT16_JarvanIV",
    "name": "ジャーヴァンⅣ",
    "cost": 1,
    "traits": [
      "デマーシア",
      "ディフェンダー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_jarvaniv/hud/tft16_jarvaniv_square.tft_set16.png"
  },
  {
    "id": "TFT16_Jhin",
    "name": "ジン",
    "cost": 1,
    "traits": [
      "アイオニア",
      "ガンスリンガー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_jhin/hud/tft16_jhin_square.tft_set16.png"
  },
  {
    "id": "TFT16_Sona",
    "name": "ソナ",
    "cost": 1,
    "traits": [
      "デマーシア",
      "インヴォーカー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_sona/hud/tft16_sona_square.tft_set16.png"
  },
  {
    "id": "TFT16_Briar",
    "name": "ブライアー",
    "cost": 1,
    "traits": [
      "ノクサス",
      "スレイヤー",
      "ジャガーノート"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_briar/hud/tft16_briar_square.tft_set16.png"
  },
  {
    "id": "TFT16_Blitzcrank",
    "name": "ブリッツクランク",
    "cost": 1,
    "traits": [
      "ゾウン",
      "ジャガーノート"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_blitzcrank/hud/tft16_blitzcrank_square.tft_set16.png"
  },
  {
    "id": "TFT16_Rumble",
    "name": "ランブル",
    "cost": 1,
    "traits": [
      "ヨードル",
      "ディフェンダー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_rumble/hud/tft16_rumble_square.tft_set16.png"
  },
  {
    "id": "TFT16_Lulu",
    "name": "ルル",
    "cost": 1,
    "traits": [
      "ヨードル",
      "アルカニスト"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_lulu/hud/tft16_lulu_square.tft_set16.png"
  },
  {
    "id": "TFT16_Viego",
    "name": "ヴィエゴ",
    "cost": 1,
    "traits": [
      "シャドウアイル",
      "韋駄天"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_viego/hud/tft16_viego_square.tft_set16.png"
  },
  {
    "id": "TFT16_Ashe",
    "name": "アッシュ",
    "cost": 2,
    "traits": [
      "フレヨルド",
      "韋駄天"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_ashe/hud/tft16_ashe_square.tft_set16.png"
  },
  {
    "id": "TFT16_Aphelios",
    "name": "アフェリオス",
    "cost": 2,
    "traits": [
      "ターゴン"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_aphelios/hud/tft16_aphelios_square.tft_set16.png"
  },
  {
    "id": "TFT16_Ekko",
    "name": "エコー",
    "cost": 2,
    "traits": [
      "ゾウン",
      "ディスラプター"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_ekko/hud/tft16_ekko_square.tft_set16.png"
  },
  {
    "id": "TFT16_Orianna",
    "name": "オリアナ ",
    "cost": 2,
    "traits": [
      "ピルトーヴァー",
      "インヴォーカー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_orianna/hud/tft16_orianna_square.tft_set16.png"
  },
  {
    "id": "TFT16_Graves",
    "name": "グレイブス ",
    "cost": 2,
    "traits": [
      "ビルジウォーター",
      "ガンスリンガー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_graves/hud/tft16_graves_square.tft_set16.png"
  },
  {
    "id": "TFT16_Sion",
    "name": "サイオン",
    "cost": 2,
    "traits": [
      "ノクサス",
      "ブルーザー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_sion/hud/tft16_sion_square.tft_set16.png"
  },
  {
    "id": "TFT16_XinZhao",
    "name": "シン・ジャオ",
    "cost": 2,
    "traits": [
      "デマーシア",
      "アイオニア",
      "ワーデン"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_xinzhao/hud/tft16_xinzhao_square.tft_set16.png"
  },
  {
    "id": "TFT16_ChoGath",
    "name": "チョ＝ガス",
    "cost": 2,
    "traits": [
      "ヴォイド",
      "ジャガーノート"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_chogath/hud/tft16_chogath_square.tft_set16.png"
  },
  {
    "id": "TFT16_TwistedFate",
    "name": "ツイステッド・フェイト",
    "cost": 2,
    "traits": [
      "ビルジウォーター",
      "韋駄天"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_twistedfate/hud/tft16_twistedfate_square.tft_set16.png"
  },
  {
    "id": "TFT16_Teemo",
    "name": "ティーモ",
    "cost": 2,
    "traits": [
      "ヨードル",
      "ロングショット"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_teemo/hud/tft16_teemo_square.tft_set16.png"
  },
  {
    "id": "TFT16_Tristana",
    "name": "トリスターナ",
    "cost": 2,
    "traits": [
      "ヨードル",
      "ガンスリンガー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_tristana/hud/tft16_tristana_square.tft_set16.png"
  },
  {
    "id": "TFT16_Tryndamere",
    "name": "トリンダメア ",
    "cost": 2,
    "traits": [
      "フレヨルド",
      "スレイヤー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_tryndamere/hud/tft16_tryndamere_square.tft_set16.png"
  },
  {
    "id": "TFT16_Neeko",
    "name": "ニーコ",
    "cost": 2,
    "traits": [
      "イシュタル",
      "アルカニスト",
      "ディフェンダー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_neeko/hud/tft16_neeko_square.tft_set16.png"
  },
  {
    "id": "TFT16_Bard",
    "name": "バード ",
    "cost": 2,
    "traits": [
      "ケアテイカー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_bard/hud/tft16_bard_square.tft_set16.png"
  },
  {
    "id": "TFT16_Poppy",
    "name": "ポッピー ",
    "cost": 2,
    "traits": [
      "デマーシア",
      "ヨードル",
      "ジャガーノート"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_poppy/hud/tft16_poppy_square.tft_set16.png"
  },
  {
    "id": "TFT16_Yasuo",
    "name": "ヤスオ",
    "cost": 2,
    "traits": [
      "アイオニア",
      "スレイヤー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_yasuo/hud/tft16_yasuo_square.tft_set16.png"
  },
  {
    "id": "TFT16_Yorick",
    "name": "ヨリック ",
    "cost": 2,
    "traits": [
      "シャドウアイル",
      "ワーデン"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_yorick/hud/tft16_yorick_square.tft_set16.png"
  },
  {
    "id": "TFT16_RekSai",
    "name": "レク＝サイ",
    "cost": 2,
    "traits": [
      "ヴォイド",
      "ヴァンキッシャー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_reksai/hud/tft16_reksai_square.tft_set16.png"
  },
  {
    "id": "TFT16_Vi",
    "name": "ヴァイ",
    "cost": 2,
    "traits": [
      "ピルトーヴァー",
      "ゾウン",
      "ディフェンダー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_vi/hud/tft16_vi_square.tft_set16.png"
  },
  {
    "id": "TFT16_Ahri",
    "name": "アーリ",
    "cost": 3,
    "traits": [
      "アイオニア",
      "アルカニスト"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_ahri/hud/tft16_ahri_square.tft_set16.png"
  },
  {
    "id": "TFT16_Gangplank",
    "name": "ガングプランク",
    "cost": 3,
    "traits": [
      "ビルジウォーター",
      "スレイヤー",
      "ヴァンキッシャー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_gangplank/hud/tft16_gangplank_square.tft_set16.png"
  },
  {
    "id": "TFT16_Gwen",
    "name": "グウェン ",
    "cost": 3,
    "traits": [
      "シャドウアイル",
      "ディスラプター"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_gwen/hud/tft16_gwen_square.tft_set16.png"
  },
  {
    "id": "TFT16_Kennen",
    "name": "ケネン ",
    "cost": 3,
    "traits": [
      "アイオニア",
      "ヨードル",
      "ディフェンダー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_kennen/hud/tft16_kennen_square.tft_set16.png"
  },
  {
    "id": "TFT16_Kobuko",
    "name": "コブコ&ユーミ",
    "cost": 3,
    "traits": [
      "ヨードル",
      "ブルーザー",
      "インヴォーカー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_kobuko/hud/tft16_kobuko_square.tft_set16.png"
  },
  {
    "id": "TFT16_Jinx",
    "name": "ジンクス",
    "cost": 3,
    "traits": [
      "ゾウン",
      "ガンスリンガー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_jinx/hud/tft16_jinx_square.tft_set16.png"
  },
  {
    "id": "TFT16_Sejuani",
    "name": "セジュアニ",
    "cost": 3,
    "traits": [
      "フレヨルド",
      "ディフェンダー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_sejuani/hud/tft16_sejuani_square.tft_set16.png"
  },
  {
    "id": "TFT16_Zoe",
    "name": "ゾーイ",
    "cost": 3,
    "traits": [
      "ターゴン"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_zoe/hud/tft16_zoe_square.tft_set16.png"
  },
  {
    "id": "TFT16_Darius",
    "name": "ダリウス",
    "cost": 3,
    "traits": [
      "ノクサス",
      "ディフェンダー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_darius/hud/tft16_darius_square.tft_set16.png"
  },
  {
    "id": "TFT16_DrMundo",
    "name": "ドクター・ムンド",
    "cost": 3,
    "traits": [
      "ゾウン",
      "ブルーザー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_drmundo/hud/tft16_drmundo_square.tft_set16.png"
  },
  {
    "id": "TFT16_Draven",
    "name": "ドレイヴン",
    "cost": 3,
    "traits": [
      "ノクサス",
      "韋駄天"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_draven/hud/tft16_draven_square.tft_set16.png"
  },
  {
    "id": "TFT16_Nautilus",
    "name": "ノーチラス",
    "cost": 3,
    "traits": [
      "ビルジウォーター",
      "ジャガーノート",
      "ワーデン"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_nautilus/hud/tft16_nautilus_square.tft_set16.png"
  },
  {
    "id": "TFT16_Malzahar",
    "name": "マルザハール",
    "cost": 3,
    "traits": [
      "ヴォイド",
      "ディスラプター"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_malzahar/hud/tft16_malzahar_square.tft_set16.png"
  },
  {
    "id": "TFT16_Milio",
    "name": "ミリオ",
    "cost": 3,
    "traits": [
      "イシュタル",
      "インヴォーカー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_milio/hud/tft16_milio_square.tft_set16.png"
  },
  {
    "id": "TFT16_Leblanc",
    "name": "ルブラン ",
    "cost": 3,
    "traits": [
      "ノクサス",
      "インヴォーカー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_leblanc/hud/tft16_leblanc_square.tft_set16.png"
  },
  {
    "id": "TFT16_Leona",
    "name": "レオナ",
    "cost": 3,
    "traits": [
      "ターゴン"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_leona/hud/tft16_leona_square.tft_set16.png"
  },
  {
    "id": "TFT16_Loris",
    "name": "ロリス",
    "cost": 3,
    "traits": [
      "ピルトーヴァー",
      "ワーデン"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_loris/hud/tft16_loris_square.tft_set16.png"
  },
  {
    "id": "TFT16_Vayne",
    "name": "ヴェイン",
    "cost": 3,
    "traits": [
      "デマーシア",
      "ロングショット"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_vayne/hud/tft16_vayne_square.tft_set16.png"
  },
  {
    "id": "TFT16_Ambessa",
    "name": "アンベッサ",
    "cost": 4,
    "traits": [
      "ノクサス",
      "ヴァンキッシャー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_ambessa/hud/tft16_ambessa_square.tft_set16.png"
  },
  {
    "id": "TFT16_Wukong",
    "name": "ウーコン",
    "cost": 4,
    "traits": [
      "アイオニア",
      "ブルーザー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_wukong/hud/tft16_wukong_square.tft_set16.png"
  },
  {
    "id": "TFT16_Kaisa",
    "name": "カイ＝サ ",
    "cost": 4,
    "traits": [
      "アシミレーター",
      "ヴォイド",
      "ロングショット"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_kaisa/hud/tft16_kaisa_square.tft_set16.png"
  },
  {
    "id": "TFT16_Kalista",
    "name": "カリスタ ",
    "cost": 4,
    "traits": [
      "シャドウアイル",
      "ヴァンキッシャー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_kalista/hud/tft16_kalista_square.tft_set16.png"
  },
  {
    "id": "TFT16_Garen",
    "name": "ガレン",
    "cost": 4,
    "traits": [
      "デマーシア",
      "ディフェンダー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_garen/hud/tft16_garen_square.tft_set16.png"
  },
  {
    "id": "TFT16_Singed",
    "name": "シンジド",
    "cost": 4,
    "traits": [
      "ゾウン",
      "ジャガーノート"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_singed/hud/tft16_singed_square.tft_set16.png"
  },
  {
    "id": "TFT16_Swain",
    "name": "スウェイン",
    "cost": 4,
    "traits": [
      "ノクサス",
      "アルカニスト",
      "ジャガーノート"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_swain/hud/tft16_swain_square.tft_set16.png"
  },
  {
    "id": "TFT16_Skarner",
    "name": "スカーナー ",
    "cost": 4,
    "traits": [
      "イシュタル"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_skarner/hud/tft16_skarner_square.tft_set16.png"
  },
  {
    "id": "TFT16_Seraphine",
    "name": "セラフィーン",
    "cost": 4,
    "traits": [
      "ピルトーヴァー",
      "ディスラプター"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_seraphine/hud/tft16_seraphine_square.tft_set16.png"
  },
  {
    "id": "TFT16_Taric",
    "name": "タリック",
    "cost": 4,
    "traits": [
      "ターゴン"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_taric/hud/tft16_taric_square.tft_set16.png"
  },
  {
    "id": "TFT16_Diana",
    "name": "ダイアナ ",
    "cost": 4,
    "traits": [
      "ターゴン"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_diana/hud/tft16_diana_square.tft_set16.png"
  },
  {
    "id": "TFT16_Nasus",
    "name": "ナサス ",
    "cost": 4,
    "traits": [
      "シュリーマ"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_nasus/hud/tft16_nasus_square.tft_set16.png"
  },
  {
    "id": "TFT16_Nidalee",
    "name": "ニダリー ",
    "cost": 4,
    "traits": [
      "イシュタル",
      "ハントレス"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_nidalee/hud/tft16_nidalee_square.tft_set16.png"
  },
  {
    "id": "TFT16_Fizz",
    "name": "フィズ",
    "cost": 4,
    "traits": [
      "ビルジウォーター",
      "ヨードル"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_fizz/hud/tft16_fizz_square.tft_set16.png"
  },
  {
    "id": "TFT16_Braum",
    "name": "ブラウム",
    "cost": 4,
    "traits": [
      "フレヨルド",
      "ワーデン"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_braum/hud/tft16_braum_square.tft_set16.png"
  },
  {
    "id": "TFT16_Veigar",
    "name": "ベイガー",
    "cost": 4,
    "traits": [
      "ヨードル",
      "アルカニスト"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_veigar/hud/tft16_veigar_square.tft_set16.png"
  },
  {
    "id": "TFT16_BelVeth",
    "name": "ベル＝ヴェス",
    "cost": 4,
    "traits": [
      "ヴォイド",
      "スレイヤー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_belveth/hud/tft16_belveth_square.tft_set16.png"
  },
  {
    "id": "TFT16_MissFortune",
    "name": "ミス・フォーチュン",
    "cost": 4,
    "traits": [
      "ビルジウォーター",
      "ガンスリンガー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_missfortune/hud/tft16_missfortune_square.tft_set16.png"
  },
  {
    "id": "TFT16_Yunara",
    "name": "ユナラ",
    "cost": 4,
    "traits": [
      "アイオニア",
      "韋駄天"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_yunara/hud/tft16_yunara_square.tft_set16.png"
  },
  {
    "id": "TFT16_Yone",
    "name": "ヨネ",
    "cost": 4,
    "traits": [
      "アイオニア",
      "スレイヤー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_yone/hud/tft16_yone_square.tft_set16.png"
  },
  {
    "id": "TFT16_Lux",
    "name": "ラックス",
    "cost": 4,
    "traits": [
      "デマーシア",
      "アルカニスト"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_lux/hud/tft16_lux_square.tft_set16.png"
  },
  {
    "id": "TFT16_Lissandra",
    "name": "リサンドラ",
    "cost": 4,
    "traits": [
      "フレヨルド",
      "インヴォーカー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_lissandra/hud/tft16_lissandra_square.tft_set16.png"
  },
  {
    "id": "TFT16_RiftHerald",
    "name": "リフトヘラルド ",
    "cost": 4,
    "traits": [
      "ヴォイド",
      "ブルーザー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_riftherald/skins/base/images/tft16_riftherald_splash_tile_0.tft_set16.png"
  },
  {
    "id": "TFT16_Renekton",
    "name": "レネクトン ",
    "cost": 4,
    "traits": [
      "シュリーマ"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_renekton/hud/tft16_renekton_square.tft_set16.png"
  },
  {
    "id": "TFT16_Warwick",
    "name": "ワーウィック",
    "cost": 4,
    "traits": [
      "ゾウン",
      "韋駄天"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_warwick/hud/tft16_warwick_square.tft_set16.png"
  },
  {
    "id": "TFT16_THex",
    "name": "T-Hex",
    "cost": 5,
    "traits": [
      "ヘクスメック",
      "ピルトーヴァー",
      "ガンスリンガー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_thex/hud/tft16_thex_square.tft_set16.png"
  },
  {
    "id": "TFT16_Azir",
    "name": "アジール",
    "cost": 5,
    "traits": [
      "シュリーマ",
      "エンペラー",
      "ディスラプター"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_azir/hud/tft16_azir_square.tft_set16.png"
  },
  {
    "id": "TFT16_Annie",
    "name": "アニー",
    "cost": 5,
    "traits": [
      "ダークチャイルド",
      "アルカニスト"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_annie/hud/tft16_annie_square.tft_set16.png"
  },
  {
    "id": "TFT16_Aatrox",
    "name": "エイトロックス ",
    "cost": 5,
    "traits": [
      "ダーキン",
      "ワールドエンダー",
      "スレイヤー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_aatrox/hud/tft16_aatrox_square.tft_set16.png"
  },
  {
    "id": "TFT16_AurelionSol",
    "name": "オレリオン・ソル",
    "cost": 5,
    "traits": [
      "スターフォージャー",
      "ターゴン"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_aurelionsol/hud/tft16_aurelionsol_square.tft_set16.png"
  },
  {
    "id": "TFT16_Ornn",
    "name": "オーン",
    "cost": 5,
    "traits": [
      "ブラックスミス",
      "ワーデン"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_ornn/hud/tft16_ornn_square.tft_set16.png"
  },
  {
    "id": "TFT16_Galio",
    "name": "ガリオ",
    "cost": 5,
    "traits": [
      "デマーシア",
      "ヒロイック"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_galio/hud/tft16_galio_square.tft_set16.png"
  },
  {
    "id": "TFT16_Kindred",
    "name": "キンドレッド",
    "cost": 5,
    "traits": [
      "エターナル",
      "韋駄天"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_kindred/hud/tft16_kindred_square.tft_set16.png"
  },
  {
    "id": "TFT16_Sylas",
    "name": "サイラス ",
    "cost": 5,
    "traits": [
      "チェインブレイカー",
      "アルカニスト",
      "ディフェンダー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_sylas/hud/tft16_sylas_square.tft_set16.png"
  },
  {
    "id": "TFT16_Zaahen",
    "name": "ザーヘン",
    "cost": 5,
    "traits": [
      "ダーキン",
      "イモータル"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_zaahen/hud/tft16_zaahen_square.tft_set16.png"
  },
  {
    "id": "TFT16_Shyvana",
    "name": "シヴァーナ",
    "cost": 5,
    "traits": [
      "ドラゴンボーン",
      "ジャガーノート"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_shyvana/hud/tft16_shyvana_square.tft_set16.png"
  },
  {
    "id": "TFT16_Ziggs",
    "name": "ジグス ",
    "cost": 5,
    "traits": [
      "ゾウン",
      "ヨードル",
      "ロングショット"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_ziggs/hud/tft16_ziggs_square.tft_set16.png"
  },
  {
    "id": "TFT16_Zilean",
    "name": "ジリアン",
    "cost": 5,
    "traits": [
      "クロノキーパー",
      "インヴォーカー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_zilean/hud/tft16_zilean_square.tft_set16.png"
  },
  {
    "id": "TFT16_Thresh",
    "name": "スレッシュ ",
    "cost": 5,
    "traits": [
      "シャドウアイル",
      "ワーデン"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_thresh/hud/tft16_thresh_square.tft_set16.png"
  },
  {
    "id": "TFT16_Sett",
    "name": "セト",
    "cost": 5,
    "traits": [
      "アイオニア",
      "ザ・ボス"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_sett/hud/tft16_sett_square.tft_set16.png"
  },
  {
    "id": "TFT16_Xerath",
    "name": "ゼラス ",
    "cost": 5,
    "traits": [
      "シュリーマ",
      "超越者"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_xerath/hud/tft16_xerath_square.tft_set16.png"
  },
  {
    "id": "TFT16_TahmKench",
    "name": "タム・ケンチ",
    "cost": 5,
    "traits": [
      "ビルジウォーター",
      "グラットン",
      "ブルーザー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_tahmkench/hud/tft16_tahmkench_square.tft_set16.png"
  },
  {
    "id": "TFT16_BaronNashor",
    "name": "バロンナッシャー",
    "cost": 5,
    "traits": [
      "ヴォイド",
      "リフトスカージ"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_baronnashor/hud/tft16_baronnashor_square.tft_set16.png"
  },
  {
    "id": "TFT16_Fiddlesticks",
    "name": "フィドルスティックス",
    "cost": 5,
    "traits": [
      "ハーベスター",
      "ヴァンキッシャー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_fiddlesticks/hud/tft16_fiddlesticks_square.tft_set16.png"
  },
  {
    "id": "TFT16_Brock",
    "name": "ブロック",
    "cost": 5,
    "traits": [
      "イシュタル"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_brock/skins/base/images/tft16_brock_splash_tile_0.tft_set16.png"
  },
  {
    "id": "TFT16_Volibear",
    "name": "ボリベア ",
    "cost": 5,
    "traits": [
      "フレヨルド",
      "ブルーザー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_volibear/hud/tft16_volibear_square.tft_set16.png"
  },
  {
    "id": "TFT16_Mel",
    "name": "メル ",
    "cost": 5,
    "traits": [
      "ノクサス",
      "ディスラプター"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_mel/hud/tft16_mel_square.tft_set16.png"
  },
  {
    "id": "TFT16_Ryze",
    "name": "ライズ ",
    "cost": 5,
    "traits": [
      "ルーンメイジ"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_ryze/hud/tft16_ryze_square.tft_set16.png"
  },
  {
    "id": "TFT16_Lucian",
    "name": "ルシアン&セナ",
    "cost": 5,
    "traits": [
      "ソウルバウンド",
      "ガンスリンガー"
    ],
    "icon": "https://raw.communitydragon.org/latest/game/assets/characters/tft16_lucian/hud/tft16_lucian_square.tft_set16.png"
  }
]
};
