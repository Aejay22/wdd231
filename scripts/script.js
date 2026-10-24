let currentyear = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");

lastModified.textContent = document.lastModified;
let today = new Date();
currentyear.textContent = today.getFullYear();


let courses =[
    {
        courseName: "WDD130",
        courseType: "WDD",
        credit: 2,
        done: "yes"
    },
    {
        courseName: "WDD131",
        courseType: "WDD",
        credit: 2,
        done: "yes"

    },{
        courseName: "WDD231",
        courseType: "WDD",
        credit: 2

    },
    {
        courseName: "CSE110",
        courseType: "CSE",
        credit: 2,
        done: "yes"

    },
    {
        courseName: "CSE111",
        courseType: "CSE",
        credit: 2,
        done: "yes"

    },
    {
        courseName: "CSE210",
        courseType: "CSE",
        credit: 2
    }
]


let courseItems = document.querySelector("#courseItems");
let courseTotalCount = document.querySelector(".courseTotalCount");
courseTotalCount.textContent = 0;
let Total = parseInt(courseTotalCount.textContent);
let allButton = document.querySelector(".all");
let cseButton = document.querySelector(".cse");
let wddButton = document.querySelector(".wdd");



const getFilteredCourses = function(priority, Courses){
    return Courses.filter(course => course.courseType == priority);
}


const populateCourseItems = function(Courses, total = Total){
        courseItems.innerHTML = ""
        Courses.forEach(function(course){
            let div = document.createElement("div");
            if (course.done != null){
                div.className = "notNull"
            }
            div.textContent = course.courseName;
            total += parseInt(course.credit); 
            courseItems.appendChild(div);
        });
        courseTotalCount.textContent = total;
}


allButton.addEventListener("click", function(){
    populateCourseItems(courses);
});
cseButton.addEventListener("click", function(){
    populateCourseItems(getFilteredCourses("CSE", courses));
});
wddButton.addEventListener("click", function(){
    populateCourseItems(getFilteredCourses("WDD", courses));
});


let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("show");
    nav.classList.toggle("show");
});

