window.addEventListener("DOMContentLoaded",(event)=>{
  const name = document.querySelector('#name');
  const textError = document.querySelector(".text-error");         
  name.addEventListener('input',function(){
      if(name.value.length==0){
          textError.textContent="";
          return;
  }
      try {
        (new EmployeePayrollData()).name = name.value;
        textError.textContent = "";
        } catch (e) {
          textError.textContent = e;
        } 
      });
    

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});

let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let dateError = document.querySelector(".date-error");    
day.addEventListener('click',checkDate);
month.addEventListener('click',checkDate);
year.addEventListener('click',checkDate);
dateError.textContent="Date is invalid";

});
