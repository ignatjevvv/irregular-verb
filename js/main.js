'use strict';

// let wordList = [
//   {
//       "translate": "пребывать, терпеть, соблюдать",
//       "v1": "abide",
//       "v2": "abode or abided",
//       "v3": "abode or abided"
//   },
//   {
//       "translate": "возникать, появляться",
//       "v1": "arise",
//       "v2": "arose",
//       "v3": "arisen"
//   },
//   {
//       "translate": "быть",
//       "v1": "be",
//       "v2": "was / were",
//       "v3": "been"
//   },
//   {
//       "translate": "нести, рожать",
//       "v1": "bear",
//       "v2": "bore",
//       "v3": "born or borne"
//   },
//   {
//       "translate": "бить",
//       "v1": "beat",
//       "v2": "beat",
//       "v3": "beaten or beat"
//   },
//   {
//       "translate": "становится",
//       "v1": "become",
//       "v2": "became",
//       "v3": "become"
//   },
//   {
//       "translate": "начинать",
//       "v1": "begin",
//       "v2": "began",
//       "v3": "begun"
//   },
//   {
//       "translate": "гнуть",
//       "v1": "bend",
//       "v2": "bent",
//       "v3": "bent"
//   },
//   {
//       "translate": "держать пари",
//       "v1": "bet",
//       "v2": "bet",
//       "v3": "bet or betted"
//   },
//   {
//       "translate": "предлагать цену, назначать ставку ",
//       "v1": "bid",
//       "v2": "bid",
//       "v3": "bid"
//   },
//   {
//       "translate": "просить, поручать, приглашать, приказывать",
//       "v1": "bid (1)",
//       "v2": "bade",
//       "v3": "bidden"
//   },
//   {
//       "translate": "связывать",
//       "v1": "bind",
//       "v2": "bound",
//       "v3": "bound"
//   },
//   {
//       "translate": "кусаться",
//       "v1": "bite",
//       "v2": "bit",
//       "v3": "bitten or bit"
//   },
//   {
//       "translate": "кровоточить",
//       "v1": "bleed",
//       "v2": "bled",
//       "v3": "bled"
//   },
//   {
//       "translate": "дуть",
//       "v1": "blow",
//       "v2": "blew",
//       "v3": "blown"
//   },
//   {
//       "translate": "ломать",
//       "v1": "break",
//       "v2": "broke",
//       "v3": "broken"
//   },
//   {
//       "translate": "выращивать",
//       "v1": "breed",
//       "v2": "bred",
//       "v3": "bred"
//   },
//   {
//       "translate": "приносить",
//       "v1": "bring",
//       "v2": "brought",
//       "v3": "brought"
//   },
//   {
//       "translate": "вещать по радио, телевидению",
//       "v1": "broadcast",
//       "v2": "broadcast or broadcasted",
//       "v3": "broadcast or broadcasted"
//   },
//   {
//       "translate": "строить",
//       "v1": "build",
//       "v2": "built",
//       "v3": "built"
//   },
//   {
//       "translate": "гореть, жечь",
//       "v1": "burn",
//       "v2": "burnt or burned",
//       "v3": "burnt or burned"
//   },
//   {
//       "translate": "взрываться",
//       "v1": "burst",
//       "v2": "burst or bursted",
//       "v3": "burst or bursted"
//   },
//   {
//       "translate": "покупать",
//       "v1": "buy",
//       "v2": "bought",
//       "v3": "bought"
//   },
//   {
//       "translate": "мочь, быть в состоянии",
//       "v1": "can",
//       "v2": "could",
//       "v3": "(been able)"
//   },
//   {
//       "translate": "бросать, проводить кастинг",
//       "v1": "cast",
//       "v2": "cast",
//       "v3": "cast"
//   },
//   {
//       "translate": "ловить",
//       "v1": "catch",
//       "v2": "caught",
//       "v3": "caught"
//   },
//   {
//       "translate": "выбирать",
//       "v1": "choose",
//       "v2": "chose",
//       "v3": "chosen"
//   },
//   {
//       "translate": "цепляться, липнуть",
//       "v1": "cling",
//       "v2": "clung",
//       "v3": "clung"
//   },
//   {
//       "translate": "одевать(ся)",
//       "v1": "clothe",
//       "v2": "clad or clothed",
//       "v3": "clad or clothed"
//   },
//   {
//       "translate": "приходить",
//       "v1": "come",
//       "v2": "came",
//       "v3": "come"
//   },
//   {
//       "translate": "стоить",
//       "v1": "cost",
//       "v2": "cost",
//       "v3": "cost"
//   },
//   {
//       "translate": "ползти",
//       "v1": "creep",
//       "v2": "crept",
//       "v3": "crept"
//   },
//   {
//       "translate": "резать",
//       "v1": "cut",
//       "v2": "cut",
//       "v3": "cut"
//   },
//   {
//       "translate": "осмелится, посметь",
//       "v1": "dare",
//       "v2": "(устар. durst) dared",
//       "v3": "dared"
//   },
//   {
//       "translate": "вести дела",
//       "v1": "deal",
//       "v2": "dealt",
//       "v3": "dealt"
//   },
//   {
//       "translate": "копать",
//       "v1": "dig",
//       "v2": "dug",
//       "v3": "dug"
//   },
//   {
//       "translate": "нырять, погружаться",
//       "v1": "dive",
//       "v2": "dived or dove",
//       "v3": "dived or dove"
//   },
//   {
//       "translate": "делать",
//       "v1": "do",
//       "v2": "did",
//       "v3": "done"
//   },
//   {
//       "translate": "рисовать, тянуть",
//       "v1": "draw",
//       "v2": "drew",
//       "v3": "drawn"
//   },
//   {
//       "translate": "мечтать, грезить",
//       "v1": "dream",
//       "v2": "dreamed or dreamt",
//       "v3": "dreamed or dreamt"
//   },
//   {
//       "translate": "пить",
//       "v1": "drink",
//       "v2": "drank",
//       "v3": "drunk"
//   },
//   {
//       "translate": "водить автомобиль",
//       "v1": "drive",
//       "v2": "drove",
//       "v3": "driven"
//   },
//   {
//       "translate": "жить, обитать, пребывать",
//       "v1": "dwell",
//       "v2": "dwelt or dwelled",
//       "v3": "dwelt or dwelled"
//   },
//   {
//       "translate": "есть",
//       "v1": "eat",
//       "v2": "ate",
//       "v3": "eaten"
//   },
//   {
//       "translate": "падать",
//       "v1": "fall",
//       "v2": "fell",
//       "v3": "fallen"
//   },
//   {
//       "translate": "кормить",
//       "v1": "feed",
//       "v2": "fed",
//       "v3": "fed"
//   },
//   {
//       "translate": "чувствовать",
//       "v1": "feel",
//       "v2": "felt",
//       "v3": "felt"
//   },
//   {
//       "translate": "бороться",
//       "v1": "fight",
//       "v2": "fought",
//       "v3": "fought"
//   },
//   {
//       "translate": "находить",
//       "v1": "find",
//       "v2": "found",
//       "v3": "found"
//   },
//   {
//       "translate": "подходить, подгонять (по размеру)",
//       "v1": "fit",
//       "v2": "fitted or fit",
//       "v3": "fitted or fit"
//   },
//   {
//       "translate": "сбежать",
//       "v1": "flee",
//       "v2": "fled",
//       "v3": "fled"
//   },
//   {
//       "translate": "швырять, бросать, бросаться",
//       "v1": "fling",
//       "v2": "flung",
//       "v3": "flung"
//   },
//   {
//       "translate": "летать",
//       "v1": "fly",
//       "v2": "flew",
//       "v3": "flown"
//   },
//   {
//       "translate": "запрещать",
//       "v1": "forbid",
//       "v2": "forbad or forbade(2)",
//       "v3": "forbidden"
//   },
//   {
//       "translate": "предсказывать, предугадывать",
//       "v1": "forecast",
//       "v2": "forecast or forecasted",
//       "v3": "forecast or forecasted"
//   },
//   {
//       "translate": "забывать",
//       "v1": "forget",
//       "v2": "forgot",
//       "v3": "forgotten"
//   },
//   {
//       "translate": "простить",
//       "v1": "forgive",
//       "v2": "forgave",
//       "v3": "forgiven"
//   },
//   {
//       "translate": "предвидеть",
//       "v1": "foresee",
//       "v2": "foresaw",
//       "v3": "foreseen"
//   },
//   {
//       "translate": "предсказывать, прогнозировать",
//       "v1": "foretell",
//       "v2": "foretold",
//       "v3": "foretold"
//   },
//   {
//       "translate": "оставлять, покидать",
//       "v1": "forsake",
//       "v2": "forsook",
//       "v3": "forsaken"
//   },
//   {
//       "translate": "застывать, замерзать, замораживать",
//       "v1": "freeze",
//       "v2": "froze",
//       "v3": "frozen"
//   },
//   {
//       "translate": "получать",
//       "v1": "get",
//       "v2": "got",
//       "v3": "got or gotten"
//   },
//   {
//       "translate": "давать",
//       "v1": "give",
//       "v2": "gave",
//       "v3": "given"
//   },
//   {
//       "translate": "идти",
//       "v1": "go",
//       "v2": "went",
//       "v3": "gone"
//   },
//   {
//       "translate": "точить, молоть",
//       "v1": "grind",
//       "v2": "ground",
//       "v3": "ground"
//   },
//   {
//       "translate": "расти",
//       "v1": "grow",
//       "v2": "grew",
//       "v3": "grown"
//   },
//   {
//       "translate": "висеть",
//       "v1": "hang",
//       "v2": "hung (hanged – в знач. вешать, казнить)",
//       "v3": "hung (hanged – в знач. вешать, казнить)"
//   },
//   {
//       "translate": "иметь",
//       "v1": "have (или 3-е лицо, ед. число – has)",
//       "v2": "had",
//       "v3": "had"
//   },
//   {
//       "translate": "слышать",
//       "v1": "hear",
//       "v2": "heard",
//       "v3": "heard"
//   },
//   {
//       "translate": "вырубать, прорубать",
//       "v1": "hew",
//       "v2": "hewed",
//       "v3": "hewed or hewn"
//   },
//   {
//       "translate": "прятать",
//       "v1": "hide",
//       "v2": "hid",
//       "v3": "hidden"
//   },
//   {
//       "translate": "попадать, ударять",
//       "v1": "hit",
//       "v2": "hit",
//       "v3": "hit"
//   },
//   {
//       "translate": "держать",
//       "v1": "hold",
//       "v2": "held",
//       "v3": "held"
//   },
//   {
//       "translate": "причинять боль",
//       "v1": "hurt",
//       "v2": "hurt",
//       "v3": "hurt"
//   },
//   {
//       "translate": "содержать, поддерживать",
//       "v1": "keep",
//       "v2": "kept",
//       "v3": "kept"
//   },
//   {
//       "translate": "становиться на колени",
//       "v1": "kneel",
//       "v2": "knelt or kneeled",
//       "v3": "knelt or kneeled"
//   },
//   {
//       "translate": "вязать, плести",
//       "v1": "knit",
//       "v2": "knit or knitted",
//       "v3": "knit or knitted"
//   },
//   {
//       "translate": "знать",
//       "v1": "know",
//       "v2": "knew",
//       "v3": "known"
//   },
//   {
//       "translate": "класть, стелить",
//       "v1": "lay",
//       "v2": "laid",
//       "v3": "laid"
//   },
//   {
//       "translate": "вести, лидировать",
//       "v1": "lead",
//       "v2": "led",
//       "v3": "led"
//   },
//   {
//       "translate": "перепрыгивать, скакать",
//       "v1": "leap",
//       "v2": "leaped or leapt",
//       "v3": "leaped or leapt"
//   },
//   {
//       "translate": "учиться, узнавать",
//       "v1": "learn",
//       "v2": "learned or learnt",
//       "v3": "learned or learnt"
//   },
//   {
//       "translate": "покидать, оставлять",
//       "v1": "leave",
//       "v2": "left",
//       "v3": "left"
//   },
//   {
//       "translate": "давать в займы",
//       "v1": "lend",
//       "v2": "lent",
//       "v3": "lent"
//   },
//   {
//       "translate": "позволять",
//       "v1": "let",
//       "v2": "let",
//       "v3": "let"
//   },
//   {
//       "translate": "лежать",
//       "v1": "\nlie\n",
//       "v2": "lay",
//       "v3": "lain"
//   },
//   {
//       "translate": "лгать (это правильный глагол, приведён здесь только для сравнения)",
//       "v1": "\nlie\n",
//       "v2": "lied",
//       "v3": "lied"
//   },
//   {
//       "translate": "зажигать, освещать",
//       "v1": "light",
//       "v2": "lit or lighted",
//       "v3": "lit or lighted"
//   },
//   {
//       "translate": "терять",
//       "v1": "lose",
//       "v2": "lost",
//       "v3": "lost"
//   },
//   {
//       "translate": "делать, мастерить",
//       "v1": "make",
//       "v2": "made",
//       "v3": "made"
//   },
//   {
//       "translate": "значить, иметь ввиду",
//       "v1": "mean",
//       "v2": "meant",
//       "v3": "meant"
//   },
//   {
//       "translate": "встречать, знакомиться",
//       "v1": "meet",
//       "v2": "met",
//       "v3": "met"
//   },
//   {
//       "translate": "внушать недоверие, опасения",
//       "v1": "misgive",
//       "v2": "misgave",
//       "v3": "misgiven"
//   },
//   {
//       "translate": "ослышаться",
//       "v1": "mishear",
//       "v2": "misheard",
//       "v3": "misheard"
//   },
//   {
//       "translate": "промахнуться",
//       "v1": "mishit",
//       "v2": "mishit",
//       "v3": "mishit"
//   },
//   {
//       "translate": "класть не на место, потерять",
//       "v1": "mislay",
//       "v2": "mislaid",
//       "v3": "mislaid"
//   },
//   {
//       "translate": "ввести в заблуждение",
//       "v1": "mislead",
//       "v2": "misled",
//       "v3": "misled"
//   },
//   {
//       "translate": "неправильно истолковывать (или читать)",
//       "v1": "misread",
//       "v2": "misread [misred]",
//       "v3": "misread [misred]"
//   },
//   {
//       "translate": "писать с ошибками",
//       "v1": "misspell",
//       "v2": "misspelled or misspelt",
//       "v3": "misspelled or misspelt"
//   },
//   {
//       "translate": "неправильно понимать",
//       "v1": "misunderstand",
//       "v2": "misunderstood",
//       "v3": "misunderstood"
//   },
//   {
//       "translate": "заблуждаться, ошибаться",
//       "v1": "mistake",
//       "v2": "mistook",
//       "v3": "mistaken"
//   },
//   {
//       "translate": "косить",
//       "v1": "mow",
//       "v2": "mowed",
//       "v3": "mowed or mown"
//   },
//   {
//       "translate": "возмещать, дополнять",
//       "v1": "offset",
//       "v2": "offset",
//       "v3": "offset"
//   },
//   {
//       "translate": "перебивать цену, предлагать больше",
//       "v1": "outbid",
//       "v2": "outbid",
//       "v3": "outbid"
//   },
//   {
//       "translate": "превосходить",
//       "v1": "outdo",
//       "v2": "outdid",
//       "v3": "outdone"
//   },
//   {
//       "translate": "перегонять, опережать",
//       "v1": "outrun",
//       "v2": "outran",
//       "v3": "outrun"
//   },
//   {
//       "translate": "преодолеть, победить",
//       "v1": "overcome",
//       "v2": "overcame",
//       "v3": "overcome"
//   },
//   {
//       "translate": "превышать кредит, превышать бюджет",
//       "v1": "overdraw",
//       "v2": "overdrew",
//       "v3": "overdrawn"
//   },
//   {
//       "translate": "платить",
//       "v1": "pay",
//       "v2": "paid",
//       "v3": "paid"
//   },
//   {
//       "translate": "умолять, просить (о помощи и т.д.)",
//       "v1": "plead",
//       "v2": " pleaded or (plead / pled)",
//       "v3": " pleaded or (plead / pled)"
//   },
//   {
//       "translate": "доказывать, подтверждать",
//       "v1": "prove",
//       "v2": "proved",
//       "v3": "proven or proved"
//   },
//   {
//       "translate": "класть, ставить",
//       "v1": "put",
//       "v2": "put",
//       "v3": "put"
//   },
//   {
//       "translate": "выходить, покидать, бросать",
//       "v1": "quit",
//       "v2": "quit or quitted",
//       "v3": "quit or quitted"
//   },
//   {
//       "translate": "читать",
//       "v1": "read",
//       "v2": "read /red/",
//       "v3": "read /red/"
//   },
//   {
//       "translate": "делать сброс, возвращать в исходное состояние",
//       "v1": "reset",
//       "v2": "reset",
//       "v3": "reset"
//   },
//   {
//       "translate": "избавлять",
//       "v1": "rid",
//       "v2": "rid or ridded",
//       "v3": "rid or ridded"
//   },
//   {
//       "translate": "ездить верхом",
//       "v1": "ride",
//       "v2": "rode",
//       "v3": "ridden"
//   },
//   {
//       "translate": "звонить",
//       "v1": "ring",
//       "v2": "rang",
//       "v3": "rung"
//   },
//   {
//       "translate": "восходить, подниматься",
//       "v1": "rise",
//       "v2": "rose",
//       "v3": "risen"
//   },
//   {
//       "translate": "бежать",
//       "v1": "run",
//       "v2": "ran",
//       "v3": "run"
//   },
//   {
//       "translate": "сказать",
//       "v1": "say",
//       "v2": "said",
//       "v3": "said"
//   },
//   {
//       "translate": "видеть",
//       "v1": "see",
//       "v2": "saw",
//       "v3": "seen"
//   },
//   {
//       "translate": "добиваться, искать",
//       "v1": "seek",
//       "v2": "sought",
//       "v3": "sought"
//   },
//   {
//       "translate": "продавать",
//       "v1": "sell",
//       "v2": "sold",
//       "v3": "sold"
//   },
//   {
//       "translate": "посылать",
//       "v1": "send",
//       "v2": "sent",
//       "v3": "sent"
//   },
//   {
//       "translate": "сажать, устанавливать",
//       "v1": "set",
//       "v2": "set",
//       "v3": "set"
//   },
//   {
//       "translate": "шить",
//       "v1": "sew",
//       "v2": "sewed",
//       "v3": "sewn or sewed"
//   },
//   {
//       "translate": "трясти",
//       "v1": "shake",
//       "v2": "shook",
//       "v3": "shaken"
//   },
//   {
//       "translate": "бриться",
//       "v1": "shave",
//       "v2": "shaved",
//       "v3": "shaved or shaven"
//   },
//   {
//       "translate": "стричь",
//       "v1": "shear",
//       "v2": "sheared",
//       "v3": "sheared or shorn"
//   },
//   {
//       "translate": "проливать, избавляться от чего-д",
//       "v1": "shed",
//       "v2": "shed",
//       "v3": "shed"
//   },
//   {
//       "translate": "светить, сиять",
//       "v1": "shine",
//       "v2": "shone or shined",
//       "v3": "shone or shined"
//   },
//   {
//       "translate": "стрелять",
//       "v1": "shoot",
//       "v2": "shot",
//       "v3": "shot"
//   },
//   {
//       "translate": "показывать",
//       "v1": "show",
//       "v2": "showed",
//       "v3": "shown or showed"
//   },
//   {
//       "translate": "сжиматься",
//       "v1": "shrink",
//       "v2": "shrank or shrunk",
//       "v3": "shrunk or shrunken"
//   },
//   {
//       "translate": "закрывать, захлопывать",
//       "v1": "shut",
//       "v2": "shut",
//       "v3": "shut"
//   },
//   {
//       "translate": "петь",
//       "v1": "sing",
//       "v2": "sang or sung",
//       "v3": "sung"
//   },
//   {
//       "translate": "погружаться, опускаться",
//       "v1": "sink",
//       "v2": "sank or sunk",
//       "v3": "sunk"
//   },
//   {
//       "translate": "сидеть",
//       "v1": "sit",
//       "v2": "sat",
//       "v3": "sat"
//   },
//   {
//       "translate": "убивать (тж. переносн. – сразить наповал.)",
//       "v1": "slay",
//       "v2": "slew (в переносном смысле slayed)",
//       "v3": "slain (в переносном смысле slayed)"
//   },
//   {
//       "translate": "спать",
//       "v1": "sleep",
//       "v2": "slept",
//       "v3": "slept"
//   },
//   {
//       "translate": "скользить",
//       "v1": "slide",
//       "v2": "slid",
//       "v3": "slid"
//   },
//   {
//       "translate": "бросать, швырять",
//       "v1": "sling",
//       "v2": "slung",
//       "v3": "slung"
//   },
//   {
//       "translate": "пахнуть, нюхать, ощущать запах",
//       "v1": "smell",
//       "v2": "smelled or smelt",
//       "v3": "smelled or smelt"
//   },
//   {
//       "translate": "разбить, сразить",
//       "v1": "smite",
//       "v2": "smote",
//       "v3": "smitten"
//   },
//   {
//       "translate": "говорить",
//       "v1": "speak",
//       "v2": "spoke",
//       "v3": "spoken"
//   },
//   {
//       "translate": "ехать или бежать очень быстро, мчаться, спешить",
//       "v1": "speed",
//       "v2": "sped or speeded",
//       "v3": "sped or speeded"
//   },
//   {
//       "translate": "произносить или писать по буквам",
//       "v1": "spell",
//       "v2": "spelled or spelt",
//       "v3": "spelled or spelt"
//   },
//   {
//       "translate": "тратить",
//       "v1": "spend",
//       "v2": "spent",
//       "v3": "spent"
//   },
//   {
//       "translate": "разлить",
//       "v1": "spill",
//       "v2": "spilled or spilt",
//       "v3": "spilled or spilt"
//   },
//   {
//       "translate": "крутить, прясть",
//       "v1": "spin",
//       "v2": "spun",
//       "v3": "spun"
//   },
//   {
//       "translate": "плевать",
//       "v1": "spit",
//       "v2": "spit or spat",
//       "v3": "spit or spat"
//   },
//   {
//       "translate": "разделять, раскалывать",
//       "v1": "split",
//       "v2": "split",
//       "v3": "split"
//   },
//   {
//       "translate": "портить",
//       "v1": "spoil",
//       "v2": "spoiled or spoilt",
//       "v3": "spoiled or spoilt"
//   },
//   {
//       "translate": "распахнуть, распространять",
//       "v1": "spread",
//       "v2": "spread",
//       "v3": "spread"
//   },
//   {
//       "translate": "прыгать, скакать",
//       "v1": "spring",
//       "v2": "sprang or sprung",
//       "v3": "sprung"
//   },
//   {
//       "translate": "стоять",
//       "v1": "stand",
//       "v2": "stood",
//       "v3": "stood"
//   },
//   {
//       "translate": "воровать",
//       "v1": "steal",
//       "v2": "stole",
//       "v3": "stolen"
//   },
//   {
//       "translate": "втыкать, прилепить(ся)",
//       "v1": "stick",
//       "v2": "stuck",
//       "v3": "stuck"
//   },
//   {
//       "translate": "жалить",
//       "v1": "sting",
//       "v2": "stung",
//       "v3": "stung"
//   },
//   {
//       "translate": "вонять",
//       "v1": "stink",
//       "v2": "stank",
//       "v3": "stunk"
//   },
//   {
//       "translate": "бастовать, ударять",
//       "v1": "strike",
//       "v2": "struck",
//       "v3": "struck or stricken"
//   },
//   {
//       "translate": "нанизывать, натянуть",
//       "v1": "string",
//       "v2": "strung",
//       "v3": "strung"
//   },
//   {
//       "translate": "клясться, ругаться",
//       "v1": "swear",
//       "v2": "swore",
//       "v3": "sworn"
//   },
//   {
//       "translate": "подметать",
//       "v1": "sweep",
//       "v2": "swept",
//       "v3": "swept"
//   },
//   {
//       "translate": "разбухать, надуваться",
//       "v1": "swell",
//       "v2": "swelled",
//       "v3": "swollen or swelled"
//   },
//   {
//       "translate": "плавать",
//       "v1": "swim",
//       "v2": "swam",
//       "v3": "swum"
//   },
//   {
//       "translate": "качать",
//       "v1": "swing",
//       "v2": "swung",
//       "v3": "swung"
//   },
//   {
//       "translate": "брать, взять",
//       "v1": "take",
//       "v2": "took",
//       "v3": "taken"
//   },
//   {
//       "translate": "обучать",
//       "v1": "teach",
//       "v2": "taught",
//       "v3": "taught"
//   },
//   {
//       "translate": "рвать",
//       "v1": "tear",
//       "v2": "tore",
//       "v3": "torn"
//   },
//   {
//       "translate": "рассказывать",
//       "v1": "tell",
//       "v2": "told",
//       "v3": "told"
//   },
//   {
//       "translate": "думать",
//       "v1": "think",
//       "v2": "thought",
//       "v3": "thought"
//   },
//   {
//       "translate": "бросать",
//       "v1": "throw",
//       "v2": "threw",
//       "v3": "thrown"
//   },
//   {
//       "translate": "толкать, совать, колоть",
//       "v1": "thrust",
//       "v2": "thrust",
//       "v3": "thrust"
//   },
//   {
//       "translate": "ступать, топтать",
//       "v1": "tread",
//       "v2": "trod or treaded",
//       "v3": "trodden or trod"
//   },
//   {
//       "translate": "подрезать; сбивать цены",
//       "v1": "undercut",
//       "v2": "undercut",
//       "v3": "undercut"
//   },
//   {
//       "translate": "подвергаться, претерпевать",
//       "v1": "undergo",
//       "v2": "underwent",
//       "v3": "undergone"
//   },
//   {
//       "translate": "понимать",
//       "v1": "understand",
//       "v2": "understood",
//       "v3": "understood"
//   },
//   {
//       "translate": "отменять, уничтожать, расстёгивать",
//       "v1": "undo",
//       "v2": "undid",
//       "v3": "undone"
//   },
//   {
//       "translate": "поддерживать, утверждать",
//       "v1": "uphold",
//       "v2": "upheld",
//       "v3": "upheld"
//   },
//   {
//       "translate": "опрокинуть, расстроиться",
//       "v1": "upset",
//       "v2": "upset",
//       "v3": "upset"
//   },
//   {
//       "translate": "будить",
//       "v1": "wake",
//       "v2": "woke or waked",
//       "v3": "woken or waked also woke"
//   },
//   {
//       "translate": "перехватывать, подстерегать",
//       "v1": "waylay",
//       "v2": "waylaid",
//       "v3": "waylaid"
//   },
//   {
//       "translate": "носить, одевать",
//       "v1": "wear",
//       "v2": "wore",
//       "v3": "worn"
//   },
//   {
//       "translate": "ткать",
//       "v1": "weave",
//       "v2": "wove or weaved",
//       "v3": "woven or weaved"
//   },
//   {
//       "translate": "жениться, выходить или выдавать замуж",
//       "v1": "wed",
//       "v2": "wed",
//       "v3": "wed or wedded"
//   },
//   {
//       "translate": "плакать, запотевать",
//       "v1": "weep",
//       "v2": "wept",
//       "v3": "wept"
//   },
//   {
//       "translate": "мочить, увлажнять",
//       "v1": "wet",
//       "v2": "wet or wetted",
//       "v3": "wet or wetted"
//   },
//   {
//       "translate": "(вспомогательный глагол будущего времени) буду, будешь, будем, будет, будут",
//       "v1": "will",
//       "v2": "would",
//       "v3": "-"
//   },
//   {
//       "translate": "побеждать",
//       "v1": "win",
//       "v2": "won",
//       "v3": "won"
//   },
//   {
//       "translate": "заводить (часы), наматывать",
//       "v1": "wind",
//       "v2": "wound",
//       "v3": "wound"
//   },
//   {
//       "translate": "противостоять",
//       "v1": "withstand",
//       "v2": "withstood",
//       "v3": "withstood"
//   },
//   {
//       "translate": "скрутить, сжимать, выжимать",
//       "v1": "wring",
//       "v2": "wrung",
//       "v3": "wrung"
//   },
//   {
//       "translate": "писать",
//       "v1": "write",
//       "v2": "wrote",
//       "v3": "written"
//   }
// ];


