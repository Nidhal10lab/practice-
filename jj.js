function colorchange(){
    document.body.style.backgroundcolor="red" ;
}
 
  
function hello(){
    document.getElementById("para").style.color="red";
}
function fun() {
            let pass = document.getElementById("pass");
            let btn = document.querySelector("button");

            if (pass.type === "password") {
                pass.type = "text";
                btn.innerText = "Hide Password";
            } else {
                pass.type = "password";
                btn.innerText = "Show Password";
            }
//         }
    for(let i=1;i<=5;i++){
        a=i**3;
        console.log( `Number is:${i} and thye cube of the ${i} is:${a}`)
    }
let a="12345";
// let str=a.toString;
let rev="";
for(let i=a.length;i>0;i--){
    rev+=a[i];
    // console.log(Number(rev))
}
console.log(Number(rev));
let a = 12345;

let str = a.toString();
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
}

console.log(Number(rev));
let a=12345;
let b=0;
let c=0;

for (let i=5; i>0; i--)
{
    b=a%10;
    a=(a-b)/10
    c=(10*c)+b;
}
console.log(c)


let a=12345;
for(let i=5;i>0;i--){
    b=a%10;
    a=a/10;
    c=(a-b)
}
let a=Number(prompt("enter a first number"))
let b=prompt("enter a valid operator")
let c=Number(prompt("enter a second number"))
switch(b){
    case "+":
        document.write(a+c)
        break;
        case "-":
            document.write(a-c)
            break;
            default:
                document.write("not a vild operator")
}
let a=prompt("enter any 6 digit number");
// let reverse=0;
// for(let i=a.length-1;i>=0;i--){
//     reverse+=a[i];
// }
// console.log(reverse)
let c=Number(prompt("enter first number"))
let d=Number(prompt("enter second number"))
let e=Number(prompt("Enter the third number"))
function largest(a,b,c){
    if(a>b&&a>c)
        return `${a} is the greatest`;
    else if(b>a&&b>c)
        return`${b} is the greatest`;
    else
        return `${c} is the greatest`
}
console.log(largest(c,d,e))
let b=prompt("enter number")


// let rev="";
function reverse(a){
let rev="";

    for(let i=a.length-1;i>=0;i--){
        rev+=a[i]
    }
    return Number(rev);
}

console.log(reverse(b))
let a=prompt("enter you number")
let total=0;
function count(b){
    for(let i=0;i<=b.length-1;i++){
        total+=1
    }
    console.log(total)
}
console.log(count(a))

let a=prompt("enter the number to check factorial !")
let n=0;
function fact(b){
    n= b*(b-1);
    return fact;
}


console.log(fact(a))

let a=prompt("enter the number to be checked factorial")
function fact(b){
    let f=1;
    for(let i=1;i<=b;i++){
        f*=i;}
        return f;
    }
    console.log(fact(a));
    
for(let i=1;i<=50;i++)
    if (i%2!=0) 
    console.log(i);
let n=20;

for(let i=1;i<=5;i++){
    let sum="";
        for(let j=2;j<=n;j++){
            sum+=j;
            j=+2
            
            }sum+="<br>"
            
        document.write(sum)
        }
    
let inp="1234";
let sum=0
for(let i=0;i<=inp.length-1;i++){
    sum+=Number(inp[i])
}
console.log(sum)
let inp=1234;
let pro=0;
for(let i=0;i<inp.length-1;i++){
    pro*=inp[i]+inp[i]
}
console.log(pro)
let a="111111"
let res=a.split("")
document.write(res) 
let str='highland'
console.log(str.slice(0,4))

let a=prompt("enter your string")
let len=a.slice(-4)
let mask=len.padstart(a.length,"*")
document.write(mask)
let phone = "9876543210";

let lastFour = phone.slice(-4);
let masked = lastFour.padStart(phone.length, "*");

document.write(masked);

let a=prompt("enter the word");
let cap=a.slice(0,1)
let baki=a.slice(1)
let capitalize=cap.toUpperCase();
console.log(capitalize+baki)

