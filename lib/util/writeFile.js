const fs = require("fs-extra");
const h5template = require("../config/h5template");

const getTag = function(url) {
    let suffix = url.substring(url.length, url.length - 2);
    if ( suffix === "ss" ) {
        return `<link rel="stylesheet" href="${url}">`
    } else if ( suffix === "js" ) {
        return `<script src="${url}"></script>`
    } else {
        return ""
    }
}

module.exports = function writeFile (resourceURLS, fileName) {
    console.log(resourceURLS);
    if (!fs.existsSync(fileName)) {
        fs.outputFileSync(fileName, h5template);
    }
    const html = fs.readFileSync(fileName, 'utf-8');
    let tempHtml = "";
    resourceURLS.forEach(url => {
        let tag = getTag(url);
        if ( tag ) {
            tempHtml = tempHtml + tag + "\n"
        }
    });
    let _html = html.replace("</body>", tempHtml + "</body>");
    fs.outputFileSync(fileName, _html);
}