/*loadDoc();
function loadDoc() {
   const xhttp = new XMLHttpRequest();
   xhttp.onload = function() {
     var main = document.getElementById("demo").innerHTML = "<b>"+this.responseText+"</b>";
}
   xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=fd6af376b493f090671dafd0efb93ba2");
   xhttp.send();


 }     */  

 function fetchData(){
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=fd6af376b493f090671dafd0efb93ba2")
        .then(response => {
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            //const {} = data;
            const html = `
                <div class="card" style="float:left;">
                    <p>: ${data.coord.lon}</p>
                    <p>: ${data.coord.lan}</p>
                    <p><button>Search</button></p>
                </div>
            `;
            console.log(html);
            document.querySelector("#app").insertAdjacentHTML("afterbegin",html);
        })
        .cache(error => {
            console.log(error);
        })
};

fetchData();
