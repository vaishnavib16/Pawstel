import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './pricing14.css'

const Pricing14 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="pricing14-pricing23 thq-section-padding">
      <div className="pricing14-max-width thq-section-max-width">
        <div className="pricing14-section-title">
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="pricing14-text092 thq-body-small">
                  Choose the perfect plan for you
                </span>
              </Fragment>
            )}
          </span>
          <div className="pricing14-content">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="pricing14-text074 thq-heading-2">
                    Pricing plan
                  </h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content2 ?? (
                <Fragment>
                  <p className="pricing14-text064 thq-body-large">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="pricing14-tabs">
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing14-button thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">DayCare</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing14-button01 thq-button-animated thq-button-outline"
            >
              <span className="thq-body-small">DayCare</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing14-button02 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Services</span>
            </button>
          )}
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing14-button03 thq-button-animated thq-button-outline"
            >
              <span className="thq-body-small">Services</span>
            </button>
          )}
        </div>
        {isMonthly && (
          <div className="pricing14-container">
            <div className="pricing14-column thq-card">
              <div className="pricing14-price">
                <div className="pricing14-price01">
                  <p>
                    {props.plan1 ?? (
                      <Fragment>
                        <p className="pricing14-text069 thq-body-large">
                          Basic plan
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <h3>
                    {props.plan1Price ?? (
                      <Fragment>
                        <h3 className="pricing14-text100 thq-heading-3">
                          50/hour
                        </h3>
                      </Fragment>
                    )}
                  </h3>
                  <p>
                    {props.plan1Yearly ?? (
                      <Fragment>
                        <p className="pricing14-text060 thq-body-large">
                          500/day
                        </p>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="pricing14-list">
                  <div className="pricing14-list-item">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature1 ?? (
                        <Fragment>
                          <span className="pricing14-text078 thq-body-small">
                            Access to gym facilities
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item01">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature2 ?? (
                        <Fragment>
                          <span className="pricing14-text056 thq-body-small">
                            Personalized plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item02">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature3 ?? (
                        <Fragment>
                          <span className="pricing14-text105 thq-body-small">
                            Nutritional guidance
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button04 thq-button-animated thq-button-outline">
                <span>
                  {props.plan1Action ?? (
                    <Fragment>
                      <span className="pricing14-text055 thq-body-small">
                        Sign up now
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing14-column1 thq-card">
              <div className="pricing14-price02">
                <div className="pricing14-price03">
                  <p>
                    {props.plan2 ?? (
                      <Fragment>
                        <p className="pricing14-text059 thq-body-large">
                          Golden plan
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <h3>
                    {props.plan2Price ?? (
                      <Fragment>
                        <h3 className="pricing14-text102 thq-heading-3">
                          80/hour
                        </h3>
                      </Fragment>
                    )}
                  </h3>
                  <p>
                    {props.plan2Yearly ?? (
                      <Fragment>
                        <p className="pricing14-text094 thq-body-large">
                          800/day
                        </p>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="pricing14-list1">
                  <div className="pricing14-list-item03">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature1 ?? (
                        <Fragment>
                          <span className="pricing14-text076 thq-body-small">
                            Unlimited classes
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item04">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature2 ?? (
                        <Fragment>
                          <span className="pricing14-text085 thq-body-small">
                            One-on-one training sessions
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item05">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature3 ?? (
                        <Fragment>
                          <span className="pricing14-text096 thq-body-small">
                            Body composition analysis
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item06">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature4 ?? (
                        <Fragment>
                          <span className="pricing14-text073 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button05 thq-button-animated thq-button-filled">
                <span>
                  {props.plan2Action ?? (
                    <Fragment>
                      <span className="pricing14-text104 thq-body-small">
                        Sign up now
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing14-column2 thq-card">
              <div className="pricing14-price04">
                <div className="pricing14-price05">
                  <p>
                    {props.plan3 ?? (
                      <Fragment>
                        <p className="pricing14-text071 thq-body-large">
                          Platinum plan
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <h3>
                    {props.plan3Price ?? (
                      <Fragment>
                        <h3 className="pricing14-text086 thq-heading-3">
                          100/hour
                        </h3>
                      </Fragment>
                    )}
                  </h3>
                  <p>
                    {props.plan3Yearly ?? (
                      <Fragment>
                        <p className="pricing14-text075 thq-body-large">
                          1500/day
                        </p>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="pricing14-list2">
                  <div className="pricing14-list-item07">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature1 ?? (
                        <Fragment>
                          <span className="pricing14-text058 thq-body-small">
                            24/7 attention
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item08">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature2 ?? (
                        <Fragment>
                          <span className="pricing14-text098 thq-body-small">
                            Weekly check-ins with a personal stuff
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item09">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature3 ?? (
                        <Fragment>
                          <span className="pricing14-text088 thq-body-small">
                            Custom meal plans
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature4 ?? (
                        <Fragment>
                          <span className="pricing14-text101 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature5 ?? (
                        <Fragment>
                          <span className="pricing14-text077 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button06 thq-button-animated thq-button-filled">
                <span>
                  {props.plan3Action ?? (
                    <Fragment>
                      <span className="pricing14-text084 thq-body-small">
                        Sign up now
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="pricing14-container1">
            <div className="pricing14-column3 thq-card">
              <div className="pricing14-price06">
                <div className="pricing14-price07">
                  <span>
                    {props.plan11 ?? (
                      <Fragment>
                        <span className="pricing14-text106 thq-body-large">
                          Basic plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3>
                    {props.plan1Price1 ?? (
                      <Fragment>
                        <h3 className="pricing14-text063 thq-heading-3">
                          $200/yr
                        </h3>
                      </Fragment>
                    )}
                  </h3>
                  <span>
                    {props.plan1Yearly1 ?? (
                      <Fragment>
                        <span className="pricing14-text068 thq-body-large">
                          or $20 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing14-list3">
                  <div className="pricing14-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature11 ?? (
                        <Fragment>
                          <span className="pricing14-text095 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature21 ?? (
                        <Fragment>
                          <span className="pricing14-text079 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature31 ?? (
                        <Fragment>
                          <span className="pricing14-text080 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button07 thq-button-animated thq-button-outline">
                <span>
                  {props.plan1Action1 ?? (
                    <Fragment>
                      <span className="pricing14-text083 thq-body-small">
                        Get started
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing14-column4 thq-card">
              <div className="pricing14-price08">
                <div className="pricing14-price09">
                  <span>
                    {props.plan21 ?? (
                      <Fragment>
                        <span className="pricing14-text093 thq-body-large">
                          Business plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3>
                    {props.plan2Price1 ?? (
                      <Fragment>
                        <h3 className="pricing14-text057 thq-heading-3">
                          $299/yr
                        </h3>
                      </Fragment>
                    )}
                  </h3>
                  <span>
                    {props.plan2Yearly1 ?? (
                      <Fragment>
                        <span className="pricing14-text107 thq-body-large">
                          or $29 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing14-list4">
                  <div className="pricing14-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature11 ?? (
                        <Fragment>
                          <span className="pricing14-text103 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature21 ?? (
                        <Fragment>
                          <span className="pricing14-text072 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature31 ?? (
                        <Fragment>
                          <span className="pricing14-text099 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature41 ?? (
                        <Fragment>
                          <span className="pricing14-text090 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button08 thq-button-animated thq-button-filled">
                <span>
                  {props.plan2Action1 ?? (
                    <Fragment>
                      <span className="pricing14-text091 thq-body-small">
                        Get started
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing14-column5 thq-card">
              <div className="pricing14-price10">
                <div className="pricing14-price11">
                  <span>
                    {props.plan31 ?? (
                      <Fragment>
                        <span className="pricing14-text087 thq-body-large">
                          Enterprise plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3>
                    {props.plan3Price1 ?? (
                      <Fragment>
                        <h3 className="pricing14-text081 thq-heading-3">
                          $499/yr
                        </h3>
                      </Fragment>
                    )}
                  </h3>
                  <span>
                    {props.plan3Yearly1 ?? (
                      <Fragment>
                        <span className="pricing14-text067 thq-body-large">
                          or $49 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing14-list5">
                  <div className="pricing14-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature11 ?? (
                        <Fragment>
                          <span className="pricing14-text070 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature21 ?? (
                        <Fragment>
                          <span className="pricing14-text082 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature31 ?? (
                        <Fragment>
                          <span className="pricing14-text062 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature41 ?? (
                        <Fragment>
                          <span className="pricing14-text061 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature51 ?? (
                        <Fragment>
                          <span className="pricing14-text097 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button09 thq-button-animated thq-button-filled">
                <span>
                  {props.plan3Action1 ?? (
                    <Fragment>
                      <span className="pricing14-text089 thq-body-small">
                        Get started
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing14.defaultProps = {
  plan1Action: undefined,
  plan1Feature2: undefined,
  plan2Price1: undefined,
  plan3Feature1: undefined,
  plan2: undefined,
  plan1Yearly: undefined,
  plan3Feature41: undefined,
  plan3Feature31: undefined,
  plan1Price1: undefined,
  content2: undefined,
  plan3Yearly1: undefined,
  plan1Yearly1: undefined,
  plan1: undefined,
  plan3Feature11: undefined,
  plan3: undefined,
  plan2Feature21: undefined,
  plan2Feature4: undefined,
  heading1: undefined,
  plan3Yearly: undefined,
  plan2Feature1: undefined,
  plan3Feature5: undefined,
  plan1Feature1: undefined,
  plan1Feature21: undefined,
  plan1Feature31: undefined,
  plan3Price1: undefined,
  plan3Feature21: undefined,
  plan1Action1: undefined,
  plan3Action: undefined,
  plan2Feature2: undefined,
  plan3Price: undefined,
  plan31: undefined,
  plan3Feature3: undefined,
  plan3Action1: undefined,
  plan2Feature41: undefined,
  plan2Action1: undefined,
  content1: undefined,
  plan21: undefined,
  plan2Yearly: undefined,
  plan1Feature11: undefined,
  plan2Feature3: undefined,
  plan3Feature51: undefined,
  plan3Feature2: undefined,
  plan2Feature31: undefined,
  plan1Price: undefined,
  plan3Feature4: undefined,
  plan2Price: undefined,
  plan2Feature11: undefined,
  plan2Action: undefined,
  plan1Feature3: undefined,
  plan11: undefined,
  plan2Yearly1: undefined,
}

Pricing14.propTypes = {
  plan1Action: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan2: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan1Price1: PropTypes.element,
  content2: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan1: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan3: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan2Feature4: PropTypes.element,
  heading1: PropTypes.element,
  plan3Yearly: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan3Feature5: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan1Feature21: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan3Action: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan3Price: PropTypes.element,
  plan31: PropTypes.element,
  plan3Feature3: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan2Action1: PropTypes.element,
  content1: PropTypes.element,
  plan21: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan3Feature2: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan1Price: PropTypes.element,
  plan3Feature4: PropTypes.element,
  plan2Price: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan2Action: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan11: PropTypes.element,
  plan2Yearly1: PropTypes.element,
}

export default Pricing14
