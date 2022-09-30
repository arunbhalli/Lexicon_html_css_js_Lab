/*-----  Person --------*/

class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }
 data(){
   
  }
}
let person1 = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
let person2 = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
let person3 = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
let person4 = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
let person5 = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
console.log(person1.prototype);
//console.log(person1.toString(),person2,person3,person4,person5)
