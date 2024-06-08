import express from "express";

const app = express();
const port = 3000;


app.get("/", (req,res)=>{
    const today = new Date("June 8, 2024 01:15:00");
    const day = today.getDay();

    let type = "a weekday";
    let adv = "it's time to work hard.";
    let name = "Sunday";

    switch (day) {
        case 0:
            name = "Sunday";
            break;
        case 1:
            name = "Monday";
            break;
        case 2:
            name = "Tuesday";
            break;
        case 3:
            name = "Wednesday";
            break;
        case 4:
            name = "Thursday";
            break; 
        case 5:
            name = "Friday";
            break;
        case 6:
            name = "Saturday";
            break;   
        default:
            break;
    }

    if( day === 0 || day === 6){
        type = "the weekend";
        adv = "it's time to have fun,";
    }

    res.render("index.ejs", {
            dayName: name,
            dayType: type,
            advice: adv,
        });
});

app.listen(port, ()=>{
    console.log(`Server is listening at port ${port}`);
});
