import React from "react";
import Helmet from "react-helmet";

const Template = ({ data }) => {
  // this prop will be injected by the GraphQL query below.
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  return <section className="blog-post-container">
      <Helmet
        title={frontmatter.title}
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <article className="blog-post">
        <header>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
        </header>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </section>
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default Template;
