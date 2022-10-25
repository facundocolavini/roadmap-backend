"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    const validateDate = (myDate) => {
        return (isNaN(myDate.valueOf())) ? true : false;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText("Facu"));
//# sourceMappingURL=main.js.map