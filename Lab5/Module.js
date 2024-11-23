const module = {
    id: 1, 
    name: "Modules",
    description: "Create a NodeJS server with ExpressJS",
    course:"Computer Science",
  };
  export default function Module(app) {
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });
    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
      });
      app.get("/lab5/module/name/:newname", (req, res) => {
        const { newname } = req.params;
        module.name = newname;
        res.json(module);
      });
      app.get("/lab5/module/name/:newname", (req, res) => {
        const { newname } = req.params;
        module.name = newname;
        res.json(module);
      });
    
  };
  