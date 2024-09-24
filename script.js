const tally = {
    heads: 0,
    tails: 0
};

const coinImages = ["https://m.media-amazon.com/images/I/51xs7F+tP5L._AC_UF894,1000_QL80_.jpg", 
    "https://m.media-amazon.com/images/I/51bcZy+HZpL._AC_UF894,1000_QL80_.jpg"
];


const generate = document.querySelector(".generate");
const headCount = document.querySelector(".headCount");
const tailCount = document.querySelector(".tailCount");
const headList = document.querySelector(".headList");
const tailList = document.querySelector(".tailList");

function getHeadsOrTails() {
    return Math.floor(Math.random() * 2) < 0.5 ?  "heads" : "tails";
    
}

function updateDisplayOfTally() {
    headCount.textContent = tally.heads;
    tailCount.textContent = tally.tails;

}

function listUpdater(result) {
    const itemList = document.createElement("li");
    itemList.textContent = result;
  
    if (result === "heads") {
        headList.appendChild(itemList);
    
    } else {
        
        tailList.appendChild(itemList);
    }
  }
  // tried to add images didnt work very well
  function displayResult(result, listElement) {
    const img = document.createElement('img');
    const imgTwo = document.createElemet('img');
    img.src = coinImages[0]; 
    imgTwo.src = coinImages[1];
    listElement.appendChild(img); 
  }
  
generate.addEventListener('click', function () {
    const result = getHeadsOrTails();
    tally[result]++;
    updateDisplayOfTally();
    listUpdater(result);

});


