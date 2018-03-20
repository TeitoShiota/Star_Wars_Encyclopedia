var rootURL = "https://swapi.co/api/";
var crawls = [];
console.log("                 Crawl script loaded")


document.addEventListener('DOMContentLoaded', fetchCrawls);

function fetchCrawls(){
    fetch(rootURL+'films/').then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        let count = 0;
        for(i=0;i<=data.results.length;i++){
            crawls.push(data.results[i].opening_crawl);
            console.log(crawls)
            count++;

            if(count < data.results.length){
                createCrawl();
            }

        }
    })
}

function createCrawl(){
    for(i=0;i<crawls.length;i++){
        $(document.getElementById("innerContent")).append('<p>'+crawls+'</p>');
    }
}