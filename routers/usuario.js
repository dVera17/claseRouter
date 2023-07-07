import { Router } from 'express';
import mysql from 'mysql2';
const appUsuario = Router();
let conn = undefined;

appUsuario.use((req, res, next) => {
    conn = mysql.createPool({ 
        host: '172.16.49.20',
        user: 'sputnik', 
        password: 'Sp3tn1kC@', 
        database: 'db_m3_prueba_Santiago', 
        port: 3306 
    });
    next();
});

//:id? Es un parametro opcional, ? -> Significa que es un parametro opcional
// Si va en la url es una query, aquí abajo no
appUsuario.get('/', (req, res) => {
    conn.query(`SELECT * FROM usuario`, (err, data, fields) => {
        res.status(200).send(data);
    });
});

appUsuario.post('/', (req, res) => {
    conn.query(`INSERT INTO usuario SET ? `, req.body, (err, data, fields) => {
        if(err) console.log('ERROR: ' + err);
        console.log('data: \n' + data);
        console.log('\n FIELDS --- \n' + fields);
        res.status(200).send(data);
    });
});

appUsuario.put('/', (req, res) => {
    const { id, ...dataBody } = req.body;
    conn.query('UPDATE usuario SET ? WHERE id = ?', [dataBody, id], (err, data, fields) => {
      if (err) {
        console.log('ERROR: ' + err);
        res.status(500).send('Error al actualizar el usuario');
      } else res.status(200).send(data);
    });
});

appUsuario.delete('/', (req, res) => {
    const { id } = req.body;
    conn.query(`DELETE FROM usuario WHERE id = ?`, id, (err, data, fields) => {
        if(err) console.log('ERROR: ' + err);
        res.status(200).send('Usuario eliminado correctamente')
    });
});
  
export default appUsuario;