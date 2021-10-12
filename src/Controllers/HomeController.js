const fs = require('fs');

async function index(req, res) {

    const notes_list = await load();



    res.render('Pages/home', { title: 'Web Notes', notes: notes_list });
}

function save(req, res) {
    const data = req.body

    const note = {
        title: data.note
    };

    const notes_list = load();
    notes_list.push(note)

    fs.writeFileSync('./src/Models/notes.json', JSON.stringify(notes_list));

    return res.redirect('/');
}

function load() {
    try {
        return JSON.parse((fs.readFileSync('./src/Models/notes.json').toString()))
    } catch (err) {
        return []
    }
}

module.exports = { index, save, load }