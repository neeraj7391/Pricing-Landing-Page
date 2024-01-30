const { Collection } = require("mongoose");

document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const basicPrice = document.getElementById('basicPrice');
    const proPrice = document.getElementById('proPrice');
    const premiumPrice = document.getElementById('premiumPrice');
    const currencySelect = document.getElementById('currency');
    const unitSelect = document.getElementById('unit');
    const pricingStructure = document.querySelectorAll('.pricing-structure');

    toggleSwitch.addEventListener('change', function () {
        updatePricing();
    });

    currencySelect.addEventListener('change', function () {
        updatePricing();
    });

    unitSelect.addEventListener('change', function () {
        updatePricing();
    });

    function updatePricing() {
        const currencySymbol = currencySelect.value;
        const unit = unitSelect.value;
        
        if (toggleSwitch.checked) {
            basicPrice.textContent = `${currencySymbol}90/year`;
            proPrice.textContent = `${currencySymbol}180/year`;
            premiumPrice.textContent = `${currencySymbol}270/year`;
            updatePricingStructure(unit);
        } else {
            basicPrice.textContent = `${currencySymbol}10/${unit}`;
            proPrice.textContent = `${currencySymbol}20/${unit}`;
            premiumPrice.textContent = `${currencySymbol}30/${unit}`;
            updatePricingStructure(unit);
        }
    }

    function updatePricingStructure(unit) {
        pricingStructure.forEach(function (element) {
            const plan = element.dataset.plan;
            const extra = element.dataset.extra ? `<br> - ${element.dataset.extra}` : '';

            element.innerHTML = `Access to ${plan} features:<br> - Feature 1<br> - Feature 2<br> - Feature 3<br> - Feature 4${extra}`;
        });
    }
});

