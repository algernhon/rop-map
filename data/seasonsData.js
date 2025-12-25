// rop-map/data/seasonsData.js
const DATA_SEASONS = [
    {
        id: 1,
        name: "Rings of Power - Season 1",
        episodes: 8,
        showInSelect: true,
        characters: ["Arondir","Elendil","Elrond","Galadriel","Halbrand","Nori"],
        markersRelevant: marker => marker.episodes.some(e => e.season === 1)
    },
    {
        id: 2,
        name: "Rings of Power - Season 2",
        episodes: 8,
        showInSelect: true,
        characters: ["Galadriel","Arondir"],
        markersRelevant: marker => marker.episodes.some(e => e.season === 2)
    },
    {
        id: 3,
        name: "Rings of Power - Season 3",
        episodes: 8,
        showInSelect: false, // hidden for now
        characters: ["Elendil","Elrond","Halbrand","Nori"],
        markersRelevant: marker => marker.episodes.some(e => e.season === 3)
    },
    {
        id: 100,
        name: "The Lord of the Rings (Movies)",
        episodes: 1,
        showInSelect: true,
        characters: ["Frodo and Sam"],
        markersRelevant: marker => marker.episodes.some(e => e.season === 100 || e.season === 103)
    },
    {
        id: 104,
        name: "The Hobbit (Movies)",
        episodes: 1,
        showInSelect: true,
        characters: ["Bilbo and Thorin"],
        markersRelevant: marker => marker.episodes.some(e => e.season === 104 || e.season === 106)
    }
];