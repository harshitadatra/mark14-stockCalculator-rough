const initialPrice = document.querySelector("#initial-price");
const stocksQuantity =document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const checkBtn =  document.querySelector("#check-button");
const message =   document.querySelector("#message-display");
 
checkBtn.addEventListener("click", function clickHandler()
{
    // console.log("button clicked");
    var initial = Number(initialPrice.value);
    var  quantity =Number(stocksQuantity.value);
    var current = Number (currentPrice.value);
    calculateProfitLoss(initial,quantity,current);
});
function calculateProfitLoss(initial,quantity,current)
{
    if(initial>current)
    {
        //loss logic
        var loss = initial-current;
        var lossPercentage = (loss/initial)*100;
        showMessage(`hey the loss is ${loss} and the loss percentage is ${lossPercentage}`);

    }
    else if(current > initial)
    {
       //profit logic
       var profit =current-initial;
       var profitPercentage = (profit/initial);
       showMessage(`hey the profit is ${profit} and the profit percentage is ${profitPercentage}`);
    }
    else{
        //display message 
     showMessage("no pain no gain");
    }

}
function showMessage(msg)
{
    message.innerText = msg;
   
}
// calculateProfitLoss(100,2,10);