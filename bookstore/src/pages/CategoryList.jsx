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
          <Link to={`/categories/${category.id}`}>
            <div className="col-sm-6 col-lg-3 "> {category.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
