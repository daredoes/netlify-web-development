import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '../../components/PrintableSectionHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SkillItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props.frontmatter;
        return (
            <span className="">
                {title}
            </span>
        )
    }
}

SkillItem.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        level: PropTypes.number,
        weight: PropTypes.number,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
    }),
    html: PropTypes.string
}

export default class SkillTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { elements } = this.props;
        elements = elements.filter(function(edge) {
            return edge.node.frontmatter && edge.node.frontmatter.printable;
        })
        const children = elements.map(function(edge) {
            return <SkillItem key={edge.node.id} {...edge.node} />
        })
        const modifiedChildren = [];
        children.forEach(function(v, i) {
            modifiedChildren.push(v);
            if (i < children.length-1) {
                modifiedChildren.push(<span> • </span>)
            }            
        })
        return (
            <div>
                <SectionHeader title="Skills & Software" />
                <div className="is-size-7">
                    {modifiedChildren}
                </div>
            </div>
        )
    }
}

SkillTemplate.propTypes = {
    elements: PropTypes.array
}