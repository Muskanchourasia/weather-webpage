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
          
            //const {} = data;
            const html1 = `
                <div  style="display :flex">

    
                
                <div style="background-image :url(blue.jpg); background-size: cover; color:white; text-align:center; width:450px; height:350px; margin:75px; padding-top:100px;">
                    <p style="font-size:50px;">Coord lon: ${data.coord.lon}</p>
                    <p style="font-size:50px;">Coord lat: ${data.coord.lat}</p>
                    </div>
                <div style="background-image: url(c.jpg); background-size :cover; text-align:center; width:450px; height:350px; margin:75px; padding-top:100px;">
                    <p style="font-size:50px;">Base: ${data.base}</p>
                    </div>
    
                <div style="background-image: url(dark.jpg); background-size :cover;  color:white; text-align:center; width:450px; height:350px; margin:75px; padding-top:100px;">
                    <p style="font-size:50px;" >Visibilisty: ${data.visibility}</p>
                    </div>
                </div>
                <div  style="display :flex">
                <div style="background-image: url(wind.jpg); background-size: cover; color:white; text-align:center; width:450px; height:350px; margin:75px; padding-top:60px ;">
                    <p style="font-size:50px;">Wind speed: ${data.wind.speed}</p>
                    <p style="font-size:50px;">Deg: ${data.wind.deg}</p>
                    <p style="font-size:50px;" >Gust: ${data.wind.gust}</p>
                    </div>
                <div style="background-image: url(rain.jpg); background-size: cover; color:white; text-align:center; width:450px; height:350px; margin:75px;  padding-top:100px;">
                    <p style="font-size:50px;">Rain: ${data.rain ? data.rain['1h'] : ''}</p>
                    </div>
                <div style="background-image :url(cloud.jpg); background-size:cover; text-align:center; width:450px; height:350px; margin:75px; padding-top:100px ;">
                    <p style="font-size:50px;">Clouds: ${data.clouds.all}</p>
                    <p style="font-size:50px;">DT: ${data.dt}</p>
                    </div>

                    </div>
                <div  style="display :flex">
                <div style="background-image: url(map.jpg); background-size:cover; color:white; text-align:center; width:450px;  height:350px; margin:75px; padding-top:100px; ">
                    <p style="font-size:50px;" >Timezone: ${data.timezone}</p>
                    </div>
                <div style="background-image :url(sun.jpg); background-size:cover; text-align:center; width:450px; height:350px; margin:75px; padding-top:17px ">
                    <p style="font-size:30px;">SYS type: ${data.sys.type}</p>
                    <p style="font-size:30px;">SYS ID: ${data.sys.id}</p>
                    <p style="font-size:30px;">SYS Country: ${data.sys.country}</p>
                    <p style="font-size:30px;" >SYS Sunrise: ${data.sys.sunrise}</p>
                    <p style="font-size:30px;" >SYS Sunset: ${data.sys.sunset}</p>
                    </div>
                <div style="background-image: url(temp.jpeg);background-size:cover; text-align:center; width:450px; height:350px; margin:75px; padding-top:6px;">
                    <p style="font-size:30px;">Temp: ${data.main.temp}</p>
                    <p style="font-size:30px;">feels_like: ${data.main.feels_like}</p>
                    <p style="font-size:30px;">Temp_min: ${data.main.temp_min}</p>
                    <p style="font-size:30px;">Temp_max: ${data.main.temp_max}</p>
                    <p style="font-size:30px;" >Pressure: ${data.main.pressure}</p>
                    <p style="font-size:30px;">Humidity: ${data.main.humidity}</p>
                    </div>
                    
                    </div>

                    <br>
               
            `;
        
            const html2 = data.weather.map((item) =>{ return ` <div style="background-image: url(cd.jpeg);background-size:cover; text-align:center; width:450px; height:350px; margin:75px; padding-top:50">
            <p style="font-size:30px;">ID: ${item.id}</p>
            <p style="font-size:30px;">Main: ${item.main}</p>
            <p style="font-size:30px;">Description: ${item.description}</p>
            <p style="font-size:30px;">Icon: ${item.icon}</p>
            </div>`
        }).join('');
            document.querySelector("#app").insertAdjacentHTML("afterbegin",html1);
            document.querySelector("#app1").insertAdjacentHTML("afterbegin",html2);
        })
};

fetchData();
