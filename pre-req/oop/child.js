'use strict';

// import Person from './person';
const Person = require('./person');

class Child extends Person{

  constructor(firstName, lastName, age){
    super(firstName, lastName);
    this.age = age;
  }

  getChildAge(){
    return this.age;
  }
}

module.exports = new Child('Bird', 'Sim', 32);