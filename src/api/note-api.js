import axios from "axios";
const BASE_URL = "http://localhost:3200/notes";

export class NoteAPI {
  static async create(note) {
    return (await axios.post(`${BASE_URL}`, note)).data;
  }

  static async fetchAll() {
    return (await axios.get(BASE_URL)).data;
  }

  static async fetchById(noteId) {
    return (await axios.get(`${BASE_URL}/${noteId}`)).data;
  }

  static async updateById(noteId, note) {
    console.log("updateById", noteId, note);
    return (await axios.put(`${BASE_URL}/${noteId}`, note)).data;
  }

  static async deleteById(noteId) {
    return (await axios.delete(`${BASE_URL}/${noteId}`)).data;
  }
}
