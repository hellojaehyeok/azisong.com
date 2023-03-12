import React from "react";
import { graphql } from "gatsby";

export default function Page({ data, pageContext }) {
  const {
    html,
    frontmatter: { title },
  } = data.markdownRemark;

  return (
    <div>
      <h1>{title}</h1>
      <div
        className="post-container"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export const query = graphql`
  query BlogPostBySlug($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 280)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
