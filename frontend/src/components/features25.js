import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import dogWalking from '../images/dogWalking.jpeg'
import grooming from '../images/dirtyDogWash.jpeg'
import spa from '../images/spaDay.jpg'
import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container1 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal"
          >
            <div className="features25-divider-container">
              {activeTab === 0 && <div className="features25-container2"></div>}
            </div>
            <div className="features25-content">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features25-text thq-heading-2">
                    Professional Grooming
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text2 thq-body-small">
                    Top-notch grooming services to keep your pet looking and feeling their best.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 1 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features25-text3 thq-heading-2">
                    Spa Treatments
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text1 thq-body-small">
                    Relaxing spa treatments to pamper and rejuvenate your pets.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 2 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features25-text5 thq-heading-2">
                    Dog Walking
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text4 thq-body-small">
                    Regular walks and exercise to keep your pets healthy and active.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={grooming}
              className="features25-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={spa}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={dogWalking}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature1Title: undefined,
  feature2Description: undefined,
  feature2ImgAlt: 'Nutritional Guidance Image Alt Text',
  feature1Description: undefined,
  feature3ImgAlt: 'Group Fitness Classes Image Alt Text',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1604467731651-3d8b9c702b86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1578762560042-46ad127c95ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Personalized Training Programs Image Alt Text',
  feature3Description: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1516810714657-e654b97f1d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: undefined,
}

Features25.propTypes = {
  feature1Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature3Title: PropTypes.element,
}

export default Features25
