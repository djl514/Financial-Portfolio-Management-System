//Imports all other important functions from other files
import { getPortfolioAllocation, calculatePortfolioValue } from './portfolio.js';
import { Transaction } from './transaction.js';



//inputs the classes into an array so they can be iterated over for display
let receipts = [
    new Transaction(1, "sell", 50),
    new Transaction(2, "buy", 200),
    new Transaction(1, "buy", 25)
];


// function to display the total value, percentage allocated, and receipts
function displayDetails(){
    let portfolioDetails = document.getElementById('portfolioDetails');
    let portfolioPurchases = document.getElementById('portfolioTrans');
    

    let listItem = document.createElement('div');
    listItem.innerHTML = 
    `
    <h3><center>Total Portfolio Value: $${calculatePortfolioValue()}</center></h3>
    `;
    portfolioDetails.appendChild(listItem);

    //Uses a forEach loop to display the receipts in a table
    // loops through receipts
    receipts.forEach(receipt => {
        let listReceipt = document.createElement('table')

        listReceipt.innerHTML = 
        `
        <hr>
        <tr><td><b>Asset:</b></td><td>${receipt.assetId}</td></tr>
        <tr><td><b>Type:</b></td><td>${receipt.type}</td></tr>
        <tr><td><b>Amount:</b></td><td>${receipt.quantity}</td></tr>

        `;

        portfolioPurchases.appendChild(listReceipt);
    });

}

//Separate function to loop throught getPortfolioAllocation
function displayPercentages(){
    let portfolioPercent = document.getElementById('portfolioPercentages');
    let percentages = getPortfolioAllocation();
    percentages.forEach(percentage => {
        let listPercent = document.createElement('table')
        listPercent.innerHTML = 
        `
        <tr><td><b>${percentage.name}: </b></td><td>${percentage.percentageAll}%</td></tr>
        `;

        portfolioPercent.appendChild(listPercent);
    });
}


//Calls functions
displayDetails();
displayPercentages();

