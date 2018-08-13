module.exports = {
    domains: [{
        name: "cdnjs",
        aliases: ["cdnjs.com"],
        cdnBase: "https://cdnjs.cloudflare.com/",
        getUrl: function(packageObj) {
            console.log(packageObj);
            let packageName = packageObj.packageName,
                version = packageObj.version,
                fileName = packageObj.packageName + ( packageObj.isMinifiy ? ".min" : "" )
            return [
                `${this.cdnBase}ajax/libs/${packageName}/${version}/${fileName}.js`
            ]
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