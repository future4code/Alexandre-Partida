import { UserDatabase } from "../data/UserDatabase"
import { BandDatabase } from "../data/BandDatabase"
import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { userInfo } from "os";


export const getBandbyId = async (req: Request, res: Response) => {

    try {
        const token = req.headers.authorization as string;
        const authenticator = new Authenticator();
        const authenticationData = authenticator.verify(token);
        const newBandDatabase = new BandDatabase();
        const band = await newBandDatabase.getBandById(authenticationData.id);
        res.status(200).send({
            name: band.name,
            music_genre: band.music_genre,
            responsible: band.responsible
        })
        
    } catch (e) {
        res.status(400).send({
            message: e.message
        })
    }

    await BandDatabase.destroyConnection();

}