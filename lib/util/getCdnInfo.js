const domainsConfig = require('../config/domains'); 
const domains = domainsConfig.domains;

module.exports = function getCdnInfo (cdnName) {
    let info = {};
    domains.forEach(item => {
        if ( item.name === cdnName) {
            info = item; 
        }
    });
    return info;
}