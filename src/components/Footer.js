import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from "moment";

const Footer = class extends React.Component {
  
  render() {
    const buildtime = moment(process.env.GATSBY_BUILDTIME);
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <a href="#print" id="print" onClick={() => {window.print()}} className="iconAnchor">
              <div className="icon is-large">
                  <FontAwesomeIcon icon="print" fixedWidth className="contactIcon"/>    
              </div>
          </a>
          <p>Last Updated: {buildtime.format('L')}</p>
        </div>
      </footer>
    )
  }
}

export default Footer
