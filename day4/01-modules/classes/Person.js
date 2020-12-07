var Person = /** @class */ (function () {
    function Person(rtitle) {
        this.title = rtitle;
    }
    return Person;
}());
export { Person };
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.canwalk = function () {
        return "yes i can walk";
    };
    return Human;
}());
export { Human };
