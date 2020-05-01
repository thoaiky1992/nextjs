import Head from 'next/head'
import { useEffect  } from 'react';
import dynamic from 'next/dynamic'

const script = dynamic(
 	 import('./script'),
  	{
    	loading: () => <p>The component is loading...</p>
  	}
)
function layoutAuth({ children }){

	return (
		<div>

			<Head>
				<meta property="og:title" content="Ap Chat Kỳ Smile" />
				<meta property="og:image" content="images/blog/blog-page-1.jpg" />
	          	<meta charSet="utf-8" />
	          	<meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
	          	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
	          	<meta name="description" content="Responsive Bootstrap 4 and web Application ui kit." />
	          	<title>App Chat Kỳ Smile</title>
	          	<link rel="icon" href="favicon.ico" type="image/x-icon" />
	          	<link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.min.css" />
	          	<link rel="stylesheet" href="css/main.css" />
	          	<link rel="stylesheet" href="css/authentication.css" />
	          	<link rel="stylesheet" href="css/color_skins.css" />
	          	<script src="js/client_platform.js" />
	        </Head>
				{ children }
			<script/>
		</div>
		
	)
}
export default layoutAuth;