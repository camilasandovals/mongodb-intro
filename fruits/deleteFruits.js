import { client, fruitsCollection } from "../mongoConnect.js";

const deleteFruits = async () => {
  try {
    await client.connect
    const deletedFruit = await fruitsCollection.deleteOne({ name: "Apple" });
    console.log(deletedFruit);
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
};

deleteFruits();
