import { useRouter } from 'next/router';
function product(){
	const router = useRouter();
	console.log(router)

	return (
		<div>
			welcome to produt
		</div>
	)
}
export default product