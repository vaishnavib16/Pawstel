import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container1 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Our Staff Members
            </h2>
            <p className="thq-body-large">
              
            </p>
            <div className="steps2-actions">
              {/* <button className="thq-button-animated thq-button-filled steps2-button">
                <span className="thq-body-small">Main action</span>
              </button> */}
            </div>
          </div>
          <div className="steps2-container2">
            <div className="steps2-container3 thq-card">
              <h2>
                {props.step1Title ?? (
                  <Fragment>
                    <h2 className="steps2-text17 thq-heading-2">
                    Emily Rivers
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text21 thq-body-small">
                    Emily is a compassionate pet care specialist at our daycare hostel, dedicated to providing personalized attention and love to every furry guest.
                     With a gentle approach and years of experience, she ensures each pet feels safe, happy, and at home.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text05 thq-heading-3">01</label>
            </div>
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step2Title ?? (
                  <Fragment>
                    <h2 className="steps2-text20 thq-heading-2">
                    Sophia Bennett
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text16 thq-body-small">
                    Sophia is a skilled pet grooming expert at our daycare hostel, known for her meticulous care and gentle handling.
                     She transforms every pet's grooming session into a soothing experience, leaving them looking and feeling their best.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text08 thq-heading-3">02</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step3Title ?? (
                  <Fragment>
                    <h2 className="steps2-text15 thq-heading-2">
                    Jake Matthews
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text18 thq-body-small">
                    Jake is an energetic pet walker at our daycare hostel, passionate about keeping pets active and happy.
                    With his friendly demeanor and love for the outdoors, he ensures every walk is a fun and engaging adventure for your furry friends.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text11 thq-heading-3">03</label>
            </div>
            {/* <div className="steps2-container6 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text19 thq-heading-2">
                      Nutrition Guidance
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text22 thq-body-small">
                      Get expert advice on nutrition to complement your workout
                      routine and maximize results.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text14 thq-heading-3">04</label>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step3Title: undefined,
  step2Description: undefined,
  step1Title: undefined,
  step3Description: undefined,
  step4Title: undefined,
  step2Title: undefined,
  step1Description: undefined,
  step4Description: undefined,
}

Steps2.propTypes = {
  step3Title: PropTypes.element,
  step2Description: PropTypes.element,
  step1Title: PropTypes.element,
  step3Description: PropTypes.element,
  step4Title: PropTypes.element,
  step2Title: PropTypes.element,
  step1Description: PropTypes.element,
  step4Description: PropTypes.element,
}

export default Steps2
