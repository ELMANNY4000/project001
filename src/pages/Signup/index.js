import Link from "next/link";
import Navbar from "../../../component/Navbar/Navbar";

const Signup = () => {
  return (
    <div className="login">
    <main className="login-inner">
        <section className="metric-item-button-value-parent">
        <div className="metric-item-button-value">
            <div className="input-container11">
            <div className="frame-parent27">
                <div className="frame-child16"></div>
                <div className="frame-child17"></div>
            </div>
            </div>
            <div className="terms-and-conditions">
            <div className="current-level-inform-container2">
                <ul className="report-fraud-cases-search-and1">
                <li className="report-fraud-cases1">Report fraud cases</li>
                <li className="search-and-identify1">
                    Search and identify fake accounts
                </li>
                <li>Real-time actionable and informed decision</li>
                </ul>
            </div>
            </div>
        </div>
        <div className="metric-item-container">
            <div className="metric-item1">
            <div className="button">
                <div className="value">
                <span className="value-txt">
                    <span>
                    <span>Already have an account?</span>
                    <span className="span">
                        <span className="span1"> </span>
                    </span>
                    </span>
                    <span className="login1">
                    <b>Login</b>
                    </span>
                </span>
                </div>
            </div>
            <div className="sign-up-parent">
                <h1 className="sign-up">Sign up</h1>
                <div className="provide-the-details1">
                Provide the details below to continue
                </div>
            </div>
            <div className="text-input8">
                <div className="input-container12">
                <input
                    className="input-label8"
                    placeholder="Full names"
                    type="text"
                />
                </div>
                <div className="hint-text8">
                <div className="input-atom9">Government registered name</div>
                </div>
            </div>
            <div className="text-input9">
                <div className="input-container13">
                <input
                    className="input-label9"
                    placeholder="Email Address"
                    type="text"
                />
                </div>
                <div className="hint-text9">
                <div className="input-atom10">
                    We will send a code to confirm your email address.
                </div>
                </div>
            </div>
            <div className="checkbox-with-label">
            <div className="text-input11">
                <div className="input-container15">
                    <div className="input-label11"> Password</div>
                    <div className="placeholder-text-container">
                    <div className="placeholder-text5">Show</div>
                    </div>
                </div>
                </div>
                <div className="frame-parent28">
                <div className="frame-parent29">
                    <div className="checkbox-parent">
                    <div className="checkbox">
                        <input
                        className="box"
                        checked="{true}"
                        type="radio"
                        name="radioGroup-1"
                        />

                        <img
                        className="icon2"
                        loading="lazy"
                        alt=""
                        src="./assist/icon2.svg"
                        />
                    </div>
                    <div className="placeholder-text1">
                        Minimum of 8 charaters
                    </div>
                    </div>
                    <div className="checkbox-group">
                    <div className="checkbox1">
                        <input
                        className="box1"
                        checked="{true}"
                        type="radio"
                        name="radioGroup-2"
                        />

                        <img className="icon3" alt="" src="./assist/icon2.svg" />
                    </div>
                    <div className="placeholder-text2">
                        One special character
                    </div>
                    </div>
                </div>
                <div className="frame-parent30">
                    <div className="checkbox-container">
                    <div className="checkbox2">
                        <input
                        className="box2"
                        checked="{true}"
                        type="radio"
                        name="radioGroup-1"
                        />

                        <img className="icon4" alt="" src="./assist/icon2.svg" />
                    </div>
                    <div className="placeholder-text3">
                        One upper and lowercase characters
                    </div>
                    </div>
                    <div className="checkbox-parent1">
                    <div className="checkbox3">
                        <input
                        className="box3"
                        checked="{true}"
                        type="radio"
                        name="radioGroup-2"
                        />

                        <img className="icon5" alt="" src="./assist/icon2.svg" />
                    </div>
                    <div className="placeholder-text4">One number</div>
                    </div>
                </div>
                </div>
                <div className="text-input11">
                <div className="input-container15">
                    <div className="input-label11">Confirm password</div>
                    <div className="placeholder-text-container">
                    <div className="placeholder-text5">Show</div>
                    </div>
                </div>
                </div>
            </div>
            <div className="by-proceeding-you-container">
                <span>
                <span className="by-proceeding-you">
                    By proceeding you accept the
                </span>
                <span className="span2"> </span>
                </span>
                <b className="general-terms-conditions-of">
                <span className="general-terms">
                    General Terms & Conditions{" "}
                </span>
                of RenSecure
                </b>
            </div>
            <Link href='./Signup/Verification' className="mds-tw-button13" id="mDSTWButton1">
                <div className="button-text13">Proceed</div>
            </Link>
            <div className="frame-parent31">
                <div className="vector-container">
                <img
                    className="line-icon"
                    loading="lazy"
                    alt=""
                    src="./assist/line-28.svg"
                />
                </div>
                <div className="or-continue-with">Or</div>
                <div className="vector-frame">
                <img
                    className="frame-child18"
                    loading="lazy"
                    alt=""
                    src="./assist/line-28.svg"
                />
                </div>
            </div>
            <button className="button1">
                <img
                className="icon-social-google"
                alt=""
                src="./assist/icon--social--google.svg"
                />

                <div className="checkbox-icon">
                <b className="button-text14">Continue with Google</b>
                </div>
            </button>
            </div>
        </div>
        </section>
    </main>
    </div>
  );
};

Signup.getLayout = (page) => <><Navbar/>{page}</>;
export default Signup;



