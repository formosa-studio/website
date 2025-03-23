module.exports = async () => {
    const axios = require('axios');
    const fs = require('fs');
    const path = require('path');

    async function refreshAccessToken() {
        try {
            const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
                params: {
                    client_id: process.env.ZOHO_CLIENT_ID,
                    client_secret: process.env.ZOHO_CLIENT_SECRET,
                    refresh_token: process.env.ZOHO_REFRESH_TOKEN,
                    grant_type: 'refresh_token',
                    redirect_url: 'https://www.google.com'
                }
            });
            
            const newAccessToken = response.data.access_token;

            console.log('Access Token Require SUCCESSFUL:' + newAccessToken);

            fs.writeFileSync(path.join(__dirname, 'zohoToken.json'), JSON.stringify({ access_token: newAccessToken }, null, 2));
        } catch (error) {
            console.error('Access Token Require FAILED:', error.response ? error.response.data : error.message);
        }
    }

    setInterval(refreshAccessToken, 55 * 60 * 1000);

    refreshAccessToken();
}