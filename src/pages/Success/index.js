import React from 'react'
import Image from 'next/image'
import { Industrial, Success } from '../../../public/images';



const index = () => {
  return (
    <>
        <div className="done">
      <main className="done-inner">
        <div className="frame-parent">
          <div className="frame-group">
            <div className="frame-wrapper">
              <div className="frame-container">
                <div className="frame-child"></div>
                <div className="frame-item"></div>
              </div>
            </div>
            <div className="industrial-designer-working-3d-parent">
              <Image
                className="industrial-designer-working-3d-icon"
                alt=""
                src={Industrial}
              />

              <div className="current-level-inform-container">
                <ul className="report-fraud-cases-search-and">
                  <li className="report-fraud-cases">Report fraud cases</li>
                  <li className="search-and-identify">
                    Search and identify fake accounts
                  </li>
                  <li>Real-time actionable and informed decision</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="metric-item-wrapper">
            <div className="metric-item">
              <Image
                className="efs-1-icon"
                alt=""
                src={Success}
              />

              <div className="frame-div">
                <div className="success-parent">
                  <h1 className="success">Success!</h1>
                  <div className="your-account-has">
                    Your account has been successfully created
                  </div>
                </div>
                <button className="mds-tw-button1">
                  <div className="button-text1">Continue to dashboard</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}
export default index;