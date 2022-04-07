const workDay= (inHour, exitHour) =>{
  let listHoures = [];
  const entryHour = parseFloat(inHour)
  const closingHour = parseFloat(exitHour)
  console.log("ENTRY HOUR", entryHour, "CLOSINGHOUR", closingHour);
  for (let i = entryHour; i < closingHour; i++) {
    listHoures.push(i);
  }
  let listAllDay= []
  for(let i = 0; i < 24; i++){
    listAllDay.push(i)
  }
  console.log("A", listHoures, "B", listAllDay)
}

export default workDay