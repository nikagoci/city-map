import prisma from ".";
import { CategoryEnum, LocationInterface } from "../interfaces";

export async function getLandmarks(query?: CategoryEnum){
    try {
        let landmarks;
        if(query){
            landmarks = await prisma.landmark.findMany({where: { category: query }})

        } else {
            landmarks = await prisma.landmark.findMany()
        }
        
        return landmarks
    } catch (err: any) {
        return err
    }
}

export async function getLandmarkById(id: string) {
    try {
        const landmark = await prisma.landmark.findUnique({where: {id}})
        
        return landmark
    } catch (err: any) {
        return err
    }
}

export async function createLandmark(landmark: LocationInterface) {
    try {
        const createdLandmark = await prisma.landmark.create({ data: landmark });        

        return createdLandmark
    } catch (err: any) {
        return err
    }
}