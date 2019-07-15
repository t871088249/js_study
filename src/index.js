
class People {
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    eat(){
        alert(`${this.name} eat something`)
    }
    speak(){
        alert(`My name is ${this.name}, age is ${this.age}`)
    }
}

class Student extends People{
    constructor(name,age, number){
        super(name,age);
        this.number = number;
    }
    study(){
        alert(`${this.name} study`)
    }
}

let zhang  = new People('zhang', 18);
let wang = new Student('wang', 30, 135.215);
zhang.eat();
wang.study()