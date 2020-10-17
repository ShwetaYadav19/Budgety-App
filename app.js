//BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function (type, des, val) {
            var newItem, ID = 0;

            //ID = last ID + 1
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            //Create new Item
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);

            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            //Push newItem to array
            data.allItems[type].push(newItem);

            //Return newItem
            return newItem;
        },

        testing: function () {
            console.log(data);
        }
    };
})();


//UI CONTROLLER
var UIController = (function () {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescritption: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    }
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value,//It will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescritption).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        addListItem: function (obj, type) {
            var html, newHtml, element;
            //Create html string with placeholder text
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%">  <div class="item__description">%description%</div> <div class="right clearfix"><div class="item__value">%value%</div>' +
                    '<div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div>' +
                    '<div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //Replace the placeholder text with soem actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            //Insert the html into the DOM 
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearField: function () {
            var fields, fieldsArray;
            fields = document.querySelectorAll(DOMStrings.inputDescritption + ',' + DOMStrings.inputValue);

            fieldsArray = Array.prototype.slice.call(fields);

            fieldsArray.forEach(function (current, index, array) {
                current.value = "";
            });

            fieldsArray[0].focus();
        },

        getDOMStrings: function () {
            return DOMStrings;
        }
    };

})();

//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {

        var DOM = UICtrl.getDOMStrings();
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function () {
        var input, newItem;
        //1. GET INPUT FIELD DATA
        input = UICtrl.getInput();

        //2. ADD ITEM TO BUDGET CONTROLLER
        newItem = budgetController.addItem(input.type, input.description, input.value);

        //3.ADD ITEM TO UI
        UICtrl.addListItem(newItem, input.type);

        //4.Clear the fields
        UICtrl.clearField();

        //5. CALCULATE A BUDGET

        //6. DISPLAY THE BUDGET ON UI

        console.log('It works');
    }

    return {
        init: function () {
            console.log('Application has started');
            setupEventListeners();
        }
    }


})(budgetController, UIController);

controller.init();