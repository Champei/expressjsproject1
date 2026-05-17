const fs = require('fs');
const path = require('path');

const dataDir = path.join(process.cwd(), 'data');

function writeAll (fileName, data) {
    const filePath = path.join(dataDir, fileName);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

function readAll (fileName) {
    const filePath = path.join(dataDir, fileName);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function deleteNote (fileName) {
    const filePath = path.join(dataDir, fileName);
    fs.unlinkSync(filePath);
}

function listNotes() {
    return fs.readdirSync(dataDir).filter(file => file.endsWith('.json'));
}

module.exports = {
    writeAll,
    readAll,
    deleteNote,
    listNotes
};