// Update Memory Price
function updateMemoryPrice(memoryPrice) {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = memoryPrice;
    updateTotal();
};
document.getElementById('memory-price8gb').addEventListener('click', function () {
    updateMemoryPrice(0);
});
document.getElementById('memory-price16gb').addEventListener('click', function () {
    updateMemoryPrice(180);

});
// Update Storage price
function updateStoragePrice(storagePrice) {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = storagePrice;
    updateTotal();
};
document.getElementById('storage-price256gb').addEventListener('click', function () {
    updateStoragePrice(0)

});
document.getElementById('storage-price512gb').addEventListener('click', function () {
    updateStoragePrice(100)

});
document.getElementById('storage-price1tb').addEventListener('click', function () {
    updateStoragePrice(180)
});
// Updated Shipping Cost
function updateDeliveryCost(deliveryCost) {
    const deliveryCharge = document.getElementById('delivery-cost');
    deliveryCharge.innerText = deliveryCost;
    updateTotal();
};
document.getElementById('delivery-cost25').addEventListener('click', function () {
    updateDeliveryCost(0);
});
document.getElementById('delivery-cost21').addEventListener('click', function () {
    updateDeliveryCost(20);
});
// Updated Total Price
const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCharge = document.getElementById('delivery-cost');
function updateTotal() {
    const totalPrice = document.getElementById('total-price');
    const bestPriceText = bestPrice.innerText;
    const parseBestPrice = parseFloat(bestPriceText);
    const memoryCostText = memoryCost.innerText;
    const parseMemoryCost = parseFloat(memoryCostText);
    const storageCostText = storageCost.innerText;
    const parseStorageCost = parseFloat(storageCostText);
    const deliveryCostText = deliveryCharge.innerText;
    const parseDeliveryCost = parseFloat(deliveryCostText);
    totalPrice.innerText = parseBestPrice + parseMemoryCost + parseStorageCost + parseDeliveryCost;
    return parseFloat(totalPrice.innerText);
};
// Update Promo code
document.getElementById('promo-button').addEventListener('click', function () {
    const inputNumber = document.getElementById('promo-input');
    const inputValue = inputNumber.value;

    const grandTotal = updateTotal();
    const discountTotal = document.getElementById('discount-total')
    if (inputValue == 'stevekaku') {
        const discountPrice = (grandTotal / 100) * 20;
        discountTotal.innerText = grandTotal - discountPrice;
    }
    inputNumber.value = '';
});