const User = require('../model/User')

//GetAll User_TODO Controll
const getALLTodos = async(req,res) => {
    try{
        const todos = await User.find()
        res.status(200).json(todos)
    } catch (err){
        res.status(500).json({message: err.message})
    }
}

/// Post TODO Controll
const createTodo = async (req, res) => {
    console.log(req.body); // Log the incoming request body
    const {id,checked,item } = req.body;

    // Validate the required fields
    if (!item) return res.status(400).json({ message: 'Item is required' });

    try {
         // Check if a todo with the same id already exists
         const existingTodo = await User.findOne({ id });
         if (existingTodo) {
             return res.status(409).json({ message: 'Todo with this ID already exists' });
         }
         
         // Create a new todo (MongoDB will handle the _id)
        const todo = new User({id,checked,item });
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};


// Put USER_TODO Controll
const updateTodo = async(req, res) => {
    try {
        const todo = await User.findOne({ id: req.params.id });
        if (!todo) return res.status(404).json({ message: `Todo ID ${req.params.id} not found` });

        // Update fields
        todo.checked = req.body.checked !== undefined ? req.body.checked : todo.checked;
        todo.item = req.body.item || todo.item;

        const updatedTodo = await todo.save();
        res.json(updatedTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


//delete USER_TODO Controll
const deleteTodo = async(req, res) => {
    try{
        const todo = await User.findOneAndDelete({id:req.params.id})
        if (!todo) return res.status(404).json({message:`Todo ID ${req.params.id} not found`})
    
        res.json({message:`Todo ID ${req.params.id} deleted`,deletedTodo: todo})
        } catch (err){
            res.status(500).json({message:err.message})
        }
}

//GetOne USER_TODO Controll
const getTodo = async(req, res) => {
    try {
        const todo = await User.findOne({ id: req.params.id });
        if (!todo) return res.status(404).json({ message: `Todo ID ${req.params.id} not found`});
        res.json(todo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getALLTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
}
