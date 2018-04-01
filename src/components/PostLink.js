import React from "react";
import Link from "gatsby-link";

const PostLink = ({ post }) => {
  return <article>
      <Link to={post.frontmatter.path}>
        {post.frontmatter.title} ({post.frontmatter.date})
      </Link>
    </article>;
};

export default PostLink;
