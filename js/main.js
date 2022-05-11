// Without selecting method, id can be used because id is an unique value
//open event - when users click each categories
open_info1.addEventListener ("click", () => {
    container1.classList.add("show");
    });
    open_info2.addEventListener ("click", () => {
    container2.classList.add("show");
    });
    open_info3.addEventListener ("click", () => {
    container3.classList.add("show");
    });



// close event - when users click the back button, it will turn on the main page
    close_info1.addEventListener ("click", ()=> {
    container1.classList.remove("show");
    });
    close_info2.addEventListener ("click", ()=> {
    container2.classList.remove("show");
    });
    close_info3.addEventListener ("click", ()=> {
    container3.classList.remove("show");
    });
    
//set objects depends on the data 
// Each object describes the variable information
const data = [
  { //fuel
  params: "%",
  initValue: 100,
  checkTime: 2000,
  endValue: 0,
  type : "decrease"
},
  { //distance traveled
  params: "KM",
  initValue: 5040000,
  checkTime: 20,
  endValue : 0,
  type : "decrease"
},
  { //gravity
  params: "m/s2",
  initValue: 9.81,
  checkTime: 4000,
  endValue : 0,
  type : "decrease"
},
  { // food
  params: "%",
  initValue: 100,
  checkTime: 2000,
  endValue : 0,
  type : "decrease"
},
  { //water
  params: "%",
  initValue: 100,
  checkTime: 2000,
  endValue: 0,
  type : "decrease"
},
  { //speed
  params: "kph",
  initValue: 800,
  checkTime: 400,
  endValue: 8000,
  type : "increase"
},

]


  


// set variable function - to keep changing information values 
const intervalFn = (element,{params,initValue,checkTime,endValue,type}) => {
  let num = initValue; // when time goes, numbers will be changed
  const timer = setInterval(() => {
    if (type === "increase") {
      ++num;
    } else {
      --num;
    }
    element.innerText= num + params;
    if (num=== endValue) {
        clearInterval (timer);
      }
    },checkTime)
}


  // the value of information will be changed 

  const decrease = document.querySelectorAll(".decrease"); 
  const increase = document.getElementById("speed");
  
  const elList = [...decrease , increase] // select array and id 
//each elements will be affected by the function that I set 
  elList.forEach((el,index) => {
  intervalFn(el,data[index]);
})
