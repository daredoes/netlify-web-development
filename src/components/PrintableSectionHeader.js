import React from 'react'
import PropTypes from 'prop-types'

export default class SectionHeader extends React.Component {

    render() {
        const { title } = this.props;
        return (
            <div>
                <span className="is-size-4 is-capitalized has-text-weight-bold">{title}</span>
                <hr/>
            </div>
        )
    }
}

SectionHeader.propTypes = {
    title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
}