const chalk = require('chalk');

const cdnName = require('../../package.json').cdnConfig.defaultCdnName;
const getCdnInfo = require('../util/getCdnInfo');
const resolvePackName = require('../util/resolvePackName');
const writeFile = require('../util/writeFile');

module.exports = async function install (packageName, options = {}) {
    const cdnInfo = getCdnInfo(cdnName);
    const packageObj = await resolvePackName(packageName);
    const urls = await cdnInfo.getUrl(packageObj);
    const fileName = options.file || 'index.html' ;
    writeFile(urls, fileName);
}