import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionHeader from '../../components/PrintableSectionHeader'

class ContactItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { excerpt } = this.props;
        return (
            <span>{excerpt}</span>
        )
    }
}

ContactItem.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
        external_url: PropTypes.string,
        icon: PropTypes.array,
    }),
    html: PropTypes.string
}

export default class ContactItemTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { elements } = this.props;
        elements = elements.filter(function(edge) {
            return edge.node.frontmatter && edge.node.frontmatter.printable;
        })
        const children = elements.map(function(edge) {
            if (edge.node.frontmatter && edge.node.frontmatter.printable) {
                return <ContactItem key={edge.node.id} {...edge.node} />
            }
        });
        
        const modifiedChildren = [];
        children.forEach(function(v, i) {
            modifiedChildren.push(v);
            if (i < children.length-1) {
                modifiedChildren.push(<span>&nbsp;|&nbsp;</span>)
            }            
        })
        return (
            <div>
                <div className="has-text-weight-bold">
                    {modifiedChildren}
                </div>
            </div>
        )
    }
}

ContactItemTemplate.propTypes = {
    elements: PropTypes.array
}