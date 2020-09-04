import {Request, Response} from "express";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { BaseDatabase } from "../data/BaseDatabase";

export const signUp = async (req: Request, res: Response) => {

    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const role = req.body.role
    

        if(!name || !email || !password) {
            throw new Error ("Insert all information required");
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generateId();

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(password);

        const userDatabase = new UserDatabase();
        await userDatabase.createUser(id, name, email, hashPassword, role);

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({id, role});

        res.status(200).send({
            message: "User created successfully!",
            token
        })
        
    } catch (e) {
        res.status(400).send({
            message: e.message
        })
    }

    await BaseDatabase.destroyConnection();
};