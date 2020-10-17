function timeConversion(time) {
  let index = 0;
  let timeSchema = '';
  let format = time.slice(8).toUpperCase();
  
  while(index < 8){
    timeSchema += time[index];
    index++;
  }
  
  timeSchema = timeSchema.split(':');
  let hours = Number(timeSchema[0]);
  
  if (format == 'AM' && hours >= 12) {
    timeSchema[0] = '00';
  }

  if (format == 'PM' && hours < 12){
      timeSchema[0] = hours += 12
  }

  return timeSchema.join(':');
}

console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('06:05:45AM'));
console.log(timeConversion('12:05:45PM'));
console.log(timeConversion('12:05:45AM'));
