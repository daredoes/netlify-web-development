import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionHeader from '../../components/SectionHeader'

class ContactItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, icon, external_url } = this.props.frontmatter;
        const { html } = this.props;
        return (
            <div className="contact-item box">
                <div className="columns is-mobile is-tablet is-desktop">
                    <div className="flex-centered column is-2">
                        <a href={external_url} className="iconAnchor">
                            <div class="icon is-large">
                                <FontAwesomeIcon icon={icon} fixedWidth className="contactIcon"/>    
                            </div>
                        </a>
                    </div>
                    <div className="column is-10">
                        <div className="content">
                            <span>
                                {title}
                            </span>
                            <div dangerouslySetInnerHTML={{ __html: html}}>
                            </div>
                        </div>
                    </div>
                </div>
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
                <SectionHeader title="Contact" />
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