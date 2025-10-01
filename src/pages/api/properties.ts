import dbconection from "@/lib/dbconection";
import Properties from "@/models/properties";
import type { NextApiRequest, NextApiResponse } from "next";

type UsersResponse = {
  properties: string;
  data?: Property[];
  ok?: boolean;
  message?: string;
  updatedId?: string;
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
    dbconection();

    if (req.method === "GET") {
      const data = await Properties.find();
      console.log(data);
      res
        .status(200)
        .json({ properties: "funciona el GET", data: data as Property[] });
    } else if (req.method === "POST") {
      const { name, value, img } = req.body;
      const newProperty = new Properties({ name, value, img });
      await newProperty.save();
      console.log("console.log desde el back");
      res.status(200).json({ properties: "funciona el POST" });
    } else if (req.method === "PUT") {
      const { id, name, value, img } = req.body;

      try {
        const propertyUpdate = await Properties.findByIdAndUpdate(
          id,
          {
            name,
            value,
            img,
          },
          { new: true }
        );
        console.log(propertyUpdate);
      } catch {
        res.status(400);
      }

      res
        .status(200)
        .json({
          ok: true, message: "property update", updatedId: id,
          properties: ""
        });
    }
    // } else if (req.method === "PUT") {
    //   const { id, name, value, img } = req.body;

    //   const updatedProperty = await Properties.findByIdAndUpdate(
    //     id, {
    //     name,
    //     value,
    //     img,
    //   });

    //   console.log(updatedProperty);

    //   if (!updatedProperty) {
    //     return res
    //     .status(404)
    //     .json({ properties: "Propiedad no encontrada" });
    //   }

    //   res
    //   .status(200)
    //   .json({ properties: "funciona el PUT", data: updatedProperty as Property[] });
    else if (req.method === "DELETE") {
      const { id } = req.query;

      const deletedProperty = await Properties.findByIdAndDelete(id);

      if (!deletedProperty) {
        return res.status(404).json({ properties: "Propiedad no encontrada" });
      }
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
