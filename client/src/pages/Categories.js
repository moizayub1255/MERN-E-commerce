import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import Loader from "../components/Layout/Loader";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <Loader/>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          {categories.map((c) => (
            <div
              className="col-md-4 col-sm-6 col-6 mt-4 mb-4"
              key={c._id}
            >
              <div
                style={{
                  backgroundColor: "#000000", // Black background
                  width: "200px", // Fixed width for square shape
                  height: "200px", // Fixed height for square shape
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px", // Slightly rounded corners
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Shadow for better look
                }}
              >
                <Link
                  to={`/category/${c.slug}`}
                  style={{
                    color: "#FFFFFF", // White text
                    fontSize: "1.2rem", // Text size
                    fontWeight: "bold", // Bold text
                    textTransform: "uppercase", // Uppercase text
                    textDecoration: "none", // Remove underline
                  }}
                >
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;