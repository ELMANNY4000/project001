import React from 'react'
import "Logocase.css";
import Image from 'next/image'

export const index = () => {
  return (
    <>
    <div className="log-a-case">
      <main className="navigation-group">
        <section className="m-d-s-t-w-button4">
          <div className="modal-title">
            <div className="button-left3">
              <Image
                className="primaryoutlinearrow-narrow-l-icon1"
                loading="lazy"
                alt=""
                src="./public/primaryoutlinearrownarrowleft.svg"
              />
            </div>
            <div className="home-icon">
              <form className="metric-item4">
                <div className="report-a-fraud-case-parent">
                  <b className="report-a-fraud3">Report a fraud case</b>
                  <div className="provide-the-details">
                    Provide the details below
                  </div>
                </div>
                <div className="instagram-icon">
                  <div className="twitter-icon">
                    <div className="facebook-logo">
                      <Image
                        className="range-slider-icon"
                        loading="lazy"
                        alt=""
                        src="./public/range-slider@2x.png"
                      />
                    </div>
                    <div className="camera-icon">
                      <b className="description">Basic Information</b>
                      <div className="description-wrapper">
                        <div className="description1">Transaction details</div>
                      </div>
                      <div className="description2">Doc Uploads</div>
                    </div>
                  </div>
                </div>
                <div className="mds-tw-alert">
                  <div className="content8">
                    <div className="alert-header">
                      <Image
                        className="primarysolidinformation-circ-icon"
                        loading="lazy"
                        alt=""
                        src="./public/primarysolidinformationcircle.svg"
                      />

                      <b className="title">Disclaimer</b>
                    </div>
                    <div className="description3">
                      Please note that all submission is subject to review
                      before they are published, we strong encourage accurate
                      submission of fraud incident
                    </div>
                  </div>
                </div>
                <div className="select-category-parent">
                  <div className="select-category">Select category</div>
                  <div className="modal-suitcase">
                    <div className="modal">
                      <Image
                        className="banknote-2-svgrepo-com-icon"
                        loading="lazy"
                        alt=""
                        src="./public/banknote2svgrepocom.svg"
                      />

                      <b className="title1">Financial</b>
                    </div>
                    <div className="modal1">
                      <Image
                        className="home-1-svgrepo-com-icon"
                        loading="lazy"
                        alt=""
                        src="./public/home1svgrepocom.svg"
                      />

                      <b className="title2">Property</b>
                    </div>
                    <div className="modal2">
                      <Image
                        className="suitcase-tag-svgrepo-com-icon"
                        loading="lazy"
                        alt=""
                        src="./public/suitcasetagsvgrepocom.svg"
                      />

                      <b className="title3">Immigration</b>
                    </div>
                    <div className="modal3">
                      <Image
                        className="global-svgrepo-com-1-icon"
                        loading="lazy"
                        alt=""
                        src="./public/globalsvgrepocom-1.svg"
                      />

                      <b className="title4">Cybercrime</b>
                    </div>
                    <div className="modal4">
                      <Image
                        className="layers-minimalistic-svgrepo-co-icon2"
                        loading="lazy"
                        alt=""
                        src="./public/layersminimalisticsvgrepocom-1.svg"
                      />

                      <b className="title5">Others</b>
                    </div>
                  </div>
                </div>
                <div className="input-label6">
                  <div className="text-input6">
                    <div className="input-container">
                      <input
                        className="input-label7"
                        placeholder="Title of fraud case"
                        type="text"
                      />
                    </div>
                    <div className="hint-text">
                      <div className="input-atom">
                        Provide name of alleged fraudster
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-label8">
                  <div className="text-input7">
                    <div className="input-container1">
                      <input
                        className="input-label9"
                        placeholder="Full names"
                        type="text"
                      />
                    </div>
                    <div className="hint-text1">
                      <div className="input-atom1">
                        Provide name of alleged fraudster
                      </div>
                    </div>
                  </div>
                  <div className="text-input8">
                    <div className="input-container2">
                      <input
                        className="input-label10"
                        placeholder="Business name (Optional)"
                        type="text"
                      />
                    </div>
                    <div className="hint-text2">
                      <div className="input-atom2">Optional</div>
                    </div>
                  </div>
                </div>
                <div className="input-label11">
                  <div className="text-input9">
                    <div className="input-container3">
                      <input
                        className="input-label12"
                        placeholder="Phone number"
                        type="text"
                      />
                    </div>
                    <div className="hint-text3">
                      <div className="input-atom3">
                        Provide phone number of alleged fraudster
                      </div>
                    </div>
                  </div>
                  <div className="text-input10">
                    <div className="input-container4">
                      <div className="input-label13">
                        <span className="social-media-handles"
                          >Social media handles
                        </span>
                        <span className="optional">(Optional)</span>
                      </div>
                    </div>
                    <div className="hint-text4">
                      <div className="input-atom4">Optional</div>
                    </div>
                  </div>
                </div>
                <div className="input-label14">
                  <div className="text-input11">
                    <div className="input-container5">
                      <input
                        className="input-label15"
                        placeholder="Address (Optional)"
                        type="text"
                      />
                    </div>
                    <div className="hint-text5">
                      <div className="input-atom5">
                        Provide address of alleged fraudster
                      </div>
                    </div>
                  </div>
                </div>
                <div className="separator1">
                  <Image
                    className="separator-item"
                    loading="lazy"
                    alt=""
                    src="./public/line-271.svg"
                  />
                </div>
                <div className="m-d-s-t-w-buttonbutton">
                  <button className="mds-tw-button17">
                    <div className="button-text17">Previous</div>
                  </button>
                  <button className="mds-tw-button18">
                    <div className="button-text18">Continue</div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  )
}
