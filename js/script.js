  "use strict";

function getPrice()
 {
  let e = document.getElementById("brands");
  let brandValue = e.options[e.selectedIndex].value;
  console.log(brandValue);  
  
  
  let year = document.getElementById("years");
  let yearValue = year.options[year.selectedIndex].value;
  console.log(yearValue); 
  
  
  /*let kms = document.getElementById("radios");
  let km = kms.elements["mileage"].value;
  console.log(km); 
  
  
  let checkboxes = document.getElementsByClassName('checkbox');
  let checkboxesChecked = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
       checkboxesChecked.push(checkboxes[i].value);   }  
    
  
  console.log(checkboxesChecked);  }*/
    
  let price = "";
  let koefYear = "";
  if (brandValue = "chevrolet" || "citroёn")  {price = 10000;} 
     else if (brandValue === "honda" || brandValue === "kia")  {price = 11000;} 
     else if (brandValue === "opel" || brandValue === "volkswagen")  {price = 12000;} 
     else if (brandValue === "mercedes-benz" || brandValue === "bmw")  {price = 15000;} 
     else {price = "17000";} ;
     console.log(price);
  if (yearValue === "2011" || yearValue === "2012") {koefYear = "0.5";}
      else if (yearValue === "2012" || yearValue === "2013") {koefYear = 0.6;}
      else if (yearValue === "2014" || yearValue === "2015") {koefYear = 0.7;}
      else if (yearValue === "2016" || yearValue === "2017") {koefYear = 0.8;}
      else if (yearValue === "2018" || yearValue === "2019") {koefYear = 0.9;}
      else {koefYear = 0.9;} ;
    console.log(koefYear);

    const calcResult = +price * +koefYear;
    alert(`Ваш результат: ${calcResult}`);
    
    }
  
   
    

    
    

       
     

      