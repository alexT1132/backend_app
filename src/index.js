import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();
app.listen(1115);
console.log("Conected on Port", 1115);