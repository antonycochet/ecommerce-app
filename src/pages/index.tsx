import { useContext, useEffect, useState } from 'react';
import { API, Storage } from 'aws-amplify';
import { listProducts } from '../graphql/queries';
import { IProduct } from '../ts/interfaces/dashboard/Product/IProduct';

import Header from '../components/home/section/header';
import Navbar from '../components/home/navbar';
import SectionCategory from '../components/home/section/Category';
import UserContext from '../context/UserContext';
import Banner from '../components/home/banner/index';
import SectionIncentives from '../components/home/section/Incentives';
import SectionPromotion from '../components/home/section/Promotion';
import Footer from '../components/home/section/footer';

interface IHome {
  data: IProduct[];
}

export default function Home({ data }: IHome) {
  const user = useContext(UserContext);

  return (
    <>
      <Banner />
      <Navbar user={user} products={data} />
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
