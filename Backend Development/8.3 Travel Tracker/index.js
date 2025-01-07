import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  database: "World",
  host: "localhost",
  password: "12345678",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country)=>{
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  const result = await checkVisisted();
  console.log(result);
  res.render("index.ejs",{
    countries: result,
    total: result.length,
  });
});

app.post("/add", async (req, res)=>{
  const newCountry = req.body.country;
  try{
    const countryCode = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [newCountry.toLowerCase()]
    );
    
    try{
      await db.query("INSERT INTO visited_countries(country_code) VALUES($1)",[countryCode.rows[0].country_code]);
      res.redirect("/");
    }catch(err){
      console.log(err);
      const result = await checkVisisted();
      res.render("index.ejs",{
        countries: result,
        total: result.length,
        error: "Country name already exists, try again.",
      });
    } 
  }catch(err){
    console.log(err);
    const result = await checkVisisted();
    res.render("index.ejs",{
      countries: result,
      total: result.length,
      error: "Country name does not exist, try again.",
    });
  }

})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
