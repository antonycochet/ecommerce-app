import { API } from 'aws-amplify';
import { listProducts } from '../graphql/queries';
import { IProduct } from '../ts/interfaces/dashboard/Product/IProduct';

import Header from '../components/home/section/header';
import Navbar from '../components/home/navbar';
import SectionCategory from '../components/home/section/Category';
import Banner from '../components/home/banner/index';
import SectionIncentives from '../components/home/section/Incentives';
import SectionPromotion from '../components/home/section/Promotion';
import Footer from '../components/home/section/footer';

interface IHome {
  data: IProduct[];
}

export default function Home({ data }: IHome) {
  return (
    <>
      <Banner />
      <Navbar products={data} />
      <Header />
      <SectionCategory products={data} />
      <SectionIncentives />
      <SectionPromotion />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const apiData: any = await API.graphql({ query: listProducts });
  const products = apiData.data.listProducts.items;

  return { props: { data: products } };
}
