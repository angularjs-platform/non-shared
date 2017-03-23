var menu = require('./menu.json');

function config(req, res, next) {
    res.json({
        primaryMenuList: menu,
        viewConfig: [
            "ADDRESS_HAS_DOM"
        ]
    });
}

function upload(req, res, next) {
    var file = req.files.file;
    res.json({
        name: file.name,
        attachmentId :  Math.floor(Math.random() * 100)
    });
}

var apiEndpoints = {
    mainUrl: '',
    routes: [{
        method: 'GET',
        url: '/config',
        callback: config
    },
    {
        method: 'POST',
        url: '/upload',
        callback: upload,
        isupload: true
    }]
};

module.exports = apiEndpoints;
