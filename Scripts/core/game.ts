/// <reference path="_reference.ts" />
import Person = objects.Person;
import Student = objects.Student;

console.log("Game Started...");
var person: Person = new Person("Cindy");
person.speak();

var student: Student = new Student("Dan", 123456);
student.speak();
student.studies();