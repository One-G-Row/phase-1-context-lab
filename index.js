/* Your Code Here */

function createEmployeeRecord(emp) {
  return {
    firstName: emp[0],
    familyName: emp[1],
    title: emp[2],
    payPerHour: emp[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
  //return employeeRecord;
}
console.log(createEmployeeRecord(["Wambugu", "Njogu", "Principal", 50]));

let emps = [
  ["Ondieki", "Regano", "Driver", 20],
  ["Odhis", "Mariano", "Gym Instructor", 56],
];
function createEmployeeRecords(emps) {
  /*  this.firstName = firstName;
  this.familyName = familyName;
  this.title = title;
  this.payPerHour = payPerHour;
  this.timeInEvents = timeInEvents;
  this.timeOutEvents = timeOutEvents; */
  return emps;
}
createEmployeeRecords(createEmployeeRecord);

function createTimeInEvent(type, date, hour) {
  (this.type = type), (this.date = date), (this.hour = hour);
}
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const newDate = `${year}-${month}-${day}`;
const hour = date.getHours();
const minutes = date.getMinutes();
const time = `${hour}${minutes}`;
console.log(time);

const timestamp = new createTimeInEvent("TimeIn", newDate, time);
this.timeInEvents.push(timestamp);
console.log(createEmployeeRecord());

function createTimeOutEvent(type, date, hour) {
  (this.type = type), (this.date = date);
  this.hour = hour;
}
//const date = new Date()
const newTimestamp = new createTimeOutEvent(
  "TimeOut",
  date,
  date.getHours(),
  date.getMinutes()
);

let timeOutEvent = time_in.timeOutEvents;
timeOutEvent.push(newTimestamp);

const users = createEmployeeRecord();
function hoursWorkedOnDate() {
  let time_in = users.timeInEvents.map((user) => user.date).hour;
  let time_out = users.timeOutEvents.map((user) => user.date).hour;
  let calculateHours = time_out - time_in;
  return calculateHours;
}
const hoursIn = new hoursWorkedOnDate("2023-05-18 0700", "2023-05-18 1700");

function wagesEarnedOnDate(wages) {
  this.wages = wages;
  this.pay = function () {
    let hours_worked = hoursIn.hours();
    return hours_worked * this.wages;
  };
}
const payRate = new wagesEarnedOnDate(62);

/*  function allWagesFor(hours) {
  this.hours = hours;
  this.calculateWages = function () {
    const calculateWage = wagesEarnedOnDate();
    return calculateWage * this.hours;
  };
} 
const dateOne = new allWagesFor(16);
const dateTwo = new allWagesFor(13);
const dateThree = new allWagesFor(13);
console.log(dateOne.calculateWage()); */

function findEmployeeByFirstName(firstName) {
  const employee = createEmployeeRecord();
  let employeeName = employee.firstName;
  if (employeeName === firstName) {
    console.log("Matching record");
  } else {
    console.log("undefined");
  }
}
//maybe create a nested object within an array and iterate through it
findEmployeeByFirstName(["Wambugu", "Mwangi", "Accountant", 80], "Wambugu");

function calculatePayroll() {}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
