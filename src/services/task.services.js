const { createTasks, fetchallTasks, fetchSingleTaskById, editTask } = require('../queries/task');
const { runQuery } = require ('../config/database.config');
const { DatabaseError } = require('pg');
/**
 * creates a new post
 * @param {object} body
 */
const makeTasks = async (body, user_id) => { 
    const { title, description, completed } = body;
    const post = await runQuery(createTasks, [title, description, completed, user_id]); // Assuming 'user_id' is a parameter passed to the function
    return {
        status: 'success',
        message: 'Task created successfully', 
        code: 201,
        data: {
            post,
        },
    };
};



/**
 * 
 * fetch all post
 * @returns {Responseobject}
 */

const getallTasks = async () => {
    const result = await runQuery(fetchallTasks)
    return {
        status: 'success',
        message: 'Task created successfully', 
        code: 201,
        data: {
            post,
        },
    };
}



/**
 * get single task
 * @param {number} id
 * @returns {Response}
 */
const getSingleTask = async (id) => {
    const result = await runQuery(fetchSingleTaskById, [id]);
    return {
      status: 'success',
      message: 'Posts fetched successfully!',
      code: 200,
      data: {
        result,
      },
    };
  };


/**
 * edit task
 * @param {*} title 
 * @param {*} text 
 * @param {*} id 
 * @returns 
 */

  const updateTask = async (title, description, completed, id) => {
    const result = await runQuery(editTask, [title, description, completed, id]);
    return {
      status: 'success',
      message: 'Posts edited successfully!',
      code: 200,
      data: {
        result,
      },
    };
}



module.exports = {
    makeTasks,
    getallTasks,
    getSingleTask,
    updateTask
};