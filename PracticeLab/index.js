
import PathParameters from "./PathParameters.js";
import Objects from "./Objects.js";
import WorkingWithArrays from "./WorkingWithArrays.js";


export default function PracticeLab(app) {
    app.get("/practicelab/welcome",(req,res) => {
        res.send("Welcome to practice Labs!");
    })
    Objects(app)
    WorkingWithArrays(app);
}