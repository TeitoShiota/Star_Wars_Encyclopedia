// JavaScript Document

var a;
var v=0;
console.log("planet Creator Script Loaded");

/*function loadXMLDoc(){
    var req = new XMLHttpRequest();
    var URLhost = 'https://swapi.co/api/planets/'
    var responce;
    req.open('GET', URLhost, true);
    req.addEventListener('load', function(){
        if(req.status >= 200 && req.status < 400){
            responce = JSON.parse(req.responseText);
            console.log(responce);
        } else{
            console.log('Error in netword request: ' + req.statusText);
        }});
    req.send(null);
    event.preventDefault();
    console.log(responce.results[0].name);
}*/

/*function loadXMLDoc(){
    for(var j = 1; j <= 61; j++){
        (function(i){
            var f = i;
            var req = new XMLHttpRequest();
            var URLhost = 'htttps://swapi.co/api/'+toLoad+f+'/';
            req.open('GET', URLhost, true);
            var responce = JSON.parse(req.responseText);
            for(var k = 0; k < responce.results.length; k++){
                (function(y){
                    var planetIn = document.createElement('li');
                    planetIn.textContent = responce.results[y].name;
                })(k);
            }
        })
    }
}*/

/*function loadPlanets(){
    var docBod = document.getElementById('main');
    for(var j = 1; j < 8; j++){
        (function(i){
            var f = i;
            var req = new XMLHttpRequest();
            var URLhost = 'https://swapi.co/api/planets/?page=' + f;
            req.open('GET', URLhost, true);
            req.addEventListener('load',function(){
                if(req.status >= 200 && req.status < 400){
                    var responce = JSON.parse(req.responceText);
                    console.log(responce);
                    var planetHead = document.createElement('h5');
                    docBod.appendChild(planetHead);
                    planetHead.textContent = 'Planets Page - ' + f;
                    var planetList = document.createElement('ol');
                    planetHead.appendChild(planetList);

                    for(var k = 0; k < responce.results.lenth; k++){
                        (function(y){
                            var planetIn = document.createElement('li');
                            planetIn.textContent = responce.results[y].name;
                            planetList.appendChild(planetIn);
                        })(k);
                    }
                }else{
                    console.log('Error in the network request: ' + req.statusText);
                }});
                req.send(null);
                event.preventDefault();
        })(j);
    }
}*/


document.addEventListener('DOMContentLoaded', loadPlanets);

function loadPlanets() {
  var main = document.getElementById('main');
  for (var j = 1; j < 8; j++) {
    (function(i) { //need to create closure for j
      var f = i;
      var req = new XMLHttpRequest();
      var URLhost = 'https://swapi.co/api/planets/?page=' + f;
      req.open('GET', URLhost, true);
      req.addEventListener('load', function() {
        if (req.status >= 200 && req.status < 400) {
          var response = JSON.parse(req.responseText);
          console.log(response);

          for (var k = 0; k < response.results.length; k++) {
            (function(y) {
                
                $(document.getElementsByClassName("item3")).append("<div class='divObject' id='object"+v+"'></div>");
                $(document.getElementById("object"+v)).append("<h2 id='objTitle'>"+""+response.results[y].name+"</h2>");
                $(document.getElementById("object"+v)).append("<p id='objDiameter'>"+"Diameter: "+response.results[y].diameter+"</p>");
                $(document.getElementById("object"+v)).append("<p id='objClimate'>"+"Climate: "+response.results[y].climate+"</p>");
                $(document.getElementById("object"+v)).append("<p id='objSurfaceWater'>"+"Surface water: "+response.results[y].surface_water+"</p>");
                $(document.getElementById("object"+v)).append("<p id='objTerrain'>"+"Terrain: "+response.results[y].terrain+"</p>");
                $(document.getElementById("object"+v)).append("<p id='objGravity'>"+"Gravity: "+response.results[y].gravity+"</p>");
                $(document.getElementById("object"+v)).append("<p id='objPopulation'>"+"Population: "+response.results[y].population+"</p>");
                
                v++;
                response.results[y].name;
            })(k);
          }

        } else {
          console.log('Error in network request: ' + req.statusText);
        }
      });
      req.send(null);
      event.preventDefault();

      setTimeout(() => {
          
      }, 2000);

    })(j);
  }
}