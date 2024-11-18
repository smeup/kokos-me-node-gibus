export const connection01 = () => {
    const config = {
        host: '192.168.14.9',
        user: 'DANALE',
        password: 'DANALE',
        'translate binary': 'true',
        trace: 'false',
        //trace: 'true',
    }
    const pool = require('node-jt400').pool(config)

    return pool;

}
