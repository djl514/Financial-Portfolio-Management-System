export const assets = [
    { id: 1, name: "IBM Bond", type: "Bond", price: 1000, quantity: 100},
    { id: 2, name: "IBM Stock", type: "Stock", price:10000, quantity: 1000}
];

export function getAssetByID(id){
    return assets.find(asset => asset.id === id);
}