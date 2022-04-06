
//Number 1
let ages = [3,9,23,64,2,8,28,93];
console.log((ages[ages.length-1])-ages[0]);

//1b
// let ages = [3,9,23,64,2,8,28,93,100];
// console.log((ages[ages.length-1]-ages[0]));

//1c 
// let ages = [3,9,23,64,2,8,28,93];
// let sum = 0
// for(i=0;i<ages.length;i++){
//         sum+=ages[i];
// }
//     let avg=sum/ages.length;
//     console.log(avg);

//2
// let names = ['Sam', 'Tommy','Time','Sally', 'Buck', 'Bob'];
// let total =0;
// for(let i=0; i<names.length;i++){
//     total+=names[i].length;
// }
// let avg = total/names.length;
// console.log(avg);

//2b
// let names = ['Sam', 'Tommy','Time','Sally', 'Buck', 'Bob'];
// let total = '';
// for(let i=0;i<names.length;i++){
//     total+=names[i]+ ' ';
// }
// console.log(total);

//3
// arr=[1,2,3,4,5];
// console.log(arr[arr.length-1]);

//4
// arr=[1,2,3,4,5];
// console.log(arr[0]);

//5
// let names = ['Sam', 'Tommy','Time','Sally', 'Buck', 'Bob'];
// let nameLength=[];
// for(let i=0; i < names.length; i++){
//     nameLength.push(names[i].length);
// }
// console.log(nameLength);

//6
// let names = ['Sam', 'Tommy','Time','Sally', 'Buck', 'Bob'];
// let nameLength=[];
// for(let i=0; i<names.length; i++){
//     nameLength.push(names[i].length);
// }
// let sum =0;
// for (let j=0; j<nameLength.length;j++){
//     sum+=nameLength[j];
// }
// console.log(sum);

// // Number 7
// let con= '';
// function foo(word,n){
//     for(let i=0; i<n;i++){
//          con += word;
//     }
//    return con
// }

// console.log(foo('Hello',3));

// //Number 8
// let fullName; 
// function func(firstName,lastName){
//     return  fullName = firstName + ' ' + lastName;
// }
// console.log(func('Jimi','Hendrix'))

//Number 9
// let sum=0;
// let arr1=[1,2,3,4,5,99];
// function num(arr){
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     if(sum>100){
//         return console.log(true);
//     } console.log(false);
// }
// num(arr1);

//Number 10
// let sum = 0;
// let arr1=[1,2,3,4,5,];

// function foo(arr){
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
    
//     let average=sum/arr.length
//      console.log(average)
// }
// foo(arr1);

// //Number11
// let ar1=[1,2,3,99];
// let sum1=0;
// let ar2=[4,5,6];
// let sum2=0
// function foo(arr1,arr2){
//     for(i=0;i<arr1.length;i++){
//         sum1+=arr1[i];
//     }
//     let avg1= sum1/arr1.length;
//     for(j=0;j<arr2.length;j++){
//         sum2+=arr2[j];
//     }
//     let avg2 = sum2/arr2.length;
//     if(avg1>avg2){
//         console.log(true);
        
//     }else{console.log(false);
//     }
// }
// foo(ar1,ar2);

// //Number12
// function willBuyDrinks(isHotOutside, moneyInPocket){
//     if(isHotOutside ===true && moneyInPocket> 10.5){
//         console.log(true);
//     }
// }
// willBuyDrinks(true,15)

// Number 13
//A function that helps you stay hydraded while drinking beer. Making sure you get enough water. 
//And not overdoing it with the alcohol. If you drink enough water your aloud to have another drink.

// function responsibleNightOut(beer,water){
//     if(beer>water){
//         console.log("drink more water!")
//     } else if(water>beer){
//         console.log("Would you like another drink?")
//     }
// }
// responsibleNightOut(1,5)