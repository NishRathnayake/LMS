import axios from "axios";
import { IBook } from "./types/Book";

const api = axios.create({
    baseURL: "http://localhost:7241/api/books",
});

export const fetchBooks = () => api.get<IBook[]>("/");
export const addBook = (book: IBook) => api.post("/", book);
export const updateBook = (id: string, book: IBook) => api.put(`/${id}`, book);
export const deleteBook = (id: string) => api.delete(`/${id}`);
