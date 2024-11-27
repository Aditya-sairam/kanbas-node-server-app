const object = {
    id:1,title:"Example Object",
    description:"This is an example of an object"
}

export default function Objects(app){
    app.get("/practicelab/objects",(req,res) =>{
        res.json(object);
    })
}