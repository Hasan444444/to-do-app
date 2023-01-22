var StName = document.getElementById("name");
var roll = document.getElementById("roll");
var dept = document.getElementById("dept");
var cgpa = document.getElementById("cgpa");
var btn = document.getElementById("Btn");

btn.addEventListener('click',function(pera){
    pera.preventDefault();
   console.log(StName.value);
 

    if(StName.value==''){
        alert("vai name faka");

    }
    else if (roll.value==''){
     alert("vai roll faka ");
    }

    else if (dept.value==''){
        alert("vai dept faka ");
       }
       else if (cgpa.value==''){
        alert("vai cgpa faka ");
       }
       else{
        var tbody = document.getElementById(tbody);
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerHTML = StName.value;
        tr.appendChild(td);
        tbody.appendChild(tr);


       tr.appendChild
       }
});