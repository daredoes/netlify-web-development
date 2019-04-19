import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '../../components/SectionHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from '../../components/Link'

class ExperienceItem extends React.Component {
    makeScrollElement(forwards) {
        return (
            <Link className="column is-1 flex-centered"  onClick={() => {this.props.scroll(forwards)}}>
                <FontAwesomeIcon size="4x" icon={['fas', `caret-${forwards ? 'right' : 'left'}`]} />
            </Link>
        )
    }

    render() {
        const { title, display_date, name, external_url } = this.props.frontmatter;
        const { html } = this.props;
        const leftScroll = this.makeScrollElement(false);
        const rightScroll = this.makeScrollElement(true);
        return (
            <div className="contact-item box">
                <div className="content">
                    <div className="columns is-mobile is-tablet is-desktop">
                        {leftScroll}
                        <div className="column has-text-centered">
                            <span className="is-size-4 has-text-weight-bold">
                                {title}
                            </span>
                            <div className="is-full-width has-text-centered is-underlined is-size-5">
                                { external_url ? <a href={external_url}>{name}</a> : <span>{name}</span>}
                            </div>
                            <div className="is-full-width has-text-centered has-text-primary">
                                <span className="is-size-7">
                                    {display_date}
                                </span>
                            </div>
                        </div>
                        {rightScroll}
                    </div>
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: html}}>
                    </div>
                </div>
            </div>
        )
    }
}

ExperienceItem.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        weight: PropTypes.number,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
        date: PropTypes.string,
        display_date: PropTypes.string,
        external_url: PropTypes.string,
        name: PropTypes.string
    }),
    html: PropTypes.string,
    scroll: PropTypes.func.isRequired
}


export default class ExperienceTemplate extends React.Component {
    
    constructor(props) {
        super(props);
        let scrollActive = this.scrollActive;
        this.experiences = this.props.elements.filter((edge) => edge.node.frontmatter && edge.node.frontmatter.visible);
        this.experiences = this.experiences.map((edge) => <ExperienceItem key={edge.node.id} {...edge.node} scroll={scrollActive} />);
        this.state = {
            active: 0
        }
    }

    scrollActive = (forwards) => {
        const max_length = this.experiences.length;
        const new_active = (this.state.active + (forwards ? 1 : -1) + max_length) % max_length;
        this.setState({
            active: new_active
        });
    }

    render() {
        const title = <span>Experiences #{this.state.active+1}/{this.experiences.length}</span>
        if (this.experiences) {
            return (
                <div>
                    <SectionHeader title={title} />
                    <div>
                        {this.experiences[this.state.active]}
                    </div>
                </div>
            )
        }
        return (
            <div>
                <SectionHeader title="Experiences" />
                <div>
                    Pending.
                </div>
            </div>
        )
        
    }
}

ExperienceTemplate.propTypes = {
    elements: PropTypes.array
}