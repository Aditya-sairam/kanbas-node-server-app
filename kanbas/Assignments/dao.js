import Database from "../Database/index.js";
import * as assignmentDuo from "./dao.js";
import model from "./model.js";


export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });

    // const { assignments } = Database;
    // Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
   }
  
export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
  // const { assignments } = Database;
  // return assignments.filter((assignments) => assignments.course === courseId);
}

export function findAssignmentById(courseId,assignmentid) {
  const { assignments } = Database;
  return assignments.filter((assignments) => assignments.course === courseId && assignments._id === assignmentid);
}
export function createAssignment(assignment) {
  delete assignment._id
  return model.create(assignment);
    // const newAssignment = { ...assignment, _id: Date.now().toString() };
    // Database.assignments = [...Database.assignments, newAssignment];
    // return newAssignment;
  }

 
  export function updateAssignment(assignmentId, assignmentUpdate) {
    return model.updateOne({ _id: assignmentId }, assignmentUpdate);
    // const { assignments } = Database;
    // console.log(assignmentId)
    // const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    // console.log(assignment)
    // Object.assign(assignment, assignmentUpdate);
    // return assignment;
  }

  // export function updateModule(moduleId, moduleUpdates) {
  //   return model.updateOne({ _id: moduleId }, moduleUpdates);
  //   // const { modules } = Database;
  //   // const module = modules.find((module) => module._id === moduleId);
  //   // Object.assign(module, moduleUpdates);
  //   // return module;
  //  }
  export default function AssignmentRoutes(app) {
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await assignmentDuo.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });

  }