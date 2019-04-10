import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '../../components/SectionHeader'

class SkillItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props.frontmatter;
        return (
            <div className="flex-item">
                <span className="tag is-black">
                    {title}
                </span>
            </div>
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
        const { elements } = this.props;
        const children = elements.map(function(edge) {
            if (edge.node.frontmatter && edge.node.frontmatter.visible) {
                return <SkillItem key={edge.node.id} {...edge.node} />
            }
          })
        return (
            <div>
                <SectionHeader title="Skills" />
                <div className="flex-row">
                    {children}
                </div>
            </div>
        )
    }
}

SkillTemplate.propTypes = {
    elements: PropTypes.array
}