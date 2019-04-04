import React from 'react'
import PropTypes from 'prop-types'

export default class EducationTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, graduation_date } = this.props.frontmatter;
        return (
            <div>{title} {graduation_date}</div>
        )
    }
}

EducationTemplate.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        weight: PropTypes.number,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
        graduation_date: PropTypes.string,
        display_date: PropTypes.string,
    }),
    html: PropTypes.string
}