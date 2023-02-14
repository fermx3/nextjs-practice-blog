import { MongoClient } from 'mongodb';
import { connectDatabase, insertDocument } from '../../helpers/db-utils';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input. Please try again.' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    //Store in DB
    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database' });
      return;
    }

    try {
      const result = await insertDocument(client, 'messages', newMessage);
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    res.status(201).json({
      message: 'Message successfully sent!',
      newMessage,
    });
  }
};

export default handler;
