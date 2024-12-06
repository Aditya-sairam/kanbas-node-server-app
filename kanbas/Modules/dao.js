import Database from "../Database/index.js";
import model from "./model.js";


export function createModule(module) {
 delete module._id
 return model.create(module);
 // const newModule = { ...module, _id: Date.now().toString() };
 // Database.modules = [...Database.modules, newModule];
 // return newModule;
}


export function deleteModule(moduleId) {
  return model.deleteOne({ _id: moduleId });

 }
 

   export function findModulesForCourse(courseId) {
    return model.find({ course: courseId });
    // const { modules } = Database;
    // return modules.filter((module) => module.course === courseId);
   }
   
// export function createModule(module) {
//   delete module._id
//   return model.create(module);
//  }
 
export function updateModule(moduleId, moduleUpdates) {
  return model.updateOne({ _id: moduleId }, moduleUpdates);
  // const { modules } = Database;
  // const module = modules.find((module) => module._id === moduleId);
  // Object.assign(module, moduleUpdates);
  // return module;
 }
 
  export default function ModuleRoutes(app) {
  app.put("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    const status = await modulesDao.updateModule(moduleId, moduleUpdates);
    res.send(status);
  });

  }