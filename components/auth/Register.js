import { useEffect } from 'react';
function RegisterAuth(){
	useEffect(() => {
		
	},[])
	return (
		<div className="page-header">
            <div className="page-header-image" style={{backgroundImage: 'url(images/login.jpg)'}} />
            <div className="container">
                <div className="col-md-12 content-center">
                    <div className="card-plain">
                        <form className="form">
                            <div className="header">
                                <div className="logo-container">
                                    <img src="images/logo.svg" alt="" />
                                </div>
                                <h5>Sign Up</h5>
                            </div>
                            <div className="content">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter User Name" />
                                    <span className="input-group-addon">
                              <i className="zmdi zmdi-account-circle" />
                            </span>
                                </div>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter Email" />
                                    <span className="input-group-addon">
                              <i className="zmdi zmdi-email" />
                            </span>
                                </div>
                                <div className="input-group">
                                    <input type="password" placeholder="Password" className="form-control" />
                                    <span className="input-group-addon">
                              <i className="zmdi zmdi-lock" />
                            </span>
                                </div>
                            </div>
                            <div className="checkbox">
                                <input id="terms" type="checkbox" />
                                <label htmlFor="terms">
                                    I read and agree to the <a>terms of usage</a>
                                </label>
                            </div>
                            <div className="footer text-center">
                                <a href="index-2.html" className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">SIGN UP</a>
                                <h6 className="m-t-20"><a className="link" href="sign-in.html">You already have a membership?</a></h6>
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
	)
}
export default RegisterAuth