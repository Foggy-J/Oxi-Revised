const { NodeSSH } = require('node-ssh');
const sshConnection = new NodeSSH();

module.exports.sshToDevice = (host, user, password, configLoc) => {
    let file = '';
    return new Promise((resolve, reject) => {
        sshConnection.connect(
            {
                host: host,
                username: user,
                password: password,
                timeout: 5000,
                readyTimeout: 5000
            }
        )
            .catch(() => {
                reject(`Incorrect SSH configuration for ${host}`);
            })
            .then(function () {
                sshConnection.execCommand(`cat ${configLoc}`)
                    .then(function (result) {
                        file = result.stdout;
                        resolve(file);
                    })
                    .catch(function (error) {
                        reject(`ERROR: ${error}`);
                    })
                    .finally(() => {
                        sshConnection.dispose();
                    });
            });
    })
}