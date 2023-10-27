const BillAmount = document.querySelector("#cash-amount")
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#btn-check")
const errorMsg = document.querySelector("#error-msg")
const noteclass=document.querySelectorAll(".note")
const AvailableNotes=[500,200,100,50,20,10,5,1]

checkButton.addEventListener("click", validateBillAmount,false)

function validateBillAmount() {
    errorMsg.style.display="none";
    if (!isNaN(parseFloat(cashGiven.value)) &&
        (!isNaN(parseFloat(BillAmount.value)))) //check for valid number input //case like input=456h need to be covered seprarateky 
    {
        if (Number(BillAmount.value) < 0 || Number(cashGiven.value) < 0) {
            showerror("Please enter  amount >0")
         
        }
        else {
            if (Number(BillAmount.value) <= Number(cashGiven.value))// cash<billamount
            {
                
                const amounttoreturn=cashGiven.value-BillAmount.value
                calculate(amounttoreturn);
               
           }
            else {

                showerror("Please provide more cash  or Wash Dishes")
            }
        }
    }

    else {
        showerror("ERROR=Invalid amount 'String' entered,Please enter correct number  amount greater than 0 ")
    }

}
function calculate(amounttoreturn)
{
    for (let i=0;i<AvailableNotes.length;i++)
               {
               
               let noofNotes=Math.trunc(amounttoreturn/AvailableNotes[i])
               noteclass[i].innerHTML=noofNotes;
                amounttoreturn=amounttoreturn%AvailableNotes[i]
               }
               // console.log(amounttoreturn);

}
function showerror(msg) {
    errorMsg.style.display="block";
    errorMsg.innerHTML = msg;
}
// console.log(checkButton)
