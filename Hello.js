export default function Hello(app) {

application.get("/hello",(req,res) => {
    res.send("Life is good!")
});
application.get("/",(req,res) =>{
    res.send("Welcome to full stack development!")
});
}