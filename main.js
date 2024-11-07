import { getPortfolioAllocation, calculatePortfolioValue  } from './portfolio.js';
import { Transaction } from './transaction.js';



function displayDetails(){
    let portfolioDetails = document.getElementById('portfolioDetails');

    let listItem = document.createElement('div')
    listItem.innerHTML = 
    `
    <table border="1">
    <tr>
    <th colspan = "2">Portfolio Information</th>
    </tr>
    <tr><td><b>Total Portfolio Value:</b></td><td>$${calculatePortfolioValue()}</td></tr>
    <tr><td><b>Portfolio Allocation:</b></td><td>${getPortfolioAllocation()}%</td></tr>
    </table>
    `;

    portfolioDetails.appendChild(listItem);
}

displayDetails();