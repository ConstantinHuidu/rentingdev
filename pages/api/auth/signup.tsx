import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "../../../helpers/db";
import { hashPassword } from "@/helpers/auth";

export default async function handler(
  res: NextApiResponse,
  req: NextApiRequest
) {
  //   if (req.method !== "POST") return;
  const data = req.body;
  //   console.log(data);
  const { name, email, password } = data;

  if (!name || !email || !email.includes("@") || !password) {
    res.status(422).json({ message: "Please fill in the form" });
    return;
  }

  const client = await connectToDB();

  const db = client.db();

  const existingUser = await db.collection("users").findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "The email is already used" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const newUser = {
    name: name,
    email: email.toLowercase(),
    password: hashedPassword,
  };

  const result = await db.collection("users").insertOne(newUser);
  res.status(201).json({ message: "Created new user", user: newUser });

  client.close();
}
