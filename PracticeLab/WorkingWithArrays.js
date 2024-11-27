const todos = [{id:1,title:"New Task",completed:true},
    {id:"1",title:"New Task",completed:"false"},
    {id:"2",title:"Old Task!",completed:"true"}
]

export default function WorkingWithArrays(app){
    app.get("/practicelab/todos",(req,res) =>{
        res.json(todos);
    })
    app.post("/practicelab/todos/create",(req,res) => {
        const newTodo = {...req.body,id:new Date().getTime()};
        todos.push(newTodo);
        res.json(todos);
    })
    app.get("/practicelab/todos/:id/completed/:completed",(req,res) => {
        const {id,completed} = req.params; 
        const todo = todos.find((t) => t.id === id)
        todo.completed = completed 
        res.json(todos);
    })
    app.delete("/practicelab/todos/:id/delete",(req,res) => {
        const {id} = req.params; 
        const todo = todos.filter((t) => t.id === id)
        todos.splice(todo,1);
        res.json(todos);
    })

}