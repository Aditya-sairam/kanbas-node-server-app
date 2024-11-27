import * as dao from "./dao.js"
import * as courseDao from "../Courses/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

export default function UserRoutes(app) {
  const createuser = (req, res) => { };
  const deleteUser = (req, res) => { };
  const findAllUsers = (req, res) => { };
  const findUserById = (req, res) => { };
  
  const updateUser = (req, res) => {
    const userId = req.params.userId;
    const userUpdates = req.body;
    dao.updateUser(userId, userUpdates);
    const currentUser = dao.findUserById(userId);
   
    res.json(currentUser);
  };

  // const updateuser = (req,res) => {
  //   const userId = req.params.userId;
  //   const userUpdates = req.body; 
  //   dao.updateUser(userId,userUpdates);
  //   res.json(currentUser)
  // }


  const signup = async (req, res) => {
    const user = dao.findByUsername(req.body);
    if (user) {
      res.status(400).json(
        { message: "Username already in use" });
      return;
    }
    const currentUser = await dao.createUser(req.body);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };

  const signout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };
  const profile = async (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    res.json(currentUser);
  };

  const signin = (req, res) => {
    const { username, password } = req.body;
    const currentUser = dao.findUserByCredentials(username, password);
    if (currentUser) {
      console.log(currentUser)
      req.session["currentUser"] = currentUser;
      console.log("The req session currentUser is")
      console.log(req.session["currentUser"] )
      res.json(currentUser);
    } else {
      res.status(401).json({ message: "Unable to login. Try again later." });
    }
  };


  const findCoursesForEnrolledUser = (req, res) => {
    let { userId } = req.params;
    if (userId === "current") {
      const currentUser = req.session["currentUser"];
      if (!currentUser) {
        console.log("The current user is!")
      console.log(currentUser)
        res.sendStatus(401);
        return;
      }
    
      userId = currentUser._id;
    }
    const courses = courseDao.findCoursesForEnrolledUser(userId);
    res.json(courses);
  };
  const createCourse = (req, res) => {
    const currentUser = req.session["currentUser"];
    const newCourse = courseDao.createCourse(req.body);
    enrollmentsDao.enrollUserInCourse(currentUser._id, newCourse._id);
    res.json(newCourse);
  };
  const enrollUserInCourse = (req,res) => {
    const currentUser = req.session["currentUser"];
    const enrollCourse = req.body;
    console.log("This is the course!")
    console.log(enrollCourse)
    enrollmentsDao.enrollUserInCourse(currentUser._id,enrollCourse._id);
    //console.log()
    res.json(enrollCourse)
  }

  const unenrollUsersFromCourse = (req,res) => {
    const currentUser = req.session["currentUser"];
    const enrollCourseId = req.params.courseId;
    console.log("Course id from Routes")
    console.log(enrollCourseId)
    enrollmentsDao.unEnrollUsers(currentUser._id,enrollCourseId);
    // enrolledCourse = 
    res.send(enrollCourseId)
  }
  app.post("/api/users/:userId/enrollCourse",enrollUserInCourse);
  app.get("/api/users/:userId/unenrollCourse/:courseId",unenrollUsersFromCourse);
  app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);

  app.post("/api/users/current/courses", createCourse);
  app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);
  app.post("/api/users", dao.createUser);
  app.get("/api/users", dao.findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);



}