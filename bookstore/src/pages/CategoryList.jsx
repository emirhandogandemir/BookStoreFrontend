import React, { useState, useEffect } from "react";
import CategoryService from "../services/categoryService";
import { Link } from "react-router-dom";
export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService.getAll().then((result) => setCategories(result.data.data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {categories.map((category, index) => (
          <div className="card shadow-lg m-3">
            <div className="card-header">{category.name}</div>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link to={`/categories/${category.id}`}>
                <button className="btn btn-danger btn-lg">
                  {category.name}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
