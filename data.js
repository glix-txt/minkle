/*
  MINKLE DATA

  Drop files in covers/ and audio/, then `npm run scan`. Files are matched to the titles below
  by name ("fakemink - ", "(feat. …)", track numbers, trailing " .", accents, "_spotdown.org",
  "(1)" copies etc. are ignored). Files that aren't listed here are still picked up automatically
  (album subfolders, same-named cover = single). Only songs/covers that have a file are in the game,
  so it's fine to skip niche singles.

  Titles drop fakemink's trailing " ." stylisation ("Terrified ." -> "Terrified") so the guess list
  reads cleanly; files named either way still match.

  starts: optional manual clip start overrides in seconds, e.g. { "Easter Pink": 31.5 }

  Tracklists from Wikipedia + Deezer; singles/dates from Deezer and Wikipedia (Nov 2026).
  Old 9090gate songs that were re-uploaded in 2024/25 use their original year.
*/
window.FENG_DATA = {
  artist: "fakemink",
  game: "minkle",
  icon: "Easter Pink",   // which release's cover becomes the browser tab icon

  // result line by number of tries (1–6), and when you lose
  verdicts: {
    win: ["london's saviour .", "youngest in charge .", "so peng .", "thank god .", "close one .", "phew ."],
    lose: "terrified .",
  },

  releases: [
    // projects
    { id: "hosp",     title: "real hospitality",            type: "ep",      year: 2023 },
    { id: "saviour",  title: "London's Saviour",            type: "mixtape", year: 2023 },
    { id: "wildone",  title: "Wild One",                    type: "ep",      year: 2024 },   // with Mag
    { id: "furever",  title: "Furever",                     type: "ep",      year: 2024 },
    { id: "boy",      title: "The Boy Who Cried Terrified", type: "ep",      year: 2026 },
    { id: "terrified",title: "Terrified",                   type: "album",   year: 2026 },

    // 2022 (as 9090gate)
    { id: "s-arthouse", title: "Art House", type: "single", year: 2022 },
    { id: "s-ak58",     title: "AK58",      type: "single", year: 2022 },
    { id: "s-godiva",   title: "Godiva",    type: "single", year: 2022 },
    { id: "s-ohtina",   title: "Oh Tina",   type: "single", year: 2022 },

    // 2023
    { id: "s-9god",     title: "9God",              type: "single", year: 2023 },
    { id: "s-hey",      title: "Hey",               type: "single", year: 2023 },
    { id: "s-ym",       title: "YM",                type: "single", year: 2023 },
    { id: "s-medicine", title: "Medicine",          type: "single", year: 2023 },
    { id: "s-freebase", title: "Freebase",          type: "single", year: 2023 },
    { id: "s-bait",     title: "Im Just Bait",      type: "single", year: 2023 },
    { id: "s-blessed",  title: "Hi, I'm Blessed",   type: "single", year: 2023 },
    { id: "s-dietill",  title: "Die Till You Live", type: "single", year: 2023 },

    // 2024
    { id: "s-rosh",       title: "Me and Rosh",              type: "single", year: 2024 },
    { id: "s-nottoday",   title: "Not Today",                type: "single", year: 2024 },
    { id: "s-furcoat",    title: "Fur Coat Life",            type: "single", year: 2024 },
    { id: "s-rs11",       title: "RS11",                     type: "single", year: 2024 },
    { id: "s-heartbroken",title: "Heartbroken",              type: "single", year: 2024 },
    { id: "s-little",     title: "Little",                   type: "single", year: 2024 },
    { id: "s-peng",       title: "I'm So Peng",              type: "single", year: 2024 },
    { id: "s-mink",       title: "Mink",                     type: "single", year: 2024 },
    { id: "s-mistakes",   title: "Same Mistakes",            type: "single", year: 2024 },
    { id: "s-amnesia",    title: "Amnesia",                  type: "single", year: 2024 },
    { id: "s-exotic",     title: "Exotic Pop",               type: "single", year: 2024 },
    { id: "s-laced",      title: "Laced",                    type: "single", year: 2024 },
    { id: "s-apples",     title: "Apples and Pears",         type: "single", year: 2024 },
    { id: "s-poundcake",  title: "London Pound Cake",        type: "single", year: 2024 },
    { id: "s-insmoke",    title: "In Smoke, We Trust",       type: "single", year: 2024 },
    { id: "s-orchid",     title: "Orchid",                   type: "single", year: 2024 },   // w/ Fimiguerrero
    { id: "s-zealousy",   title: "Zealousy",                 type: "single", year: 2024 },
    { id: "s-nobody",     title: "Nobody",                   type: "single", year: 2024 },
    { id: "s-bhabie",     title: "Bhad Bhabie 2",            type: "single", year: 2024 },
    { id: "s-dust",       title: "Dust Freestyle",           type: "single", year: 2024 },
    { id: "s-lemon",      title: "Lemon",                    type: "single", year: 2024 },
    { id: "s-ballerinas", title: "Chipped Tooth Ballerinas", type: "single", year: 2024 },
    { id: "s-ragebait",   title: "Ragebait",                 type: "single", year: 2024 },
    { id: "s-wookies",    title: "Wookies",                  type: "single", year: 2024 },
    { id: "s-catty",      title: "Catty",                    type: "single", year: 2024 },
    { id: "s-plush",      title: "Plush",                    type: "single", year: 2024 },   // w/ Rada
    { id: "s-slurricane", title: "Slurricane",               type: "single", year: 2024 },   // w/ EsDeeKid
    { id: "s-cantletgo",  title: "Can't Let Go",             type: "single", year: 2024 },
    { id: "s-picasso",    title: "Pink Picasso",             type: "single", year: 2024 },
    { id: "s-scary",      title: "Scary Life",               type: "single", year: 2024 },
    { id: "s-sniffany",   title: "Sniffany",                 type: "single", year: 2024 },
    { id: "s-tropical",   title: "Tropical Freestyle",       type: "single", year: 2024 },
    { id: "s-plum",       title: "Plum Freestyle",           type: "single", year: 2024 },
    { id: "s-youngest",   title: "Youngest in Charge",       type: "single", year: 2024 },
    { id: "s-royal",      title: "Royal",                    type: "single", year: 2024 },
    { id: "s-sour",       title: "Sour",                     type: "single", year: 2024 },
    { id: "s-posh",       title: "Posh Thot",                type: "single", year: 2024 },
    { id: "s-thankgod",   title: "Thank God",                type: "single", year: 2024 },
    { id: "s-spend",      title: "Spend Money Lie",          type: "single", year: 2024 },
    { id: "s-dejavu",     title: "Deja Vu",                  type: "single", year: 2024 },
    { id: "s-escort",     title: "Lemon Cherry Escort",      type: "single", year: 2024 },
    { id: "s-ikno",       title: "I Kno",                    type: "single", year: 2024 },
    { id: "s-disco",      title: "Disco Biscuit",            type: "single", year: 2024 },   // 2 tracks
    { id: "s-crush",      title: "Crush",                    type: "single", year: 2024 },   // w/ ok
    { id: "s-ooh",        title: "Ooh",                      type: "single", year: 2024 },   // w/ GhostInnaFurCoat
    { id: "s-dietoday",   title: "Die Today",                type: "single", year: 2024 },
    { id: "s-shihtzu",    title: "Shih Tzu",                 type: "single", year: 2024 },   // w/ Xaviersobased
    { id: "s-galaxy",     title: "Galaxy Pavillion Club",    type: "single", year: 2024 },   // 2 tracks
    { id: "s-oreoz",      title: "Oreoz",                    type: "single", year: 2024 },
    { id: "s-secret",     title: "Secret",                   type: "single", year: 2024 },
    { id: "s-brat",       title: "Brat",                     type: "single", year: 2024 },
    { id: "s-lvmh",       title: "LVMH",                     type: "single", year: 2024 },
    // "Cats" came out a day after "So Blown" with the exact same cover, so it lives under So Blown
    { id: "s-soblown",    title: "So Blown",                 type: "single", year: 2024 },
    { id: "s-dontlook",   title: "Dont Look Back",           type: "single", year: 2024 },
    { id: "s-nah",        title: "Nah #Freestyle",           type: "single", year: 2024 },
    { id: "s-cantstop",   title: "Can't Stop",               type: "single", year: 2024 },
    { id: "s-nolicense",  title: "No License",               type: "single", year: 2024 },
    { id: "s-ibiza",      title: "Ibiza",                    type: "single", year: 2024 },
    { id: "s-pj",         title: "pj",                       type: "single", year: 2024 },
    { id: "s-bitemylip",  title: "Bite My Lip",              type: "single", year: 2024 },
    { id: "s-givenchy",   title: "Givenchy",                 type: "single", year: 2024 },
    { id: "s-colder",     title: "Colder",                   type: "single", year: 2024 },
    { id: "s-pillow",     title: "PillowFight",              type: "single", year: 2024 },   // w/ ok
    { id: "s-nothanks",   title: "No Thanks",                type: "single", year: 2024 },
    { id: "s-training",   title: "Training",                 type: "single", year: 2024 },
    { id: "s-naughty",    title: "Naughty or Nice",          type: "single", year: 2024 },
    { id: "s-bambi",      title: "Bambi",                    type: "single", year: 2024 },

    // 2025
    { id: "s-kacey",      title: "Kacey Lola",               type: "single", year: 2025 },
    { id: "s-warclothes", title: "War Clothes",              type: "single", year: 2025 },
    { id: "s-easterpink", title: "Easter Pink",              type: "single", year: 2025 },
    { id: "s-receipt",    title: "Receipt",                  type: "single", year: 2025 },   // w/ wasse
    { id: "s-imdead",     title: "I'm Dead",                 type: "single", year: 2025 },
    { id: "s-lvsandals",  title: "LV Sandals",               type: "single", year: 2025 },
    { id: "s-face",       title: "Face to Face",             type: "single", year: 2025 },
    { id: "s-milk",       title: "Milk",                     type: "single", year: 2025 },
    { id: "s-musicandme", title: "Music and Me",             type: "single", year: 2025 },
    { id: "s-makka",      title: "Makka",                    type: "single", year: 2025 },   // w/ Ecco2k & Mechatok
    { id: "s-skin",       title: "Under Your Skin",          type: "single", year: 2025 },
    { id: "s-snowwhite",  title: "Snow White",               type: "single", year: 2025 },
    { id: "s-braces",     title: "Braces",                   type: "single", year: 2025 },
    { id: "s-fever",      title: "Fever",                    type: "single", year: 2025 },   // w/ Buckshot
    { id: "s-crying",     title: "Crying",                   type: "single", year: 2025 },
    { id: "s-punch",      title: "Punch",                    type: "single", year: 2025 },
    { id: "s-lookatme",   title: "Look at Me",               type: "single", year: 2025 },
    { id: "s-fidelio",    title: "Fidelio",                  type: "single", year: 2025 },
    { id: "s-blackjeep",  title: "Black Jeep",               type: "single", year: 2025 },   // w/ Fimiguerrero

    // 2026
    { id: "s-jasmine",    title: "Night, Blooming Jasmine",  type: "single", year: 2026 },   // lead single from Terrified
    { id: "s-burnit",     title: "Burn It",                  type: "single", year: 2026 },   // w/ ok
    { id: "s-lovedog",    title: "Love Is a Dog from Hell",  type: "single", year: 2026 },
    { id: "s-byebye",     title: "Bye Bye",                  type: "single", year: 2026 },
    { id: "s-heal",       title: "Heal Everything",          type: "single", year: 2026 },
    { id: "s-lotg3",      title: "Love of the Game 3",       type: "single", year: 2026 },
    { id: "s-one2many",   title: "One 2 Many",               type: "single", year: 2026 },
    { id: "s-chiltern",   title: "Chiltern Firehouse",       type: "single", year: 2026 },   // solo + Skepta version
  ],

  songs: [
    // real hospitality (2023)
    { title: "China City",       release: "hosp" },
    { title: "Metal Gear",       release: "hosp" },
    { title: "Thirty Two Teeth", release: "hosp" },

    // London's Saviour (2023)
    { title: "Kill Everything",          release: "saviour" },
    { title: "Phantas-Ma-Goria",         release: "saviour" },
    { title: "Just Kitten",              release: "saviour" },
    { title: "Air Head",                 release: "saviour" },
    { title: "Fleeting Feeling",         release: "saviour" },
    { title: "London Life",              release: "saviour" },
    { title: "Loser Monologue",          release: "saviour" },
    { title: "Celebrity Deathmatch",     release: "saviour" },
    { title: "One More, Then I'll Sleep", release: "saviour" },

    // Wild One (2024)
    { title: "Blow Me",    release: "wildone" },
    { title: "Ambilux",    release: "wildone" },
    { title: "Chinchilla", release: "wildone" },
    { title: "Truffle",    release: "wildone" },

    // Furever (2024)
    { title: "Shampoodle",   release: "furever" },
    { title: "High Like Me", release: "furever" },
    { title: "Powder",       release: "furever" },
    { title: "Animal Mintz", release: "furever" },
    { title: "Hella",        release: "furever" },

    // The Boy Who Cried Terrified (2026)
    { title: "Blow the Speaker",  release: "boy" },
    { title: "Young Millionaire", release: "boy" },
    { title: "Dumb",              release: "boy" },
    { title: "Mr. Chow",          release: "boy" },
    { title: "The Mercer",        release: "boy" },
    { title: "Milk & Honey",      release: "boy" },
    { title: "FML",               release: "boy" },

    // Terrified (2026)
    { title: "Terrified",                  release: "terrified" },
    { title: "All Eyes on Me",             release: "terrified" },
    { title: "Playlist",                   release: "terrified" },
    { title: "Creep",                      release: "terrified" },
    { title: "Like a Virgin",              release: "terrified" },
    { title: "Jungle-Affair",              release: "terrified" },
    { title: "51 Ttashpel Pony Ave",       release: "terrified" },
    { title: "Hard Candy",                 release: "terrified" },
    { title: "Rewind",                     release: "terrified" },
    { title: "Essex Girls",                release: "terrified" },
    { title: "Night, Blooming Jasmine",    release: "terrified" },
    { title: "Wrong Relief",               release: "terrified" },
    { title: "Fire & Ice",                 release: "terrified" },
    { title: "Kiss of Death",              release: "terrified" },
    { title: "Creed",                      release: "terrified" },
    { title: "Tell Me What You're Missing", release: "terrified" },
    { title: "Forget Me Not",              release: "terrified" },
    { title: "Rétard Angel",               release: "terrified" },
    { title: "Etna",                       release: "terrified" },

    // two-track singles
    { title: "Baklava",    release: "s-disco" },
    { title: "Period Sex", release: "s-disco" },
    { title: "101",        release: "s-galaxy" },
    { title: "Housewife",  release: "s-galaxy" },
    { title: "Cats",       release: "s-soblown" },

    // standalone singles (song title = single title)
    ...[
      "Art House", "AK58", "Godiva", "Oh Tina",
      "9God", "Hey", "YM", "Medicine", "Freebase", "Im Just Bait", "Hi, I'm Blessed", "Die Till You Live",
      "Me and Rosh", "Not Today", "Fur Coat Life", "RS11", "Heartbroken", "Little", "I'm So Peng", "Mink",
      "Same Mistakes", "Amnesia", "Exotic Pop", "Laced", "Apples and Pears", "London Pound Cake",
      "In Smoke, We Trust", "Orchid", "Zealousy", "Nobody", "Bhad Bhabie 2", "Dust Freestyle", "Lemon",
      "Chipped Tooth Ballerinas", "Ragebait", "Wookies", "Catty", "Plush", "Slurricane", "Can't Let Go",
      "Pink Picasso", "Scary Life", "Sniffany", "Tropical Freestyle", "Plum Freestyle", "Youngest in Charge",
      "Royal", "Sour", "Posh Thot", "Thank God", "Spend Money Lie", "Deja Vu", "Lemon Cherry Escort", "I Kno",
      "Crush", "Ooh", "Die Today", "Shih Tzu", "Oreoz", "Secret", "Brat", "LVMH", "So Blown", "Dont Look Back",
      "Nah #Freestyle", "Can't Stop", "No License", "Ibiza", "pj", "Bite My Lip", "Givenchy", "Colder",
      "PillowFight", "No Thanks", "Training", "Naughty or Nice", "Bambi",
      "Kacey Lola", "War Clothes", "Easter Pink", "Receipt", "I'm Dead", "LV Sandals", "Face to Face", "Milk",
      "Music and Me", "Makka", "Under Your Skin", "Snow White", "Braces", "Fever", "Crying", "Punch",
      "Look at Me", "Fidelio", "Black Jeep",
      "Burn It", "Love Is a Dog from Hell", "Bye Bye", "Heal Everything", "Love of the Game 3", "One 2 Many",
      "Chiltern Firehouse",
    ].map((title) => ({ title })),
  ],

  starts: {},
};

// standalone singles: point each at the release with the same title
(() => {
  const d = window.FENG_DATA, k = (s) => s.toLowerCase();
  const byTitle = Object.fromEntries(d.releases.map((r) => [k(r.title), r.id]));
  d.songs.forEach((s) => { if (!s.release) s.release = byTitle[k(s.title)] || ""; });
})();
