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
            "episodes": [
                {"episode": 5, "season": 1}
            ],
            "decription": "A large area of swampland, part of one of the many Harfoots migration stage. This place will be renamed Dead Marshes at the beginning of the third age, right after the War of the Alliance.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Dead_Marshes",
            "isConfirmed": true
        },
        {
            "title": "Weedbrook",
            "coordinates": [650, 874.2],
            "type": "area",
            "image": "weedbrook.webp",
            "episodes": [
                {"episode": 5, "season": 1}
            ],
            "decription": "Vast expanse of yellow grass crossed by the Harfoots during their migration.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Trout Bend",
            "coordinates": [609.7, 955.2],
            "type": "area",
            "image": "trout-bend.webp",
            "episodes": [
                {"episode": 5, "season": 1}
            ],
            "decription": "Green and beautiful area characterized by a large waterfall.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "The Braids",
            "coordinates": [639.2, 1008.1],
            "type": "area",
            "image": "the-braids.webp",
            "episodes": [
                {"episode": 5, "season": 1}
            ],
            "decription": "Unknown location.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Unknown forest",
            "coordinates": [643.5, 1034],
            "type": "area",
            "image": "unknown-forest.webp",
            "episodes": [
                {"episode": 5, "season": 1}
            ],
            "decription": "Unknown forest with a lot of leafless trees.",
            "readMoreUrl": "",
            "isConfirmed": false
        },
        {
            "title": "The Grove",
            "coordinates": [646.2, 1057.9],
            "type": "area",
            "image": "the-grove.webp",
            "episodes": [
                {"episode": 7, "season": 1}
            ],
            "decription": "A beautiful grove full of fruits. This is one of the destinations of the Harfoots during their migration. Part of the fruit trees were damaged during the eruption of the Mount Doom.",
            "readMoreUrl": "",
            "isConfirmed": false
        },
        {
            "title": "Norfield Glen",
            "coordinates": [682.4, 927.5],
            "type": "point of interest",
            "image": "harfoots-start.webp",
            "episodes": [
                {"episode": 1, "season": 1},
                {"episode": 2, "season": 1},
                {"episode": 3, "season": 1}
            ],
            "decription": "Quiet area with hills and forests. This is the starting area of Harfoots at the beginning of the TV show. This place belongs to the region of Rhovanion.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Tirharad",
            "coordinates": [530.5, 949.7],
            "type": "village",
            "image": "tirharad.webp",
            "episodes": [
                {"episode": 1, "season": 1},
                {"episode": 2, "season": 1},
                {"episode": 3, "season": 1},
                {"episode": 6, "season": 1},
                {"episode": 7, "season": 1}
            ],
            "decription": "Tirharad is a village of Men location in west-central Mordor.",
            "readMoreUrl": "https://lotr.fandom.com/wiki/Tirharad",
            "isConfirmed": true
        },
        {
            "title": "Ostirith",
            "coordinates": [524.2, 941],
            "type": "point of interest",
            "image": "ostirith.webp",
            "episodes": [
                {"episode": 1, "season": 1},
                {"episode": 2, "season": 1},
                {"episode": 3, "season": 1},
                {"episode": 6, "season": 1}
            ],
            "decription": "Ostirith is a watchtower used by Silvan Elves to watch over the settlements of Men.",
            "readMoreUrl": "https://lotr.fandom.com/wiki/Ostirith",
            "isConfirmed": true
        },
        {
            "title": "Hordern",
            "coordinates": [538.4, 952.6],
            "type": "village",
            "image": "hordern.webp",
            "episodes": [
                {"episode": 1, "season": 1}
            ],
            "decription": "Hordern was a village of Men whose ancestors had once sided with Morgoth. Arondir found the village burned and its inhabitants missing.",
            "readMoreUrl": "https://lotr.fandom.com/wiki/Hordern",
            "isConfirmed": true
        },
        {
            "title": "Prison camp",
            "coordinates": [544.1, 953.5],
            "type": "point of interest",
            "image": "orccamp.webp",
            "episodes": [
                {"episode": 3, "season": 1},
                {"episode": 4, "season": 1}
            ],
            "decription": "Camp of Orcs where Arondir was prisonnier after his investigation at Hordern. ",
            "readMoreUrl": "",
            "isConfirmed": false
        },
        {
            "title": "Mithlond",
            "coordinates": [780.4, 570.2],
            "type": "city",
            "image": "mithlond.webp",
            "episodes": [
                {"episode": 1, "season": 1},
                {"episode": 2, "season": 1},
                {"episode": 3, "season": 1},
                {"episode": 4, "season": 1},
                {"episode": 5, "season": 1}
            ],
            "decription": "Mithlond, known also as Grey Havens, is the capital of the high elves, ruled by Gil-galad.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Grey_Havens",
            "isConfirmed": true
        },
        {
            "title": "Ost-in-Edhil",
            "coordinates": [707.6, 751],
            "type": "city",
            "image": "ost-in-edhil.webp",
            "episodes": [
                {"episode": 2, "season": 1},
                {"episode": 3, "season": 1},
                {"episode": 4, "season": 1}
            ],
            "decription": "Ost-in-Edhil is the capital city of Eregion, ruled by Celebrimbor.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Ost-in-Edhil",
            "isConfirmed": true
        },
        {
            "title": "Khazad-dûm",
            "coordinates": [729.7, 777.2],
            "type": "city",
            "image": "khazad-dum.webp",
            "episodes": [
                {"episode": 2, "season": 1},
                {"episode": 3, "season": 1},
                {"episode": 4, "season": 1},
                {"episode": 7, "season": 1},
            ],
            "decription": "Khazad-dûm, commonly known as Moria, is the underground kingdom of the Dwarves of Durin's Folk, and the most famed of all Dwarven realms.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Moria",
            "isConfirmed": true
        },
        {
            "title": "Forodwaith",
            "coordinates": [890.7, 725.6],
            "type": "point of interest",
            "image": "forodwaith.webp",
            "episodes": [
                {"episode": 1, "season": 1}
            ],
            "decription": "Forodwaith is the region in the far north of Middle-earth. This is the location where Galadriel leads a small force to look for evidence of Sauron's whereabouts.",
            "readMoreUrl": "https://lotr.fandom.com/wiki/Khazad-d%C3%BBm",
            "isConfirmed": true
        },
        {
            "title": "Abandoned Fortress",
            "coordinates": [907.5, 758.5],
            "type": "point of interest",
            "image": "abandoned-fortress.webp",
            "episodes": [
                {"episode": 1, "season": 1}
            ],
            "decription": "Built by Morgoth, this fortress has been abandoned and this now the home of a snow-troll.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Galadriel leaves the boat heading to Valinor",
            "coordinates": [154, 15],
            "type": "event",
            "image": "event-boat-galabriel.webp",
            "episodes": [
                {"episode": 1, "season": 1}
            ],
            "decription": "Galadriel decides not to join Valinor and wants to continue his quest to find Sauron. She jumps over the ship, finding herself alone in the middle of the Great Sea.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Galadriel is attacked by a sea worm",
            "coordinates": [127, 46.5],
            "type": "event",
            "image": "event-sea-worm.webp",
            "episodes": [
                {"episode": 1, "season": 1}
            ],
            "decription": "After being rescued by shipwrecked people on a raft, Galadriel is attacked by a sea worm.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Galadriel and Halbrand saved by Elendil",
            "coordinates": [83, 63],
            "type": "event",
            "image": "event-sea-save.webp",
            "episodes": [
                {"episode": 2, "season": 1},
                {"episode": 3, "season": 1}
            ],
            "decription": "Galadriel and Halbrand are rescued by a Numenor ship led by Elendil. They are escorted to Armenelos, the capital.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Armenelos",
            "coordinates": [168.6, 191.5],
            "type": "city",
            "image": "armenelos.webp",
            "episodes": [
                {"episode": 3, "season": 1},
                {"episode": 4, "season": 1},
                {"episode": 5, "season": 1},
            ],
            "decription": "Armenelos, also known as Armenelos the Golden and City of the Kings, is the capital and eventual largest city of Númenor.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Armenelos",
            "isConfirmed": true
        },
        {
            "title": "Hall of Lore",
            "coordinates": [172.6, 216.8],
            "type": "point of interest",
            "image": "hall-of-lore.webp",
            "episodes": [
                {"episode": 3, "season": 1}
            ],
            "decription": "Númenor's hall of lore.",
            "readMoreUrl": "",
            "isConfirmed": false
        },
        {
            "title": "Crater of fire",
            "coordinates": [683, 939.8],
            "type": "event",
            "image": "event-man-falling-from-sky.webp",
            "episodes": [
                {"episode": 1, "season": 1},
                {"episode": 2, "season": 1},
                {"episode": 5, "season": 1},
            ],
            "decription": "Location of the Stranger crash.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Orodruin (Mount Doom) erupts",
            "coordinates": [563.3, 956.5],
            "type": "event",
            "image": "volcano-erupts.webp",
            "episodes": [
                {"episode": 6, "season": 1},
                {"episode": 7, "season": 1}
            ],
            "decription": "Following the battle of Tirharad, Adar's plan turned out to be successful. Ostirith's dam broke and all the water spilled out through the Orc tunnels into the magma chamber of the volcano.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Mount_Doom",
            "isConfirmed": true
        },
        {
            "title": "Battle of Tirharad",
            "coordinates": [532, 947.7],
            "type": "event",
            "image": "battle-tirharad.webp",
            "episodes": [
                {"episode": 6, "season": 1}
            ],
            "decription": "Numenor's army, accompanied by Galadriel and Halbrand, comes to save Tirharad from the orcs to protect the lands of Men.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Pelargir",
            "coordinates": [496.2, 886.1],
            "type": "village",
            "image": "pelargir.webp",
            "episodes": [
                {"episode": 7, "season": 1}
            ],
            "decription": "<strong>WARNING SPOILER - This zone has not been revealed in the show yet but its name appears on the official map and has been mentioned by Bronwyn.</strong><br /><br />If you want to know more about this zone, click on \"Read More\"",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Pelargir",
            "isConfirmed": true
        },
        {
            "title": "Númenor's camp",
            "coordinates": [532.9, 910.8],
            "type": "village",
            "image": "numenor-camp.webp",
            "episodes": [
                {"episode": 7, "season": 1}
            ],
            "decription": "A camp set up by the Númenor army when they arrived in the middle-earth. It will later shelter the refugees from the Southlands.",
            "readMoreUrl": "",
            "isConfirmed": true
        }
    ]
}