const { makeTasks, getallTasks, getSingleTask, updateTask  } = require('../services/task.services');

/**
 * Creates a task
 * @param {Request} req 
 * @param {Response} res 
 * @param {Object} next 
 * @returns 
 */
const createTasks = async (req, res, next) => {
    try {
      const { id } = req.user; 
      const result = await makeTasks(req.body, id); // Added 'await' to ensure 'makeTask' completes before proceeding
      return res.status(result.code).json(result);
    } catch (error) {
      return next(error);
    }
  };

/**
 * Fetch all tasks
 * @param {Request} req
 * @param {Response} res
 * @param {object} next
 * @returns {JSON | Error}
 */
const fetchAllTask = async (req, res, next) => {
  try {
    const result = await getallTasks();
    return res.status(result.code).json(result);
  } catch (error) {
    return next(error);
  }
};



/**
 * get single task
 * @param {Request} req
 * @param {Response} res
 * @param {object} next
 * @returns {JSON | Error}
 */
const fetchSingleTaskById = async (req, res, next) => {
    try {
      const { id } = req.user;
      const response = await getSingleTask(id);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };



  /**
 * Updates a post
 * @param {Request} req
 * @param {Response} res
 * @param {object} next
 * @returns {JSON | Error}
 */
const editTask = async (req, res, next) => {
    try {
      const { title, text } = req.body;
      const { id } = req.user;
      const response = await updateTask(title, text, id);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };
  


  module.exports = {
    createTasks,
    fetchAllTask,
    fetchSingleTaskById,
    editTask,
  }
  