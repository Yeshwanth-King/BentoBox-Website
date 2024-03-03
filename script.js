const baseURL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropDown = document.querySelectorAll(".drop select");
const getBtn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


for (let select of dropDown){
    for(code in countryList){
        let newOptions = document.createElement("option");
        if (select.name === "from" && code === "USD"){
            newOptions.selected = "selected";
        }
        else if (select.name === "to" && code === "INR"){
            newOptions.selected = "selected";
        }
        newOptions.innerText = code;
        newOptions.value = code;
        select.append(newOptions);

        
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target)
    })
}

const updateFlag = (ele) =>{
    let currCode = ele.value;
    let countryCode = countryList[currCode];
    let newsrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = ele.parentElement.querySelector("img");
    img.src = newsrc;
};

getBtn.addEventListener("click", async(evt) =>{
    evt.preventDefault();
    let input = document.querySelector("form input");
    let amtVal = input.value;
    if( amtVal === "" || amtVal < 1){
        amtVal = 1;
        input.value = 1;
    }
    console.log(amtVal);

    console.log(fromCurr.value.toLowerCase())
    console.log(toCurr.value.toLowerCase())

    let URL = `${baseURL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    console.log(rate);
    
    let finalAmt = amtVal * rate ;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt.value} ${toCurr}`;


})