const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const nameText = document.querySelector("#nameText");
const ad = document.getElementById("ad");

button1.onclick = generateVintageName;
button2.onclick = generateModernName;
ad.onclick = adClick;

setInterval(changeAd, 3000);
let i = 0;

function changeAd() {
  if (i < adURLs.length - 1) {
    i++;
    ad.style.backgroundImage = adURLs[i];
  } else {
    i = 0;
    ad.style.backgroundImage = adURLs[i];
  }
}

function adClick() {
  open(links[i]);
}

const links = [
  "https://drive.google.com/drive/folders/17lKFhHvWxtPiumiQWNbbuJ8de4B6otUl",
  "https://xbong.bigcartel.com",
  "https://xbong.bigcartel.com",
  "https://www.youtube.com/@xbong69",
  "https://www.instagram.com/p/C8Dfjb8NRuo/",
  "https://xbong.bigcartel.com",
];

const adURLs = [
  "url(https://cdn.glitch.global/74babfc0-02b8-4fb5-8e7d-7d2d140b242c/wallpaper%20ad.jpeg?v=1719778831878)",
  "url(https://cdn.glitch.global/74babfc0-02b8-4fb5-8e7d-7d2d140b242c/hot_girls_banner.jpeg?v=1718989092831)",
  "url(https://cdn.glitch.global/74babfc0-02b8-4fb5-8e7d-7d2d140b242c/wii%20sports%20ad.jpeg?v=1719777029015)",
  "url(https://cdn.glitch.global/74babfc0-02b8-4fb5-8e7d-7d2d140b242c/placeholder2.jpeg?v=1718989107405)",
  "url(https://cdn.glitch.global/74babfc0-02b8-4fb5-8e7d-7d2d140b242c/placeholder3.jpeg?v=1718989108656)",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateVintageName() {
  nameText.innerHTML = vintage[getRandomInt(vintage.length)];
}

function generateModernName() {
  nameText.innerHTML = modern[getRandomInt(modern.length)];
}

const vintage = [
  "Xx_sealteamkeef_xX",
  "Xx_imfiringmalaser_xX",
  "xXx_SwaggySmoker420_xXx",
  "Xx_DankedOut69_xX",
  "Shad0wSnipe420",
  "ePIC_420DankSmoker",
  "69MonsterSwag_xXx",
  "1337SkunkBlaze",
  "xXx_ePIC_420MaryJane",
  "DankStoner_69",
  "SwaggedOut_1337",
  "420BigBoss_xXx",
  "ePiC_DopeSniper",
  "xXx_69WeedMonster",
  "Dank1337Swaggy",
  "Xx_hornystoner420_xX",
];

const modern = [
  "Za Za Binks",
  "Jar Jar Doinks",
  "Jar Of Danks",
  "Jah Jah Danks",
  "Bud Lightyear",
  "BackWoody",
  "ZaZurg",
  "Grabba The Hutt",
  "Grabba The Nugg",
  "Blaze I",
  "XBONG-Wing",
  "High Fighter",
  "Marijuanium Falcon",
  "Spliff Destroyer",
  "Ventilator-Class Spliff Destroyer",
  "Revenge of the Spliff",
  "The Scarlett Spliff",
  "Iron Xan",
  "Pack Panther",
  "Loud Voldesnort",
  "Billsmokes Baggins",
  "Ron Weedsley",
  "Bongald Weedsley",
  "Fried Weedsley",
  "Purpy Weedsley",
  "Hairynug Potter",
  "Shakeo Malfoy",
  "Doobiedore",
  "Hoggsweed",
  "The Sorcerers Stoned",
  "And the Half-Baked Prince",
  "Hashgrid",
  "Dabrig",
  "Hashrig",
  "Cruikdanks",
  "Luna Lovesthatgoodgood",
  "Neville Bongtgrottle",
  "Neville Longbonghit",
  "Hermione Ganja",
  "Prisoner of Azkabong",
  "Prisoner of Zazakaban",
  "Albus Dumbledabs",
  "Albus Doobiedore",
  "Dia-ganj Alley",
  "Cedric Dabbedie",
  "Cedric Dooberie",
  "Vapor of Secrets",
  "Vaper of Sickspliffs",
  "Goblet of Fire",
  "Dabfoot",
  "Bongs",
  "And the Half-Nug Spliff",
  "Sirius Wax",
  "Professor McBonggagle",
  "Avada Cababsrig",
  "Severus Vape",
  "Indiana Jones and the Coil of Doom",
  "Temple of Doobs",
  "And the Kingdom of the Crystal Bong",
  "The Dial of Dankweed",
  "The Dial of Destiweed",
  "Jar Jar Spliffs",
  "Lando Cannabissian",
  "Darth Hitthisshit",
  "Ahsmoka Bongo",
  "Count Doobie",
  "Return of the Red Eyes",
  "Return of the Jedhigh",
  "Star Wars Episode 420: A New Dope",
  "Episode 5: The Empire Sparks Up",
  "The Edibles Strike Back",
  "The Empire Smokes Hash",
  "Admiral Dabbar",
  "Admiral Packbar",
  "Admiral Ashbar",
  "Grand Moff Tokin",
  "Count Dabula",
  "Dabsferatu",
  "Highlo Ren",
  "Salacious Weed Crumbs",
  "Bobo Fett",
  "Ganja Fett",
  "Danko Fett",
  "Luke Highwalker",
  "Luke Skunksmoker",
  "Dankakin Smokebonger",
  "Emperherb Palaptine",
  "Emperherb Nicotine",
  "Princess Leia Organic",
  "Bong Solo",
  "Laced Windu",
  "Kushyyyk",
  "Danktooine",
  "Darth Vapor",
  "Darth Vaper",
  "Dabman And Bongin",
  "The Toker",
  "Two-Faded",
  "The Scaresmoke",
  "The Scarecronic",
  "The Middler",
  "Poison Ivy",
  "Mr. Treeze",
  "Master Keef",
  "Tony Skunk",
  "Ganko Fett",
  "Don Héctor Salaganja",
  "Boofstavo Fring",
  "Jesse Pinkstrain",
  "Walter Weed",
  "Mike Herbmantraut",
  "Phineas and Herb",
  "Spongebong Squarepants",
  "Packrick Star",
  "The Kushy Krab",
  "The Keefy Krab",
  "Mr. Dabs",
  "Mrs. Puff",
  "Squidherb",
  "Dankton",
  "David Hashelhoff",
  "The Crumb Bucket",
  "Bikeefy Bottom",
  "The Hash Slinging Slasher",
  "Danny Xantom",
  "Timmy Burner",
  "Cosmo and Zaza",
  "Jimmy Newbong",
  "Kick Budowski",
  "iKushly",
  "Miranda Kushgrows",
  "Invader Zyn",
  "Bongs Bunny",
  "Bugged Bunny",
  "Tazstrainian Devil",
  "Dabby Duck",
  "Weedy Bird",
  "Tweedy Burn",
  "Elmer Budd",
  "Marzyn the Martian",
  "AntXan",
  "Dabpool and Wolverzyn",
  "Toki",
  "Captain Amerizaza",
  "Ben 10agram",
  "Xanomorph",
  "Alien VS Prerolltor",
  "Magweedo",
  "Fryclops",
  "Dr. Doob",
  "Doink Dynasty",
  "Larry Dankvid",
  "Jerry Friedfeld",
  "Morgan Friedman",
  "Morgan Weedman",
  "Harry Pothead",
  "Leblunt James",
  "Spider-Xan",
  "Old Pen Kenobi",
];
