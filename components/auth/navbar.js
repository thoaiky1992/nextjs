
import { useRouter } from 'next/router'; 
function NavbarAuth({btn}) {
    const router = useRouter() 
    function handleRedirect(){
        (btn === 'Đăng Ký') ? router.push('/register') : router.push('/index')
    }
	return (
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
                            <a onClick={handleRedirect} className="nav-link btn btn-primary btn-round">{btn}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
	)
}
export default NavbarAuth;