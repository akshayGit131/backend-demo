import express from "express";
import cookieParser, {CookieParser} from 'cookie-parser';
import {Cors} from 'cors';

const app = express();

app.use(Cors({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}));

// configuring our app //
app.use(express.json({
    limit:"16kb"
}));

app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}));

app.use(express.static("public"));

app.use(cookieParser());

export default app;