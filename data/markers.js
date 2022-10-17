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
            "title": "Hobbiton",
            "coordinates": [779.6, 625.6],
            "type": "village",
            "image": "hobbiton.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "Hobbiton is a Hobbit village in the central regions of the Shire, within the borders of the Westfarthing.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Hobbiton",
            "isConfirmed": true
        },
        {
            "title": "Passing of the Evles",
            "coordinates": [771, 631.8],
            "type": "event",
            "image": "passing-elves.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "After leaving Hobbiton, Frodo and Sam meet a group of Elves heading to Valinor.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Woody End",
            "coordinates": [772.8, 642.8],
            "type": "area",
            "image": "woody-end.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "Woody End is an upland wooded region of the Eastfarthing of the Shire, lying between the Green Hill Country on the west and the Marish on the east.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Woody_End",
            "isConfirmed": true
        },
        {
            "title": "Bree",
            "coordinates": [781.6, 676.3],
            "type": "village",
            "image": "bree.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "Bree is a village of Men and hobbits, located east of the Shire and south of Fornost in Eriador.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Bree",
            "isConfirmed": true
        },
        {
            "title": "Midgewater Marshes",
            "coordinates": [787.7, 690.8],
            "type": "area",
            "image": "midgewater.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "Midgewater Marshes, a fly-infested region of marshland in central Eriador, is a fen that lay between the Chetwood to the west and the Weather Hills to the east.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Midgewater_Marshes",
            "isConfirmed": true
        },
        {
            "title": "Weathertop watchtower",
            "coordinates": [786.3, 709.1],
            "type": "point of interest",
            "image": "weathertop.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "Weathertop, known in Sindarin as Amon Sûl, is the southernmost top of the Weather Hills. It stood a little away from the others, and its conical top was flattened.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Weathertop",
            "isConfirmed": true
        },
        {
            "title": "Chetwood",
            "coordinates": [786.7, 681.6],
            "type": "area",
            "image": "chetwood.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "Chetwood is the broad woodland that lay to the north and east of the Bree-hill, some forty miles east of the Shire.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Chetwood",
            "isConfirmed": true
        },
        {
            "title": "Flood of Bruinen",
            "coordinates": [785.7, 781.5],
            "type": "event",
            "image": "bruinen.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "Bruinen or Loudwater was a river in eastern Eriador. Arwen, bearing wounded Frodo on her horse, confronts the Nine Ringwraiths and summons the flood that consumes them.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Bruinen",
            "isConfirmed": true
        },
        {
            "title": "Rivendell",
            "coordinates": [790.6, 788.7],
            "type": "city",
            "image": "rivendell.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "Rivendell, or Imladris, is an Elven outpost established by Elrond in the Misty Mountains on the eastern edge of Eriador.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Rivendell",
            "isConfirmed": true
        },
        {
            "title": "Blizzard in the Misty Mountains",
            "coordinates": [749, 795.7],
            "type": "event",
            "image": "misty.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "A blizzard summoned by Saruman forces the Fellowship of the Ring to turn back.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Misty_Mountains",
            "isConfirmed": true
        },
        {
            "title": "Caras Galadhon",
            "coordinates": [700.6, 822.2],
            "type": "city",
            "image": "caras.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "Caras Galadhon is the city and fortress of the Galadhrim of Lothlórien, built by Celeborn and his wife Galadriel.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Caras_Galadhon",
            "isConfirmed": true
        },
        {
            "title": "Argonath",
            "coordinates": [612.3, 864.7],
            "type": "point of interest",
            "image": "argonath.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "The Argonath, also known as the Pillars of the Kings, or the Gate of Kings is a landmark on the northern edge of Gondor.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Argonath",
            "isConfirmed": true
        },
        {
            "title": "Falls of Rauros",
            "coordinates": [596.8, 868.8],
            "type": "point of interest",
            "image": "rauros.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "Rauros, the Falls of Rauros or the Rauros-falls, is the great falls of River Anduin beneath Nen Hithoel, where the river falls from Emyn Muil to the wetland of Nindalf.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Rauros",
            "isConfirmed": true
        },
        {
            "title": "Emyn Arnen",
            "coordinates": [603.5, 881],
            "type": "area",
            "image": "emyn.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "Emyn Arnen is a series of hills in Ithilien, located south of Osgiliath in Gondor.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Emyn_Arnen",
            "isConfirmed": true
        },
        {
            "title": "The Black Gate",
            "coordinates": [594.3, 927.5],
            "type": "point of interest",
            "image": "mordor-gate.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "The Black Gate, built by Sauron, is the main entrance into the land of Mordor.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Black_Gate",
            "isConfirmed": true
        },
        {
            "title": "Ithilien Fortress",
            "coordinates": [560.1, 913.7],
            "type": "area",
            "image": "ithilien.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "Ithilien is a region and fiefdom of Gondor bordering Mordor in western Middle-earth. The hobbits are found and taken to Henneth Annûn by the Rangers of Ithilien, under the command of Faramir.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Ithilien",
            "isConfirmed": true
        },
        {
            "title": "Osgiliath",
            "coordinates": [546.1, 911.9],
            "type": "city",
            "image": "osgiliath.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "Osgiliath is the old capital city of Gondor. The city straddles the Anduin River at a point approximately half way between the cities of Minas Anor to the south-west and Minas Ithil to the north-east, and north of the nearby Emyn Arnen.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Osgiliath",
            "isConfirmed": true
        },
        {
            "title": "Minas Morgul",
            "coordinates": [546.1, 925.8],
            "type": "city",
            "image": "morgul.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "Minas Morgul was the twin city of Minas Tirith before its fall to the forces of Sauron in the Third Age. ",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Minas_Morgul",
            "isConfirmed": true
        },
        {
            "title": "Tower of Cirith Ungol",
            "coordinates": [546, 937.5],
            "type": "point of interest",
            "image": "captured.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "Cirith Ungol was a pass through the Ephel Dúath that led into Mordor. After fighting the giant spider Shelob, Frodo got captured and taken to the tower of Cirith Ungol.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Cirith_Ungol",
            "isConfirmed": true
        },
        {
            "title": "Frodo and Sam escape from orcs",
            "coordinates": [579, 939.3],
            "type": "event",
            "image": "escape.webp",
            "episodes": [
                {"episode": 1, "season": 100}
            ],
            "decription": "After being enrolled in the ranks of the Sauron's army, they manage to escape and resume their journey to the Mount Doom.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
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
                {"episode": 7, "season": 1},
                {"episode": 8, "season": 1}
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
                {"episode": 4, "season": 1},
                {"episode": 8, "season": 1}
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
            "title": "Dûrnost",
            "coordinates": [917.5, 763.5],
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
            "coordinates": [31, 19.5],
            "type": "event",
            "image": "event-boat-galabriel.webp",
            "episodes": [
                {"episode": 1, "season": 1}
            ],
            "decription": "Galadriel decides not to join Valinor and wants to continue his quest to find Sauron. She jumps over the ship, finding herself alone in the middle of the Great Sea.<br /><br /><a href=\"https://i.redd.it/m2gcrv8uy1s21.jpg\" target=\"_blank\">Proof of Valinor location</a>",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "Galadriel is attacked by a sea worm",
            "coordinates": [38.5, 44.6],
            "type": "event",
            "image": "event-sea-worm.webp",
            "episodes": [
                {"episode": 2, "season": 1}
            ],
            "decription": "After being rescued by shipwrecked people on a raft, Galadriel is attacked by a sea worm.",
            "readMoreUrl": "",
            "isConfirmed": false
        },
        {
            "title": "Galadriel and Halbrand saved by Elendil",
            "coordinates": [46.1, 96.3],
            "type": "event",
            "image": "event-sea-save.webp",
            "episodes": [
                {"episode": 2, "season": 1},
                {"episode": 3, "season": 1}
            ],
            "decription": "Galadriel and Halbrand are rescued by a Numenor ship led by Elendil. They are escorted to Armenelos, the capital.",
            "readMoreUrl": "",
            "isConfirmed": false
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
                {"episode": 8, "season": 1}
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
            "decription": "<strong>This zone has not been revealed in the show yet but its name appears on the official map and it has been mentioned by Bronwyn.</strong><br /><br />If you want to know more about this zone, click on \"Read More\" (may contain spoil)",
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
        },
        {
            "title": "Eryn Galen",
            "coordinates": [705.1, 935.5],
            "type": "area",
            "image": "eryn-galen.webp",
            "episodes": [
                {"episode": 8, "season": 1}
            ],
            "decription": "Eryn Galen, or Mirkwood is a great forest in Rhovanion.<br /><br /><strong>Note:</strong> these coordinates are still controversial, they are still being discussed.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Mirkwood",
            "isConfirmed": false
        },
        {
            "title": "End of Season 1",
            "coordinates": [547.5, 935.6],
            "type": "event",
            "image": "season1end.webp",
            "episodes": [
                {"episode": 8, "season": 1}
            ],
            "decription": "Last frame of ROP Season 1. After revealing his identity to Galadriel, \"Hallbrand\" heads for Mordor.",
            "readMoreUrl": "",
            "isConfirmed": true
        },
        {
            "title": "The three rings are forged",
            "coordinates": [707.6, 753.1],
            "type": "event",
            "image": "rings.webp",
            "episodes": [
                {"episode": 8, "season": 1}
            ],
            "decription": "The Three Rings are magical artefacts, three of the Rings of Power. They are forged by Celebrimbor and his smiths with the desire of \"understanding, making, and healing\" and granted the power to preserve all things unstained.",
            "readMoreUrl": "https://tolkiengateway.net/wiki/Three_Rings",
            "isConfirmed": true
        }
    ]
}