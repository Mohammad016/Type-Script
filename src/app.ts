//“Treat this project as ES Modules — use import/export instead of require/module.exports.” This is done in the package.json file by setting the type to "module". This is because the server is a Node.js project and we are using the ES module syntax.
import express from "express"; // Having an ES module syntax, so we need to use the import statement instead of require
import cors from "cors"; //The "esModuleInterop": true, helps us to use the import feature else we would have needed to use require and import each related module separately
import todoRoutes from "./routes/todoRoutes";

const app = express(); // Initializing the express application helps us to use the express features such as routing, middleware, etc.

//Middlewares
app.use(cors()); //CORS is a security feature that allows us to restrict the access of the server to the client and also allows only the allowed domains to access the server. generally it is used to prevent the cross-origin requests and requests from same domain to access the server.
app.use(express.json()); //express.json() is a middleware that allows us to parse the incoming requests with JSON payloads and is based on the body-parser middleware.
app.use("/todos", todoRoutes); // The requests that hit this endpoint when the server is active, only then responses are possible else you get 404 error when server is active but hit wrong endpoint, and "Could not send request" when server is down

// Test Route
// app.get("/", (req,res)=>{ //GET request to the root route allows us to send a JSON response to the client. unlike POST, PUT, DELETE requests, GET requests are not used to modify the data on the server.
//     res.json({message: "Server is running..."}); //res.json() is a method that allows us to send a JSON response to the client. This is printed in the console of the client.
// });

export default app; //exporting the app variable to be used in the main file.