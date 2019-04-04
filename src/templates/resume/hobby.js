import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '../../components/SectionHeader'

class HobbyItem extends React.Component {
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

HobbyItem.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        weight: PropTypes.number,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
    }),
    html: PropTypes.string
}

export default class HobbyTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { elements } = this.props;
        const children = elements.map(function(edge) {
            return <HobbyItem key={edge.node.id} {...edge.node} />
          })
        return (
            <div>
                <SectionHeader title="Hobbies" />
                <div className="flex-row">
                    {children}
                </div>
            </div>
        )
    }
}

HobbyTemplate.propTypes = {
    elements: PropTypes.object
}