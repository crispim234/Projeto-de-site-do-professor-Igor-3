import React from "react";
import { BlogPost as BlogPostType } from "../types";
import { useTheme } from "../context/ThemeContext";
import styles from "./BlogPost.module.css";

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const { state } = useTheme();
  return (
    <article
      className={`${styles.post} ${state.theme === "Dark" ? styles.dark : ""}`}
    >
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  );
};

export default BlogPost;
