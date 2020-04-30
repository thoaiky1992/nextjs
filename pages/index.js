import { useEffect } from 'react'; 
import { useRouter } from 'next/router'; 
import LayoutAuth from '../components/layout/auth'; 
import { useSelector , useDispatch } from 'react-redux';
import $ from 'jquery'; 
function IndexPage() { 
    const router = useRouter() 
    const conter = useSelector(state => state.counter.value) 
    const dispatch = useDispatch(); 
    useEffect(() => { 
        $('.form-control').on("focus", function() {
            $(this).parent('.input-group').addClass("input-group-focus");
        }).on("blur", function() {
            $(this).parent(".input-group").removeClass("input-group-focus");
        });
    })

    return (

    <LayoutAuth>
        <section className="theme-cyan authentication sidebar-collapse">
            <div>
                <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
                    <div className="container">
                        <div className="navbar-translate n_logo">
                            <button className="navbar-toggler" type="button">
                                <span className="navbar-toggler-bar bar1" />
                                <span className="navbar-toggler-bar bar2" />
                                <span className="navbar-toggler-bar bar3" />
                            </button>
                        </div>
                        <div className="navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" title="Follow us on Google" href="#" target="_blank">
                                        <i className="zmdi zmdi-google" />
                                        <p className="d-lg-none d-xl-none">Google</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" title="Like us on Facebook" href="#" target="_blank">
                                        <i className="zmdi zmdi-facebook" />
                                        <p className="d-lg-none d-xl-none">Facebook</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" title="Follow us on Github" href="#" target="_blank">
                                        <i className="zmdi zmdi-github" />
                                        <p className="d-lg-none d-xl-none">Github</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-primary btn-round" href="sign-up.html">SIGN UP</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* End Navbar */}
                <div className="page-header">
                    <div className="page-header-image" style={{backgroundImage: 'url(images/login.jpg)'}} />
                    <div className="container">
                        <div className="col-md-12 content-center">
                            <div className="card-plain">
                                <form className="form">
                                    <div className="header">
                                        <h5>App Chat KỳSmile</h5>
                                    </div>
                                    <div className="content">
                                        <div className="input-group input-lg">
                                            <input type="text" className="form-control" placeholder="Enter User Name" />
                                            <span className="input-group-addon">
    		                        <i className="zmdi zmdi-account-circle" />
    		                      </span>
                                        </div>
                                        <div className="input-group input-lg">
                                            <input type="password" placeholder="Password" className="form-control" />
                                            <span className="input-group-addon">
    		                        <i className="zmdi zmdi-lock" />
    		                      </span>
                                        </div>
                                    </div>
                                    <div className="footer text-center">
                                        <a href="index-2.html" className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">Sign In</a>
                                        <a href="index-2.html" className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light"><i className="zmdi zmdi-facebook" /> Login Facebook</a>
                                        <a href="index-2.html" className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light"><i className="zmdi zmdi-google" /> Login Google</a>
                                        <h6 className="m-t-20"><a href="forgot-password.html" className="link">Forgot Password?</a></h6>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className="container">
                            <div className="copyright">
                                © ,
                                <span>Designed by <a href="#" target="_blank">ThemeMAkker</a></span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    </LayoutAuth>
)}
 export default IndexPage