import {Request, Response} from "express";
import { BandDatabase} from "../data/BandDatabase";
import { BaseDatabase } from "../data/BaseDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const registerBand = async (req: Request, res: Response) => {

    try {
        const name = req.body.name;
        const music_genre = req.body.music_genre;
        const responsible = req.body.responsible;

        if(!name || !music_genre || !responsible) {
            throw new Error ("Insert all information required");
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generateId();

        const bandDatabase = new BandDatabase();
        await bandDatabase.registerBand(id, name, music_genre, responsible)

        res.status(200).send({
            message: "Band created successfully!",
           
        });
    
    } catch (e) {

        res.status(400).send({
            message: e.message
        })
    }

    await BaseDatabase.destroyConnection();
}