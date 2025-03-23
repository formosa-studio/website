module.exports = async () => {
    /*const axios = require("axios");
    const fs = require("fs");
    const path = require("path");

    const token = JSON.parse(fs.readFileSync(path.join(__dirname, "zohoToken.json"))).access_token;
    const url = `https://calendar.zoho.com/api/v1/calendars/${process.env.ZOHO_CALENDAR_ID}/events?scope=ZohoCalendar.event.READ`;

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error("calendarEvents: 無法獲取活動資訊: ", error.message);
        return null;
    }

    const calendarEvents = [
        {
            "title": "駕駛員培訓 | SkibidiBallPlayer",
            "dateandtime": {
                "start": "20250323T135000+0531",
            },
        },
        {
            "title": "站務員培訓 | SigmaGamer",
            "dateandtime": {
                "start": "20250323T205000+0530",
            },
        },
        {
            "title": "駕駛員培訓 | BestKid",
            "dateandtime": {
                "start": "20250323T205000+0530",
            },
        },
        {
            "title": "列車長培訓 | WorstKid",
            "dateandtime": {
                "start": "20250323T205000+0530",
            },
        },
        {
            "title": "調度員培訓 | SigmaGamer",
            "dateandtime": {
                "start": "20250323T205000+0530",
            },
        },
    ]

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
}*/

return null;
}