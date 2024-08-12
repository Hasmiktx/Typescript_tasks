const num:number=15;
const str:string="John";
const isBollean:boolean=true;

function add(num:number):number{
    return num+10
}

function greeting(str:string):void{
   console.log(`Hello ${str}`)
   
}

function check(bool:boolean):boolean|string{
    if(bool){
        return !bool
    }else{
        return "already false value"
    }
}


