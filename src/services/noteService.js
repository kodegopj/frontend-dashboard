import axios from "axios";

const baseUrl = "http://localhost:3001/notes";
let token = null;

function setToken(newToken) {
    token = `Bearer ${newToken}`;
}

async function getNotes() {
    const config = {
        headers: { Authorization: token },
    };

    const res = await axios.get(baseUrl, config);
    return res.data;
};

async function createNote(newNote) {
    const config = {
        headers: { Authorization: token },
    };

    const  res = await axios.post(baseUrl, newNote, config);
    return res.data;
}

async function addNote(noteObject) {
    const res = await axios.post(baseUrl, noteObject);

    return res.data;
}

async function deleteNote(id) {
    const res = await axios.delete(`${baseUrl}/${id}`);

    return res;
}

async function updateNote(id, updatedNote) {
    const res = await axios.put(`${baseUrl}/${id}`, updatedNote);
    return res.data;
}


export default {
    setToken,
    getNotes,
    createNote,
    addNote,
    deleteNote,
    updateNote,
};