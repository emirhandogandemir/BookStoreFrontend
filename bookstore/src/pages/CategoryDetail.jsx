import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import BookService from "../services/bookService";
import Card from "../layouts/card/Card";
export default function CategoryDetail() {
  let { categoryId } = useParams();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    let bookService = new BookService();
    bookService
      .getByCategoryId(categoryId)
      .then((result) => setBooks(result.data.data));
  }, []);
  //console.log(books);
  return (
    <div className="container">
      <div className="row mt-3">
        {books.map((book, index) => (
          <Card book={book}></Card>
        ))}
      </div>
    </div>
  );
}
