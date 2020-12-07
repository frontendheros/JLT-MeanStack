interface IHero{
    power;
    city;
    fullname()
    showpower()
};
class Hero implements IHero{
    fname;
    lname;
    power;
    city;
    constructor(rfname:string, rlname:string, rpower:number, rcity:string){
        this.fname = rfname;
        this.lname = rlname;
        this.city = rcity;
        this.power = rpower;
    }
    fullname(){
        return this.fname+" "+this.lname
    }
    showpower(){
        return this.power
    }
}

let hero = new Hero("Bruce","Wayne",6, "gotham");

