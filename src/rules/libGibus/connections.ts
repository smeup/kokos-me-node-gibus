import { pool } from 'node-jt400';
//import { Pool } from 'node-jt400';

export const connection01 = () => {
    const config = {
        host: '192.168.14.9',
        user: 'DANALE',
        password: 'DANALE',
        'translate binary': 'true',
        trace: 'false',
        //trace: 'true',
    }

    const connection = pool(config)

    //ho provato a seguire le indicazioni di smeup, ma la classe Pool non esiste
    //const poolObj = new Pool(config);
    //const connection = poolObj.connect()
    return connection;

}
