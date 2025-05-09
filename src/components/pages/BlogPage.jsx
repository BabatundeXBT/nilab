import React from "react";
import Blog from "../Blog";
import BlogCase from "../BlogCase";
import BlogLayout from "../BlogLayout";

const BlogPage = () => {
  return (
    <>
      <div>
        <Blog header="News & stuff" pageTitle="Blog" />
        <div>
          <BlogCase />
        </div>
        <BlogLayout/>
      </div>
    </>
  );
};

export default BlogPage;
