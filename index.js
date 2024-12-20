import express from 'express';
import Lab5 from './Lab5/index.js';
import UserRoutes from './kanbas/Users/routes.js';
import session from "express-session";
import "dotenv/config";
import cors from "cors";
import CourseRoutes from './kanbas/Courses/routes.js';
import ModuleRoutes from './kanbas/Modules/routes.js';
import AssignmentRoutes from './kanbas/Assignments/routes.js';


const app = express() 


app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000" || process.env.NETLIFY_URL ,
    })
  );
  

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }

app.use(session(sessionOptions));  
app.use(express.json());  
UserRoutes(app);
CourseRoutes(app)
ModuleRoutes(app);
AssignmentRoutes(app)


app.listen(4000||process.env.PORT )
