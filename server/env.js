export const {
    API_PORT,
    DB_URL_PROD
} = process.env;

export const DB_URL_DEV = 'mongodb://localhost:27017';

export let hosts = [];
export let DB_URL;
if (process.env.NODE_ENV === 'production') {
    hosts = ['https://dice.jesenzacni.cz'];
    DB_URL = DB_URL_PROD;
} else {
    hosts = ['http://localhost:3000'];
    DB_URL = DB_URL_DEV;
}