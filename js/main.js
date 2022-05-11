let inputList = document.querySelectorAll("#open_info1, #open_info2, #open_info3"); // select all open buttons
let containerList = document.querySelectorAll(".container1, .container2, .container3"); // select all container classes
let outputList = document.querySelectorAll("#close_info1, #close_info2, #close_info3"); // select all close buttons


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


  // the value of information will be changed 

  let decrease = document.querySelectorAll(".decrease"); 
  // select elements which decrease the number
  let num=100; // default 

  let timer1 = setInterval (function() {
      --num;
      decrease[0].innerHTML=num + "%";
      if (num=== 0) {
          clearInterval (timer1);
      }
  },2000)

  let num2= 5040000; // distance traveled 
  let timer2 = setInterval (function() {
    --num2;
    decrease[1].innerHTML=num2 + "KM";
    if (num2=== 0) {
        clearInterval (timer2);
    }
},20)  
  
let num3= 9.81; //gravity 
  let timer3 = setInterval (function() {
    --num3;
    decrease[2].innerHTML=num3 + "m/s2";
    if (num3=== 0) {
        clearInterval (timer3);
    }
},4000)  

//food
let timer4 = setInterval (function() {
    --num;
    decrease[3].innerHTML=num + "%";
    if (num=== 0) {
        clearInterval (timer4);
    }
},2000)

//water
let timer5 = setInterval (function() { 
    --num;
    decrease[4].innerHTML=num + "%";
    if (num===0) {
        clearInterval (timer5);
    }
},2000)


//speed will be increased 
let increase = document.getElementById("speed");
let num4=800;

let timer6 = setInterval(function (){
    ++num4;
    increase.innerHTML=num4 + "kph";
    if (num4===8000) {
        clearInterval (timer6);
    }
},400)
  
