import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'
import dogWalking from '../images/dogWalking.jpeg'
import grooming from '../images/catBrushing.jpg'
import haircut from '../images/dogHairCut.jpg'
import spa from'../images/catSpaRest.jpeg'
import './testimonial17.css'

const Testimonial17 = (props) => {
  const history = useHistory();
  const handleCardClick=(id)=>{
    const data = {
      id:id
    }
    history.push("/servicepage",{state:data})
    console.log(id)
  }
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text25 thq-heading-2">
                  Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text20 thq-body-small">
                  I have been training at this gym for a year now, and I have
                  seen amazing results. The trainers are knowledgeable and
                  supportive, making every workout enjoyable.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2"
          onClick={()=>handleCardClick(1)}>
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={grooming}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text17 thq-body-large">
                            Sarah Smith
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27 thq-body-small">
                            Fitness Enthusiast
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text24 thq-body-small">
                        5 stars
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2"
          onClick={()=>handleCardClick(2)}>
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={spa}
                    src={spa}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text16 thq-body-large">
                            John Doe
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text15 thq-body-small">
                            Personal Trainer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text21 thq-body-small">
                        I have been recommending this gym to all my clients. The
                        facilities are top-notch, and the atmosphere is
                        motivating.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2"
          onClick={()=>handleCardClick(3)}>
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={haircut}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text14 thq-body-large">
                            Emily Johnson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text22 thq-body-small">
                            Yoga Instructor
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text23 thq-body-small">
                        Attending classes at this gym has been a game-changer
                        for me. The variety of classes keeps me engaged, and the
                        instructors are fantastic.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2"
          onClick={()=>handleCardClick(4)}>
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={dogWalking}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text26 thq-body-large">
                            Mike Williams
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text18 thq-body-small">
                            Bodybuilder
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text19 thq-body-small">
                        I have achieved my fitness goals faster than I ever
                        imagined thanks to the personalized training programs
                        offered here.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author3Name: undefined,
  author3Alt: 'Image of Emily Johnson',
  author1Alt: 'Image of Sarah Smith',
  author2Position: undefined,
  author2Name: undefined,
  author1Name: undefined,
  author2Alt: 'Image of John Doe',
  author1Src:
    'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: undefined,
  review4: undefined,
  author4Alt: 'Image of Mike Williams',
  content1: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1505682614136-0a12f9f7beea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  review2: undefined,
  author3Position: undefined,
  review3: undefined,
  review1: undefined,
  heading1: undefined,
  author4Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1595399870840-535e92b9e88a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1634896941598-b6b500a502a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjcwODE0NXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial17.propTypes = {
  author3Name: PropTypes.element,
  author3Alt: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Position: PropTypes.element,
  author2Name: PropTypes.element,
  author1Name: PropTypes.element,
  author2Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author4Position: PropTypes.element,
  review4: PropTypes.element,
  author4Alt: PropTypes.string,
  content1: PropTypes.element,
  author3Src: PropTypes.string,
  review2: PropTypes.element,
  author3Position: PropTypes.element,
  review3: PropTypes.element,
  review1: PropTypes.element,
  heading1: PropTypes.element,
  author4Name: PropTypes.element,
  author4Src: PropTypes.string,
  author1Position: PropTypes.element,
  author2Src: PropTypes.string,
}

export default Testimonial17
