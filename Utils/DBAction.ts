
import mysql from 'mysql2/promise';

export class DBActions {

    private dbConnection: any = null;

    async connectDB(
        dbUsername: string,
        dbPassword: string,
        dbServerName: string,
        dbPort: string,
        dbName: string
    ): Promise<void> {

        this.dbConnection = await mysql.createConnection({
            host: dbServerName,
            port: Number(dbPort),
            user: dbUsername,
            password: dbPassword,
            database: dbName
        });

        console.log('MySQL connected successfully');
    }

    async query(
        queryString: string,
        params: any[] = []
    ): Promise<any> {

        if (!this.dbConnection) {
            throw new Error('Database is not connected');
        }

        const [result] = await this.dbConnection.query(
            queryString,
            params
        );

        return result;
    }

    async closeDB(): Promise<void> {

        if (this.dbConnection) {
            await this.dbConnection.end();
            this.dbConnection = null;
        }
    }
}
