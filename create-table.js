import { sql } from './db.js'

sql`
CREATE TABLE animes (
  id text PRIMARY KEY,
  name character varying(255),
  autor character varying(255)
  );
  `.then(() => {
  console.log('tabela criada');
})