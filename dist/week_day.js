"use strict";
const weekDays = ["월", "화", "수", "목", "금"];
const today = new Date();
const day = today.getDay();
const weekDay = weekDays[day];
console.log(weekDay);
