import React, { useState, useEffect } from "react";
import BookService from "../services/bookService";
import Card from "../layouts/card/Card";
export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let bookService = new BookService();
    bookService.getAll().then((result) => setBooks(result.data.data));
  }, []);
  return (
    <div className="row mt-3">
      {books.map((book, index) => (
        <Card book={book}></Card>
      ))}
    </div>
  );
}
