const request = require('request');
const rp = require('request-promise');

module.exports = async function isPackageExists (url) {
    let res = await rp(url);
    return res;
}