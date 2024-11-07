import { assets, getAssetByID } from './asset.js';


export class Transaction{
    // takes in an assetId, type, and quantity
    constructor(assetId, type, quantity){
        this.type = type;
        this.quantity = quantity;
        this.assetId = assetId;

        let item = getAssetByID(this.assetId)
        // buy increases quantity while sell decreases quantity
        if (this.type == "sell"){
            item.quantity -= this.quantity;
        } else if (this.type == "buy"){
            item.quantity += this.quantity;
        // type is signified by buy or sell, if neither of these are specified, an error is thrown 
        } else if (this.type != "buy" || this.type != "sell"){
            throw new Error (`${this.type} type is not accepted`);
        }  

        // if quantity is greater than the stock, throw an error
        if (this.quantity > item.quantity){
            throw new Error (`Not enough quantity of ${item.name}`);
        }
    }
}