let wordList = [
    {
        "translate": "быть",
        "v1": "be",
        "v2": "was / were",
        "v3": "been",
        "v4": "[biː]",
        "v5": "[wɒz]/[wɪər]",
        "v6": "[biː]"
    },
    {
        "translate": "становится",
        "v1": "become",
        "v2": "became",
        "v3": "become"
    },
    {
        "translate": "начинать",
        "v1": "begin",
        "v2": "began",
        "v3": "begun"
    },
    {
        "translate": "ломать",
        "v1": "break",
        "v2": "broke",
        "v3": "broken"
    },
    {
        "translate": "приносить",
        "v1": "bring",
        "v2": "brought",
        "v3": "brought"
    },
    {
        "translate": "строить",
        "v1": "build",
        "v2": "built",
        "v3": "built"
    },
    {
        "translate": "покупать",
        "v1": "buy",
        "v2": "bought",
        "v3": "bought"
    },
    {
        "translate": "мочь",
        "v1": "can",
        "v2": "could",
        "v3": "(been able)"
    },
    {
        "translate": "ловить",
        "v1": "catch",
        "v2": "caught",
        "v3": "caught"
    },
    {
        "translate": "выбирать",
        "v1": "choose",
        "v2": "chose",
        "v3": "chosen"
    },
    {
        "translate": "приходить",
        "v1": "come",
        "v2": "came",
        "v3": "come"
    },
    {
        "translate": "стоить",
        "v1": "cost",
        "v2": "cost",
        "v3": "cost"
    },
    {
        "translate": "копать",
        "v1": "dig",
        "v2": "dug",
        "v3": "dug"
    },
    {
        "translate": "делать",
        "v1": "do",
        "v2": "did",
        "v3": "done"
    },
    {
        "translate": "рисовать",
        "v1": "draw",
        "v2": "drew",
        "v3": "drawn"
    },
    {
        "translate": "пить",
        "v1": "drink",
        "v2": "drank",
        "v3": "drunk"
    },
    {
        "translate": "водить",
        "v1": "drive",
        "v2": "drove",
        "v3": "driven"
    },
    {
        "translate": "есть",
        "v1": "eat",
        "v2": "ate",
        "v3": "eaten"
    },
    {
        "translate": "падать",
        "v1": "fall",
        "v2": "fell",
        "v3": "fallen"
    },
    {
        "translate": "кормить",
        "v1": "feed",
        "v2": "fed",
        "v3": "fed"
    },
    {
        "translate": "чувствовать",
        "v1": "feel",
        "v2": "felt",
        "v3": "felt"
    },
    {
        "translate": "находить",
        "v1": "find",
        "v2": "found",
        "v3": "found"
    },
    {
        "translate": "летать",
        "v1": "fly",
        "v2": "flew",
        "v3": "flown"
    },
    {
        "translate": "забывать",
        "v1": "forget",
        "v2": "forgot",
        "v3": "forgotten"
    },
    {
        "translate": "получать",
        "v1": "get",
        "v2": "got",
        "v3": "got or gotten"
    },
    {
        "translate": "давать",
        "v1": "give",
        "v2": "gave",
        "v3": "given"
    },
    {
        "translate": "идти",
        "v1": "go",
        "v2": "went",
        "v3": "gone"
    },
    {
        "translate": "расти",
        "v1": "grow",
        "v2": "grew",
        "v3": "grown"
    },
    {
        "translate": "иметь",
        "v1": "have",
        "v2": "had",
        "v3": "had"
    },
    {
        "translate": "слышать",
        "v1": "hear",
        "v2": "heard",
        "v3": "heard"
    },
    {
        "translate": "держать",
        "v1": "hold",
        "v2": "held",
        "v3": "held"
    },

    {
        "translate": "боль",
        "v1": "hurt",
        "v2": "hurt",
        "v3": "hurt"
    },
    {
        "translate": "хранить",
        "v1": "keep",
        "v2": "kept",
        "v3": "kept"
    },
    {
        "translate": "знать",
        "v1": "know",
        "v2": "knew",
        "v3": "known"
    },
    {
        "translate": "учиться",
        "v1": "learn",
        "v2": "learned or learnt",
        "v3": "learned or learnt"
    },
    {
        "translate": "покидать",
        "v1": "leave",
        "v2": "left",
        "v3": "left"
    },
    {
        "translate": "позволять",
        "v1": "let",
        "v2": "let",
        "v3": "let"
    },
    {
        "translate": "терять",
        "v1": "lose",
        "v2": "lost",
        "v3": "lost"
    },
    {
        "translate": "делать",
        "v1": "make",
        "v2": "made",
        "v3": "made"
    },
    {
        "translate": "значить",
        "v1": "mean",
        "v2": "meant",
        "v3": "meant"
    },
    {
        "translate": "встречать",
        "v1": "meet",
        "v2": "met",
        "v3": "met"
    },
    {
        "translate": "платить",
        "v1": "pay",
        "v2": "paid",
        "v3": "paid"
    },
    {
        "translate": "класть",
        "v1": "put",
        "v2": "put",
        "v3": "put"
    },
    {
        "translate": "читать",
        "v1": "read",
        "v2": "read /red/",
        "v3": "read /red/"
    },
    {
        "translate": "ездить верхом",
        "v1": "ride",
        "v2": "rode",
        "v3": "ridden"
    },
    {
        "translate": "звонить",
        "v1": "ring",
        "v2": "rang",
        "v3": "rung"
    },
    {
        "translate": "бежать",
        "v1": "run",
        "v2": "ran",
        "v3": "run"
    },
    {
        "translate": "сказать",
        "v1": "say",
        "v2": "said",
        "v3": "said"
    },
    {
        "translate": "видеть",
        "v1": "see",
        "v2": "saw",
        "v3": "seen"
    },
    {
        "translate": "продавать",
        "v1": "sell",
        "v2": "sold",
        "v3": "sold"
    },
    {
        "translate": "посылать",
        "v1": "send",
        "v2": "sent",
        "v3": "sent"
    },
    {
        "translate": "светить",
        "v1": "shine",
        "v2": "shone or shined",
        "v3": "shone or shined"
    },
    {
        "translate": "показывать",
        "v1": "show",
        "v2": "showed",
        "v3": "shown or showed"
    },
    {
        "translate": "петь",
        "v1": "sing",
        "v2": "sang or sung",
        "v3": "sung"
    },
    {
        "translate": "сидеть",
        "v1": "sit",
        "v2": "sat",
        "v3": "sat"
    },
    {
        "translate": "спать",
        "v1": "sleep",
        "v2": "slept",
        "v3": "slept"
    },
    {
        "translate": "говорить",
        "v1": "speak",
        "v2": "spoke",
        "v3": "spoken"
    },
    {
        "translate": "тратить",
        "v1": "spend",
        "v2": "spent",
        "v3": "spent"
    },
    {
        "translate": "стоять",
        "v1": "stand",
        "v2": "stood",
        "v3": "stood"
    },
    {
        "translate": "воровать",
        "v1": "steal",
        "v2": "stole",
        "v3": "stolen"
    },
    {
        "translate": "плавать",
        "v1": "swim",
        "v2": "swam",
        "v3": "swum"
    },
    {
        "translate": "брать",
        "v1": "take",
        "v2": "took",
        "v3": "taken"
    },
    {
        "translate": "обучать",
        "v1": "teach",
        "v2": "taught",
        "v3": "taught"
    },
    {
        "translate": "рассказывать",
        "v1": "tell",
        "v2": "told",
        "v3": "told"
    },
    {
        "translate": "думать",
        "v1": "think",
        "v2": "thought",
        "v3": "thought"
    },
    {
        "translate": "бросать",
        "v1": "throw",
        "v2": "threw",
        "v3": "thrown"
    },
    {
        "translate": "понимать",
        "v1": "understand",
        "v2": "understood",
        "v3": "understood"
    },
    {
        "translate": "носить, одевать",
        "v1": "wear",
        "v2": "wore",
        "v3": "worn"
    },
    {
        "translate": "побеждать",
        "v1": "win",
        "v2": "won",
        "v3": "won"
    },
    {
        "translate": "писать",
        "v1": "write",
        "v2": "wrote",
        "v3": "written"
    }

];


