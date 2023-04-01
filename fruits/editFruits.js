import { client, fruitsCollection } from "../mongoConnect.js";

const editFruit = async () => {
  try {
    await client.connect();
    const updatedFruit = await fruitsCollection.findOneAndUpdate(
      { name: "Pear" },
      { $set: { name: "Orange", special: true } }
    );
    console.log(updatedFruit);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

editFruit();
