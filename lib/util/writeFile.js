const fs = require("fs-extra");
const h5template = require("../config/h5template");

module.exports = function writeFile (resourceURLS, fileName) {
    if (!fs.existsSync(fileName)) {
        fs.outputFileSync(fileName, h5template);
    }
    const html = fs.readFileSync(fileName, 'utf-8');
    let _html = html.replace("</body>", `<script src="${resourceURLS[0]}"></script>\n</body>`)
    fs.outputFileSync(fileName, _html);
}