import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteBook, getBook } from "../data/data";

const Book = () => {
  const Navigate = useNavigate();
  const Location = useLocation();
  const params = useParams();
  const book = getBook(parseInt(params.bookId));

  if (book) {
    return (
      <main style={{ padding: "1rem" }}>
        <img src={book.photo} style={{ width: "15%", height: "15vw", float: "left", marginLeft: "5%", border: "1px solid black" }} alt="" />
        <h3>قیمت:{`${book.amount}تومان`}</h3>
        <p>«{book.name} »</p>
        <p>نویسنده:{book.writer}</p>
        <p> موضوع کتاب:{book.sub}</p>
        <p>تاریخ انتشار:{book.due}</p>
        <p>معرفی کتاب:</p>
        <p>{book.desc}</p>
        <p><button onClick={() => {
          deleteBook(book.number)
          Navigate("/books" + Location.search)
        }} className="btn bg-danger active"
        ><i className="fa fa-trash"></i></button></p>
      </main>
    );
  } else {
    return (
      <main style={{ padding: "1rem" }}>
        <p className="text-warning">همچین کتابی یافت نشد...</p>
      </main>
    );
  }
};

export default Book;
