import React from 'react'
import PropTypes from 'prop-types'

export default class SkillTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props.frontmatter;
        return (
            <div>{title}</div>
        )
    }
}

SkillTemplate.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        level: PropTypes.number,
        weight: PropTypes.number,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
    }),
    html: PropTypes.string
}