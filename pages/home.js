const I = actor();


module.exports = {

    // setting locators
    elements: {
        paymentLink: '.footer__Footer__navFullSubList_1oYoL [href="/payments/"]',
    },
    //Переход на tinkoff.ru
    goToHomePage() {
        I.amOnPage("/");
    },
    //Клик на линк Плтежи в футере
    clickOnPayments() {
        I.click(this.elements.paymentLink);
    },

};