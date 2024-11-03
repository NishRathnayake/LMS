import { useState } from "react";
import { IBook } from "../types/Book";
import "./AddBook.style.css";

type Props = {
    onSubmitClickHnd: (data: IBook) => void;
    onBackBtnClickHnd: () => void;
};

const AddBook = ({ onSubmitClickHnd, onBackBtnClickHnd }: Props) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newBook: IBook = { title, author, description };
        onSubmitClickHnd(newBook);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Book</h2>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label>Author:</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />

            <label>Description:</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

            <div>
                <button type="button" onClick={onBackBtnClickHnd}>Back</button>
                <button type="submit">Add Book</button>
            </div>
        </form>
    );
};

export default AddBook;
