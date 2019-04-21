import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Section from './Section'
import Link from './Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { kebabCase } from 'lodash'

class BlogRoll extends React.Component {
  constructor(props) {
    super(props)
    this.posts = props.data.allMarkdownRemark.edges.map(({ node: post }) => (
      <div className="is-parent column is-full" key={post.id}>
        <article className="tile is-child box notification">
          <p>
            <Link
              className="title has-text-primary is-size-4"
              to={post.fields.slug}
            >
              {post.frontmatter.title}
            </Link>
            <span> &bull; </span>
            
            <span className="subtitle is-size-5 is-block">
              {post.frontmatter.date}
            </span>
          </p>
          <p>
            <div className="content" dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
            <Link className="button" to={post.fields.slug}>
              Keep Reading →
            </Link>
            <br />
            <br />
            <div class="flex-row">
            {post.frontmatter.tags.map(tag => (
               <Link key={tag + `tag`} className="flex-item clean-text" to={`/tags/${kebabCase(tag)}/`}>
                  <span className="tag is-primary link">
                      <FontAwesomeIcon icon="tag" />&nbsp;{tag}
                  </span>
              </Link>
            ))}
              </div>
          </p>
        </article>
      </div>
    ))

    this.state = {
      active: 0
    }
  }

  scrollActive = (forwards) => {
    const max_length = this.posts.length;
    const new_active = (this.state.active + (forwards ? 1 : -1) + max_length) % max_length;
    this.setState({
        active: new_active
    });
  }

  makeScrollElement(forwards) {
    return (
        <Link className="" onClick={() => {this.scrollActive(forwards)}}>
            <FontAwesomeIcon size="lg" icon={['fas', `caret-${forwards ? 'right' : 'left'}`]} />
        </Link>
    )
  }

  render = () => {
    const title = <span>Projects & Blog Posts</span>
    
    return (
      <Section title={title} elements={this.posts} withProgress={true} />
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(
                pruneLength: 500
              )
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
