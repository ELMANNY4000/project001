import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Hero_img, Arrow, CardSearch, CardFind, CardAnalyze, CardMake,Shield, Gradient, Stats, Gradient2, Guy, Arrow2, Gradient3 } from '../../public/images' 

const page = () => {
  const router = useRouter()
  return (
    <>
      <section className='container'>
        <div className="row pt-5 ">
          <div className='col-lg-6 pt-lg-5 pe-lg-5'>
            <h1 className="text-header gray fw-medium">
              Report and verify identity on the go
            </h1>
            <p className="hero-text mb-5">
              FraudCovr is built for global internet transactions facing evolving fraud threats. 
              Providing cutting edge solutions for organisations and individuals to protect them from fraud and financial crime, 
              making it harder for criminals to operate.
            </p>
            <div className='Report-btn-cont position-relative'>
              <button onClick={() => router.push('https://docs.google.com/forms/d/e/1FAIpQLSci2f-8g84ZjXV0gLa-yc80udugxgARiYE9hW91OKbrE_LodA/viewform?usp=sharing')} className="position-relative Report-btn text-decoration-none py-3 border-0 rounded text-center text-white contact-btn">Report a fraud</button>
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

      <section id='works' className="container">
        <div className="row pt-5">
          <div className="heading-container">
            <h1 className="text-header gray">How it works</h1>
            <p className="p-text">
              We have built a database of real life, verifiable and thoroughly
              reviewd fraud cases,
            </p>
          </div>
        </div>
        <div class="row how-card-row">
          <div class="col how-card position-relative">
            <div className="how-card-cont d-flex flex-column justify-content-between h-100">
              <Image src={CardSearch} alt='card image' className='mb-0 mb-lg-5 img-fluid'/>
              <div className='z-1'>
                <div className="how-card-heading my-3 my-lg-0 fw-normal ">Search our database</div>
                <div className="how-card-content w-100  position-relative">
                  Conduct a search using full name, bank accounts, business
                  names etc
                </div>
              </div>
            </div>
            <div className="how-card-num num-width1 position-absolute m-0">1</div>
          </div>
          <div class="col how-card position-relative">
            <div className="how-card-cont d-flex flex-column justify-content-between h-100">
              <Image src={CardFind} alt='card image' className='mb-0 mb-lg-5 img-fluid'/>
              <div className='z-1'>
                <div className="how-card-heading my-3 my-lg-0 fw-normal ">Find a match</div>
                <div className="how-card-content w-100 position-relative">
                  We fetch all the possible matches and their individual details
                  for your search results
                </div>
              </div>
            </div>
            <div className="how-card-num num-width2 position-absolute m-0">2</div>
          </div>
          <div class="col how-card position-relative">
            <div className="how-card-cont d-flex flex-column justify-content-between h-100">
              <Image src={CardAnalyze} alt='card image' className='mb-0 mb-lg-5 img-fluid'/>
              <div className='z-1'>
                <div className="how-card-heading my-3 my-lg-0 fw-normal ">Analyze matched results</div>
                <div className="how-card-content w-100 position-relative">
                  Match results can contain multiple parameters our 
                  aim is to find the closest matches to your search results
                </div>
              </div>
            </div>
            <div className="how-card-num num-width2 position-absolute m-0">3</div>
          </div>
          <div class="col how-card position-relative">
            <div className="how-card-cont d-flex flex-column justify-content-between h-100">
              <Image src={CardMake} alt='card image' className='mb-0 mb-lg-5 img-fluid'/>
              <div className='z-1'>
                <div className="how-card-heading my-3 my-lg-0 fw-normal ">Make informed decision</div>
                <div className="how-card-content w-100 position-relative">
                  Our tool provide the necessary information to help you decide on next steps, 
                </div>
              </div>
            </div>
            <div className="how-card-num num-width2 position-absolute m-0">4</div>
          </div>
        </div>    
      </section>
      
      <section id='Search' className="container">
        <div className="row pt-5 ">
          <div className='py-5 px-lg-5 d-lg-flex bg-black'>
            <div className='col col-lg-6 px-3 px-lg-0 d-flex justify-content-center align-items-center'>
              <Image src={Shield} alt='shield' className='img-fluid pb-4 px-lg-0'/>
            </div>
            <div className='col col-lg-6 px-lg-5 ps-lg-0'>
              <div className="text-header fs-1 letter  text-white">
                Search our database, verify identities on the go
              </div>
              <p className=" text-white p-text pt-4">
                Leverage real-time database, to reduce exposure to fraud and
                financial crime and inform decisions.
              </p>
              <ul className="text-white">
                <li className="shield-item fw-semibold fs-6 py-2">Report fraud cases</li>
                <li className="shield-item fw-semibold fs-6 py-2">
                  Search and identify fake accounts
                </li>
                <li className='shield-item fw-semibold fs-6 py-2'>Real-time actionable and informed decision</li>
              </ul>
              <button className="position-relative Report-btn text-decoration-none py-3 border-0 rounded text-center text-white contact-btn">Coming Soon</button>
            </div>          
          </div>
        </div>
      </section>
      
      <section id='Business' className="container">
        <div className="row pt-5 position-relative">
          <div className='overflow-hidden position-relative'>
            <Image src={Gradient} alt='gradient' className='gradient position-absolute '/>
            <div className='py-5 px-lg-5 d-lg-flex '>
              <div className='col col-lg-6'>
                <div className="text-header fs-1 letter  text-black">
                  For Business
                </div>
                <button className=" text-decoration-none p-3 border-0 rounded text-center text-white contact-btn">Coming soon</button>
                <p className=" p-text pt-4">
                  Effective systems should identify fraud without blocking legitimate payments. 
                  Read our primer on how machine learning can produce predictive models of fraud from large sets of data.
                </p>
                <ul className="">
                  <li className="shield-item fw-semibold fs-6 py-2 p-text">Real-time protection for your customers</li>
                  <li className="shield-item fw-semibold fs-6 py-2 p-text">Block and flag phishing and fraudulent bank accounts </li>
                  <li className='shield-item fw-semibold fs-6 py-2 p-text'>Protect revenue loss and drive growth</li>
                </ul>
                <button onClick={() => router.push('https://docs.google.com/forms/d/e/1FAIpQLSci2f-8g84ZjXV0gLa-yc80udugxgARiYE9hW91OKbrE_LodA/viewform?usp=sharing')} className="position-relative Report-btn text-decoration-none py-3 border-0 rounded text-center text-white contact-btn">Report a fraud</button>
              </div>          
              <div className='col-auto col-lg-6 pt-5 pt-lg-0 d-flex justify-content-center'>
                <Image src={Stats} alt='Statistic image' className='img-fluid'/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='waitlist' className="container ">
        <div className="row pt-5 position-relative ">
          <div className="position-relative overflow-hidden bg-black rounded-4">
            <Image src={Gradient2} alt='gradient' className='frame-parent20 h-100 position-absolute '/>
            <div className="d-lg-flex px-2 px-lg-5 position-relative newsletter-cont">
              <div className="col col-lg-5 z-1 pb-4">
                <div className="newsletter-header text-white fw-normal">Join our newsletter</div>
                <div className="newsletter-text">
                  Get updated news and articles on fraud protection and risk
                  management
                </div>
              </div>
              <form className="col col-lg-7 z-1 d-xl-flex ">
                <div className='d-md-flex '>
                  <div className="">
                    <input
                      className="col-12 col-md-auto rounded-4 border-0 p-3 "
                      placeholder="Full names"
                      type="text"
                    />
                  </div>
                  <div className="py-4 py-md-0 px-md-4">
                    <input
                      className="col-12 col-md-auto rounded-4 border-0 p-3 "
                      placeholder="Email address"
                      type="text"
                    />
                  </div>
                </div>
                <div className='pt-md-3 pt-xl-0'>
                  <button className="col-5 col-md-auto text-decoration-none p-3 border-0 rounded text-center text-white contact-btn text-nowrap">Join Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className='container '>
        <div className='row pt-5 mt-lg-5 position-relative'>
          <div className='position-relative victim rounded-4'>
            <Image src={Arrow2} alt='arrow' className='arrow2 d-none d-lg-block z-2 position-absolute '/>
            <div className='overflow-hidden position-relative '>
              <Image src={Gradient3} alt='gradient' className='gradient3 d-none d-lg-block position-absolute '/>
              <div className='px-2 px-lg-5  d-lg-flex '>
                <div className='col-lg-6 pt-lg-5'>
                  <h1 className="victim-header fw-normal">
                    Have you been a victim of any type a fraud?
                  </h1>
                  <p className="p-text mb-5">
                    We make it easy for you to report your cases of fraud. In
                    return, members receive the benefit of searching the
                    database, to reduce exposure to fraud and financial crime.
                  </p>
                  <div className=''>
                    <button onClick={() => router.push('https://docs.google.com/forms/d/e/1FAIpQLSci2f-8g84ZjXV0gLa-yc80udugxgARiYE9hW91OKbrE_LodA/viewform?usp=sharing')} className="Report-btn text-decoration-none py-3 border-0 rounded text-center text-white contact-btn">Report a fraud</button>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <Image
                    className="float-end img-fluid position-relative z-1"
                    loading="lazy"
                    alt="preson"
                    src={Guy}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page