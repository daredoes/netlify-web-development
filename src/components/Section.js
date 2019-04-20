import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from './Link'

export default class Section extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
    }

    scrollActive = (forwards) => {
        const max_length = this.props.elements.length;
        const new_active = (this.state.active + (forwards ? 1 : -1) + max_length) % max_length;
        this.setState({
            active: new_active
        });
    }

    makeScrollElement = (forwards) => {
        return (
            <Link className="column has-text-centered is-1"  onClick={() => {this.scrollActive(forwards)}}>
                <FontAwesomeIcon size="3x" icon={['fas', `caret-${forwards ? 'right' : 'left'}`]} />
            </Link>
        )
    }

    render() {
        const { title, withProgress, elements } = this.props;
        const progressBar = (<div className="columns is-marginless is-gapless is-mobile is-tablet is-desktop">
            {this.makeScrollElement(false)}
            <div className="column is-10 is-flex flex-centered">
                <progress className="progress is-primary" value={this.state.active+1} max={elements.length}></progress>
            </div>
            {this.makeScrollElement(true)}
        </div>)
        return (
            <div>
                <SectionHeader title={title}>
                {withProgress && progressBar}
                </SectionHeader>
                <div>
                    {withProgress ? elements[this.state.active]: elements}
                </div>
            </div>
        )
    }
}

Section.propTypes = {
    elements: PropTypes.array.isRequired,
    title: PropTypes.oneOf([PropTypes.object, PropTypes.string]).isRequired,
    withProgress: PropTypes.bool,
}

Section.defaultProps = {
    withProgress: false,
}