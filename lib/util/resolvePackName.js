const domainsConfig = require('../config/domains'); 
const getLatestVersion = require('./getLatestVersion');
const domains = domainsConfig.domains;

module.exports = async function resolvePackName (packName) {
    let version = "",
        packageName = "",
        isMinifiy = false;

    if (packName.includes("@")) {
        let tempArr = packageName.splic("@");
        packageName = tempArr[0];
        version = tempArr[1];
    } else {
        packageName = packName;
    }

    if (packageName.includes(".min")) {
        isMinifiy = true;
        packageName = packageName.replace(".min", "");
    } else {
        packageName = packName;
    }

    if ( !version ) {
        version = await getLatestVersion(packageName);
    }
    
    return {
        version,
        packageName,
        isMinifiy
    };
}