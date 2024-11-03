import { IBook } from "../types/Book";
import "./BookList.style.css";

type Props = {
    list: IBook[];
    onDeleteClickHnd: (id: string) => void;
    onEditClickHnd: (book: IBook) => void;
};

const BookList = ({ list, onDeleteClickHnd, onEditClickHnd }: Props): JSX.Element => {
    return (
        <div>
            <h3>Book List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.description}</td>
                            <td>
                                <button onClick={() => onEditClickHnd(book)}>Edit</button>
                                <button onClick={() => onDeleteClickHnd(book.id!)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookList;
