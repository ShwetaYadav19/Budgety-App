//BUDGET CONTROLLER
var budgetController = (function () {

})();


//UI CONTROLLER
var UIController = (function () {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescritption: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value,//It will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescritption).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        getDOMStrings: function () {
            return DOMStrings;
        }
    };

})();

//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMStrings();
    var ctrlAddItem = function () {
        //1. GET INPUT FIELD DATA
        var input = UICtrl.getInput();
        console.log(input);

        //2. ADD ITEM TO BUDGET CONTROLLER

        //3.ADD ITEM TO UI

        //4. CALCULATE A BUDGET

        //5. DISPLAY THE BUDGET ON UI

        console.log('It works');
    }

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);