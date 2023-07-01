const express = require("express");
const app = express();
const mongoose = require("mongoose")
const TodoModel = require("./models/Todos")
const cors = require("cors")


app.use(express.json());
app.use(cors());
const CONNECTION_URL ="mongodb+srv://admin-amal:admin-amal@cluster0.3h1itd1.mongodb.net/TodoList"
mongoose.connect(CONNECTION_URL);

app.get("/getTodos" ,  async(req,response)=>{
    try{

        const todo = await TodoModel.find({});
        response.json(todo);
        
    }
    catch(err){
        response.json({ error: "Internal server error" });
    }
})

app.post("/createTodos" , async(req,response) =>{
    try{
        const todo = req.body;
        const newTodo = new TodoModel(todo);
        await newTodo.save();

        response.json(todo)

    }catch(err){
        response.json({ err });
    }
})

app.put('/updateTodos/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const todo = await TodoModel.findById(id);
  
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
  
      // Toggle the value of the 'checked' field
      todo.checked = !todo.checked;
      await todo.save();
  
      res.json(todo);
    } catch (error) {
      console.error('Error updating todo:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.delete('/deleteTodo/:id', async(req,res)=>{
    const id = req.params.id
    try{

        const todo = await TodoModel.findByIdAndDelete(id);
        res.status(200).json({message: "Deleted successfully" });

    }catch(error){
        console.error('Error deleting todo:', error);
    res.status(500).json({ error: 'Internal server error' });
    }
  })

app.listen(3001, ()=>{
    console.log("Server started at port 3001");
})