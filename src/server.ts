import app from "./app";

const PORT = 5000;//Your Node.js app binds to port 5000.
// Binding a port means your operating system reserves it for your application so other programs cannot use it at the same time.
// The OS keeps track of the port and which process owns it. This is a security feature to prevent multiple processes from using the same port.
// When you stop the server gracefully (Ctrl+C or process exit), the OS frees the port immediately.

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // This is a message that is printed in the console of the server.
})