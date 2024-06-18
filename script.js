const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const nameText = document.querySelector("#nameText");

button1.onclick = generateVintageName;
button2.onclick = generateModernName;

function generateVintageName (){
   nameText.innerHTML = "Vintage";
}

function generateModernName (){
   nameText.innerHTML = "Modern";
   myFunction;
}

const vintage = [
    "v1", "v2", "v3"
];

const modern = [
    "m1", "m2", "m3"
];
