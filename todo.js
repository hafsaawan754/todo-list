setInterval(() =>{
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm'); 

let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");


let hr_dot= document.querySelector(".hr_dot");
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h >= 12 ? "PM" : "AM" ; 

if(h > 12){
    h = h - 12;
}

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;
 
hours.innerHTML = h ;
minutes.innerHTML = m;
seconds.innerHTML = s;
ampm.innerHTML = am;

hh.style.strokeDashoffset = 440 - (440 * h) / 12;
mm.style.strokeDashoffset = 440 - (440 * m) / 60;
ss.style.strokeDashoffset = 440 - (440 * s) / 60;


hr_dot.style.transform = 'rotate(${ h * 30}deg)';
min_dot.style.transform = 'rotate(${ m * 6}deg)';
sec_dot.style.transform = 'rotate(${ s * 6}deg)';


})
  

// date
let dateToday = document.getElementById("date-today");
 let today = new Date();
 let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
 let month = `${(today.getMonth()+1) < 10 ? "0" : ""}${today.getMonth()+1}`;
 let year = today.getFullYear();
 dateToday.textContent = `${day}-${month}-${year}`;




// to do list 
const inputVal = document.getElementsByClassName('inputVal')[0];

 const addTaskBtn = document.getElementsByClassName('btn')[0];
 

addTaskBtn.addEventListener('click', function (){
  
if(inputVal.value.trim()!=0){
       let localItems = JSON.parse( localStorage.getItem('localItem'))
    if(localItems === null){
         taskList = []

    }else{
        taskList = localItems;
    }
    taskList.push(inputVal.value)
    localStorage.setItem('localItem', JSON.stringify(taskList)); 
}

    showItem()
})

function showItem(){
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    if(localItems === null){
         taskList = []

    }else{
        taskList = localItems;
    }


let html = '';
let itemShow = document.querySelector('.todoLists');
taskList.forEach((data, index )=> {
    

    html += `
    <div class="todoList">
    <p class="pText">${data}</p>
    <button class="deleteTask" onClick="deleteItem(${index})">x</button>
    </div>
    `
})
itemShow.innerHTML = html;
}
showItem()

function deleteItem(index){
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem()
}

function clearTask(){
    
localStorage.clear()
showItem()
}














