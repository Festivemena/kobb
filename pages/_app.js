import '../styles/globals.css'
import '../styles/sidebar.css'
import '../components/Home/carousel-with-custom-dots.css'
import Login from '../components/login/Login'
import Link from "next/link";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  

  return <Component {...pageProps} />
}

export default MyApp
