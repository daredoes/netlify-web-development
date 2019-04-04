import React from 'react'
import PropTypes from 'prop-types'

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
            return <SkillItem key={edge.node.id} {...edge.node} />
          })
        return (
            <div>
                <p className="is-size-2">/// Skills</p>
                <div className="flex-row">
                    {children}
                </div>
            </div>
        )
    }
}

SkillTemplate.propTypes = {
    elements: PropTypes.object
}