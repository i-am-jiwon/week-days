const weekDays: string[] = ["일", "월", "화", "수", "목", "금", "토"];
const today = new Date();
const day = today.getDay();
const weekDay = weekDays[day];

console.log(today);
console.log(day);
console.log(weekDay);


