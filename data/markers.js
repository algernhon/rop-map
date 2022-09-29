const DATA_MARKERS = {
    "types": [
        {
            "name": "area",
            "icon": "area.webp",
            "iconSize": [30, 30],
            "iconAnchor": [15, 15],
            "popupAnchor": [0, -5]
        },
        {
            "name": "point of interest",
            "icon": "poi.webp",
            "iconSize": [30, 30],
            "iconAnchor": [15, 15],
            "popupAnchor": [0, -5]
        },
        {
            "name": "village",
            "icon": "village.webp",
            "iconSize": [30, 30],
            "iconAnchor": [15, 15],
            "popupAnchor": [0, -5]
        },
        {
            "name": "city",
            "icon": "city.webp",
            "iconSize": [30, 30],
            "iconAnchor": [15, 15],
            "popupAnchor": [0, -5]
        },
        {
            "name": "event",
            "icon": "event.webp",
            "iconSize": [30, 30],
            "iconAnchor": [15, 15],
            "popupAnchor": [0, -5]
        }
    ],
    "markers": [
        {
            "title": "Grey Marshes",
            "coordinates": [599.6, 889.9],
            "type": "area",
            "image": "grey-marshes.webp",
            "episodes": ["S01E05"],
            "decription": "A large area of swampland, part of one of the many Harfoots migration stage. This place will be renamed Dead Marshes at the beginning of the third age, right after the War of the Alliance.",
            "readMoreUrl": "https://lotr.fandom.com/wiki/Dead_Marshes",
            "isConfirmed": true
        },
        {
            "title": "Weedbrook",
            "coordinates": [650, 874.2],
            "type": "area",
            "image": "weedbrook.webp",
            "episodes": ["S01E05"],
            "decription": "Vast expanse of yellow grass crossed by the Harfoots during their migration.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Trout Bend",
            "coordinates": [610.5, 976,5],
            "type": "area",
            "image": "trout-bend.webp",
            "episodes": ["S01E05"],
            "decription": "Green and beautiful area characterized by a large waterfall.",
            "readMoreUrl": "",
            "isConfirmed": false
        },
        {
            "title": "The Braids",
            "coordinates": [623.5, 1023.5],
            "type": "area",
            "image": "the-braids.webp",
            "episodes": ["S01E05"],
            "decription": "Unknown location.",
            "readMoreUrl": "",
            "isConfirmed": false
        },
        {
            "title": "Unknown forest",
            "coordinates": [640.2, 1063],
            "type": "area",
            "image": "unknown-forest.webp",
            "episodes": ["S01E05"],
            "decription": "Unknown forest with a lot of leafless trees.",
            "readMoreUrl": "",
            "isConfirmed": false
        },
        {
            "title": "Harfoot's first location",
            "coordinates": [682.4, 927.5],
            "type": "point of interest",
            "image": "harfoots-start.webp",
            "episodes": ["S01E01", "S01E02", "S01E03"],
            "decription": "Quiet area with hills and forests. This is the starting area of Harfoots at the beginning of the TV show. This place belong to the region of Rhovanion.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Tirharad",
            "coordinates": [530.5, 949.7],
            "type": "village",
            "image": "tirharad.webp",
            "episodes": ["S01E01", "S01E02", "S01E03"],
            "decription": "Tirharad is a village of Men location in west-central Mordor.",
            "readMoreUrl": "https://lotr.fandom.com/wiki/Tirharad",
            "isConfirmed": true
        },
        {
            "title": "Ostirith",
            "coordinates": [524.2, 941],
            "type": "point of interest",
            "image": "ostirith.webp",
            "episodes": ["S01E01", "S01E03", "S01E04"],
            "decription": "Ostirith is a watchtower used by Silvan Elves to watch over the settlements of Men.",
            "readMoreUrl": "https://lotr.fandom.com/wiki/Ostirith",
            "isConfirmed": true
        },
        {
            "title": "Hordern",
            "coordinates": [538.4, 952.6],
            "type": "village",
            "image": "hordern.webp",
            "episodes": ["S01E01"],
            "decription": "Hordern was a village of Men whose ancestors had once sided with Morgoth. Arondir found the village burned and its inhabitants missing.",
            "readMoreUrl": "https://lotr.fandom.com/wiki/Hordern",
            "isConfirmed": true
        },
        {
            "title": "Prison camp",
            "coordinates": [481.2, 980.2],
            "type": "point of interest",
            "image": "orccamp.webp",
            "episodes": ["S01E03", "S01E04"],
            "decription": "Camp of Orcs where Arondir was prisonnier after his investigation at Hordern.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Mithlond",
            "coordinates": [780.4, 570.2],
            "type": "city",
            "image": "mithlond.webp",
            "episodes": ["S01E01", "S01E02", "S01E03", "S01E04", "S01E05"],
            "decription": "Mithlond, known also as Grey Havens, is the capital of the high elves, ruled by Gil-galad.",
            "readMoreUrl": "https://lotr.fandom.com/wiki/Grey_Havens",
            "isConfirmed": true
        },
        {
            "title": "Ost-in-Edhil",
            "coordinates": [710.5, 740.8],
            "type": "city",
            "image": "ost-in-edhil.webp",
            "episodes": ["S01E02", "S01E03", "S01E04"],
            "decription": "Ost-in-Edhil is the capital city of Eregion, ruled by Celebrimbor.",
            "readMoreUrl": "https://lotr.fandom.com/fr/wiki/Ost-in-Edhil",
            "isConfirmed": true
        },
        {
            "title": "Khazad-dûm",
            "coordinates": [729.7, 777.2],
            "type": "city",
            "image": "khazad-dum.webp",
            "episodes": ["S01E02", "S01E03", "S01E04"],
            "decription": "Khazad-dûm, commonly known as Moria, is the underground kingdom of the Dwarves of Durin's Folk, and the most famed of all Dwarven realms.",
            "readMoreUrl": "https://lotr.fandom.com/wiki/Khazad-d%C3%BBm",
            "isConfirmed": true
        },
        {
            "title": "Forodwaith",
            "coordinates": [890.7, 725.6],
            "type": "point of interest",
            "image": "forodwaith.webp",
            "episodes": ["S01E01"],
            "decription": "Forodwaith is the region in the far north of Middle-earth. This is the location where Galabriel leads a small force to look for evidence of Sauron's whereabouts.",
            "readMoreUrl": "https://lotr.fandom.com/wiki/Khazad-d%C3%BBm",
            "isConfirmed": true
        },
        {
            "title": "Abandoned Fortress",
            "coordinates": [907.5, 758.5],
            "type": "point of interest",
            "image": "abandoned-fortress.webp",
            "episodes": ["S01E01"],
            "decription": "Built by Morgoth, this fortress has been abandoned and this now the home of a snow-troll.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Galabriel leaves the boat heading to Valinor",
            "coordinates": [591, 56],
            "type": "event",
            "image": "event-boat-galabriel.webp",
            "episodes": ["S01E01"],
            "decription": "Galabriel decides not to join Valinor and wants to continue his quest to find Sauron. She jumps over the ship, finding herself alone in the middle of the Great Sea.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Galabriel is attacked by a sea worm",
            "coordinates": [561.5, 182.5],
            "type": "event",
            "image": "event-sea-worm.webp",
            "episodes": ["S01E01"],
            "decription": "After being rescued by shipwrecked people on a raft, Galabriel is attacked by a sea worm.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Galabriel and Halbrand saved by Elendil",
            "coordinates": [530, 314.7],
            "type": "event",
            "image": "event-sea-save.webp",
            "episodes": ["S01E02", "S01E03"],
            "decription": "Galabriel and Halbrand are rescued by a Numenor ship led by Elendil. They are escorted to Armenelos, the capital.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Armenelos",
            "coordinates": [168.6, 191.5],
            "type": "city",
            "image": "armenelos.webp",
            "episodes": ["S01E03", "S01E04", "S01E05"],
            "decription": "Armenelos, also known as Armenelos the Golden and City of the Kings, is the capital and eventual largest city of Númenor.",
            "readMoreUrl": "https://lotr.fandom.com/wiki/Armenelos",
            "isConfirmed": true
        },
        {
            "title": "Hall of Lore",
            "coordinates": [172.6, 216.8],
            "type": "point of interest",
            "image": "hall-of-lore.webp",
            "episodes": ["S01E03"],
            "decription": "TODO",
            "readMoreUrl": "",
            "isConfirmed": false
        }
    ]
}