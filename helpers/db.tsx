import { MongoClient } from "mongodb";

export async function connectToDB() {
  const client = await MongoClient.connect(
    "mongodb+srv://rentingDev:1ZwznCHF5wATnrkf@cluster0.p01xqcc.mongodb.net/rentingdev?retryWrites=true&w=majority"
  );

  return client;
}
