import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { DiscussionEmbed } from "disqus-react";

import styles from "../styles/Post.module.css";

export default function Template({ data }) {
  // this prop will be injected by the GraphQL query below.
  const { markdownRemark, allMarkdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const post = markdownRemark.frontmatter;

  const disqusShortname = "mateoolarte";

  const disqusConfig = {
    url: post.url,
    identifier: post.id.toString(),
    title: post.title
  };

  const currentPostTitle = frontmatter.title;
  const postsShuffled = allMarkdownRemark.edges
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
  let otherPosts = [];

  postsShuffled.forEach((edge, index) => {
    if (edge.node.frontmatter.title !== currentPostTitle) {
      if (otherPosts.length !== 3) {
        otherPosts.push(edge);
      }
    }

    return otherPosts;
  });

  return (
    <article className={styles.post}>
      <Helmet title={frontmatter.title} />
      <header className={styles.postHeader}>
        <h1 className={styles.postTitle}>{frontmatter.title}</h1>
        <h2 className={styles.postDate}>{frontmatter.date}</h2>
        <figure>
          <img
            src={frontmatter.cover}
            className={styles.postHeaderImg}
            alt={frontmatter.title}
          />
          {frontmatter.copyright.length > 0 && (
            <figcaption className={styles.postHeaderCaption}>Tomado de: <a href={frontmatter.copyright}>{frontmatter.copyright}</a></figcaption>
          )}
        </figure>
      </header>
      <div
        className={styles.postContent}
        dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
      />
      {allMarkdownRemark.edges.length > 2 && (
        <footer className={styles.postOthers}>
          <h3 className={`${styles.postOthersHeading} heading`}>
            También te puede interesar
          </h3>
          <div className={styles.postOthersContainer}>
            {otherPosts.map((post, i) => {
              return (
                <Link
                  to={post.node.frontmatter.path}
                  className={styles.postOthersItem}
                  key={i}
                >
                  <img
                    src={post.node.frontmatter.thumbnail}
                    className={styles.postOthersImage}
                    alt={post.node.frontmatter.title}
                  />
                  <h5 className={styles.postOthersTitle}>
                    {post.node.frontmatter.title}
                  </h5>
                </Link>
              );
            })}
          </div>
        </footer>
      )}
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </article>
  );
}

export const pageQuery = graphql`
  query IndexQueryAndBlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        id
        url
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        cover
        copyright
      }
    }

    allMarkdownRemark(limit: 10) {
      edges {
        node {
          frontmatter {
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`;
