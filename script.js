1.
function num(a) {
    return function(b) {
        return function (c) {
            console.log(a+b+c);
            
            
        }
        
    } 
};
num(10)(20)(30);

2.
function a(name) {
    return function (Department) {
        return function (salary) {
            console.log("Name :", name);
            console.log("Department :", Department);
            console.log("Salary :", salary);
            
            
        }
    }
    
}
a("Krishna")("Developer")(40000);

3.
function num2(a) {
    return function (b) {
      return function (c) {
          console.log(a*b*c);
            
        }
    }
    
}
num2(10)(20)(30)

4.
function num3(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        };
    };
}

function num4(a, b, c) {
    console.log(a + b + c);
}
num4(10, 20, 30)

5.
function num5(a) {
    return function(b) {
        return function(c) {
            return function (d) {
                console.log(a + b + c + d);
                
            }
        };
    };
}
num5(10)(20)(30)(40)

function num6(a, b, c, d) {
    console.log(a + b + c + d);
}
num6(10, 20, 30, 40)

6.
let array1 = [1,2,3,4,5]
let array2 = [6,7,8,9,10]

let totalarray = [...array1, ...array2]

console.log(totalarray);

7.
let students1 = ["Krishna", "Aravinth", "Santhosh"];
let students2 = ["Ramesh", "Alex", "Ajay"];

let TotalStudents = [...students1, ...students2];

console.log(TotalStudents);

8.
let num7 = [10, 20, 30];
let Num8 = [...num7, 40, 50, 60];

console.log(Num8);

9.
let obj1 = {
    name: "Krishna",
    department: "Frontend"
};
let obj2 = {
    salary: 40000,
    city: "Tirupur"
};
const employee = {...obj1,...obj2};

console.log(employee);

10.
let obj3 = {
    name: "Krishna",
    department: "Frontend"
}
let obj4 = {
    ...obj3,
    salary: 40000
}
console.log(obj4);

11.
let obj5 = {
    name: "Krishna",
    department: "Frontend"
};

let obj6 = {
    name1: "Aravinth",
    department1: "Backend"
};

let obj7 = {...obj5,...obj6};

console.log(obj7);

12.
let array3 = [1, 2, 3];
let array4 = [4, 5, 6];
let reverse = [...array4,...array3]
console.log(reverse);

13.
function rest(a,b,...c) {
    console.log(a,b,...c);
}
rest(1,2,3,4,5,6,7,8,9,10)

14.
function student(name, department, ...marks) {
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Marks:", marks);
}

student("Krishna", "Bsc", 90, 70, 85)

