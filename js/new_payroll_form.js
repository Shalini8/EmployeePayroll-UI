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
});


const save = () => {
  try {
      let employeePayrollData = createEmployeePayroll();
      createAndUpdateStorage(employeePayrollData);
  } catch (e) {
      return;
  }
}
function createAndUpdateStorage(employeePayrollData){
  let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

  if(employeePayrollList!=undefined){
      employeePayrollList.push(employeePayrollData);
  }
  else{
      employeePayrollList = [employeePayrollData];
  }
  alert(employeePayrollList.toString());
  localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}

const createEmployeePayroll = () => {
  let employeePayrollData = new EmployeePayrollData();
  try {
      employeePayrollData.name = getInputValueById("#name");
  } catch (e) {
      setTextValue(".text-error", e);
      throw e;
  }
  employeePayrollData.profilePic = getSelectedValues("[name=profile]").pop();
  employeePayrollData.gender = getSelectedValues("[name=gender]").pop();
  employeePayrollData.department = getSelectedValues("[name=department]");
  employeePayrollData.salary = getInputValueById("#salary");
  employeePayrollData.note = getInputValueById("#notes");
  let date =
      getInputValueById("#day") +
      "-" +
      getInputValueById("#month") +
      "-" +
      getInputValueById("#year");
      employeePayrollData.startDate = new Date(date);
  alert(employeePayrollData.toString());
  return employeePayrollData;
}
const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let selItems = [];
  allItems.forEach((item) => {
      if (item.checked) selItems.push(item.value);
  });
  return selItems;
};

/**
* querySelector is the newer feature.
* It is used when selecting by element name,nesting or class-name.
* It will let you find elements with rules that can't be expressedwith getElementById.
*/
const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
}
/**
* getElementById is better supported than qurySelector method in older versions of the browsers.
* It will allow to select element by only it's id.
*/
const getInputElementValue = (id) => {
  let value = document.getElementById(id).value;
  return value;
}
const resetForm = () => {
  document.querySelector("#name").value = "";
  unsetSelectedValues("[name=profile]");
  unsetSelectedValues("[name=gender]");
  unsetSelectedValues("[name=department]");
  document.querySelector(".salary-output").textContent=400000;
  document.querySelector("#day").value = 01;
  document.querySelector("#month").value = 01;
  document.querySelector("#year").value = 2020;
  document.querySelector("#notes").value= "";
  document.querySelector(".date-error").textContent = "";
}

const unsetSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  allItems.forEach(item=>{
      item.checked = false;
  });
}
const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
}
const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.value = value;
}



