var loggedIn = false;

function login(req, res, next) {

    // This is to simulate a failed login
    if (req.body.userName === 'invalid') {
        res.sendStatus(401);
        loggedIn = false;
    }
    else {
        loggedIn = true;
        res.json({
            success: true
        });
    }
}

var apiEndpoints = {
    mainUrl: '',
    routes: [{
        method: 'POST',
        url: '/login',
        callback: login
    }]
};

module.exports = apiEndpoints;