15.
function num9(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

num9(10, 20, 30, 40, 50);

16.
function num10(a, b, ...c) {
    console.log(c[5]);
}

num10(10,20,30,40,50,60,70,80,90,100);

17.
function products(Mobilephone,price,...remainingvalues) {
    console.log(Mobilephone);
    console.log(price);
    console.log(...remainingvalues);
}
products("Samsung",25000,"blackcolor","1 Year warranty","Dolby Atmos Speaker")

18.
function num11(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
num11(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

19.
let num12 = [10, 20, 30, 40]

let [a1,b1,c1,d1] = num12

console.log(a1,b1,c1,a1,d1);

20.
let studentDetails= ["Krishna", "Bsc", 85, "3 Year"]

let [a2,b2,c2] = studentDetails

console.log(a2,b2,c2);

21.
let numbers = [10, 20, 30, 40, 50]

let [first,,,fourth] = numbers

console.log(first,fourth);

22.
let num13 = [10, [20, 30], 40]

let [a3, [b3, c3], d3] = num13

console.log(a3,b3,c3,d3);

23.
let num14 = [10, [20, [30, 40, 50, [60, 70, [80, 90]]]]]

let [b01, [b02, [b03, b04, b05,[b06, b07,[b08, b09]]]]] = num14

console.log(b01,b02,b03,b04,b05,b06,b07,b08,b09);

24.
let employee01 = {
    name: "Krishna",
    designation: "Developer",
    salary: 40000
}
let { name, designation, salary } = employee01
console.log(name,designation,salary);

25.
let student1 = {
    studentname: "Krishna",
    department: "Bsc",
    cgpa: 8.5
}
let { studentname, department, cgpa } = student1
console.log(studentname,department,cgpa);

26.
let employee1 = {
    employee1name: "Aravinth",
    employee1age: 25,
    employee1department: "Frontend",
    employee1salary: 40000,
    employee1city: "Tirupur"
};

let { employee1name, employee1department, employee1salary } = employee1

console.log(employee1name,employee1department,employee1salary);

27.
let company = {
    employee2: {
        name01: "Krishnabharathi",
        designation01: "Developer"
    },
    team: {
        members: ["Aravith", "Ramesh", "Santhosh"]
    }
};
let {employee2: { name01, designation01  },team: { members }} = company;
console.log(name01, designation01, members);

28.
let company1 = {
    department1: {
        employee02:{
            name02: "Krishnabharathi",
            designation02: "Frontend"
        
        }
    }
};
let {department1:{employee02:{name02}}} = company1

console.log(name02);

29.
let num15 = [1,2,3,4,5]
num15.push(6,7,8,9,10)
console.log(num15);

30.
let array5 = [1,2,3,4,5]
array5.pop()
console.log(array5);

31.
let studentsnames = ["Aravinth", "Krishna", "Santhosh", "Abi", "Ajay"]
studentsnames.shift()
console.log(studentsnames);

32.
let array6 = [1,2,3,4]
array6.unshift(-1,0)
console.log(array6);

33.
let array7 = [10,20,30,40,50]
array7.splice(2,1,100)
console.log(array7);

34.
let array8 = [10,20,30,40,50,60,70,80]
array8.splice(3,2)
console.log(array8);

35.
let array9 = [10,20,60,70,80]
array9.splice(2,0,30,40,50)
console.log(array9);

36.
let array10 = [10, 20, 30, 40, 50, 60]
array10.splice(2, 2, 100, 200, 300)
console.log(array10);

37.
let students3 = ["Aravinth", "Krishna", "Santhosh", "Ajay", "Abi"]
students3.splice(2,1)
console.log(students3);

38.
let cart = ["Phone", "Watch", "laptop"]
console.log(cart);

cart.push("mouse")
console.log(cart);

cart.pop()
console.log(cart);

cart.shift()
console.log(cart);

cart.unshift("T-Shirt")
console.log(cart);

39.
let num16 = [1,2,3,4,5]
let num17 = [6,7,8,9,10]
let allnum = num16.concat(num17)

console.log(allnum);

40.
let num18 = [1,2,3,4,5]
let num19 = [6,7,8,9,10]
let num20 = [11,12,13,14,15]
let allnum1 = num18.concat(num19,num20)

console.log(allnum1);

41.
let num21 = [1,2,3,4,5,6,7,8]
let result = num21.slice(2,6)

console.log(result)

42.
let students4 = ["Krishna", "Aravinth", "Ajay", "Santhosh", "Abi"]
let students5 = students4.slice(0, 3)
console.log(students5);

43.
let num22 = [1, [2, [3, 4]]]
let num23 = num22.flat(2)
console.log(num23);

44.
let num24 = [1, [2, [3, [4, [5, [6, [7, ]]]]]]]

let num25 = num24.flat(7)

console.log(num25);

45.
//slice
let num26 = [10,20,30,40]
let num27 = num26.slice(1,3)
console.log("Using Slice :", num27);

//splice
let num28 = [50,60,70,80]
let num29 = num28.splice(1, 2)
console.log("Using Splice :", num29);

46.
let num30 = [10, 20, 30, 40, 50, 60]
let num31 = num30.includes(50)
console.log(num31);

47.
let num32 = [10, 20, 30, 20, 40, 30, 50]
let num33 = num32.indexOf(40)
console.log(num33); 

48.
let num34 = [10, 20, 30, 20, 40, 20, 50]
let num35 = num34.lastIndexOf(20)
console.log(num35);

49.
let num36 = [50, 10, 40, 20, 30]
num36.sort((a, b) => a - b)
console.log(num36);

50.
let num37 = [10, 20, 30, 40, 50]
num37.reverse();
console.log(num37);



