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
    
  );
};

Signup.getLayout = (page) => <><Navbar/>{page}</>;
export default Signup;