// ******************* RESIZE FONT TABLE RANGE *************************
const sizeText = document.querySelector("#size"),
    tableWord = document.querySelector('table');

// sizeText.onmousemove = function (e) {
//     // if (this.value.slice(0, 1) >= 9) { return this.value = 9 };
//     // let sizeFont = +this.value > 99 ? 10 + '.' + this.value.slice(-1) : +this.value.slice(0, 1) + '.' + this.value.slice(-1);
//     let sizeFont;
//     let sizeX = 3;

//     if (+this.value > 99) {
//         sizeFont = (10 + '.' + this.value.slice(-1)) * sizeX;
//     } else if (this.value < 10) {
//         sizeFont = (0 + '.' + this.value.slice(-1)) * sizeX;
//     } else {
//         sizeFont = (+this.value.slice(0, 1) + '.' + this.value.slice(-1)) * sizeX;
//     }

//     table.style = `font-size: ${24 + +sizeFont}px`;
//     console.log(sizeFont);
// };

// sizeText.addEventListener('touchmove', function () {
//     document.body.style = `font-size: ${24 + +this.value}px`;
// });


// ******************* SHOW WORDS LIST ON WEB PAGE *************************
const table = document.querySelector('tbody');


function printWordList() {
    wordList.forEach(item => {
        table.innerHTML += `
        <tr>
          <td><a src="audio/${item.v1}.mp3" class="play"></a></td>
          <td>${item.v1}</td>
          <td>${item.v2}</td>
          <td>${item.v3}</td>
          <td>${item.translate.split(0, 5)}</td>
        </tr>
        <tr class="hide">
            <td></td>
            <td>${item.v4}</td>
            <td>${item.v5}</td>
            <td>${item.v6}</td>
        </tr>
      `;
    });

    console.log(table.length);
}

