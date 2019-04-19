import React from 'react'
import PropTypes from 'prop-types'

export default class SectionHeader extends React.Component {

    render() {
        const { title } = this.props;
        return (
            <div>
                <span className="is-size-4 has-text-info is-uppercase has-text-weight-semi-bold">&#47;&#47;{title}</span>
                <hr className="section-header"/>
            </div>
        )
    }
}

SectionHeader.propTypes = {
    title: PropTypes.string
}