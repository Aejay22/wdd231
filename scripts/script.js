let currentyear = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");

lastModified.textContent = document.lastModified;
let today = new Date();
currentyear.textContent = today.getFullYear();


let courses = [
    {
        courseName: "WDD130",
        courseTitle: "Web Fundamentals",
        courseType: "WDD",
        credit: 2,
        done: "yes",
        description: "This course introduces students to the fundamental concepts of web development and teaches them how to create simple, functional, and well-structured websites. Students learn the basic structure of HTML documents, how to use semantic HTML elements to organize website content, and how to apply CSS to control the appearance, layout, colours, typography, and spacing of web pages. The course also introduces basic web design principles, responsive design, accessibility, and the importance of creating websites that work across different screen sizes and devices. Students gain practical experience creating web pages, organizing website files, using development tools, and publishing their projects online. By the end of the course, students should understand the relationship between HTML and CSS and be able to build and publish a basic website.",
        certificate: "Web and Computer Programming",
        technologyStack: ["HTML", "CSS", "VS Code", "GitHub Pages"]
    },
    {
        courseName: "WDD131",
        courseTitle: "Dynamic Web Fundamentals",
        courseType: "WDD",
        credit: 2,
        done: "yes",
        description: "This course builds on the foundational knowledge of HTML and CSS by introducing students to more advanced frontend development techniques and the JavaScript programming language. Students learn how to make websites interactive by selecting and manipulating HTML elements through the Document Object Model (DOM), responding to user actions with event listeners, and using JavaScript to dynamically update page content. The course covers important programming concepts such as variables, functions, arrays, objects, conditional statements, loops, and array methods. Students also learn how to work with browser storage, retrieve information from external APIs using asynchronous JavaScript, and display data dynamically on web pages. Emphasis is placed on writing organized, reusable, and maintainable code while improving the usability and responsiveness of websites. By the end of the course, students should be able to create interactive websites that retrieve, process, and display information.",
        certificate: "Web and Computer Programming",
        technologyStack: ["HTML", "CSS", "JavaScript", "DOM", "Fetch API", "Local Storage", "VS Code", "GitHub Pages"]
    },
    {
        courseName: "WDD231",
        courseTitle: "Web Frontend Development I",
        courseType: "WDD",
        credit: 2,
        description: "This course focuses on developing more advanced frontend web development skills through practical projects that combine HTML, CSS, and JavaScript. Students learn how to organize larger websites into multiple pages, create responsive layouts, improve accessibility, and follow modern web development standards. The course introduces the use of JavaScript modules to divide code into separate files, allowing functions and data to be exported and imported where needed. Students work with JSON data, asynchronous programming, the Fetch API, and dynamic DOM manipulation to retrieve and display information from external sources or local data files. They also develop skills in handling user interactions, creating forms, implementing browser storage, and building interactive components such as dialogs and menus. The course emphasizes project planning, code organization, performance optimization, testing, and the use of developer tools. By completing the course, students should be able to design, develop, test, and publish a complete multi-page website that meets specified functional and technical requirements.",
        certificate: "Web and Computer Programming",
        technologyStack: ["HTML", "CSS", "JavaScript", "ES Modules", "JSON", "Fetch API", "Local Storage", "GitHub Pages"]
    },
    {
        courseName: "CSE110",
        courseTitle: "Programming Building Blocks",
        courseType: "CSE",
        credit: 2,
        done: "yes",
        description: "This course introduces students to the fundamental principles of computer programming using the Python programming language. Students learn how to write instructions that a computer can execute to solve problems and perform tasks. Topics include variables, data types, expressions, mathematical operations, user input, output, conditional statements, loops, functions, and basic data structures. Students also learn how to break complex problems into smaller and more manageable steps, develop logical thinking, and use programming concepts to create practical solutions. The course introduces basic debugging techniques and teaches students how to identify, understand, and correct errors in their programs. Through practical assignments and programming exercises, students develop the ability to plan solutions, write readable code, and test their programs. By the end of the course, students should have a solid foundation in programming logic and be able to develop simple Python applications independently.",
        certificate: "Web and Computer Programming",
        technologyStack: ["Python", "VS Code", "Programming Logic"]
    },
    {
        courseName: "CSE111",
        courseTitle: "Programming with Functions",
        courseType: "CSE",
        credit: 2,
        done: "yes",
        description: "This course develops students' programming knowledge by exploring more advanced concepts and practical applications of Python. Students learn how to organize programs into reusable functions, work with collections of data, process text and files, and use built-in programming tools to solve more complex problems. The course introduces object-oriented programming concepts, including classes, objects, attributes, methods, and the use of objects to represent real-world entities. Students also gain experience working with lists, dictionaries, strings, files, and other data structures while improving their understanding of program flow and data processing. Emphasis is placed on writing efficient, readable, and reusable programs, applying problem-solving strategies, and debugging code. By the end of the course, students should be more confident designing structured Python programs and applying programming principles to practical situations.",
        certificate: "Web and Computer Programming",
        technologyStack: ["Python", "Object-Oriented Programming", "VS Code"]
    },
    {
        courseName: "CSE210",
        courseTitle: "Programming with Classes",
        courseType: "CSE",
        credit: 2,
        description: "This course introduces students to software development using the C# programming language and develops their understanding of object-oriented programming and software design. Students learn how to create classes and objects, define attributes and methods, use constructors, and control access to data through encapsulation. The course explores important programming structures such as lists, loops, conditional statements, methods, and data types, while teaching students how to organize code into reusable components. Students apply these concepts through practical assignments that involve designing classes, assigning responsibilities to objects, managing collections of data, and building programs that solve real-world problems. They also learn how to read and understand program requirements, plan solutions before coding, test their work, and identify and correct errors. By the end of the course, students should be able to design and develop structured C# applications using object-oriented programming principles.",
        certificate: "Web and Computer Programming",
        technologyStack: ["C#", ".NET", "Object-Oriented Programming", "VS Code"]
    }
];
let MyDialog = document.querySelector("#course-details");
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

const populateModal = (course)=>{
    MyDialog.innerHTML = `
    <button id="closeModal" aria-label="Close">❌</button>
    <h2>${course.courseName}</h2>
    <h3>${course.courseTitle}</h3>
    <p><strong>Credits: </strong>${course.credit}</p>
    <p><strong>Certificate: </strong>${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies: </strong>${course.technologyStack.join(', ')}</p>
    `
    MyDialog.showModal();
    MyDialog.querySelector("#closeModal").addEventListener("click", ()=>{
        MyDialog.close();
    });
    
}
MyDialog.addEventListener("click",(event)=>{
    if(event.target === MyDialog){
        MyDialog.close();
    }
});


const populateCourseItems = function(Courses, total = Total){
        courseItems.innerHTML = ""
        Courses.forEach(function(course){
            let div = document.createElement("div");
            if (course.done != null){
                div.className = "notNull"
            }
            div.textContent = course.courseName;
            div.addEventListener('click', ()=>{
                populateModal(course);
            });
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

