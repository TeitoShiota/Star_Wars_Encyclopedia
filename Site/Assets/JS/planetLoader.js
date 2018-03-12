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
                $(document.getElementById("item"+v)).append("<h2 id='itemTitle'>"+""+planets.results[y].name+"</h2>");
                $(document.getElementById("item"+v)).append("<h2 id='itemDiameter'>"+""+planets.results[y].diameter+"</h2>");
                $(document.getElementById("item"+v)).append("<h2 id='itemPopulation'>"+""+planets.results[y].population+"</h2>");
                console.log(planets.results[y].name);
                v++;
            })(k);
            }
        })
    }
}