/*
    E6 klasser...
    Syntactic Sugar
*/

class Person {
  // Deklarera privata fält...
  #firstName = '';
  #lastName = '';
  #email = '';

  // Construktor som tar in argument som måste finnas
  // för att skapa objektet på korrekt sätt...
  constructor(firstName, lastName, email) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#email = email;
  }

  // Getters
  get firstName() {
    return this.#firstName;
  }

  set firstName(value) {
    this.#firstName = value;
  }

  get lastName() {
    return this.#adjustNaming(this.#lastName);
  }

  set lastName(value) {
    this.#lastName = value;
  }

  get email() {
    return this.#email.toLowerCase();
  }

  // Public metod
  getFullInfo() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Static method
  static sayHello() {
    console.log('Hej på dig');
  }

  // Private metoder...
  #adjustNaming(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

// const teacher = new Person('Michael', 'gustavsson', 'Michael@GMail.com');
// console.log(teacher);
// console.log(teacher.lastName);

Person.sayHello();

/* Arv... */
// Student ärver ifrån Person
class Student extends Person {
  #phone = '';
  #birthDate = '';
  #courses = [];

  constructor(firstName, lastName, email, phone, birthDate) {
    super(firstName, lastName, email);
    this.#birthDate = birthDate;
    this.#phone = phone;
  }

  // Getters...
  get Courses() {
    return this.#courses;
  }

  getFullInfo() {
    return `${this.firstName} ${this.lastName} ${this.email}`;
  }

  enrollCourse(courseName) {
    this.#courses.push(courseName);
  }
}

// const student1 = new Student(
//   'Nils',
//   'Nilsson',
//   'nils@gmail.com',
//   '010-111111',
//   '1990-01-01',
// );
// console.log(student1);

// student1.enrollCourse('JavaScript');
// student1.enrollCourse('Solidity');
// console.log(student1.Courses);

class Teacher extends Person {
  #phone = '';
  #skills = [];

  constructor(firstName, lastName, email, phone) {
    super(firstName, lastName, email);
    this.#phone = phone;
  }

  getFullInfo() {
    return `${this.firstName} ${this.lastName} ${this.email} ${this.#phone}`;
  }

  addCompetens(value) {
    this.#skills.push(value);
  }
}

// const eva = new Teacher('Eva', 'Olsson', 'eva@gmail.com', '073-334455');
// console.log(eva);
// console.log(eva.getFullInfo());

const person = new Person('Kalle', 'Anka', 'kalle@gmail.com');
const student = new Student(
  'Nils',
  'Nilsson',
  'nils@gmail.com',
  '070-112233',
  '1990-01-01',
);
const teacher = new Teacher('Eva', 'Olsson', 'eva@gmail.com', '073-22334455');

console.log(person.getFullInfo());
console.log(student.getFullInfo());
console.log(teacher.getFullInfo());
