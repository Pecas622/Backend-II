import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import passport from 'passport';
import initializatePassword from './config/passport.js';
import usersRouter from './routes/users.routes.js';
import sessionsRouter from './routes/sessions.routes.js';
import cartsRouter from './routes/carts.routes.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cookieParser("firmaSecreta"));
app.use(session({
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://santizorrilla:Pecas622@cluster0.eazxc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        ttl: 60
    }),
    secret: "sesionSecreta",
    resave: true,
    saveUninitialized: true
}));

mongoose.connect("mongodb+srv://santizorrilla:Pecas622@cluster0.eazxc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("DB is connected"))
.catch((e) => console.log(e));

initializatePassword();
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/users', usersRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/carts', cartsRouter);

app.listen(PORT, () => {
    console.log("Server on port:", PORT);
});