printWordList();


// ******************* SEARCH WORD *************************
const inputSearchWord = document.getElementById('word');



// const regex = new RegExp('been');

inputSearchWord.addEventListener('keyup', () => {
    const regex = new RegExp(inputSearchWord.value.toLowerCase()),
          trContent = document.querySelectorAll('tr');

    for (let i = 0; i < trContent.length; i++) {
        if (i > 0) {
            trContent[i].remove();
        }
    }

    wordList.forEach(word => {
        let arr = [word.v1, word.v2, word.v3];
        if (regex.test(arr.join())) {
            table.innerHTML += `
            <tr>
                <td><a src="audio/${word.v1}.mp3" class="play"></a></td>
                <td>${word.v1}</td>
                <td>${word.v2}</td>
                <td>${word.v3}</td>
                <td>${word.translate.split(0, 5)}</td>
            </tr>
            <tr class="hide hide">
                <td></td>
                <td>${word.v4}</td>
                <td>${word.v5}</td>
                <td>${word.v6}</td>
            </tr>
          `;
        }
    });

    audio();
    showTrans();
});


// ******************* PLAY AUDIO EXAMPLE *************************
function audio() {

    const audioLink = document.querySelectorAll('.play');
    const audio = new Audio();

    audio.addEventListener('loadedmetadata', e => {
        let ms = audio.duration;
    });

    let totalLinkPlay;

    audioLink.forEach(item => {
        item.addEventListener('click', e => {
            totalLinkPlay = item.attributes[0].nodeValue;
            play(item.attributes[0].nodeValue, item);
        });
    });

    function play(src, item) {

        if (totalLinkPlay === src) {
            if (audio.paused) {
                item.classList.add('paused');

                tableWord.classList.add('focus');
                item.parentNode.parentNode.classList.add('active');
                audio.play();
            } else {
                tableWord.classList.remove('focus');
                item.classList.remove('paused');
                audio.pause();
            }

        } else {

            audioLink.forEach(item => {
                item.classList.remove('paused');
                item.parentNode.parentNode.classList.remove('active');
            });

            audio.src = src;
            audio.play();

            tableWord.classList.add('focus');
            item.parentNode.parentNode.classList.add('active');
            item.classList.add('paused');

            audio.addEventListener('ended', (e) => {
                tableWord.classList.remove('focus');
                item.classList.remove('paused');
                item.parentNode.parentNode.classList.remove('active');
            });
        }
    }


}

