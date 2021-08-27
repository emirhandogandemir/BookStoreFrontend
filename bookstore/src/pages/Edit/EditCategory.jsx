import React, { useState, useEffect } from "react";
import CategoryService from "../../services/categoryService";
import AdminSideBar from "../admin/AdminSideBar";
import AddCategory from "./Add/AddCategory";
import DeleteCategory from "./Delete/DeleteCategory";
import UpdateCategory from "./Update/UpdateCategory";
export default function EditCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService.getAll().then((result) => setCategories(result.data.data));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSideBar></AdminSideBar>
        <div className="col-9">
          <table className="table table-striped">
            <thead className="thead-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr>
                  <td>{category.name}</td>
                  <td>
                    <UpdateCategory
                      category={category}
                      onSuccess={handleCategoryUpdateSuccess}
                    ></UpdateCategory>
                  </td>
                  <td>
                    <DeleteCategory
                      id={category.id}
                      onSuccess={handleCategoryDeleteSuccess}
                    ></DeleteCategory>
                  </td>
                </tr>
              ))}
              <AddCategory onSuccess={handleCategoryAddSuccess}></AddCategory>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  function handleCategoryUpdateSuccess(updatedCategory) {
    const newCategory = [...categories]; // aynı referans olmasın diye
    const targetIndex = categories.findIndex(
      (category) => category.id === updatedCategory.id
    ); // değişiklik yapılmış olan verinin indexini
    newCategory.splice(targetIndex, 1, updatedCategory);
    setCategories(newCategory);
  }

  function handleCategoryAddSuccess(updatedCategory) {
    const newCategory = [...categories, updatedCategory]; // aynı referans olmasın diye
    setCategories(newCategory);
  }

  function handleCategoryDeleteSuccess(id) {
    const newCategory = [...categories];
    const targetIndex = categories.findIndex((category) => category.id === id);
    newCategory.splice(targetIndex, 1);
    setCategories(newCategory);
  }
}
