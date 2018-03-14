var rootURL = "https://swapi.co/api/";
console.log("                 peopleLoader script loaded")
document.addEventListener('DOMContentLoaded', fetchPlanets);

function fetchPlanets(){
    console.log("                 fetching");
    let pageToLoad
    let v = 1;
    for(i=1;i<10;i++){
        fetch(rootURL+'people/?page='+i).then(function(response){
            return response.json();
        }).then(function(people){
            for(k=0; k < people.results.length; k++){
                (function(y){
                $(document.getElementById("innerContent")).append("<div class='divObject' id='item"+v+"'></div>");
                $(document.getElementById("item"+v)).append("<h3 class='itemTitle'>"+""+people.results[y].name+"</h3>");
                $(document.getElementById("item"+v)).append("<p class='itemBirthYear'>"+"Birth year: "+people.results[y].birth_year+"</p>");
                $(document.getElementById("item"+v)).append("<p class='itemHeight'>"+"Height: "+people.results[y].height+"</p>");
                $(document.getElementById("item"+v)).append("<p class='itemWeight'>"+"Weight: "+people.results[y].mass+"</p>");
                $(document.getElementById("item"+v)).append("<p class='itemHairColor'>"+"Hair color: "+people.results[y].hair_color+"</p>");
                $(document.getElementById("item"+v)).append("<p class='itemEyeColor'>"+"Eye color: "+people.results[y].eye_color+"</p>");
                $(document.getElementById("item"+v)).append("<p class='itemGender'>"+"Gender: "+people.results[y].gender+"</p>");
                v++;
                if(v > 87){
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