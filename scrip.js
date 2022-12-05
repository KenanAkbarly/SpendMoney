let totalMoneyElement =document.querySelector('#totalMoney') 
let elonMuskMoney = 199000000000;
let spendedMoney = 0;
let inputValue =document.querySelector('.sidebar_products_item_btns_input');
let buyButtons  = document.querySelector('.btn_buy_bigmac');
let sellButtons  = document.querySelector('.btn_sell_bigmac');
let newInputValue = 0;
let priceProductBigMac = 2; 
// if(spendedMoney == 199000000000) return true
let totalMoney = 0;
inputValue.addEventListener('keyup',()=>{
   
    let newTotalMoneyElement = (elonMuskMoney ) - (inputValue.value)*priceProductBigMac;
   
    if(newTotalMoneyElement> 0){
        totalMoneyElement.innerHTML =`$${newTotalMoneyElement} ` ;
    }
    else{
        totalMoneyElement.innerHTML =`$0 ` ;
    }

   
    spendedMoney = elonMuskMoney - newTotalMoneyElement;

    inputValue.value -1;

    console.log(spendedMoney);

    // inputValue.value ++;
   

})
buyButtons.addEventListener('click',()=>{
   
    let newTotalMoneyElement = (elonMuskMoney -2) - (inputValue.value)*priceProductBigMac;

    totalMoneyElement.innerHTML =`$${newTotalMoneyElement} ` ;
    spendedMoney = elonMuskMoney - newTotalMoneyElement;

    inputValue.value;

    // console.log(spendedMoney);

    inputValue.value ++;
    console.log(totalMoney);

})

sellButtons.addEventListener('click',()=>{
   if(totalMoney < elonMuskMoney){
       let neTotalMoneyElement =  newTotalMoneyElement + 2;
   
       totalMoneyElement.innerHTML =`$${neTotalMoneyElement }` ;
   }
    // spendedMoney = elonMuskMoney - neTotalMoneyElement;

    inputValue.value;

    
    inputValue.value --;
    
})

