import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '../../components/SectionHeader'

class ExperienceItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, display_date } = this.props.frontmatter;
        const { html } = this.props;
        return (
            <div className="contact-item box">
                <div className="content">
                    <div className="is-full-width has-text-centered">
                        <span className="is-size-5 is-underlined">
                            {title}
                        </span>
                    </div>
                    <div className="is-full-width has-text-centered">
                        <span className="is-size-7">
                            {display_date}
                        </span>
                    </div>
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: html}}>
                    </div>
                </div>
            </div>
        )
    }
}

ExperienceItem.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        weight: PropTypes.number,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
        date: PropTypes.string,
        display_date: PropTypes.string,
        external_url: PropTypes.string,
        name: PropTypes.string
    }),
    html: PropTypes.string
}

export default class ExperienceTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { elements } = this.props;
        const children = elements.map(function(edge) {
            return <ExperienceItem key={edge.node.id} {...edge.node} />
          })
        return (
            <div>
                <SectionHeader title="Education" />
                <div>
                    {children}
                </div>
            </div>
        )
    }
}

ExperienceTemplate.propTypes = {
    elements: PropTypes.object
}