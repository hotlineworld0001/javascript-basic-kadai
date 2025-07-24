const today1 = new Date();
const y = today1.getFullYear();
const m = today1.getMonth()+1;
const d = today1.getDate();
const today2 = y + "年" + m + "月" + d + "日";

console.log(today2);
