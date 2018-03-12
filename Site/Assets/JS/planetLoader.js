var rootURL = "https://swapi.co/api/";
console.log("planetLoader script loaded")
document.addEventListener('DOMContentLoaded', fetchPlanets);
/*
function fetchPlanets(){
    console.log("fetching");
    var load = true;
    while(load){
        var pageToLoad = 7;
        fetch(rootURL+'planets/?page='+pageToLoad).then(function(response){
            return response.json();
            console.log('Loading page: '+pageToLoad);
        }).then(function(planets){
            console.log(planets);
            console.log(response.next);
            if(response.next != null){
                console.log('Loading next page');
                pageToLoad++;
            }else{
                load = false;
            }
        })
    }
}*/