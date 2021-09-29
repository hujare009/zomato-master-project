import express from "express";
import cors from "cors"; //{cors = (server should able toallow req. from other server also (cross origim request)}
import helmet from "helmet";  //A little bit of security.

const zomato = express();

//applications middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());

zomato.get("/", (req, res) => res.json({ message: "setup success" }));

zomato.listen(4000, () => console.log("server is runnig"));