import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import ContactItemTemplate from './resume/contact-item'
import EducationTemplate from './resume/education'
import HobbyTemplate from './resume/hobby';
import SkillTemplate from './resume/skill';

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const columns = [
    [ // The Left Column
      [EducationTemplate, data.educations.edges, "Education"],
    ],
    [ // The Right Column
      [ContactItemTemplate, data.contacts.edges, "Contact Info"],
      [SkillTemplate, data.skills.edges, "Skills"],
      [HobbyTemplate, data.hobbies.edges, "Hobbies"],
    ]
  ];

  const columnSections = columns.map(function(column, i) {
    // For each column, return an Element made from its values
    const columnElements = column.map(function(values) {
      const Type = values[0];
      // For each data object in the value, return an element of its type
      const children = values[1].map(function(edge) {
        return <Type key={edge.node.id} {...edge.node} />
      })
      // For each column's returned element, put a header for the category
      return  (
        <div key={values[2]}>
          <p className="is-size-2">/// {values[2]}</p>
          {children}
        </div>
      )
    });
    // Return each wrapped column
    return (
      <div key={i} className="column is-quarter">
        {columnElements}
      </div>
    )
  }
  );

  return (
    <Layout>
      <div className="full-width has-text-centered">
        <p className="is-size-1">Hello,</p>
        <p className="is-size-4 is-uppercase">My name is {frontmatter.first_name} {frontmatter.last_name} and this is my Resume/CV</p>
      </div>
      <div className="columns">
        {columnSections}
      </div>
      
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    experiences: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    educations: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    contacts: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    hobbies: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    skills: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    projects: PropTypes.shape({
      id: PropTypes.string,
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        first_name
        middle_name
        last_name
        birth_date
      }
    },
    experiences: allMarkdownRemark(filter: {frontmatter: { key:{ eq:"experience"}}}, sort: { fields: [frontmatter___weight, frontmatter___date, frontmatter___title], order: [ASC, DESC, ASC]}) {
      edges{
        node{
          frontmatter {
            title
            date
            weight
            printable
            visible
            external_url
            key
            display_date
            name
          }
          id
          html
        }
      }
    },
    educations: allMarkdownRemark(filter: {frontmatter: { key:{ eq:"education"}}}, sort: { order: [ASC, DESC, ASC], fields: [frontmatter___weight, frontmatter___graduation_date, frontmatter___title]}) {
      edges{
        node{
          frontmatter {
            title
            weight
            printable
            visible
            key
            graduation_date(formatString: "MMMM YYYY")
            display_date
          } 
          id
          html
        }
      }
    },
    contacts: allMarkdownRemark(filter: {frontmatter: { key:{ eq:"contact"}}}, sort: { fields: [frontmatter___weight, frontmatter___title]}) {
      edges{
        node{
          frontmatter {
            title
            weight
            printable
            visible
            external_url
            icon
            key
          }
          id
          html
        }
      }
    },
    hobbies: allMarkdownRemark(filter: {frontmatter: { key:{ eq:"hobby"}}}, sort: { fields: [frontmatter___weight, frontmatter___title]}) {
      edges{
        node{
          frontmatter {
            title
            weight
            printable
            visible
            icon
            key
          } 
          id
          html
        }
      }
    }
    skills: allMarkdownRemark(filter: {frontmatter: { key:{ eq:"skill"}}}, sort: { fields: [frontmatter___weight, frontmatter___title]}) {
      edges{
        node{
          frontmatter {
            title
            weight
            printable
            visible
            key
            level
          } 
          id
          html
        }
      }
    }
    projects: allMarkdownRemark(filter: {frontmatter: { templateKey:{ eq:"blog-post"}}}, sort: { fields: [frontmatter___weight, frontmatter___date, frontmatter___title], order: [ASC, DESC, ASC]}) {
      edges{
        node{
          id
          frontmatter {
            title
            templateKey
            date
            weight
            printable
            visible
            description
          } 
          id
          html
        }
      }
    }
  }
`
