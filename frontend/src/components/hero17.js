import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import dogImage from '../images/dog1.jpg'
import dogimg2 from '../images/dog2.jpg'
import dogs from '../images/GroupOfDogs.jpg'
import catNDog from '../images/catNDog.jpg'
import happyDog from '../images/happyDog.jpg'
import catBrushing from '../images/catBrushing.jpg'
import cutieCat from '../images/cutieCat.jpeg'
import playingDogs from '../images/playingDogs.jpeg'
import SwimmingDogs from '../images/swimmingDog.jpeg'
import treatShop from '../images/treatShop.jpeg'
import playingDog from '../images/PlayingDod.jpeg'
import spaDog from '../images/spaDog.jpg'
import playGround from '../images/playGround.jpeg'
import bathingDog from '../images/bathingDog.jpg'
import swimmingPool from '../images/swimmingPool.jpeg'
import cuteDogs from '../images/CuteDogs.jpeg'
import bubbleBath from '../images/bubbleBath.jpeg'
import dirtyDog from '../images/dirtyDogWash.jpeg'
import dogHairCut from '../images/dogHairCut.jpg'
import backyard from '../images/backyard.jpeg'
import lightingCages from '../images/lightingCages.jpeg'
import './hero17.css'
//hello
const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero17-text5 thq-heading-1">
                  Welcome to Pawstel
                </h1>
              </Fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="hero17-text4 thq-body-large">
                Where Every Pet is Family. It is your pet's home away 
                from home! We offer daily boarding and premium services like grooming, 
                spa treatments, and dog walking. Trust us to provide comfort and joy for 
                your pets while ensuring your peace of mind.
                </p>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text6 thq-body-small">
                    Login
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          {/* <button className="thq-button-outline hero17-button1">
            <span>
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text7 thq-body-small">
                    Learn More
                  </span>
                </Fragment>
              )}
            </span>
          </button> */}
        </div>
      </div>
      <div className="hero17-content1">
        <div className="hero17-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={dogImage}
              className="hero17-placeholder-image thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={dogimg2}
              className="hero17-placeholder-image01 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={catNDog}
              className="hero17-placeholder-image02 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={catBrushing}
              className="hero17-placeholder-image03 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={cutieCat}
              className="hero17-placeholder-image04 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={happyDog}
              className="hero17-placeholder-image05 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={SwimmingDogs}
              className="hero17-placeholder-image06 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={treatShop}
              className="hero17-placeholder-image07 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={playingDogs}
              className="hero17-placeholder-image08 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={cuteDogs}
              className="hero17-placeholder-image09 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={swimmingPool}
              className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={bathingDog }
              className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={spaDog}
              className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={playingDog}
              className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={playGround}
              className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={backyard}
              className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={dogHairCut}
              className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={dirtyDog }
              className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={dogs}
              className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={catNDog}
              className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={bubbleBath}
              className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={SwimmingDogs}
              className="hero17-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src=""
              className="hero17-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container1">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  image12Src:
    lightingCages,
  image4Alt: 'group of dogs went for walk ',
  image4Src:
    'https://github.com/Anushkajain01/Project-resources/blob/main/image-400x400%20(5).jpg-bf12a05454f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image8Alt: 'bathing dog',
  image6Src:
    'https://images.unsplash.com/photo-https://github.com/Anushkajain01/Project-resources/blob/main/image-400x400%20(4).jpg-b4ed38b849da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image9Src:
    'https://images.unsplash.com/photo-https://github.com/Anushkajain01/Project-resources/blob/main/image-400x400%20(7).jpg-0d2ada8e71f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image8Src:
    'https://images.unsplash.com/https://github.com/Anushkajain01/Project-resources/blob/main/image-400x400%20(3).jpg-1514514757092-71ebbc3db4e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  image11Alt: 'High-intensity interval training (HIIT) session',
  image3Src:
    'https://images.unsplash.https://github.com/Anushkajain01/Project-resources/blob/main/image-400x400%20(6).jpg/photo-1578762560042-46ad127c95ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Group fitness class in session',
  image12Alt: 'Relaxing post-workout stretch',
  image7Alt: 'Weightlifting session in progress',
  image10Alt: 'Outdoor boot camp training',
  image2Src:
    'https://images.unsplash.com/photo-1536732791443-ebb0eaf20205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  image11Src:
    'https://images.unsplash.com/photo-1517537353166-1b517b6a8b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: undefined,
  action2: undefined,
  image9Alt: 'Nutrition consultation with a dietitian',
  image10Src:
    'https://images.unsplash.com/photo-1591741535018-d042766c62eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Healthy meal prep',
  image7Src:
    'https://images.unsplash.com/photo-1594381898411-846e7d193883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Alt: 'Personal trainer assisting client with exercise',
  image1Alt: 'Fitness trainer guiding client',
  image1Src:
    'https://images.unsplash.com/photo-1536732791443-ebb0eaf20205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Cardio workout session',
}

Hero17.propTypes = {
  image12Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image9Src: PropTypes.string,
  image8Src: PropTypes.string,
  content1: PropTypes.element,
  image11Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image2Src: PropTypes.string,
  heading1: PropTypes.element,
  image11Src: PropTypes.string,
  action1: PropTypes.element,
  action2: PropTypes.element,
  image9Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image5Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image6Alt: PropTypes.string,
}

export default Hero17
