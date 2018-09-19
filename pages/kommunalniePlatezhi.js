const I = actor();

module.exports = {

    // setting locators
    elements: {
        zkhChangeRegionLocator: '[data-qa-file="PaymentsCatalogHeader"]',
        imgLocatorRegion: '[data-qa-file="PaymentsCatalogHeader"]',
        locatorCitySelection: '[data-qa-file="UILink"]',
    },
    // Клик на смену региона
    clickOnChangeRegion(){
        I.waitForElement(this.elements.imgLocatorRegion);
        I.click(this.elements.zkhChangeRegionLocator);
    },
    //Клик на первую ссылку
    clickOnFirstLink(){
        I.waitForElement(this.elements.locatorCitySelection);
        I.click(this.elements.locatorCitySelection);
    }

};