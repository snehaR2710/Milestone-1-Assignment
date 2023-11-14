// 4. Highest Marks
/**A teacher wants to find out the highest markes scored by a student in a class of five students. the teacher enters the marks of all five students in an array called "marks". write a program that iterates through the array and finds the highest marks scored by any student in the class. the highest marks must be displayed to the teacher using the console. make sure you use the ternory operator to find the student with the highest marks. */
// Sample array of marks
let marks = [100, 292, 178, 495, 388];
let students = ["student1", "student2", "student3", "student4", "student5"]

// Initialize maxMarks with the first element of the array
let maxMarks = marks[0];
let topStudents = students[0];

// Iterate through the array to find the highest marks
for (let i = 0; i < marks.length; i++) {
    (marks[i] > maxMarks) ? (maxMarks = marks[i], topStudents = students[i]) : null; 
    console.log(maxMarks = marks[i]);
}

console.log(`${topStudents} has highest score ${maxMarks} in the class.`);

