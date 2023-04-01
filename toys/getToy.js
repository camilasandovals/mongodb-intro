import { client, toysCollection } from "../mongoConnect.js";

const getToys = async () => {
  try {
    await client.connect;
    const gotToy = await toysCollection.find().toArray();
    console.log(gotToy);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

getToys();
