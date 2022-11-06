import connectDB from '../../../db/connectDB';
import Users from '../../../models/Schema';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
  // Database connection ===============>
  connectDB()
    .then(() => console.log('Database connection successfully'))
    .catch((error) => {
      return res.json({ error: 'Database connection faild' });
    });
  // check http method ================>
  if (req.method === 'POST') {
    if (!req.body)
      return res.status(404).json({ message: 'Dont have from data' });
    // check duplicate user ==================>
    const { username, email, password } = req.body;
    const existingUser = await Users.findOne({ email });
    if (existingUser)
      return res.status(422).json({ message: 'User already exist ' });
    // creating uer hash password ====================>
    Users.create(
      { username, email, password: await hash(password, 10) },
      function (err, data) {
        if (err) return res.status(404).json({ err });
        res.status(201).json({ status: true, user: data });
      }
    );
  } else {
    return res
      .status(500)
      .json({ message: 'http method is invalid only exist POST method' });
  }
}
