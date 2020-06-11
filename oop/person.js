'use strict';

class Person{

  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFirstName(){
    return this.firstName;
  }
  getLastName(){
    return this.lastName;
  }
  getFullName(){
    return this.firstName + ' ' + this.lastName;
  }
  setFirstName(firstname){
    this.firstName = firstname
  }
  setLastName(lastname){
    this.lastName = lastname;
  }
}

Person.prototype.getAddress = () => {
  return '200 Main Street, Flushing, NY'
};

Person.prototype.toString(){
  return `Person's firstname = ${this.firstName}, lastname = ${this.lastName}`;
};

module.exports = new Person('kaiser', 'alam');