audio();


/*============== CHANGE BACKGROUND HEADER ==============*/

function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 100) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);


// ******************* SHOW TRANSCRIPTION WORD *************************
// function showTrans() {
//     const btnShowTranscritpion = document.getElementById('nav-transcription'),
//         tr = document.querySelectorAll('tr');

//     btnShowTranscritpion.addEventListener('click', () => {
//         tr.forEach(item => {
//             if (item.className === 'hide') {
//                 item.classList.add('show');
//             } else {
//                 item.classList.remove('show');
//             }
//         });
//     });
// }

// showTrans();


/*==================== DARK LIGHT THEME ====================*/

const themeButtom = document.getElementById('theme-button'),
    iconTheme = 'bxs-moon',
    lightTheme = 'light-theme';

themeButtom.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeButtom.classList.toggle(iconTheme);
    saveLocalStorageTheme();
});

function saveLocalStorageTheme() {
    localStorage.setItem('selected-theme',
        document.body.classList.contains(lightTheme) ? true : false);
}

if (!localStorage.getItem('selected-theme')) {
    document.body.classList.add('light-theme');
    themeButtom.classList.add(iconTheme);
}

// function repeadListWord(ms) {
//     // setTimeout(() => {play('audio/begin.mp3');}, 5000);
//     setTimeout(() => {alert(ms);}, 5000);
// }<i class='bx bxs-moon' ></i>





