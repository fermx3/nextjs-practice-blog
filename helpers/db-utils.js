import { MongoClient } from 'mongodb';

export const connectDatabase = async () => {
  const url = `mongodb+srv://${process.env.USERNAME}:${process.env.PASS}@${process.env.CLUSTER}.kroh7rd.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(url);

  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
};
