import { client, toysCollection } from "../mongoConnect.js";

client.connect();
const addToy = async () => {
  const myToy = [{
    name: "Optimus Prime",
    type: "Transformer",
    cool: true,
    price: 40,
    description: "Leader Autobot, real cool blue semi truck, with sword",
  },
  {
    name: "Teddy Bear",
    type: "Stuffed animal",
    cool: false,
    price: 20,
    description: "YOUR BEarST FRIEND"
  },
  {
    name: "Barbie Computer Engineer",
    type: "Barbie collecion",
    cool: true,
    price: 50,
    description: "Really cool barbie computer engineer"

  }
];
  const addedToy = await toysCollection.insertMany(myToy);
  console.log(addedToy);
};

addToy();
