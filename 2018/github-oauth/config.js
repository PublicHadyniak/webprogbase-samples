require('dotenv').config();
module.exports = {
    GITHUB_CLIENT_ID: process.env['GITHUB_CLIENT_ID'],
    GITHUB_CLIENT_SECRET: process.env['GITHUB_CLIENT_SECRET'],
    GITHUB_CALLBACK_URL: 'http://localhost:3000/auth/github/callback',
    sessionSecret: 'sess1onSecrrret',
}