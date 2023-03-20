import { MongoClient } from "mongodb";

export async function connectToDB() {
  const client = await MongoClient.connect(
    "mongodb+srv://rentingDev:gZnUY2uVLoLxudX4@cluster0.03wa0ru.mongodb.net/rentingdev?retryWrites=true&w=majority"
  );

  return client;
}
