 //1  Create an object and methods to support the following functionality
// const obj = {};


// // Your code to add methods

// obj.setName('John');
// console.log(obj.getName()); // Should log 'John'


const obj = {
  getName() {
    return this.name
  },
   setName(name) {
    this.name=name
  }
}

obj.setName('John')
console.log(obj.getName())


///=======================


//2 Create an object and methods to support the following functionality
//const obj = {};

// Your code to add methods

// obj.setSum(10);
// obj.add(20);
// console.log(obj.getSum()); // Should log 30, 10 + 20 = 30
// obj.setSum(100);
// console.log(obj.getSum()); // Should log 100,  the sum was set to 100


const obj1 = {

  getSum() {
    return this.num
  },
  setSum(n) {
    return this.num=n
  },
  add(val) {
   return this.num+=val
  },
}

obj1.setSum(10);
obj1.add(20);
console.log(obj1.getSum()); // Should log 30, 10 + 20 = 30
obj1.setSum(100);
console.log(obj1.getSum()); // Should log 100,  the sum was set to 100

//========================

// 3 Using the constructor function create, an object and methods to support the following functionality

function Calculator(num) {
  this.num = num

  this.plus=function (val) {
   return this.num+=val
  }

   this.minus=function (val) {
   return this.num-=val
  }

  this.multiply=function (val) {
    return this.num*=val
  }

  this.divide=function (val) {
    return this.num/=val
  }
  this.getResult=function () {
    return this.num
  }
}



const calculator = new Calculator(0); // Initial result is 0 
calculator.plus(5); // add 5 to the result 
calculator.minus(3); // subtract 3 from result 
calculator.multiply(3); // multiply result by 3
calculator.divide(2); // divide result on 2
calculator.getResult() // Returns the result

// result 3



//4 Using the constructor function, create an object and methods to support the following functionality

function ProfileInfo() {
  this.getUsername=function(){
    return this.username
 }
 this.setUsername=function(username){
    this.username=username
  }
  
 this.getEmail=function(){
    return this.email
 }
 this.setEmail=function(email){
    this.email=email
  }
 
  this.getAddress=function(){
    return this.address
 }
 this.setAddress=function(address){
    this.address=address
  }
}
 
const profileInfo = new ProfileInfo();
profileInfo.setUsername('username');
profileInfo.getUsername();
profileInfo.setEmail('abc@example.com');
profileInfo.getEmail()
profileInfo.setAddress('The user address');
profileInfo.getAddress();




function User() {
  this.getName=function(){
    return this.name
 }
 this.setName=function(name){
    this.name=name
  }
  
 this.getAge=function(){
    return this.age
 }
 this.setAge=function(age){
    this.age=age
  }
 
  this.getProfileInfo=function(){
    return this.fn
 }
 this.setProfileInfo=function(fn){
    this.fn=fn
  }
}
const user = new User();
user.setName('John'); 
user.getName();
user.setAge(63);
user.getAge();
user.setProfileInfo(new ProfileInfo());
user.getProfileInfo();
