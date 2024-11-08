// creates and exports asset array of objects
export const assets = [
    { id: 1, name: "IBM Bond", type: "Bond", price: 1000, quantity: 100},
    { id: 2, name: "IBM Stock", type: "Stock", price: 100, quantity: 1000}
];

//creates and exports a helper function to get the asset by ID
export function getAssetByID(id){
    return assets.find(asset => asset.id === id);
}