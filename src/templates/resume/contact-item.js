import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ContactItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, icon } = this.props.frontmatter;
        const { html } = this.props;
        return (
            <div className="contact-item box">
                <article className="media">
                    <div className="media-left is-centered">
                    <FontAwesomeIcon icon={icon} size="2x" fixedWidth className="contactIcon"/>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                {title}
                            </p>
                            <div dangerouslySetInnerHTML={{ __html: html}}>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

ContactItem.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
        external_url: PropTypes.string,
        icon: PropTypes.string,
    }),
    html: PropTypes.string
}

export default class ContactItemTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { elements } = this.props;
        const children = elements.map(function(edge) {
            return <ContactItem key={edge.node.id} {...edge.node} />
          })
        return (
            <div>
                <p className="is-size-2">/// Contact</p>
                <div>
                    {children}
                </div>
            </div>
        )
    }
}

ContactItemTemplate.propTypes = {
    elements: PropTypes.object
}