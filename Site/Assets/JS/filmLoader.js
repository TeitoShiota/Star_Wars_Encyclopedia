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
}