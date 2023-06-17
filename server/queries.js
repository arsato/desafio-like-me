const { Pool } = require('pg');
require ('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    allowExitOnIdle: true
});

const getPosts = async () => {
    const posts = await pool.query('SELECT * FROM posts');
    return posts.rows
}

const addPost = async (titulo, img, descripcion, likes) => {
    const query = 'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)';
    const values = [titulo, img, descripcion, likes];
    const post = await pool.query(query, values);
    console.log('Post agregado')
    return post
}

module.exports = { getPosts, addPost };
