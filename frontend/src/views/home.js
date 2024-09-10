import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Pawstel</title>
        <meta property="og:title" content="Hefty Present Quail" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text thq-link thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text001 thq-link thq-body-small">
              Services
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text002 thq-link thq-body-small">
              Hostel
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text003 thq-link thq-body-small">
              Contact
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text008">Login</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text009">Sign-up</span>
          </Fragment>
        }
        action3={
          <Fragment>
            <span className="home-text009">Log Out</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text010 thq-body-small">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text011 thq-body-small">
              Page Two Description
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text012 thq-body-small">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text013 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text014 thq-body-small">Login</span>
          </Fragment>
        }
        // action2={
        //   <Fragment>
        //     <span className="home-text015 thq-body-small">Learn More</span>
        //   </Fragment>
        // }
        content1={
          <Fragment>
            <p className="home-text016 thq-body-large">
              Where Every Pet is Family.
              We offer daily boarding and premium services like grooming,
              spa treatments, and dog walking. Trust us to provide comfort and joy for
              your pets while ensuring your peace of mind.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="home-text017 thq-heading-1">
              Welcome to Pawstel
            </h1>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <h2 className="home-text018 thq-heading-2">
              Comfortable Boarding
            </h2>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text019 thq-heading-2">24/7 Supervision</h2>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text020 thq-heading-2">
              Playtime and Socialization
            </h2>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text021 thq-body-small">
              Cozy and safe accommodations tailored to your pet's needs.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text022 thq-body-small">
              Experienced staff ensuring round-the-clock care and attention.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text023 thq-body-small">
              Engaging activities and socialization opportunities for a happy stay.
            </span>
          </Fragment>
        }
      ></Features24>
      {/* <CTA26
        action1={
          <Fragment>
            <span className="home-text024">Explore Memberships</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text025 thq-body-large">
              Explore our tailored pet care packages and start providing your furry friends
              with the ultimate in comfort, grooming, and fun. Join the Pawstel family and
              ensure your pets experience a healthier, happier stay!
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text026 thq-heading-2">
              Embark on a Pawsitive Journey Today!
            </span>
          </Fragment>
        }
      ></CTA26> */}
      <Features25
        feature1Title={
          <Fragment>
            <h2 className="home-text027 thq-heading-2">
              Professional Grooming
            </h2>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text028 thq-heading-2">Spa Treatments</h2>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text029 thq-heading-2">
              Dog Walking
            </h2>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text030 thq-body-small">
              Top-notch grooming services to keep your pet looking and feeling their best.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text031 thq-body-small">
              Relaxing spa treatments to pamper and rejuvenate your pets.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text032 thq-body-small">
              Regular walks and exercise to keep your pets healthy and active.
            </span>
          </Fragment>
        }
      ></Features25>
      {/* <Pricing14
        plan1={
          <Fragment>
            <p className="home-text033 thq-body-large">Basic plan</p>
          </Fragment>
        }
        plan2={
          <Fragment>
            <p className="home-text034 thq-body-large">Business plan</p>
          </Fragment>
        }
        plan3={
          <Fragment>
            <p className="home-text035 thq-body-large">Enterprise plan</p>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text036 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text037 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text038 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text039 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <p className="home-text040 thq-body-large">
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
        }
        heading1={
          <Fragment>
            <h2 className="home-text043 thq-heading-2">Pricing plan</h2>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <h3 className="home-text044 thq-heading-3">$50/month</h3>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <h3 className="home-text045 thq-heading-3">$80/month</h3>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <h3 className="home-text046 thq-heading-3">$100/month</h3>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text047 thq-body-small">Sign up now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <h3 className="home-text048 thq-heading-3">$200/yr</h3>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <p className="home-text049 thq-body-large">$500/year</p>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text050 thq-body-small">Sign up now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <h3 className="home-text051 thq-heading-3">$299/yr</h3>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <p className="home-text052 thq-body-large">$800/year</p>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text053 thq-body-small">Sign up now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <h3 className="home-text054 thq-heading-3">$499/yr</h3>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <p className="home-text055 thq-body-large">$1000/year</p>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text056 thq-body-small">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text057 thq-body-large">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text058 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text059 thq-body-large">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text060 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text061 thq-body-large">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text062 thq-body-small">
              Access to gym facilities
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text063 thq-body-small">
              Personalized workout plan
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text064 thq-body-small">
              Nutritional guidance
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text065 thq-body-small">
              Unlimited classes
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text066 thq-body-small">
              One-on-one training sessions
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text067 thq-body-small">
              Body composition analysis
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text068 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text069 thq-body-small">24/7 gym access</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text070 thq-body-small">
              Weekly check-ins with a personal trainer
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text071 thq-body-small">
              Custom meal plans
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text072 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text073 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text074 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text075 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text076 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text077 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text078 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text079 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text080 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text081 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text082 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text083 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text084 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text085 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></Pricing14> */}
      <Steps2
        step1Title={
          <Fragment>
            <h2 className="home-text086 thq-heading-2">Emily Rivers</h2>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <h2 className="home-text087 thq-heading-2"> Sophia Bennett</h2>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <h2 className="home-text088 thq-heading-2"> Jake Matthews</h2>
          </Fragment>
        }
       
        
        step1Description={
          <Fragment>
            <span className="home-text090 thq-body-small">
            Emily is a compassionate pet care specialist at our daycare hostel, dedicated to providing personalized attention and love to every furry guest.
                     With a gentle approach and years of experience, she ensures each pet feels safe, happy, and at home.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text091 thq-body-small">
            Sophia is a skilled pet grooming expert at our daycare hostel, known for her meticulous care and gentle handling.
                     She transforms every pet's grooming session into a soothing experience, leaving them looking and feeling their best.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text092 thq-body-small">
            Jake is an energetic pet walker at our daycare hostel, passionate about keeping pets active and happy.
                    With his friendly demeanor and love for the outdoors, he ensures every walk is a fun and engaging adventure for your furry friends.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text093 thq-body-small">
              Get expert advice on nutrition to complement your workout routine
              and maximize results.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text094 thq-body-small">Regular grooming keeps your pet clean and healthy,
              preventing skin issues and reducing shedding through brushing, nail trimming, and ear cleaning.</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text095 thq-body-small">
              A luxurious spa treatment pampers your pet with soothing baths,
              massages, and conditioning treatments, ensuring they feel relaxed and refreshed.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text096 thq-body-small">
              Expert pet stylists provide precise haircuts tailored to your pet's breed,
              enhancing their appearance and comfort while maintaining a manageable coat.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text097 thq-body-small">
              Daily dog walking offers your pet essential exercise,
              mental stimulation, and social interaction, promoting
              overall well-being and happiness.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text098 thq-body-small">
              We offer the following services, we have seen
              amazing results. The staff is knowledgeable and supportive,
              making every experience enjoyable.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text099 thq-heading-2">Services</h2>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <strong className="home-text100 thq-body-large">Grooming</strong>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <strong className="home-text101 thq-body-large">Spa</strong>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <strong className="home-text102 thq-body-large">
              Haircut
            </strong>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <strong className="home-text103 thq-body-large">
              Dog walking
            </strong>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text104 thq-body-small">
              Experienced staff
            </span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text105 thq-body-small">
              Experienced staff
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text106 thq-body-small">Experienced staff</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text107 thq-body-small">Experienced staff</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <p className="home-text108 thq-body-large">
              
            </p>
          </Fragment>
        }
        // heading1={
        //   <Fragment>
        //     <h2 className="home-text109 thq-heading-2">Contact Us</h2>
        //   </Fragment>
        // }
        // location1={
        //   <Fragment>
        //     <h3 className="home-text110 thq-heading-3">Hostel Locatin</h3>
        //   </Fragment>
        // }
        // location2={
        //   <Fragment>
        //     <h3 className="home-text111 thq-heading-3">Online</h3>
        //   </Fragment>
        // }
        // location1Description={
        //   <Fragment>
        //     <p className="home-text112 thq-body-large">
        //       Visit us .
        //     </p>
        //   </Fragment>
        // }
        // location2Description={
        //   <Fragment>
        //     <p className="home-text113 thq-body-large">
              
        //     </p>
        //   </Fragment>
        // }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text114 thq-body-small">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text115 thq-body-small">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text116 thq-body-small">Contact Us</span>
          </Fragment>
        }
        // link4={
        //   <Fragment>
        //     <span className="home-text117 thq-body-small">Membership</span>
        //   </Fragment>
        // }
        // link5={
        //   <Fragment>
        //     <span className="home-text118 thq-body-small">Blog</span>
        //   </Fragment>
        // }
        termsLink={
          <Fragment>
            <span className="home-text119 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text120 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text121 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
