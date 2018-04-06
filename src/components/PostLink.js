import React from "react";
import Link from "gatsby-link";

export default function PostLink({ post, styles, classTwoPosts }) {
  return (
    <article className={`${classTwoPosts} ${styles.postsItem}`}>
      <Link to={post.frontmatter.path} className={styles.postsLink}>
        <img
          src={post.frontmatter.cover}
          className={styles.postsImage}
          alt={post.frontmatter.title}
        />
        <div className={styles.postsInfo}>
          <h1 className={styles.postsTitle}>{post.frontmatter.title}</h1>
          <span className={styles.postsDate}>{post.frontmatter.date}</span>
          <p className={styles.postsDescription}>{post.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
