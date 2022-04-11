const conuntingHours=(entryHour, closeHour)=>{
const hoursEntry= new Date(entryHour).getHours()
console.log(hoursEntry)
const hoursClouse= new Date(closeHour).getHours()
let count= 0
if(hoursClouse>hoursEntry){
for(let i= hoursEntry; i< hoursClouse; i++){
    count+=1
}
}
else{
    for(let i= hoursEntry; i< hoursClouse; i++){
        count+=1  
}
}
return count
}
module.exports=conuntingHours