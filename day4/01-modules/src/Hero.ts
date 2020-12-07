import { Person } from "./Person.js";

export class Hero extends Person{
    firstname : string;
    lastname : string;
    constructor(title:string , fname:string , lname:string ){
        super(title);
        this.firstname = fname;
        this.lastname = lname;
    }
    fullname():string{
        return "Mr. "+this.firstname+" "+this.lastname;
    }
}