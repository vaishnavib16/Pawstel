import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content thq-flex-row">
          <div className="contact10-content1">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact10-text07 thq-heading-2">Contact Us</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact10-text08 thq-body-large">
                   Near AKurdi Railway Station
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        {/* <div className="contact10-content2 thq-flex-row">
          <div className="contact10-container1">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact10-text11 thq-heading-3">
                    Main Gym Location
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact10-text10 thq-body-large">
                    Visit us at our main gym location for a tour and
                    consultation.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container3">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact10-text06 thq-heading-3">Online</h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact10-text09 thq-body-large">
                    Reach out to us online for inquiries about memberships and
                    services.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container4">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1ImageAlt: 'Main Gym Location Image',
  location2: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1636363407089-16874826db3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1639278028489-f9e2c09c611c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  content1: undefined,
  location2Description: undefined,
  location1Description: undefined,
  location2ImageAlt: 'Online Contact Image',
  location1: undefined,
}

Contact10.propTypes = {
  location1ImageAlt: PropTypes.string,
  location2: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  location2Description: PropTypes.element,
  location1Description: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  location1: PropTypes.element,
}

export default Contact10
