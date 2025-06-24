
let targetlocation = "Nairobi"


const fetchResult = async(targetlocation) =>{

    let url = `http://api.weatherapi.com/v1/current.json?key=41274242ec2346fc9e190905252306&q=${targetlocation}&aqi=no`

    const tempratureField = document.querySelector(".temp");
    const locationField = document.querySelector(".time_location p:nth-child(1)");
    const dateandTimeField = document.querySelector(".time_location p:nth-child(2)");
    const conditionField = document.querySelector(".condition p"); 
    const searchField = document.querySelector(".search-area"); 
    const form = document.querySelector(".form form"); 

    form.addEventListener('submit', searchForLocation)


const res = await fetch(url);

const data = await res.json();
console.log (data);

let locationName = data.location.name
let  time = data.location.localtime

let temp = data.current.temp_c
let condition = data.current.condition.text
updateDetails(temp , locationName, time ,condition)






function updateDetails(temp , locationName, time ,condition){

    let [splitDate, splitTime] = time.split(" ");

    let currentDay = getDayName (new Date(splitDate).getDay())



     

    tempratureField.innerText = `${temp}°c`
    locationField.innerText = locationName;
    dateandTimeField.innerText = `${splitDate} ${currentDay}${splitTime}`;
    conditionField.innerText = condition;

}

function searchForLocation(e){
    e.preventDefault()
    target = searchField.value

    fetchResult(target);


}

function getDayName(number){
        switch (number) {
            case 0:
                return `Sunday`

            case 1:
                return `Monday`

             
            case 2:
                return `Tuesday`


            case 3:
                return `Wednesday`

            case 4:
                return `Thursday`

            case 5:
                return `Friday`

            case 6:
                return `Saturday`
   
    

                
                
        }
    }


  
};
fetchResult(targetlocation);