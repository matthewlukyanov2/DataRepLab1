const ages = [25, 31, 42, 77];
//using map
let d = ages.map((item)=>{
 
 if (ages < 70) 
    return item * 2;
else
    return item;
 
})

console.log(d);