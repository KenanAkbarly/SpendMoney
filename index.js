
const sell = document.getElementsByClassName("sell");
const buy = document.getElementsByClassName("buy");
const elementMoney = document.getElementsByClassName("element_money");
const card = document.getElementsByClassName("card");
const mainCard = document.getElementsByClassName("main__cards");

let input = document.getElementsByClassName("input");
let money = document.getElementById("money");
let sellNumber = money.textContent;



for (let i = 0; i < card.length; i++) {
    let num = input[i].value;

    input[i].addEventListener("input", ()=>{
        num ++ ;
        sellNumber -= elementMoney[i].textContent;
        input[i].value = num;
        money.textContent = sellNumber;

        if (num !== 0) {
            sell[i].style.backgroundColor = "red";
        }

    });

    buy[i].addEventListener("click", function (e) {

        num++;
        sellNumber-=elementMoney[i].textContent;
        input[i].value = num;
        money.textContent = sellNumber;

        if (num !== 0) {
            sell[i].style.backgroundColor = "red";
        }
    });

    sell[i].addEventListener("click", function (e) {
        if (num !== 0) {
            num--;
            sellNumber += elementMoney[i].textContent;
            input[i].value = num;
            money.textContent = sellNumber;
            if (num === 0) {
                sell[i].style.background = "rgb(220, 220, 220)";
            }
}
});

}