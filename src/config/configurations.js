import pkg from 'dotenv';
const { config } = pkg;

pkg.config();

const configuration = Object.freeze({
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    url: process.env.SERVICE_URL,
});

export default configuration;