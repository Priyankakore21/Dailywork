exports.rotate=function(temparray,k){
intarray = []
let size=7
temparray=[]
for (i = 1; i < k + 1; i++) {
    intarray.push(i)
}
// console.log(intarray)
for (j = k + 1; j < size; j++) {
    temparray.push(j)
}
// console.log(temparray)

for (let i = 0; i < intarray.length; i++) {
    temparray.push(intarray[i])
}

// console.log(temparray)
return temparray;
}