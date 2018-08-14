const isPackageExists = require('../util/isPackageExists');
const request = require('request');
const rp = require('request-promise');

const replaceVersion = function(url, oldVersion, newVersion) {
    return url.replace(oldVersion, newVersion);
}

module.exports = {
    domains: [{
        name: "cdnjs",
        aliases: ["cdnjs.com"],
        cdnBase: "https://cdnjs.cloudflare.com/",
        getUrl:async function(packageObj) {
            let searchLib = async function(packageName) {
                let res = await rp(`https://api.cdnjs.com/libraries?search=${packageName}&fields=version`);
                return res;
            }
            
            let urls = [];
            let packageName = packageObj.packageName,
                version = packageObj.version
                isMinifiy = packageObj.isMinifiy;

            let tempList = await searchLib(packageName);
            let libList = JSON.parse(tempList);
            let latestPack = {
                packageName: libList.results[0].name,
                latest: libList.results[0].latest,
                version: libList.results[0].version
            }
            let need = latestPack.latest.includes("/css/") ?
                        "js" :
                        "";
            need = latestPack.latest.includes("/js/") ?
                        "css" :
                        "";

            urls.push(replaceVersion(latestPack.latest, latestPack.version, version));
            if ( need === "css" ) {
                let cssUrl = latestPack.latest;
                cssUrl = cssUrl.replace("/js/", "/css/");
                cssUrl = cssUrl.replace(".js", ".css");
                urls.push(replaceVersion(cssUrl, latestPack.version, version));
            } else if ( need === "js" ) {
                let jsUrl = latestPack.latest;
                jsUrl = jsUrl.replace("/css/", "/js/");
                jsUrl = jsUrl.replace(".css", ".js");
                urls.push(replaceVersion(jsUrl, latestPack.version, version));
            }

            if ( !isMinifiy ) {
                urls.forEach(function(url, i) {
                    if ( url.includes(".min") ) {
                        urls[i] = url.replace(".min", "");
                    }
                });
            }
            
            console.log(`+ ${latestPack.packageName}@${version}`);
            
            // let cssUrl = `${this.cdnBase}ajax/libs/${packageName}/${version}/${fileName}.js`;
            // let isJsExists = await isPackageExists(jsUrl);
            // let isCssExists = await isPackageExists(jsUrl);
            // if ( isJsExists ) {
            //     urls.push(jsUrl);
            // } else {
            //     jsUrl = `${this.cdnBase}ajax/libs/${packageName}.js/${version}/${fileName}.js`;
            //     isJsExists = await isPackageExists(jsUrl);
            //     if ( isJsExists ) {
            //         urls.push(jsUrl);
            //     }
            // }
            // if ( isCssExists ) {

            // }
            return urls
        }
    }, {
        name: "jsdelivr",
        aliases: [".jsdelivr.com", "jsdelivr.net", "cdn.jsdelivr.net"],
        cdnBase: "https://cdn.jsdelivr.net/",
        getUrl: function(packageObj) {
            let _packName = packageName.includes(".min") ? 
                packageName.replace(".min", "") :
                packageName;
            return `${this.cdnBase}ajax/libs/${_packName}/${version}/${packageName}.js`
        }
    }]
}