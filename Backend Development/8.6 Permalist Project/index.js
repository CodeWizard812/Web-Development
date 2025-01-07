import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  database: "permalist",
  host: "localhost",
  password: "12345678",
  port: 5432,
});

db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

async function getItems() {
  const result = await db.query("SELECT * FROM items");
  let titles =[];
  result.rows.forEach((item) =>{
    titles.push(item);
  });
  return titles;
}

app.get("/",async (req, res) => {
  const items = await getItems();
  console.log(items);
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  console.log(item);
  await db.query("INSERT INTO items(title) VALUES ($1)",
    [item]
  );
  res.redirect("/");
});

app.post("/edit",async (req, res) => {
  const editItemId = req.body.updatedItemId;
  const editItemTitle = req.body.updatedItemTitle;
  console.log(editItemId + " "+ editItemTitle);
  try{
    await db.query("UPDATE items SET title = $1 WHERE id = $2",
      [editItemTitle, editItemId]
    );
    res.redirect("/");
  }catch(err){
    console.log(err);
  }
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;
  try{
    await db.query("DELETE FROM items WHERE id = $1", [id]);
    res.redirect("/");
  }catch(err){
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
