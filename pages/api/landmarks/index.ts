import { CategoryEnum } from "@/libs/interfaces";
import { createLandmark, getLandmarks } from "@/libs/prisma/landmarks";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "GET"){
        try {
            let landmarks;
            const query = req.query.category as CategoryEnum | undefined;

            if (query && query.includes(".")) {
                const splitedQuery = query.split(".");
        
                landmarks = await Promise.all(
                  splitedQuery.map(async (el) => {
                    return await getLandmarks(el as CategoryEnum);
                  })
                );
              } else if (query && query in CategoryEnum) {
                landmarks = await getLandmarks(query as CategoryEnum);
              } else {
                landmarks = await getLandmarks();
              }
        
            return res.status(200).json({
                status: 'success',
                landmarks
            })
        } catch (err: any) {
            return res.status(500).json({
                status: 'fail',
                message: err.message
            })
        }
    } else if(req.method === "POST") {
        try {
            const createdLandmark = await createLandmark(req.body)
            
            if(!createdLandmark.id) {
                return res.status(400).json({
                    status: 'fail',
                    message: createdLandmark.meta 
                })
            }

            return res.status(200).json({
                status: 'success',
                createdLandmark
            })
        } catch (err: any) {
            return res.status(500).json({
                status: 'fail',
                message: err.message
            })
        }
    }

   return res.status(425).json({
    status: 'fail',
    message: `Method ${req.method} is not allowed.`
   })
}