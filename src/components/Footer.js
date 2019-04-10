import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <a href="#print" id="print" onClick={() => {window.print()}} className="iconAnchor">
              <div className="icon is-large">
                  <FontAwesomeIcon icon="print" fixedWidth className="contactIcon"/>    
              </div>
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
