import Module from "./module.js";
import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import cors from "cors";
import { createRequire } from "module";

const require = createRequire(import.meta.url);


const express = require('express');

// const app = express();

export default function Lab5(app){
    app.use(cors());   
    app.use(express.json());
                
    app.get("/lab5/welcome",(req,res) =>{
        res.send("Welcome to Lab 5");
    });
    PathParameters(app)
    QueryParameters(app)
    WorkingWithObjects(app)
    Module(app)
    WorkingWithArrays(app)
    // Lab5(app)
    // app.listen(4000);
};