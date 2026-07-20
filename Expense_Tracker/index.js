const input=document.getElementById("des")
const input1=document.getElementById("salary")
const btn = document.getElementsByTagName("button")
const h3=document.getElementById("balance")
const h4=document.getElementById("income")
const h5=document.getElementById("Expense")
const history = document.getElementById("history");
let balance=0;
let income=0;
let expense=0
d={}
btn[0].addEventListener("click",()=>{
    if (input.value.trim() === "") {
    alert("Please enter a description");
    return;
}
if (input1.value.trim() === "") {
    alert("Please enter an amount");
    return;
}

    if (input.value!="Salary" && input.value!="Freelancing"){
        d[input.value]=Number(input1.value)
        expense+=Number(input1.value)
        balance-=Number(input1.value)

    }
    else{
        balance+=Number(input1.value)
        d[input.value]=Number(input1.value)
        income+=Number(input1.value)

     
    }
    h3.textContent=balance
    h4.textContent=income
    h5.textContent=expense
    let p = document.createElement("p");
    p.textContent = input.value + " : " + input1.value;
    history.appendChild(p);
    input.value=''
    input1.value=''
    
 
})
