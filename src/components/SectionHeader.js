import React from 'react'
import PropTypes from 'prop-types'

export default class SectionHeader extends React.Component {

    render() {
        const { title, children } = this.props;
        return (
            <div>
                <span className="is-size-4 has-text-info is-uppercase has-text-weight-semi-bold">&#47;&#47;{title}</span>
                {children}
                <hr className="section-header"/>
            </div>
        )
    }
}

SectionHeader.propTypes = {
    title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
}