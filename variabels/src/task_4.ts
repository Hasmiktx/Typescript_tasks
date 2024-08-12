type DataType ={
    id:number;
    name:string;
    occupation?:string
}

function fetchData():Promise<DataType>{
   return new Promise((res,rej)=>{
    setTimeout(()=>(
        res({
            id:1,
            name:"John"
        })
    ),1500)
   })
}

async function getData():Promise<DataType|undefined>{   //is correct?
   try{
    console.log("start----")
    const respose= await fetchData();
    console.log("fetching success:",respose)
     return respose;
     
   }catch(err){
        console.log(err)
   }
}

getData()


