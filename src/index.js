class Person {
  id
  fistName
  lastName
  #fullname

  constructor(id, fistName, lastName) {
    this.id = id;
    this.fistName = fistName;
    this.lastName = lastName;
    this.#fullname = `${fistName} ${lastName}`;
  }

  get fullname() {
    return this.#fullname;
  }
};

const person = new Person(1, 'Christian', 'Cesar');
console.log(person.fullname);