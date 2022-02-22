import User from "../models/user.model";
import db from "../db";

class userRepository {

    //GET Função para obter todos os usuários
    async findAllUsers(): Promise<User[]>{
       const query = `
       SELECT uuid, username
       FROM application_user
       `;

       const {rows} = await db.query<User>(query);

       return rows;
    }

    //GET Função para obter um usuário com um determinado ID
    async finById(uuid: string): Promise<User>{
        
        const query = `
        SELECT uuid, username
        FROM application_user
        WHERE uuid = '${uuid}'
        `;
    
        
        const {rows} = await db.query<User>(query);
        const [user] = rows;
        

        return user;

    }

    //POST Função para criar e adicionar novos usuários
    async create(user: User): Promise<string>{
        const query = `
        INSERT INTO application_user
        (username, password)
        VALUES ('${user.username}', '${user.password}')
        `;

        db.query(query);

        return('Usuario criado');


    }
    //PUT Função que atualiza um usuário
    async update(user: User): Promise<string>{
        const query = `
        UPDATE application_user
        (username, password)
        VALUES ('${user.username}', '${user.password}')
        `;

        db.query(query);

        return('Usuário atualizado');
    }
    //DELETE Função que remove um usuário
    async delete(uuid: string): Promise<string>{
        const query=`
        DELETE FROM application_user
        WHERE uuid = '${uuid}'
        `;

        db.query(query);

        return('Usuário removido');
    }
}

export default new userRepository();