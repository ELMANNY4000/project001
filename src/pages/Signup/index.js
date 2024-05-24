import Link from "next/link";
import Image from "next/image";
import Navbar from "../../../component/Navbar/Navbar";
import { signupImg } from "../../../public/images";

const Signup = () => {
  return (
    <div class="container">
        <div class="row">
            <div class="col-md-6 order-md-2">
                <div class=" py-4 ">
                    <p className="signup-item text-end mb-3 cl-light_gray{">Already have an account? <span className="cl-purple fs-6 fw-bold">Login</span></p>
                    <form className="cl-gray">
                        <h3 className="fw-normal sign-head text-black">Sign up</h3>
                        <p className="signup-item cl-gray">Provide the details below to continue</p>
                        <div className="mb-3">
                            <input type="text" className="signup-input border w-100 rounded p-2 cl-xlight-gray" placeholder="First and last names" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="signup-text pt-2">Government registered name</div>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="signup-input border w-100 rounded p-2 cl-xlight-gray" placeholder="Email Address" id="exampleInputPassword1"/>
                            <div id="emailHelp" className="signup-text pt-2">We will send a code to confirm your email address.</div>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="signup-input border w-100 rounded p-2 cl-xlight-gray" placeholder="Password" id="exampleInputPassword1"/>
                        </div>
                        <div className="d-flex flex-wrap ">
                            <div className="mb-3 form-check  ">
                                <input type="radio" className="form-check-input"/>
                                <label className="form-check-label text-black" for="exampleCheck1">Minimum of 8 charaters</label>
                            </div>
                            <div className="mb-3 form-check ms-3">
                                <input type="radio" className="form-check-input"/>
                                <label className="form-check-label text-black" for="exampleCheck1">One special character</label>
                            </div>
                            <div className="mb-3 form-check ">
                                <input type="radio" className="form-check-input"/>
                                <label className="form-check-label text-black" for="exampleCheck1">One upper and lowercase characters</label>
                            </div>
                            <div className="mb-3 form-check ms-3">
                                <input type="radio" className="form-check-input"/>
                                <label className="form-check-label text-black" for="exampleCheck1">One number</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="signup-input border w-100 rounded p-2 cl-xlight-gray" placeholder="confirm password" id="exampleInputPassword1"/>
                        </div>
                        <p>By proceeding you accept the General Terms & Conditions of RenSecure</p>
                        <button type="submit" className="border-0 rounded bg-purple text-white w-100 py-3">Proceed</button>
                        <div className="text-center py-3">Or</div>
                        <button className=" google bg-xlight-gray border-0 rounded fw-bold  text-black w-100 py-3">Continue with Google</button>
                    </form>
                </div>
            </div>

            <div className="col-md-6 order-md-1 signup-cont position-relative">
                <div className="position-relative z-1">
                    <Image className="mt-5 position-relative img-fluid" loading="lazy" alt="" src={signupImg}/>
                    <div className=" px-2 pb-3 d-flex flex-column bottom-0 position-absolute">
                        <ul className="text-white fw-normal ">
                            <li className="signup-item">Report fraud cases</li>
                            <li className="signup-item">Search and identify fake accounts</li>
                            <li className="signup-item">Real-time actionable and informed decision</li>
                        </ul>
                    </div>
                </div>
                <div className="input-container11 z-0">
                    <div className="frame-parent27">
                        <div className="frame-child16"></div>
                        <div className="frame-child17"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    // <div className="login">

    // <main className="login-inner">
    //     <section className="metric-item-button-value-parent">
    //     <div className="metric-item-button-value">
    //         <div className="input-container11">
    //         <div className="frame-parent27">
    //             <div className="frame-child16"></div>
    //             <div className="frame-child17"></div>
    //         </div>
    //         </div>
    //         <div className="terms-and-conditions">
    //         <div className="current-level-inform-container2">
    //             <ul className="report-fraud-cases-search-and1">
    //             <li className="report-fraud-cases1">Report fraud cases</li>
    //             <li className="search-and-identify1">
    //                 Search and identify fake accounts
    //             </li>
    //             <li>Real-time actionable and informed decision</li>
    //             </ul>
    //         </div>
    //         </div>
    //     </div>
    //     <div className="metric-item-container">
    //         <div className="metric-item1">
    //         <div className="button">
    //             <div className="value">
    //             <span className="value-txt">
    //                 <span>
    //                 <span>Already have an account?</span>
    //                 <span className="span">
    //                     <span className="span1"> </span>
    //                 </span>
    //                 </span>
    //                 <span className="login1">
    //                 <b>Login</b>
    //                 </span>
    //             </span>
    //             </div>
    //         </div>
    //         <div className="sign-up-parent">
    //             <h1 className="sign-up">Sign up</h1>
    //             <div className="provide-the-details1">
    //             Provide the details below to continue
    //             </div>
    //         </div>
    //         <div className="text-input8">
    //             <div className="input-container12">
    //             <input
    //                 className="input-label8"
    //                 placeholder="Full names"
    //                 type="text"
    //             />
    //             </div>
    //             <div className="hint-text8">
    //             <div className="input-atom9">Government registered name</div>
    //             </div>
    //         </div>
    //         <div className="text-input9">
    //             <div className="input-container13">
    //             <input
    //                 className="input-label9"
    //                 placeholder="Email Address"
    //                 type="text"
    //             />
    //             </div>
    //             <div className="hint-text9">
    //             <div className="input-atom10">
    //                 We will send a code to confirm your email address.
    //             </div>
    //             </div>
    //         </div>
    //         <div className="checkbox-with-label">
    //         <div className="text-input11">
    //             <div className="input-container15">
    //                 <div className="input-label11"> Password</div>
    //                 <div className="placeholder-text-container">
    //                 <div className="placeholder-text5">Show</div>
    //                 </div>
    //             </div>
    //             </div>
    //             <div className="frame-parent28">
    //             <div className="frame-parent29">
    //                 <div className="checkbox-parent">
    //                 <div className="checkbox">
    //                     <input
    //                     className="box"
    //                     checked="{true}"
    //                     type="radio"
    //                     name="radioGroup-1"
    //                     />

    //                     <img
    //                     className="icon2"
    //                     loading="lazy"
    //                     alt=""
    //                     src="./assist/icon2.svg"
    //                     />
    //                 </div>
    //                 <div className="placeholder-text1">
    //                     Minimum of 8 charaters
    //                 </div>
    //                 </div>
    //                 <div className="checkbox-group">
    //                 <div className="checkbox1">
    //                     <input
    //                     className="box1"
    //                     checked="{true}"
    //                     type="radio"
    //                     name="radioGroup-2"
    //                     />

    //                     <img className="icon3" alt="" src="./assist/icon2.svg" />
    //                 </div>
    //                 <div className="placeholder-text2">
    //                     One special character
    //                 </div>
    //                 </div>
    //             </div>
    //             <div className="frame-parent30">
    //                 <div className="checkbox-container">
    //                 <div className="checkbox2">
    //                     <input
    //                     className="box2"
    //                     checked="{true}"
    //                     type="radio"
    //                     name="radioGroup-1"
    //                     />

    //                     <img className="icon4" alt="" src="./assist/icon2.svg" />
    //                 </div>
    //                 <div className="placeholder-text3">
    //                     One upper and lowercase characters
    //                 </div>
    //                 </div>
    //                 <div className="checkbox-parent1">
    //                 <div className="checkbox3">
    //                     <input
    //                     className="box3"
    //                     checked="{true}"
    //                     type="radio"
    //                     name="radioGroup-2"
    //                     />

    //                     <img className="icon5" alt="" src="./assist/icon2.svg" />
    //                 </div>
    //                 <div className="placeholder-text4">One number</div>
    //                 </div>
    //             </div>
    //             </div>
    //             <div className="text-input11">
    //             <div className="input-container15">
    //                 <div className="input-label11">Confirm password</div>
    //                 <div className="placeholder-text-container">
    //                 <div className="placeholder-text5">Show</div>
    //                 </div>
    //             </div>
    //             </div>
    //         </div>
    //         <div className="by-proceeding-you-container">
    //             <span>
    //             <span className="by-proceeding-you">
    //                 By proceeding you accept the
    //             </span>
    //             <span className="span2"> </span>
    //             </span>
    //             <b className="general-terms-conditions-of">
    //             <span className="general-terms">
    //                 General Terms & Conditions{" "}
    //             </span>
    //             of RenSecure
    //             </b>
    //         </div>
    //         <Link href='./Signup/Verification' className="mds-tw-button13" id="mDSTWButton1">
    //             <div className="button-text13">Proceed</div>
    //         </Link>
    //         <div className="frame-parent31">
    //             <div className="vector-container">
    //             <img
    //                 className="line-icon"
    //                 loading="lazy"
    //                 alt=""
    //                 src="./assist/line-28.svg"
    //             />
    //             </div>
    //             <div className="or-continue-with">Or</div>
    //             <div className="vector-frame">
    //             <img
    //                 className="frame-child18"
    //                 loading="lazy"
    //                 alt=""
    //                 src="./assist/line-28.svg"
    //             />
    //             </div>
    //         </div>
    //         <button className="button1">
    //             <img
    //             className="icon-social-google"
    //             alt=""
    //             src="./assist/icon--social--google.svg"
    //             />

    //             <div className="checkbox-icon">
    //             <b className="button-text14">Continue with Google</b>
    //             </div>
    //         </button>
    //         </div>
    //     </div>
    //     </section>
    // </main>
    // </div>
  );
};

Signup.getLayout = (page) => <><Navbar/>{page}</>;
export default Signup;



