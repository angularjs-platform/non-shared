var localizationValues = require('./localization.json');

function config(req, res, next) {
    res.json({
        primaryMenuList: {
            "main": [
                {
                    "id": "BM",
                    "title": "Bank Maintenance",
                    "reference": "BMRef",
                    "url": null
                },
                {
                    "id": "UM",
                    "title": "User Maintenance",
                    "reference": "UMRef",
                    "url": null
                }
            ],
            "BMRef": [
                {
                    "id": "BMRef-create",
                    "title": "Create Bank",
                    "reference": null,
                    "url": "/bank/create"
                },
                {
                    "id": "BMRef-list",
                    "title": "List Bank",
                    "reference": null,
                    "url": "/bank/list"
                }
            ],
            "UMRef": [
                {
                    "id": "UMRef-create",
                    "title": "Create User",
                    "reference": null,
                    "url": "/bankgroup/user/create"
                },
                {
                    "id": "UMRef-list",
                    "title": "List User",
                    "reference": null,
                    "url": "/bankgroup/user/list"
                }
            ]
        },
        viewConfig: [
            "sampleconfig"
        ]
    });
}

function getLocalization(req, res, next) {
    res.json(localizationValues);
}

var apiEndpoints = {
    mainUrl: '',
    routes: [{
        method: 'GET',
        url: '/locale/all',
        callback: getLocalization
    },
    {
        method: 'GET',
        url: '/config',
        callback: config
    }]
};

module.exports = apiEndpoints;
