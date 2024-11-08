// imports assets
import { assets } from './asset.js';

// function to find the total value of the portfolio
export function calculatePortfolioValue(){
    let value = assets.reduce((total, asset) =>
        total + (asset.price * asset.quantity), 0);
    return value;
}

//function calculates the percent of allocation for the portfolio
export function getPortfolioAllocation(){
    const percentAllocated = [];
    let total = assets.reduce((sum, quant) => 
        sum + quant.quantity,0);
    assets.forEach(asset => {
        let percent = ((asset.quantity / total) * 100).toFixed(2);
        let obj = { name: asset.name, percentageAll: percent };
        percentAllocated.push(obj);
    });
    return percentAllocated;
    
}

