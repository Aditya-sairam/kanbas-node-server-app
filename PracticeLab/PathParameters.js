export default function PathParams(app){
    app.get("/practicelab/add/:a/:b",(req,res) => {
        const {a,b} = req.params;
        const sum = parseInt(a) + parseInt(b);
        res.send(sum.toString())
    })
}