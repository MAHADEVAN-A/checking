var links = document.querySelectorAll('.navbar ul li')
var ultag = document.querySelector('.navbar ul')
var check = document.getElementById('checkbtn')
var check1 = document.getElementById('checkbtn1')



links.forEach((item)=>{
    item.addEventListener('click',()=>{
        ultag.classList.toggle("navtoggle")
    check1.classList.toggle("toggle3")
    check.classList.toggle("toggle1")
    check.classList.add("navbar-toggle")
    // check.classList.toggle("toggle1")
        // ultag.style.left='0';
    })
})

check.addEventListener('click',()=>{
	console.log('maha')
    ultag.classList.toggle("navtoggle")
    check1.classList.toggle("toggle3")
    check.classList.toggle("toggle1")
    check.classList.remove("navbar-toggle")
})

check1.addEventListener('click',()=>{
	console.log('maha')
    ultag.classList.toggle("navtoggle")
    check1.classList.toggle("toggle3")
    check.classList.toggle("toggle1")
    check.classList.add("navbar-toggle")
})

// function handleChange(e){
//     console.log('mahadevan')
// }
console.log(links);
console.log(check);
console.log(ultag);

