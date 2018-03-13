var rootURL = "https://swapi.co/api/";
console.log("planetLoader script loaded")
document.addEventListener('DOMContentLoaded', fetchPlanets);

function fetchPlanets(){
    console.log("fetching");
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
                console.log(planets.results[y].name);
                v++;
            })(k);
            }
        })
    }
}