import { client, toysCollection } from "../mongoConnect.js";

const editToys = async () => {
  try {
    await client.connect;
    const editedToy = await toysCollection.findOneAndUpdate(
      { name: "Bumble bee" },
      { $set: { name: "Optimus Prime" } }
    );
    console.log(editedToy)
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

editToys();
