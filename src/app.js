const express = require('express');
const app = express();
const PORT = 3000;
// Routes

const userRouter = require('./routes/userRoutes');
const appointmentRouter = require('./routes/appointmentRoutes');



app.use(express.json());

app.use('/user', userRouter);
app.use('/appointment', appointmentRouter);



app.get('/', (req, res) => {
    res.json({ text : 'hello'});
});


app.get('/hello', (req, res) => {
    res.json('Hello, World!');
});
// mongoose
//   .connect(DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected..."))
//   .catch((err) => console.log(err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
