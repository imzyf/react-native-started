export default class Animal {
    // 构造方法，实例化的时候将会被调用，如果不指定，那么会有一个不带参数的默认构造函数。
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    // toString 是原型对象上的属性
    toString() {
        console.log('name:' + this.name + ',color:' + this.color);
    }

    getInfo(){
        return ('name:' + this.name + ',color:' + this.color);
    }
}

var animal = new Animal('dog','white');//实例化Animal
animal.toString();
console.log(animal.hasOwnProperty('name')); //true
console.log(animal.hasOwnProperty('toString')); // false
console.log(animal.__proto__.hasOwnProperty('toString')); // true

export class Cat extends Animal {
    constructor(action) {
        // 子类必须要在 constructor 中指定 super 方法，否则在新建实例的时候会报错。
        // 如果没有置顶 consructor，默认带 super 方法的 constructor 将会被添加。
        super('cat','white');
        this.action = action;
    }

    toString() {
        console.log(super.toString());
    }

    getInfo(){
        return ('name:' + this.name + ',color:' + this.color+ ',action:' + this.action);
    }
}

var cat = new Cat('catch')
cat.toString();

// 实例cat 是 Cat 和 Animal 的实例，和ES5完全一致。
console.log(cat instanceof Cat); // true
console.log(cat instanceof Animal); // true