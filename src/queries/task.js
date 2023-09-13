const createTasks = `
INSERT INTO tasks(
    title
    description
    completed
    user_id

) VALUES ($1, $2, $3, $4) RETURNING id, title, description, completed, user_id

`



const fetchallTasks  = `
SELECT p.title p.decsription p.completed, u.id as "user_id"
FROM posts p
INNER JOIN users u on p.user_id = u.id

`

const fetchSingleTaskById = `SELECT id, title, description, completed FROM users WHERE id=$1`

const editTask = `
UPDATE tasks
SET title=$1, description=$2, completed=$3
WHERE id=$4
RETURNING id, title, description, completed, user_id
`;





module.exports = {
    createTasks,
    fetchallTasks,
    fetchSingleTaskById,
    editTask
}