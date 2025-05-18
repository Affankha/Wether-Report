// create reference of search button
// create reference of inpur button

let button = document.getElementById("search-but");
let input = document.getElementById("city-input");


// reference the another things
let Cityname=document.getElementById("C-Name");
let Time=document.getElementById("C-Time");
let Temp=document.getElementById("C-Temp");


async function getData(cityName){
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=4d0d3edb6c76480d96071912242308&q=${cityName}&aqi=yes` );

    return await promise.json()
}

// generate event listner on that button

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);

  Cityname.innerText=`${ result.location.name}, ${result.location.region}, ${result.location.country}, `
  Time.innerText=`The time is : ${result.location.localtime}`
  Temp.innerText=`The Temp is : ${result.current.temp_c}`
});








