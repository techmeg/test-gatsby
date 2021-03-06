import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout.js'

const BlogPage = ({ data }) => {
    return (
            <Layout pageTitle="My Blog Posts" >
                <ul style={{padding: 0}}>
                    {
                        data.allMdx.nodes.map(node => (
                            <article key={node.id}>
                                <h2>
                                    <Link to={`/blog/${node.slug}`}>{ node.frontmatter.title }</Link>
                                </h2>
                                <p> Posted: {node.frontmatter.date }</p>

                            </article>
                        ))
                    }
                </ul>
            </Layout>
    )
}
export const query = graphql`
    query {
        allMdx(sort: {order: DESC, fields: frontmatter___date}) {
            nodes {
              frontmatter {
                title
                date(formatString: "MMMMM, D, YYYY")
              }
              id
              slug
            }
        }
    }
`

export default BlogPage