function AddPower(pow : number){
    return function(targetClass : any){
        return class{
            title = new targetClass().title;
            power = pow
        }
    }
};

@AddPower(5)
class Hero{
    title = "Fatman"
}

let hero = new Hero();
console.log(hero.title, hero.power);