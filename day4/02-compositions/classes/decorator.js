"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AddPower(pow) {
    return function (targetClass) {
        return /** @class */ (function () {
            function class_1() {
                this.title = new targetClass().title;
                this.power = pow;
            }
            return class_1;
        }());
    };
}
;
var Hero = /** @class */ (function () {
    function Hero() {
        this.title = "Fatman";
    }
    Hero = __decorate([
        AddPower(5)
    ], Hero);
    return Hero;
}());
var hero = new Hero();
console.log(hero.title, hero.power);
