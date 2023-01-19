import { useContext, useEffect, useState } from 'react';
import ProductListByCategory from '../../components/home/category/ProductListByCategory';
import Navbar from '../../components/home/navbar';
import UserContext from '../../context/UserContext';

export default function productByCategory() {
  const user = useContext(UserContext);

  return (
    <>
      <Navbar user={user} />
    </>
  );
}
