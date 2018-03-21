var rootURL = "https://swapi.co/api/";
console.log("                 planetLoader script loaded")
document.addEventListener('DOMContentLoaded', fetchFilms);

function fetchFilms(){
    console.log("                 fetching");
    let pageToLoad
    let v = 1;
    let films = [];
    let stored = sessionStorage['cache'];
    if(stored){ 
        films = JSON.parse(stored);
        createElements(films);
    }else{
        fetch(rootURL+'films/').then(function(response){
            return response.json();
        }).then(function(data){
            sessionStorage['cache'] = JSON.stringify(data);
            createElements(data);
        })
    }

function createElements(data){
    console.log('                   Creating elements')
    let itemSelector = 0;
    for(i=0; i < data.results.length; i++){
        //console.log(films.results.length);
        $(document.getElementById("innerContent")).append("<div class='divObject' id='item"+i+"'></div>");
        $(document.getElementById("item"+i)).append("<h3 class='itemTitle'>"+""+data.results[itemSelector].title+"</h3>");
        $(document.getElementById("item"+i)).append("<p class='itemDirector'>"+"Directed by: "+data.results[itemSelector].director+"</p>");
        $(document.getElementById("item"+i)).append("<p class='itemProducers'>"+"Producers: "+data.results[itemSelector].producer+"</p>");
        $(document.getElementById("item"+i)).append("<p class='itemRealeaseDate'>"+"Realease date: "+data.results[itemSelector].release_date+"</p>");
        $(document.getElementById("item"+i)).append("<p class='itemOpeningCrawlHeader'>"+"Opening crawl"+"</p>");
        $(document.getElementById("item"+i)).append("<p class='itemOpeningCrawl'>"+data.results[itemSelector].opening_crawl+"</p>");
        $(document.getElementById("item"+i)).append("<p class='itemEpisodeID' style='display:none;'>"+data.results[itemSelector].episode_id+"</p>");
        itemSelector++;
    }
}
    



    /*
    fetch(rootURL+'films/').then(function(response){
        return response.json();
    }).then(function(films){
        let itemSelector = 0;
        //console.log(films);
        for(i=0; i < films.results.length; i++){
            //console.log(films.results.length);
            $(document.getElementById("innerContent")).append("<div class='divObject' id='item"+v+"'></div>");
            $(document.getElementById("item"+v)).append("<h3 class='itemTitle'>"+""+films.results[itemSelector].title+"</h3>");
            $(document.getElementById("item"+v)).append("<p class='itemDirector'>"+"Directed by: "+films.results[itemSelector].director+"</p>");
            $(document.getElementById("item"+v)).append("<p class='itemProducers'>"+"Producers: "+films.results[itemSelector].producer+"</p>");
            $(document.getElementById("item"+v)).append("<p class='itemRealeaseDate'>"+"Realease date: "+films.results[itemSelector].release_date+"</p>");
            $(document.getElementById("item"+v)).append("<p class='itemOpeningCrawlHeader'>"+"Opening crawl"+"</p>");
            $(document.getElementById("item"+v)).append("<p class='itemOpeningCrawl'>"+films.results[itemSelector].opening_crawl+"</p>");
            $(document.getElementById("item"+v)).append("<p class='itemEpisodeID' style='display:none;'>"+films.results[itemSelector].episode_id+"</p>");
            v++;
            itemSelector++;
        }
    })*/

    /*fetch(rootURL+'films/').then(function(response){
        console.log(response);
        return response.json();
        
    }).then(function(flims){
        for(k=0; k < films.results.length; k++){
            (function(y){
            $(document.getElementById("innerContent")).append("<div class='divObject' id='item"+v+"'></div>");
            $(document.getElementById("item"+v)).append("<h3 class='itemTitle'>"+""+films.results[y].title+"</h3>");
            $(document.getElementById("item"+v)).append("<p class='itemDirector'>"+"Directed by: "+films.results[y].director+"</p>");
            $(document.getElementById("item"+v)).append("<p class='itemProducers'>"+"Producers: "+films.results[y].producer+"</p>");
            $(document.getElementById("item"+v)).append("<p class='itemRealeaseDate'>"+"Realease date: "+films.results[y].release_date+"</p>");
            $(document.getElementById("item"+v)).append("<p class='itemOpeningCrawlHeader'>"+"Opening crawl"+"</p>");
            $(document.getElementById("item"+v)).append("<p class='itemOpeningCrawl'>"+films.results[y].opening_crawl+"</p>");
            v++;
            if(v > 7){
                itemSorter();
            }})(k);
        }
    })   */
}
/*
function itemSorter(){
    console.log("                 Sorting Items");
    let items = document.querySelectorAll(".itemEpisodeID");        //Loads all the items title into an array
    let itemsList = [];                                         //Creates the an array to store all Items

    items.forEach(function(item){
        let itemsToBeSorted = item.innerText;  //Creates a variable to store the items and removes everything but the name
        itemsList.push(itemsToBeSorted);                        //Adds all the names from itemsToBeSorted to the array
        item.parentElement.dataset.itemName = itemsToBeSorted;  //Data sets the item name of the each item
    });
    console.log(itemsList);
    itemsList.sort();                                           //Sorts all the objects in the item List array
    console.log(itemsList);
    itemsList.forEach (function(id){
        let itemToMove = document.querySelector(`.divObject[data-item-name=${id}]`); //creates a variable then a the divObject with the date-item-name of the the first item in the items list
        console.log(itemToMove);
        $(itemToMove.parentElement).append(itemToMove);           //Appends the current item to its own parent (There by moving it to the bottom)
    });
}*/