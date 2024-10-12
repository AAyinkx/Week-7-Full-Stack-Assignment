import express, { query } from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const dbConnectionString = process.env.DATABASE_URL;

//Set up database request pool
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;

//Set up local port (8080)
app.listen(PORT, () => {
  console.log(`Server is ready and running 🏃 in PORT ${PORT}`);
});

//Root route
app.get("/", (request, response) => {
  response.json({ message: "The root route" });
});

//READ endpoint
app.get("/book_reviews", async (request, response) => {
  try {
    const bookData = await db.query(
      `SELECT id, title, rating, review FROM books;`
    );
    console.log(bookData);
    response.json(bookData.rows);
    response.status(200).json({ success: true });
  } catch (error) {
    console.error("This is a fatal error!", error);
    response.status(500).json({ success: false });
  }
});
app.post("/add_review", async (request, response) => {
  try {
    const { username, title, author, rating, review, src, date } = request.body;

    const newReview = await db.query(
      `
          INSERT INTO books (username, title, author, rating, review, src, date)
          VALUES ($1, $2, $3, $4, $5, $6, $7);
          `,
      [username, title, author, rating, review, src, date]
      //   [biscuit.biscuit_name, biscuit.src, biscuit.description, biscuit.crunchiness]
    );
    response.status(200).json(newReview.rows);
  } catch (error) {
    console.error(
      "This is a fatal error! How dramatic! You cannot add a new book review",
      error
    );
    response.status(500).json({ success: false });
  }
});
