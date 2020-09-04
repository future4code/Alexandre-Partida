import { BaseDatabase } from "./BaseDatabase";


export class BandDatabase extends BaseDatabase{

    private static TABLE_NAME: string = "BANDS_TABLE";

    public async registerBand (
        id: string,
        name: string, 
        music_genre: string, 
        responsible: string, 
        ): Promise <void> {
        
            await this.getConnection()
            .insert({
                id,
                name, 
                music_genre,
                responsible
            }).into(BandDatabase.TABLE_NAME);
    };

    public async getBandById (id: string): Promise<any> {
        const result = await this.getConnection()
        .select("*")
        .from(BandDatabase.TABLE_NAME)
        .where({id})
        return result[0]
    };

    
};