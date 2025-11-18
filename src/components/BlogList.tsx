import React, { useState, useEffect } from "react";
import { BlogPost as BlogPostType } from "../types";
import BlogPost from "./BlogPost";
import styles from "./BlogList.module.css";

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    setPosts([
      { id: 1, title: "Post 1", content: "Conteúdo do post 1" },
      { id: 2, title: "Post 2", content: "Conteúdo do post 2" },
    ]);
  }, []);

  return (
    <div className={styles.blogList}>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
