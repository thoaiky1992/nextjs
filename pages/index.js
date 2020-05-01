import { useEffect } from 'react'; 
import { useRouter } from 'next/router'; 
import LayoutAuth from '../components/layout/auth'; 
import NavbarAuth from '../components/auth/navbar';
import Login from '../components/auth/Login';
import { useSelector , useDispatch } from 'react-redux';
import $ from 'jquery'; 
function IndexPage() { 
    const router = useRouter() 
    const conter = useSelector(state => state.counter.value) 
    const dispatch = useDispatch(); 
    useEffect(() => { 
        $(".navbar-toggler").on('click',function() {
            $("html").toggleClass("nav-open");
        });
        $('.form-control').on("focus", function() {
            $(this).parent('.input-group').addClass("input-group-focus");
        }).on("blur", function() {
            $(this).parent(".input-group").removeClass("input-group-focus");
        });
    },[])

    return (

    <LayoutAuth>
        <NavbarAuth/>
        <Login/>
    </LayoutAuth>
)}
 export default IndexPage