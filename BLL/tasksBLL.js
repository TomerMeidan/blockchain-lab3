const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// Update Action
const updateTask = (id, newTaskBody) => {
  fs.readFile("./DAL/data.json", "utf8", (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);

    let taskIndex = jsonData.findIndex((task) => task.id === id);
    if (taskIndex === undefined) {
      console.log(`Undefined, task with id ${id} not found in data`);
      return `Undefined, task with id ${id} not found in data`;
    }
    jsonData[taskIndex] = { id: id, job: newTaskBody.job };
    fs.writeFile("./DAL/data.json", JSON.stringify(jsonData), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.error(`Task with id ${id} was updated successfully.`);
      }
    });
  });
};

// Create New Action
const addNewTask = (newTask) => {
  fs.readFile("./DAL/data.json", "utf8", (err, data) => {
    if (err) throw err;
    let jsonData = JSON.parse(data);
    newTask = {
      id: uuidv4(),
      ...newTask,
    };
    jsonData.push(newTask);
    jsonData = JSON.stringify(jsonData);

    fs.writeFile("./DAL/data.json", jsonData, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.error(`Add task id ${newTask.id} successfully.`);
      }
    });
  });
};

// Remove Action
const removeTask = (id) => {
  fs.readFile("./DAL/data.json", "utf8", (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);

    let filteredData = jsonData.filter((task) => task.id != +id);
    filteredData = JSON.stringify(filteredData);

    fs.writeFile("./DAL/data.json", filteredData, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.error(`Removed task id ${id} successfully.`);
      }
    });
  });
};

// Get All Action
const getAllTasks = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./DAL/data.json", "utf8", (err, data) => {
      if (err) reject(err);
      const jsonData = JSON.parse(data);

      jsonData.forEach((task) => {
        console.log(`ID: ${task.id} ${task.job}`);
      });

      resolve(jsonData);
    });
  });
};

module.exports = { updateTask, addNewTask, removeTask, getAllTasks };
