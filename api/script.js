function get(){
    city=document.getElementById("input").value
    fetachdetails(city)
    document.getElementById("input").value=""
}
function fetachdetails(city){
    url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ca018df54353f065aaed7d802825b8be`
    let details=fetch(url)
    
    details
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        console.log(data.sys.sunrise)
        sunrise=new Date((data.sys.sunrise)*1000)
        sunset=new Date((data.sys.sunset)*1000)
        console.log(sunrise)
        date=sunrise.toLocaleDateString();
        const iconCode = data.weather[0].icon; 
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        
        t1=sunrise.toLocaleTimeString();
        t2=sunset.toLocaleTimeString();
        document.getElementById("result").innerHTML=`
        <img src="${iconUrl}" id="weather-icon" style="max-width:90%"  alt="weather-icon">
        <h3 class="fs-1">${data.name} &nbsp;<i> ${data.sys.country}</i> </h3>
        <p>(lon.:${data.coord.lat},lat.:${data.coord.lon})</p>
        <p>Date:${date}</p>
        <P class="fs-3"><b><i class="bi bi-sunrise fs-3"></i></b>: ${t1} <br> <b><i class="bi bi-sunset fs-3"></i></b>:&nbsp;${t2}</p>
        <p><b> ${data.weather[0].main}</b>:&nbsp; ${data.weather[0].description}</P>
        <h3 class="text-center mt-2">Temperture Details</h3>
        <div class="row ">
        <div class="col-4 text-center p-2">
         <p class="text-center">temp:${data.main.temp}</p>
         <p class="text-center">min-temp:${data.main.temp_min}</p>
         <p class="text-center">max-temp:${data.main.temp_max}</p>
        </div>
        <div class="col-4 text-center p-2">
         <p class="text-center">humidity:${data.main.humidity}</p>
         <p class="text-center">Pressure :${data.main.pressure}</p>
         <p class="text-center">sea-level:${data.main.sea_level}</p>
        </div>
        <div class="col-4 text-center p-2">
         <p class="text-center">humidity:${data.main.feels_like}</p>
         <p class="text-center">Pressure :${data.main.grnd_level}</p>
         <p class="text-center">sea-level:${data.main.sea_level}</p>
        </div>
        </div>
        <h3 class="text-center mt-2">Wind Details</h3>
        <div class="row container">
        <div class="col-4 text-center p-2"><p> deg:${data.wind.deg} </p></div>
        <div class="col-4 text-center p-2"><p> gust:${data.wind.gust} </p> </div>
        <div class="col-4 text-center p-2"> <p> speed:${data.wind.speed} </p> </div>
        </div>

        `
    })
    
}