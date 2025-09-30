import dbconection from "@/lib/dbconection";
import Properties from "@/models/properties";
import type { NextApiRequest, NextApiResponse } from "next";

type UsersResponse = {
  properties: string;
  data?: Property[];
};

interface Property {
  _id: string;
  name: string;
  value: number;
  img?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UsersResponse>
) {
  try {
    if (req.method === "GET") {
      dbconection();
      const data = await Properties.find();
      console.log(data);
      res
        .status(200)
        .json({ properties: "funciona el GET", data: data as Property[] });

    } else if (req.method === "POST") {
      console.log("console.log desde el back");
      res.status(200).json({ properties: "funciona el POST" });
    } else if (req.method === "PUT") {
      console.log("console.log desde el back");
      res.status(200).json({ properties: "funciona el PUT" });
    } else if (req.method === "DELETE") {
      console.log("console.log desde el back");
      res.status(200).json({ properties: "funciona el DELETE" });
    } else {
      res.status(405).json({ properties: "Método no permitido" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ properties: "Error del servidor" });
  }
}
