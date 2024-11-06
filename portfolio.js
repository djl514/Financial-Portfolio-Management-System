import { assets } from './asset.js';

export function calculatePortfolioValue(){
    let value = assets.reduce((total, asset) =>
        total + (asset.price * asset.quantity), 0);
    return value;
}