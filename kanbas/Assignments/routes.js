import * as dao from "./dao.js";
import * as AssignmmnetDuo from "./dao.js";


export default function AssignmentRoutes(app) {
  app.post("/api/Assignments/:AssignmentId", (req, res) => {
    const { AssignmentId } = req.params;
    const assignment = {
      ...req.body,
      Assignment: AssignmentId,
    };
    const newAssignment = AssignmmnetDuo.createAssignment(assignment);
    res.send(newAssignment);
  });
  app.post("/api/Assignments/:AssignmentId", (req, res) => {
    const { AssignmentId } = req.params;
    const assignment = {
      ...req.body,
      Assignment: AssignmentId,
    };
    const newAssignment = AssignmmnetDuo.createAssignment(assignment);
    res.send(newAssignment);
  });
  app.get("/:courseId/api/Assignments/:assignmentId",(req,res) => {
    const {courseId,assignmentId} = req.params;
    // console.log(courseId)
    // console.log(assignmentId)
    const Assignment = AssignmmnetDuo.findAssignmentById(courseId,assignmentId)
    res.send(Assignment);
  })
  app.put("/api/Assignments/:assignmentId", (req, res) => {
    console.log(req.params)
    const { assignmentId } = req.params;
    
    const AssignmentUpdates = req.body;
   
    const status = dao.updateAssignment(assignmentId, AssignmentUpdates);
    res.send(status);
  });
  app.get("/api/Assignments", (req, res) => {
    const Assignments = dao.findAllAssignments();
    res.send(Assignments);
  });
  app.delete("/api/Assignments/:AssignmentId", (req, res) => {
    const { AssignmentId } = req.params;
    const status = dao.deleteAssignment(AssignmentId);
    res.send(status);
  });

  
}


