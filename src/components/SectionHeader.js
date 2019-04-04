import React from 'react'
import PropTypes from 'prop-types'

export default class SectionHeader extends React.Component {

    render() {
        const { title } = this.props;
        return (
            <div>
                <span className="is-size-5 is-uppercase has-text-weight-bold">// {title}</span>
                <hr className="section-header"/>
            </div>
        )
    }
}

SectionHeader.propTypes = {
    title: PropTypes.string
}