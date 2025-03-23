const express = require("express");
const router = express.Router();

const usersCount = require("../utils/rbxMembersCount");
const calendarEvents = require("../utils/calendarEvents");

router.get("/", async (req, res) => {
    try {
        const users = await usersCount();

        const now = Date.now();
        
        const ce = await calendarEvents();
        let events;
        if (ce) {
            events = ce.map(event => {
                const timeDiff = event.timestamp - now;
                const remainingMinutes = Math.floor(timeDiff / (60 * 1000));
                
                return { ...event, remainingMinutes, isStartingSoon: remainingMinutes <= 10 && remainingMinutes > 0 };
            });
        } else {
            events = null;
        }

        res.render("index", { users, events });
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

router.get("/discord", async (req, res) => {
    try {
        res.redirect(process.env.DISCORD_LINK);
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

module.exports = router;
