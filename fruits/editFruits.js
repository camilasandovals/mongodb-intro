import { client, fruitsCollection } from "../mongoConnect.js";


const editFruit = async () => {
    //collection.findOne({name: 'Pear'})
    const updatedFruit = await fruitsCollection.findOneAndUpdate(
      { name: "Banana" },
      { $set: { name: "Orange", special: true } }
    );
    console.log(updatedFruit);
  };
  
  editFruit()

  