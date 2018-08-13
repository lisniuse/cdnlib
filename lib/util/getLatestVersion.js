const request = require('request');
const rp = require('request-promise');
const cheerio = require('cheerio');

async function getVersion (packname) {
    let res = await rp('https://www.npmjs.com/package/' + packname);
    return res;
}

module.exports = async function getLatestVersion (packname) { 
    let html = await getVersion(packname);
    let $ = cheerio.load(html, { decodeEntities: false })
    let version = $(".package__sidebarText___n8Z-E.fw6.mb3.mt2.truncate.black-80.f4").eq(0).text()
    return version;
}