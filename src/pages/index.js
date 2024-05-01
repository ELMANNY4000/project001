import React from 'react'
import Image from 'next/image'
import { Hero_img, Arrow } from '../../public/images' 

const page = () => {
  return (
    <>
      <section className='container'>
        <div className="row pt-5 ">
          <div className='col-lg-6 pt-lg-5 pe-lg-5'>
            <h1 className="text-header fw-medium">
              Report and verify identity on the go
            </h1>
            <p className="hero-text mb-5">
              FraudCovr is built for global internet transactions facing evolving fraud threats. 
              Providing cutting edge solutions for organisations and individuals to protect them from fraud and financial crime, 
              making it harder for criminals to operate.
            </p>
            <div className='Report-btn-cont position-relative'>
              <button className="position-relative Report-btn text-decoration-none py-3 border-0 rounded text-center text-white contact-btn">Report a fraud</button>
              <Image src={Arrow} alt='arrow' className='arrow position-absolute '/>
            </div>
          </div>
          <div className='col-lg-6 ps-lg-3 ms-auto ms-lg-0'>
            <Image
              className="w-100 h-100"
              loading="lazy"
              alt=""
              src={Hero_img}
            />
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="heading-container">
            <h1 className="text-header">How it works</h1>
            <p className="work-text">
              We have built a database of real life, verifiable and thoroughly
              reviewd fraud cases,
            </p>
          </div>
        </div>
        <div className="frame-wrapper4">
          <div className="frame-parent5">
            <div className="card-search-svgrepo-com-1-parent">
              

              <div className="heading-parent1">
                <div className="heading3">Search our database</div>
                <div className="conduct-a-search">
                  Conduct a search using full name, bank accounts, business
                  names etc
                </div>
              </div>
              <div className="heading4">1</div>
            </div>
            <div className="user-heart-svgrepo-com-1-parent">
              

              <div className="heading-parent2">
                <div className="heading5">Find a match</div>
                <div className="we-fetch-all">
                  We fetch all the possible matches and their individual details
                  for your search results
                </div>
              </div>
              <div className="heading6">2</div>
            </div>
          </div>
        </div>

        <div className="frame-wrapper4">
          <div className="frame-parent5">
            <div className="card-search-svgrepo-com-1-parent">
              

              <div className="heading-parent1">
                <div className="heading3">Search our database</div>
                <div className="conduct-a-search">
                  Conduct a search using full name, bank accounts, business
                  names etc
                </div>
              </div>
              <div className="heading4">1</div>
            </div>
            <div className="user-heart-svgrepo-com-1-parent">
              

              <div className="heading-parent2">
                <div className="heading5">Find a match</div>
                <div className="we-fetch-all">
                  We fetch all the possible matches and their individual details
                  for your search results
                </div>
              </div>
              <div className="heading6">2</div>
            </div>
          </div>
        </div>

       <br></br>

        <div className="frame-parent7">
          <div className="frame-parent8">
            <div className="frame-child3"></div>
            <div className="frame-child4"></div>
            <div className="frame-child5"></div>
          </div>
          <div className="group-parent">
            

            <div className="frame-parent9">
              <div className="heading-parent6">
                <div className="heading11">
                  Search our database, verify identities on the go
                </div>
                <div className="current-level-inform3">
                  Leverage real-time database, to reduce exposure to fraud and
                  financial crime and inform decisions.
                </div>
                <div className="current-level-inform-container">
                  <ul className="report-fraud-cases-search-and">
                    <li className="report-fraud-cases">Report fraud cases</li>
                    <li className="search-and-identify">
                      Search and identify fake accounts
                    </li>
                    <li className='infor'>Real-time actionable and informed decision</li>
                  </ul>
                </div>
              </div>
              <div className="mds-tw-button5">
                <div className="button-text5">Search a profile</div>
                <div className="icon-contianer">
                  
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      
      
      <section className="triangle-trove-wrapper">
        <div className="triangle-trove">
          <div className="frame-parent19">
            <div className="frame-parent20">
              <div className="frame-child9"></div>
              <div className="frame-child10"></div>
              <div className="frame-child11"></div>
            </div>
            <div className="error-handler">
              <div className="data-flow-control">
                <div className="heading13">Join our newsletter</div>
                <div className="current-level-inform5">
                  Get updated news and articles on fraud protection and risk
                  management
                </div>
              </div>
              <form className="frame-form">
                <div className="text-input-parent">
                  <div className="text-input7">
                    <div className="input-container8">
                      <input
                        className="input-label12"
                        placeholder="Full names"
                        type="text"
                      />
                    </div>
                    <div className="hint-text7">
                      <div className="input-atom8">Government registered name</div>
                    </div>
                  </div>
                  <div className="text-input8">
                    <div className="input-container9">
                      <input
                        className="input-label13"
                        placeholder="Email address"
                        type="text"
                      />
                    </div>
                    <div className="hint-text8">
                      <div className="input-atom9">Government registered name</div>
                    </div>
                  </div>
                </div>
                <button className="mds-tw-button7">
                  <div className="button-text7">Join Now</div>
                </button>
              </form>
            </div>
          </div>
          <div className="frame-parent21">
            <div className="frame-parent22">
              <div className="frame-child12"></div>
              <div className="frame-child13"></div>
              <div className="frame-child14"></div>
            </div>
            <div className="alignment-alley-wrapper">
              <div className="alignment-alley">
                <div className="heading-parent8">
                  <div className="heading14">
                    <p className="have-you-been">Have you been a victim</p>
                    <p className="of-any-type">of any type a fraud?</p>
                  </div>
                  <div className="we-make-it">
                    We make it easy for you to report your cases of fraud. In
                    return, members receive the benefit of searching the
                    database, to reduce exposure to fraud and financial crime.
                  </div>
                </div>
                <button className="mds-tw-button8">
                  <div className="button-text8">Report fraud case</div>
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
    </>
  )
}

export default page
