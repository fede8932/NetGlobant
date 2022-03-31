function validateCreateWorkDay(inHour, exitHour, newInHour, newExitHour) {
  let listHoures = [];
  const entryHour = new Date(inHour).getHours();
  const closingHour = new Date(exitHour).getHours();
  console.log("ENTRY HOUR", entryHour, "CLOSINGHOUR", closingHour);
  for (let i = entryHour; i < closingHour; i++) {
    listHoures.push(i);
  }
  let listNewHour = [];
  const newEntryHour = new Date(newInHour).getHours();
  const newClosingHour = new Date(newExitHour).getHours();
  for (let i = newEntryHour; i < newClosingHour; i++) {
    listNewHour.push(i);
  }

  const validate = listHoures.map((hour) => {
    if (listNewHour.includes(hour)) return true;
    return false;
  });
  if (validate.includes(true)) return false;

  return true;
}

function enableOrDisable(instance){
   return instance.status? instance.status= false: instance.status=true 
}

module.exports = {enableOrDisable, validateCreateWorkDay;}
