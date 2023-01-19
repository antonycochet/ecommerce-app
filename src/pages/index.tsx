import { useContext } from 'react';
import Header from '../components/home/section/header';
import Navbar from '../components/home/navbar';
import SectionCategory from '../components/home/section/Category';
import UserContext from '../context/UserContext';
import Banner from '../components/home/banner/index';
import SectionIncentives from '../components/home/section/Incentives';
import SectionPromotion from '../components/home/section/Promotion';
import Footer from '../components/home/section/footer';

export default function Home() {
  const user = useContext(UserContext);
  return (
    <>
      <Banner />
      <Navbar user={user} />
      <Header />
      <SectionCategory />
      <SectionIncentives />
      <SectionPromotion />
      <Footer />
    </>
  );
}
