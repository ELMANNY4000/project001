import React from "react";
import "./popup.css";

export const Popup = () => {
  return (
    <>
      <div className="popup">
        <section className="status-bar-parent">
          <div className="frame-wrapper5">
            <div className="frame-parent13">
              <div className="frame-wrapper6">
                <div className="metric-item3">
                  <div className="heading8">
                    <div className="vector-container">
                      <img
                        className="vector-icon2"
                        loading="lazy"
                        alt=""
                        src="./public/vector@2x.png"
                      />

                      <div className="welcome-seun-container">
                        <h3 className="welcome-seun2">Welcome Seun,</h3>
                        <div className="your-account-is2">
                          Your account is all set!
                        </div>
                      </div>
                    </div>
                    <div className="button2">
                      <img
                        className="secondaryoutlinebx-x-icon2"
                        loading="lazy"
                        alt=""
                        src="./public/secondaryoutlinebxx.svg"
                      />
                    </div>
                  </div>
                  <div className="value-frame">
                    <b className="value2">Getting started on Rensecure</b>
                  </div>
                  <div className="accessing-your-account-group">
                    <b className="accessing-your-account2">
                      Accessing your account
                    </b>
                    <div className="from-now-on2">
                      From now on , you will use Johndoe@gmail,com to access
                      your account
                    </div>
                  </div>
                  <div className="frame-parent14">
                    <div className="report-a-fraud-container">
                      <b className="report-a-fraud2">Report a fraud</b>
                      <div className="you-can-easily2">
                        You can easily report a fraud case, and help other
                        people avoid scam and fraudsters out there
                      </div>
                    </div>
                    <button className="mds-tw-button12">
                      <div className="button-text12">Report a fraud</div>
                    </button>
                  </div>
                  <div className="stay-up-to-date-on-latest-risk-group">
                    <b className="stay-up-to2">
                      Stay up to date on latest risk news
                    </b>
                    <div className="we-have-curated2">
                      We have curated a list of contents and tools to help you
                      make the right decision
                    </div>
                  </div>
                  <div className="mds-tw-button-frame">
                    <button className="mds-tw-button13">
                      <div className="button-text13">Got it!</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
