module.exports = function (host, user, password, configLoc) {
    const fs = require('node:fs');
    const { sshToDevice } = require('../utils/ssh');
    const { dirname } = require('path');
    const { error } = require('../utils/console');

    const dateTime = new Date();
    const fullDateTime = `${dateTime.getDate()}-${dateTime.getMonth() + 1}-${dateTime.getFullYear()}-${dateTime.getHours()}.${dateTime.getMinutes()}.${dateTime.getSeconds()}`;

    sshToDevice(host, user, password, configLoc)
        .then(data => {
            const present = fs.existsSync(`${dirname(require.main.filename)}/config/data/${host}`);
            if (!present) {
                fs.mkdirSync(`${dirname(require.main.filename)}/config/data/${host}`);
            }
            try {
                fs.writeFileSync(`${dirname(require.main.filename)}/config/data/${host}/${host}-${fullDateTime}.xml`, data, { flag: 'ax' });
            } catch (err) {
                error(err);
            }
        })
        .catch((err) => {
            console.log(err);
        });
}