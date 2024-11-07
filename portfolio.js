import { assets } from './asset.js';

export function calculatePortfolioValue(){
    let value = assets.reduce((total, asset) =>
        total + (asset.price * asset.quantity), 0);
    return value;
}

export function getPortfolioAllocation(){
    let total = assets.reduce((sum, quant) => 
        sum + quant.quantity,0);
    assets.forEach(asset => {
        let percent = (asset.quantity / total) * 100;
        return percent.toFixed(2);
    });
}