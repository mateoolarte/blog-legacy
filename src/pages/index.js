import React from "react";
import PostLink from "../components/PostLink";
import styles from "../styles/Hero.module.css";
import stylesPosts from "../styles/Posts.module.css";

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  let layoutTwoPost = false;

  if (edges.length === 2) {
    layoutTwoPost = stylesPosts.postsItemLayoutTwo;
  }

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => {
      return (
        <PostLink
          key={edge.node.id}
          post={edge.node}
          styles={stylesPosts}
          classTwoPosts={layoutTwoPost}
        />
      );
    });

  return (
    <section className="wrapper">
      <header className={styles.hero}>
        <div className={styles.heroInfo}>
          <h1 className={styles.heroTitle}>Bienvenido a mi blog personal</h1>
          <p className={styles.heroDescription}>
            Por medio de articulos, tutoriales y experiencias. Te compartiré
            consejos, aprendizajes, proyectos o aportando información acerca de
            alguna tecnología en particular.
          </p>
        </div>
      </header>
      <section className={stylesPosts.postsContainer}>
        <h1 className={`heading ${stylesPosts.postsHeading}`}>
          Entradas más recientes
        </h1>
        {Posts}

        {Posts.length >= 6 && (
          <div className="text-center">
            <a className="margin-bottom-3 btnPrimary btnLarge" href="#">
              Ver todas las entradas
            </a>
          </div>
        )}
      </section>
    </section>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 180)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            cover
          }
        }
      }
    }
  }
`;
