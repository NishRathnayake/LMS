import { useEffect, useState } from "react";
import "./Home.style.css";
import { IBook } from "../types/Book";
import BookList from "./BookList";
import AddBook from "./AddBook";
import * as api from "../api";

const Home = () => {
    const [bookList, setBookList] = useState<IBook[]>([]);
    const [isAddingBook, setIsAddingBook] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
   

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await api.fetchBooks();
            setBookList(response.data);
            setErrorMessage(null);
        } catch (error) {
            setErrorMessage("Error fetching books.");
            console.error(error);
        }
    };

    const addBook = async (data: IBook) => {
        try {
            const response = await api.addBook(data);
            console.log(response.data); // Debugging to check structure
            setBookList([...bookList, response.data as IBook]); // Type assertion
            setIsAddingBook(false);
            setErrorMessage(null);
        } catch (error) {
            setErrorMessage("Error adding book.");
            console.error(error);
        }
    };

    const updateBook = async (updatedBook: IBook) => {
        if (!updatedBook.id) return;
        try {
            await api.updateBook(updatedBook.id, updatedBook);
            setBookList(bookList.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
        } catch (error) {
            setErrorMessage("Error updating book.");
            console.error(error);
        }
    };

    const deleteBook = async (bookId: string) => {
        try {
            await api.deleteBook(bookId);
            setBookList(bookList.filter((book) => book.id !== bookId));
        } catch (error) {
            setErrorMessage("Error deleting book.");
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Library Management System</h1>
            {errorMessage && <div className="error">{errorMessage}</div>}
            {isAddingBook ? (
                <AddBook onSubmitClickHnd={addBook} onBackBtnClickHnd={() => setIsAddingBook(false)} />
            ) : (
                <>
                    <button onClick={() => setIsAddingBook(true)}>Add New Book</button>
                    <BookList list={bookList} onDeleteClickHnd={deleteBook} onEditClickHnd={updateBook} />
                </>
            )}
        </div>
        
        
    );
};

export default Home;
