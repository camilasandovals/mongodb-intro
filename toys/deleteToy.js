import { client, toysCollection } from "../mongoConnect.js";

const deleteToy = async () => {
  try {
    await client.connect();
    const deletedToy = await toysCollection.deleteOne({
      name: "Optimus Prime",
    });
    console.log(deletedToy);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

deleteToy();
