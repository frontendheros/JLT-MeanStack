var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Person } from "./Person.js";
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(title, fname, lname) {
        var _this = _super.call(this, title) || this;
        _this.firstname = fname;
        _this.lastname = lname;
        return _this;
    }
    Hero.prototype.fullname = function () {
        return "Mr. " + this.firstname + " " + this.lastname;
    };
    return Hero;
}(Person));
export { Hero };
