//BUDGET CONTROLLER
var budgetController = (function () {

})();


//UI CONTROLLER
var UIController = (function () {

})();

//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {
        //1. GET INPUT FIELD DATA


        //2. ADD ITEM TO BUDGET CONTROLLER

        //3.ADD ITEM TO UI

        //4. CALCULATE A BUDGET

        //5. DISPLAY THE BUDGET ON UI

        console.log('It works');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);