import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listAnimes() {
    const Animes = await sql`select * from animes`;
    return Animes;
  }

  async createAnimes(animes) {
    const id = randomUUID();
    console.log('id', id);
    const name = animes.name;
    const autor = animes.autor;
  
    
    await sql`insert into animes (id, name, autor)
    values (${id}, ${name}, ${autor})`
  }

  async updateAnimes(id, animes) {
    const name = animes.name;
    const autor = animes.autor;


    await sql`update animes set 
        name = ${name},
        autor = ${autor}
        where id = ${id}
    `;
  }

  async deleteAnimes(id) {
    await sql`delete from animes where id = ${id}`
  }

}