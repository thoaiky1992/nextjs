import { useEffect } from 'react';
function Login(){
	useEffect(() => {
		function loginGoogle(){

		}
		window.gapi.load('auth2', () => {
			var btnLogin = document.querySelector('.login-google');
            const auth2 = window.gapi.auth2.init({
            	client_id: '975100688424-ton00gqt7ogkjabc7p7g3vivmu8dte46.apps.googleusercontent.com'
            })
            auth2.attachClickHandler(btnLogin, {}, googleUser => {
                console.log(googleUser)
            }, error => console.log(error))
        })

	},[])
	return (
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
                                <a className="login-google btn l-cyan btn-round btn-lg btn-block waves-effect waves-light"><i className="zmdi zmdi-google" /> Login Google</a>
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
	)
}
export default Login