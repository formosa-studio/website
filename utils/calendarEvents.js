module.exports = async () => {
    const axios = require("axios");
    const fs = require("fs");
    const path = require("path");

    const token = process.env.TU_TOKEN
    const url = `https://api.teamup.com/kscgrtk5zmwe8cndts/events`;

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Teamup-Token ${token}`
            }
        });

        return response.data.events;
    } catch (error) {
        console.error("calendarEvents: 無法獲取活動資訊: ", error.message);
        return null;
    }
    
    const formattedEvents = calendarEvents.map(event => {
        const [trainingType, playerName] = event.title.split(" | ");
        const rawDate = event.dateandtime.start;
        
        const year = rawDate.slice(0, 4);
        const month = rawDate.slice(4, 6);
        const day = rawDate.slice(6, 8);
        const hour = rawDate.slice(9, 11);
        const minute = rawDate.slice(11, 13);
        const second = rawDate.slice(13, 15);
        const timezone = rawDate.slice(15);
        
        const formattedDate = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}${timezone}`)
            .toLocaleString("zh-TW", { timeZone: "Asia/Taipei" });
        
        return {
            trainingType,
            playerName,
            startTime: formattedDate
        };
    });

    return formattedEvents;
}
