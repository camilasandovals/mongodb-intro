import dotenv from "dotenv";

dotenv.config();

const MONGOURI = process.env.MONGOURI;
import { MongoClient } from "mongodb";

// Create instance of Mongo
export const client = new MongoClient(MONGOURI); //Use the URI path

// Connect to db - or create if there is none
const database = client.db("products");

// Connect to collection - or create if nonw
export const fruitsCollection = database.collection("fruits");
export const toysCollection = database.collection("toys");

