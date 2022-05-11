const inputList = document.querySelectorAll("#open_info1, #open_info2, #open_info3"); // select all open buttons
const containerList = document.querySelectorAll(".container1, .container2, .container3"); // select all container classes
const outputList = document.querySelectorAll("#close_info1, #close_info2, #close_info3"); // select all close buttons

//set object depends on the data
const data = [
  {
  params: "%",
  initValue: 100,
  checkTime: 2000,
    endValue: 0,
  type : "decrease"
},
  {
  params: "KM",
  initValue: 5040000,
  checkTime: 20,
  endValue : 0,
  type : "decrease"
},
  {
  params: "m/s2",
  initValue: 9.81,
  checkTime: 4000,
  endValue : 0,
  type : "decrease"
},
  {
  params: "%",
  initValue: 100,
  checkTime: 2000,
  endValue : 0,
  type : "decrease"
},
  {
  params: "%",
  initValue: 100,
  checkTime: 2000,
  endValue: 0,
  type : "decrease"
},
  {
  params: "kph",
  initValue: 800,
  checkTime: 400,
  endValue: 8000,
  type : "increase"
},

]


Array.from(inputList).forEach(function(el) { //select each ids in the inputList 
    //if user click the open button, the containers will show up 
    open_info1.addEventListener ("click", () => {
    container1.classList.add("show");
    });
    open_info2.addEventListener ("click", () => {
    container2.classList.add("show");
    });
    open_info3.addEventListener ("click", () => {
    container3.classList.add("show");
    });
  });

  Array.from(outputList).forEach(function(el) { //select each ids in the outputList 
    //if user click the open button, the containers will remove on the screen
      close_info1.addEventListener ("click", ()=> {
      container1.classList.remove("show");
      });
      close_info2.addEventListener ("click", ()=> {
      container2.classList.remove("show");
      });
      close_info3.addEventListener ("click", ()=> {
      container3.classList.remove("show");
      });
  });


// set variable 
const intervalFn = (element,{params,initValue,checkTime,endValue,type}) => {
  let num = initValue;
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
  
  const 요소집합군 = [...decrease , increase]
  // select elements which decrease the number
  요소집합군.forEach((요소선수,선수번호) => {
  intervalFn(요소선수,data[선수번호]);
})
