import { NextFunction, Router, Request, Response } from "express";
import userRepository from "../repositories/user.repository";


const usersRoute = Router();
 
 // Listar todos os usuários
 // get /users
 usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findAllUsers();
    if (users == []) {
       res.status(400).send('Usuários não encontrados');
    }
    res.status(200).send({users});
 });

   // Retorna o usuário com aquele Id
   // get /users/:uuid
 usersRoute.get('/users/:uuid', async (req: Request<{uuid: string}>, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;
    console.log(uuid);
    const user = await userRepository.finById(uuid); 

   res.status(200).send(user);
 } );

   // Adiciona um usuário ao sitema
   // post /users
 usersRoute.post('/users', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const newUser = req.body;
    userRepository.create(newUser);
    res.status(201).send(newUser);
 });

   // Atualiza um usuário
   // put /users
 usersRoute.put('/users', (req: Request<{uuid: string}>, res: Response, next: NextFunction) =>{
    const user = req.body;

    userRepository.update(user);
    res.status(200).send(user);

 });

   // Remove um usuário
   // delete /users
 usersRoute.delete('/users', (req: Request<{uuid: string}>, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;
    userRepository.delete(uuid);

    res.status(200).send(uuid);

    
 } )

 export default usersRoute;