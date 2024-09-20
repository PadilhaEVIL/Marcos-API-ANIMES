
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/animes', async (request, reply) => {
    const body = request.body;
    console.log(body);
    await databasePostgres.createAnimes(body);
    return reply.status(201).send();
})

// READE
server.get('/animes', async () => {
    const animes = await databasePostgres.listAnimes();
    return animes;
});

// UPDATE
server.put('/animes/:id', async (request, reply) => {
    const animesID = request.params.id;
    const body = request.body;
    await databasePostgres.updateAnimes(animesID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/animes/:id', async (request, reply) => {
    const animesID = request.params.id;
    await databasePostgres.deleteAnimes(animesID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
