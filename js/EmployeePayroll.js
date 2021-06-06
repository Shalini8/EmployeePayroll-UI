class EmployeePayrollData{

    //getter and setter
    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if(nameRegex.test(name)){
            this._name = name;
        }
        else throw 'Name is incorrect: '+name;
    }
    get image(){
        return this._image;
    }
    set image(image){
        this._image = image;
    }
    get gender(){
        return this._gender;
    }
    set gender(gender){
        let genderRegex = RegExp("^[MF]$");
        if(genderRegex.test(gender))
            this._gender = gender;
        else throw "Gender incorrect: "+gender+". Choose M or F";
    }
    get department(){
        return this._department;
    }
    set department(department){
        this._department = department;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        let salaryRegex = RegExp("^[1-9][0-9]{0,}$");
        if(salaryRegex.test(salary))
            this._salary = salary;
        else throw 'Salary is incorrect: '+salary;
    }
    
    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        if(startDate.getMonth()<=(new Date()).getMonth()
           &&startDate.getDay()<=(new Date()).getDay()
           &&startDate.getFullYear()<=(new Date()).getFullYear())
            this._startDate = startDate;
        else throw "Date is incorrect: "+startDate.toLocaleDateString("en-IN");
    }

    //toString
    toString(){
        const options = {year: 'numeric', month: 'numeric', day:'numeric'};
        const empDate = this.startDate == undefined ? "undefined":
                        this.startDate.toLocaleDateString("en-IN",options);
        return "Name = "+this.name +",gender = "+this.gender+",departments = "+this.department+",salary = "+this.salary+",start date = "+empDate;
    }
}