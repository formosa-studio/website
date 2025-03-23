const axios = require("axios");

const groupId = process.env.RBX_GROUP_ID;
const url = `https://groups.roblox.com/v1/groups/${groupId}`;

module.exports = async () => {
    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.memberCount !== undefined) {
            return data.memberCount;
        } else {
            return 0;
        }
    } catch (error) {
        console.log("rbxMembersCount: 無法獲取群組成員數量");
        console.log(error);
        return 0;
    }
}