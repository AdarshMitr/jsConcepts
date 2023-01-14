const Person={
    Name:'Adarsh Kumar Patel',
    Age: 28,
    Salary: '$ 55000',
    Description: function (){return 
        this.Name + " " + this.Age
    }
};

document.getElementById('console').innerHTML=
//Person.Age;
// Person.Name;
// Person.Salary
// Person['Name'];
//Person['Salary']

`My name is ${Person.Name} and
 my age is ${Person.Age} years old.`
Person.Description();
