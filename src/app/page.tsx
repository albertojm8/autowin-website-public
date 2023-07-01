import NavBar from './components/Navbar';
import Steps from './components/Steps';
import SignUp from './components/SignUp';
import Faq from './components/Faq';
import Blog from './components/Blog';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div>
      <NavBar children={undefined} />
      <Steps children={undefined} />
      <SignUp children={undefined} />
      <Faq children={undefined} />
      <Blog children={undefined} />
      <Footer children={undefined} />
    </div>
  );
}