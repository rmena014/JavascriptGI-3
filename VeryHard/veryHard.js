class Person {
  name;
  job;
  age;
  hobby;
  constructor(name, job, age) {
    // constructors allow you to provide custom initialization before any methods can be called on an object. Used to set initial values for object attributes
    this.name = name;
    this.job = job;
    this.age = age;
  }
  exercise() {
    console.log(`${this.name} thinks playing video games is awesome!`);
  }
  fetchJob() {
    console.log(`${this.name} works as a ${this.job} 40 hours a week.`);
  }
}

// const person = new Person("Richard", "Apprentice", "21");
// person.fetchJob();

class Programmer extends Person {
  //extends is used to create a class that is a child of another class
  constructor(name, job, age, languages) {
    // language property is passed in
    super(name, job, age); // super keyword is used to access properties on an object literal
    this.languages = languages;
    this.busy = true; //this.busy property is not passed in
  }
  completeTask() {
    this.busy = false;
  }
  acceptNewTask() {
    this.busy = true;
  }
  offerNewTask() {
    if (this.busy) {
      this.busy = true;
      console.log(`${this.name} cannot accept any new tasks right now`);
    } else {
      console.log(`${this.name} would love to take on a new responsibility`);
    }
  }
  learnLanguage() {}
  listLanguages() {
    console.log(`${this.name} knows ${this.languages}`);
  }
}
// 1. Test Case
const richard = new Programmer("Richard", "Coding Apprentice", 21, [
  "HTML",
  " CSS",
  " Javascript",
]);

richard.exercise();
richard.fetchJob();
richard.offerNewTask();
richard.listLanguages();

//2. Second Test Case
const gilbert = new Programmer("Gilberto", "Software Engineer", 28, [
  "C++",
  " C#",
  " Javascript",
]);

gilbert.exercise();
gilbert.fetchJob();
gilbert.offerNewTask();
gilbert.listLanguages();
