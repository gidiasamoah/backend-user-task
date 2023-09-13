/* Replace with your SQL commands */

CREATE TABLE IF NOT EXISTS task (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255),
    "description" TEXT,
    completed BOOLEAN, -- Assuming "completed" is a boolean field
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
)