var moment =require('moment');
var today = moment().add(9, 'h');
console.log(today)
var dday = moment("2017-11-16T08:40:00.000");
console.log(dday);
var leftDay = dday.diff(today, 'days');
var leftHour = dday.diff(today, 'hours');
var leftMinute = dday.diff(today, 'minutes');
console.log(leftHour);

console.log(leftDay);