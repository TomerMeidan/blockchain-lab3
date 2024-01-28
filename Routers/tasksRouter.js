const express = require("express")
const fsRouter = express.Router();
const fsBLL = require("../BLL/tasksBLL")

// Main Entry Point: localhost:port/tasks/

// Action: PUT
// Entry Point: localhost:port/tasks/edit/:id/
// Info: Add new  task to list
fsRouter.put("/edit/:id/", async (req,res) => {
    let responseMessage = null;
    try {
      responseMessage = await fsBLL.updateTask(req.params.id, req.body)
      return res.status(201).json(responseMessage);
    } catch (err) {
      return res.status(501).send(err.name);
    }
})

// Action: POST
// Entry Point: localhost:port/tasks/add/
// Info: Add new  task to list
fsRouter.post("/add", (req,res) => {
    let responseMessage = null;
    try {
      responseMessage = fsBLL.addNewTask(req.body);
      return res.status(201).json(responseMessage);
    } catch (err) {
      return res.status(501).send(err.name);
    }
})

// Action: DELETE
// Entry Point: localhost:port/tasks/delete/:id
// Info: Delete requested task from list by id field
fsRouter.get('/delete/:id', (req,res) => {
    let responseMessage = null;
    try {
      responseMessage = fsBLL.removeTask(req.params.id);
      return res.status(201).json(responseMessage);
    } catch (err) {
      return res.status(501).send(err.name);
    }
})

// Action: GET
// Entry Point: localhost:port/tasks/get/all
// Info: Get all the requested tasks from list
fsRouter.get("/get/all", async (req,res) => {
    let responseMessage = null;
    try {
      responseMessage = await fsBLL.getAllTasks(req.body);
      return res.status(201).json(responseMessage);
    } catch (err) {
      return res.status(501).send(err.name);
    }
})

module.exports = fsRouter;