let a=prompt("enter the string")
let b=a.split("").reverse().join("")
if(a==b){
    console.log("it is palindrome")
}
else
    console.log("it is not palindrome")
let a=prompt("Enter the word")
let check=a.match(/cat/g)
document.write(check) 
let a=prompt("Enter the sentence")
function findlongestword(sentence){
    let word=sentence.split(" ");
    let longestword=[word[0]]
    for(let i=1;i<word.length;i++){
        if(word[i].length>longestword.length){
            longestword=[word[i]]
        }
        else if(word[i].length===longestword.length)
            longestword.push(word[i])
    }
    return longestword;
}
document.write(findlongestword(a))

let a=(prompt("enter the number"))
function checkodd(oddE){
     let arr=oddE.split(" ")
     for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            arr[i]="odd";
        }
     }
return arr
}
console.log(checkodd(a));
let a=prompt("Enter the string")
function replaces(sentence){
    let replaced=sentence.replace(/ /g,"-")
    return  replaced
}
document.write(replaces(a))
let a=prompt("Enter the friuts")
function countFrequency(fruit){
    let pazham=fruit.split(" ")
    for(let i=0;i<pazham.length;i++)

    let a=prompt("Enter the sentence")
    function longestword(word){
        let arr=word.split(" ")
        let long=arr[0];
        for(let i=1;i<arr.length;i++){
            if(arr[i]>arr[0]){
                long=arr[i]
            }
        }
        return long;
    }

    document.write(longestword(a))
    -Create a function getStudentsWithoutGradeA(students) that takes an array of student objects, where each student has a name and grade.The function should return an array containing only the names of students whose grade is NOT "A"  
    function getstudentwithout(enter){
        

    }

    function greet(name){
        console.log("hello"+name)
    }                   
    function call(callback){
        callback("nidhal")
    }

     call(greet)

    function calculate(a,b){
        return a+b;
    }
    function result(call){
            console.log(call(10,20))
    }
result(calculate)

function multiply(a,b){
    return a*b;
}
function values(call){
    console.log(call(10,20))
}
values(multiply)

function values2(call2){
    console.log(call2(20,30))
}
values2(multiply)
function calculate(a,b){
    return 
}
function print
let a=[10,20,30,40,]
function firstthree(a){
    a.splice(1,1,"Javascript")
    a.splice(a.length-1,0,"Html")
    a.splice(0,2)
    return a;
}
console.log(a);

console.log(firstthree(a));
function replace(b){
    b.splice(b.length-2,2,"React","Node")
    return b
}
console.log(replace(a))
let a=[10,20,30,40,]
let a=[]
a.push(10,20,30)
console.log(a)

console.log(a)
let a=[10,20,30,40,]
let b=a.shift()
console.log(b)
let a=[10,20,30,40,]
let a=[]
a.push("A","B","C")
console.log(a)
a.unshift(1,2,3)
console.log(a);
let a=["HTML","CSS"]
let b=["JS","React"]
// let d=[2,4,7,90,]
let c=a.concat(b)
console.log(c);
let a=["HTML", "CSS", "JavaScript", "React"]
let b=a.indexOf("JavaScript")
console.log(b)
let a=[20, 40, 60, 80, 100]
if(a.includes(100)){
    console.log("found");
}
else
    console.log("not found");
    
let a=["Apple", "Banana", "Orange", "Mango"]
console.log(a.indexOf("Orange"))
let a=Number(prompt("enter the number"))
function index(a){
let arr=[5,10,15,20]
let b= arr.indexOf(a)
return b;
}
console.log(index(a))

let a=["Dog", "Cat", "Bird", "Cat", "Fish"]
let b=a.lastIndexOf("Cat")
console.log(b)
let a=Number(prompt("Enter the last occurence"))
function num(n){
    let c=[10,20,30,40,10]
    let b=c.lastIndexOf(n)
    return b;
}
console.log(num(a));

let a=["Red", "Blue", "Green", "Blue", "Yellow"]
console.log(a.lastIndexOf("Blue"))

function Largestnumber()

let a=["User","Admin","Guest"]
if(a.includes("Amin")){
    console.log("Access granted")
}
else{
    console.log("Access denied")
let a=[3,5,7,8,10]
let b=a.find(num=>num%2==0)
console.log(b)
let a=[20,60,90,120,200]
let b=a.find(num=>num>100)
console.log(b)
let a=["Cat","Elephant","Dog","Tiger"]
let b=a.find(str=>str.length>5)
console.log(b);
let a=[
 {name:"Ali",marks:60},
 {name:"John",marks:85},
 {name:"Sara",marks:90}
]
let b=a.find(student=>student.marks>80)
console.log(b);

let a=[
 {name:"Mouse",price:800},
 {name:"Keyboard",price:1200},
 {name:"Pen Drive",price:450}
]
let b=a.find(product=>product.price<500)
console.log(b);

let a=[10,20,-5,-10]
let b=a.findIndex(num=>num==-num)
console.log(b);
let a=["HTML", "CSS", "JavaScript", "React"]
let b=a.sort()
console.log(b);
let a=(prompt("Enter the number in comma separated"))
let b=a.split(",")
let c=b.sort((a,b)=>b-a)
console.log(c);

let a=[-5, 20, -10, 15, 0, 8]
let b=a.sort((a,b)=>a-b)
console.log(b);

let a=[3,9,1,7,5]
let b=a.Math.random()
console.log(b);

let a=[
 {name:"Ali",marks:65},
 {name:"John",marks:90},
 {name:"Sara",marks:75}
]
let b=a.sort((a,b) =>b.marks-a.marks)
console.log(b);

let a=[
 {name:"Tom",salary:45000},
 {name:"John",salary:25000},
 {name:"Sara",salary:60000}
]
let b=a.sort((a,b)=>a.salary-b.salary)
console.log(b);

let a=[
 {name:"Sara",marks:90},
 {name:"Ali",marks:80},
 {name:"John",marks:90},
 {name:"Tom",marks:70}
]
let b=a.sort((a,b)=>a.marks-b.marks)
if(a.marks==b.marks){
    let c=b.sort((a,b)=>a.name-b.name)
}
console.log(c);

let a=[120, 450, 999]
let b=a.map(num=>num.toString())
console.log(b);
let a=["cat", "elephant", "dog", "giraffe", "bat"]
let b=a.filter(str=>str.length>3)
console.log(b);

let a=[
  { name: "Ali", marks: 40 },
  { name: "Sara", marks: 75 },
  { name: "John", marks: 60 },
  { name: "Tom", marks: 35 }
]
let b=a.filter(str=>str.marks>50)
console.log(b);

let a=[10, 20, 30, 40]
let b=a.reduce((acc,num)=>acc+num,0)
console.log(b);

let a=[2, 3, 4]
let b=a.reduce((acc,num)=>acc*num,0)
console.log(b);
function sumAll(...rest){
    let a=rest.reduce((a,b)=>a+b,0)
    return a;
}
console.log(sumAll(10,20,30));

function findmax(...rest){
    let a=Math.max(...rest)
    return a;
}
console.log(findmax(10, 5, 99, 32, 17));

function countItems(...rest){
    let a=rest.length
    return a
}
console.log(countItems("HTML", "CSS", "JavaScript", "React"));

function joinnames(...rest){"jnuih
                               `
    let a=rest.join(",")
    return a;
}
console.log(joinnames("Ali", "Sara", "John"));

function averageMarks(...rest){
    let a=rest.reduce((a,b,num)=>a+b/rest.length)
    return a
}
console.log(averageMarks(80, 90, 70, 100));

function showdetails(first,...rest){
    console.log("First:", rest[0]);
    console.log("Others:", rest);}
showdetails("Apple", "Banana", "Orange", "Mango");

let a=prompt("Enter your sting")
let b=prompt("enter the string to find")
function findstring(haystack,needle){
    let c=haystack.indexOf(needle)
    return c;

} 
console.log(findstring(a,b))
let company=`[{
    "name":"nidhal",
    "age":18,
    "class":true
},
{   "name":"nid",
    "age":18,
    "class":false
} 
]`
console.log(JSON.parse(company));
let a = [1,3,6,10,12,15]
 function averageValue(nums){
    let b=nums.filter(num=>num%6==0)
    let c=b.reduce((a,b)=>a+b)
    return c/b.length}


 
 console.log(averageValue(a))
let a=["flower","flow","flight"] 
function longestCommonPrefix(strs){
 let str=strs[0];
    for(let i=1;i<strs.length;i++){
        while(!strs[i].startsWith(str)){
            str=str.slice(0,-1)
        }
    } 
    return str
// }
//  console.log(longestCommonPrefix(a))
class Car{
    construct(brand,color){
        this.brand=brand,
        this.color=color
    }
    start(){
        console.log("started");
        
    }
    stop(){
        console.log("stopped");
    }
}
let Car1=new Car("BMW","red")
Car1.start()
class student{
    constructor(name,grade){
        this.name=name;
        this.grade=grade;
    }
    study(){
        console.log("studying...")
    }
}
let s1=new student("munavir",12);
let s2=new student("muvir",12);

s1.study();
console.log(s1.grade);

let promise=new promise((resolve,reject){
    setTimeout(resolve,2000)
    resolve(console.log("hello ,promise!"))
})
function name(num) {
return new Promise((resolve,reject)=>{
    if(num>10){
        resolve("num is big")
    }
    else{
        reject("something went wrong")
    }
})}
name(1).then((msg)=>{
    console.log(msg);
    
}).catch((error)=>{
    console.log(error);   
}).finally((m)=>console.log("number"))
let a=12
function evenorodd(num){
    let b=new Promise((resolve,reject)=>{
        if(num%2==0){
            resolve("number is even")
        }
        else{
            reject("num is odd")
        }
    }
    )
    return b
}
evenorodd(a).then((even)=>{
    console.log(even)
}).catch((odd)=>{
        console.log(odd);
    })
    .finally((det)=>console.log("succesful")
    )
let isLoggedIn=true;
function check(tof){
    let b=new Promise((resolve,reject)=>{
        if(tof==true){
            resolve("Welcome user")
        }
        else{
            reject("Login Failed")
        }
        return b;
    })}
    check(isLoggedIn).then((access)=>{
        console.log(access);
    }).catch((denied)=>{
        console.log(denied);
    }).finally((det)=>console.log("hiiii"))

let a=prompt("enter the  number")
function check(num){
    let b=new Promise((resolve,reject)=>{
        if(num.length>=8){
            resolve("Strong password")
        }
        else
            reject("weak password")
    })
    return b
}
check(a).then((str)=>{
    console.log(str);
}).catch((wea)=>{
    console.log((wea));
}).finally(()=>console.log("this will be always printed"))

let a=1
function minororadult(num){
    let b=new Promise((resolve,reject)=>{
        if(num>=18){
            resolve("adult")
        }
        else{
            reject("minor")
        }
    })
    return b
}
minororadult(a).then((ad)=>{
    console.log(ad);
})
.catch((mi)=>{
    console.log(mi);
})
 let c=prices[0]
    let d=c+prices[i]
    if(d>=money){
        c=prices[1]

let a=[3,1,2]
 let b=3
 
 function buyChoco(prices, money) {
    for(let i=0;i<prices.length;i++){
        if(prices[i]>=money){}
        return money
    }

    

}
console.log(buyChoco(a,b))
const Welcome = (props) => {
  return <div>{props.children}</div>;
};

const App = () => {
  return (
    <Welcome>
      <h1>Hello, World!</h1>
      <p>Welcome to React.</p>
    </Welcome>
  );
};
let a=[1,2,3]
function plusOne(digits) {
    let b=digits.join("")
    let e=Number(b)
    let c=(e+1)
    let f=String(c)
    let d=(f.split(""))
    return d
}
console.log(plusOne(a))

import { useState } from "react";

let d=[3,2,1]
function maximumProduct (nums) {
    let big1=nums.sort((a,b)=>a-b)
    let last=big1.length-1
    let lastsec=big1.length-2
    let mult=last*lastsec
    return mult
};
console.log(maximumProduct(d))