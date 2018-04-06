import React from "react";
import PostLink from "../components/PostLink";
import styles from "../styles/Hero.module.css";
import stylesPosts from "../styles/Posts.module.css";

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  let layoutTwoPost = false

  if (edges.length === 2) {
    layoutTwoPost = stylesPosts.postsItemLayoutTwo
  }

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge, i) => {
      return <PostLink key={edge.node.id} post={edge.node} styles={stylesPosts} classTwoPosts={layoutTwoPost} />
    });

  return (
    <section className="wrapper">
      <header className={styles.hero}>
        <div className={styles.heroInfo}>
          <h1 className={styles.heroTitle}>
            Hola! bienvenido a mi blog personal
          </h1>
          <p className={styles.heroDescription}>
            A través de articulos, tutoriales, experiencias y entre muchas cosas
            nerds :D, trataré de ayudarte aportando mis consejos, conocimiento y
            experiencias que he tenido ya sea creando un proyecto como también
            información acerca de alguna conferencia a la cual asista.
          </p>
        </div>
      </header>
      <section className={stylesPosts.postsContainer}>
        <h1 className={`heading ${stylesPosts.postsHeading}`}>
          Entradas más reciente
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
            date(formatString: "DD MMMM, YYYY")
            path
            title
            cover
          }
        }
      }
    }
  }
`;
