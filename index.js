let button=document.getElementById("btn")
button.addEventListener("click",()=>{
    let city=document.getElementById("city").value
    let api_key="dd1ddf937b35df4297f328f469c57615"
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    let result=document.getElementById("result")
    fetch(api)
    .then(x=>x.json())
    .then(y=>{
        if(y.cod!="200"){
            alert("City Not Found")
        }
        else{
            result.innerHTML=`
            <p>${y.name},${y.sys.country}</p>
            <p>🌡️${y.main.temp}</p>
            <p>${y.wind.speed}</p>
            <p>${y.weather[0].description}</p>`
        }
    })
    .catch(err=>{
        console.log(err)
    })
})