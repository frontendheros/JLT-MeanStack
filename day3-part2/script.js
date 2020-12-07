;
var Hero = /** @class */ (function () {
    function Hero(rfname, rlname, rpower, rcity) {
        this.fname = rfname;
        this.lname = rlname;
        this.city = rcity;
        this.power = rpower;
    }
    Hero.prototype.fullname = function () {
        return this.fname + " " + this.lname;
    };
    Hero.prototype.showpower = function () {
        return this.power;
    };
    return Hero;
}());
var hero = new Hero("Bruce", "Wayne", 6, "gotham");