// function downloadBlob(blob, filename) {
//   var a = document.createElement('a');
//   a.download = filename;
//   a.href = blob;
//   document.body.appendChild(a);
//   a.click();
//   a.remove();
// }

// function downloadResource(url) {
//   filename = url.split('\\').pop().split('/').pop();
//   fetch(url, {
//       mode: 'no-cors'
//     })
//     .then(response => response.blob())
//     .then(blob => {
//       let blobUrl = window.URL.createObjectURL(blob);
//       downloadBlob(blobUrl, filename);
//     })
//     .catch(e => console.error(e));
// }

// const audioLink = document.querySelectorAll('a.sm2_link');

// audioLink.forEach(item => {
//   downloadResource(`https://audio-class.ru${item.attributes[0].nodeValue}`);
//   setTimeout(() => {console.log(`https://audio-class.ru${item.attributes[0].nodeValue}`), 5000})
// });


// const audioLink = document.querySelectorAll('a.sm2_link');

// let i = 0;
// const intervalId = setInterval(() => {
//   if (i >= audioLink.length) {
//     clearInterval(intervalId);
//     return;
//   }
//   downloadResource(`https://audio-class.ru${audioLink[i].attributes[0].nodeValue}`);
//   i++;
// }, 5000);



// const textColumn = document.querySelectorAll('body > div.page_wrap > main > div.playlink > div > table > tbody');
// let arr = [];

// for (let i = 0; i <= textColumn[0].children.length; i++) {

//   let json = `{
//     "translate": "${textColumn[0].children[i].children[1].textContent}",
//     "v1": "${textColumn[0].children[i].children[2].textContent}",
//     "v2": "${textColumn[0].children[i].children[3].textContent}",
//     "v3": "${textColumn[0].children[i].children[4].textContent}",
//   },`;
//   arr.push(json);
// }

// textColumn[0].children[i].children[1].textContent


// { 
//   translate: textColumn[0].children[i].children[1].textContent,
//   v1: textColumn[0].children[i].children[2].textContent,
//   v2: textColumn[0].children[i].children[3].textContent,
//   v3: textColumn[0].children[i].children[4].textContent,
// }