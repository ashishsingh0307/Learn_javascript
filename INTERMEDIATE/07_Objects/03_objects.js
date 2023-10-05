// DESTRUCTURING
// IT CAN DONE ON BOTH ARRAYS AND OBJECTS BUT WE ARE LOOKING HERE FOR OBJECTS NOW

const course = {
    courseName : "JS in Hindi",
    CoursePrice : "999",
    courseInstructure : "Hitesh"
}

// console.log(course.courseName);
// console.log(course.CoursePrice);
// console.log(course.courseInstructure);

// ABOVE WRITTEN CONSOLE LOGS CAN BE WRITTEN IN ONE MORE WAY
// BELOW WRITTEN CODE IS DESTRUCTURED OBJECT OR DESTRUCTURING OF OBJECTS

// const {courseInstructure, CoursePrice, courseName} = course;
const {courseInstructure : instructure, CoursePrice : price, courseName: name} = course; // WE CAN GIVE OUR OWN NAMES WHILE DESTRUCTURING
// console.log(courseInstructure);
// console.log(CoursePrice);
// console.log(courseName);
console.log(instructure);
console.log(price);
console.log(name);

// 5:22 (video)