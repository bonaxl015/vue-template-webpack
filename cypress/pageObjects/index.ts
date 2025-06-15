import HomePage from './homePage';
import Footer from './footer';
import Navigation from './navigation';
import AboutPage from './aboutPage';

const homePage = new HomePage();
const footer = new Footer();
const navigation = new Navigation();
const aboutPage = new AboutPage();

const webpage = {
  homePage,
  footer,
  navigation,
  aboutPage
};

export default webpage;
