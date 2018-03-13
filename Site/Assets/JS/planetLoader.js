var rootURL = "https://swapi.co/api/";
console.log("                 planetLoader script loaded")
document.addEventListener('DOMContentLoaded', fetchPlanets);

function fetchPlanets(){
    console.log("                 fetching");
    let pageToLoad
    let v = 1;
    for(i=1;i<8;i++){
        fetch(rootURL+'planets/?page='+i).then(function(response){
            return response.json();
        }).then(function(planets){
            for(k=0; k < planets.results.length; k++){
                (function(y){
                $(document.getElementById("innerContent")).append("<div class='divObject' id='item"+v+"'></div>");
                $(document.getElementById("item"+v)).append("<h3 class='itemTitle'>"+""+planets.results[y].name+"</h3>");
                $(document.getElementById("item"+v)).append("<p class='itemPopulation'>"+"Population: "+planets.results[y].population+"</p>");
                $(document.getElementById("item"+v)).append("<p class='itemTerrain'>"+"Terrain: "+planets.results[y].terrain+"</p>");
                $(document.getElementById("item"+v)).append("<p class='itemDiameter'>"+"Diameter: "+planets.results[y].diameter+"km"+"</p>");
                $(document.getElementById("item"+v)).append("<p class='itemGravity'>"+"Gravity: "+planets.results[y].gravity+"</p>");
                $(document.getElementById("item"+v)).append("<p class='itemPopulation'>"+"Population: "+planets.results[y].population+"</p>");
                v++;
                if(v > 61){
                    itemSorter();
                }})(k);
            }
        })
    }
}

function itemSorter(){
    console.log("                 Sorting Items");
    let items = document.querySelectorAll(".itemTitle");        //Loads all the items title into an array
    let itemsList = [];                                         //Creates the an array to store all Items

    items.forEach(function(item){
        let itemsToBeSorted = item.innerText.replace(" ", "");  //Creates a variable to store the items and removes everything but the name
        itemsList.push(itemsToBeSorted);                        //Adds all the names from itemsToBeSorted to the array
        item.parentElement.dataset.itemName = itemsToBeSorted;  //Data sets the item name of the each item
    });

    itemsList.sort();                                           //Sorts all the objects in the item List array

    itemsList.forEach(function(itemName){
        let itemToMove = document.querySelector(`.divObject[data-item-name=${itemName}]`); //creates a variable then a the divObject with the date-item-name of the the first item in the items list
        itemToMove.parentElement.append(itemToMove);            //Appends the current item to its own parent (There by moving it to the bottom)
    });
}