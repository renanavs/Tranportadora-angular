const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://localhost:8080/',
        secure: false,
        logLevel: 'debug',
        pathRewrite: { "^/api": ""}
    },
    {
        context: ['/cep'],
        target: 'https://viacep.com.br/',
        changeOrigin: true,
        secure: true,
        logLevel: 'debug',
        pathRewrite: { "^/cep": ""}
    }
];

module.exports = PROXY_CONFIG;