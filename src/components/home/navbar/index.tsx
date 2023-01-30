import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import NavbarMobile from './NavbarMobile';
import NavbarWeb from './NavbarWeb';
import { IProduct } from '../../../ts/interfaces/dashboard/Product/IProduct';

const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

interface NavbarInterface {
  user: { username: string };
  products: IProduct[];
}

export default function Navbar({ user, products }: NavbarInterface) {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  async function signOut() {
    try {
      await Auth.signOut().then(() => {
        router.pathname === '/' ? router.reload() : router.push('/');
      });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <>
      {/* Mobile menu */}
      <NavbarMobile
        classNames={classNames}
        open={open}
        setOpen={setOpen}
        user={user}
        signOut={signOut}
      />
      {/* Mobile web */}
      <NavbarWeb
        classNames={classNames}
        setOpen={setOpen}
        user={user}
        signOut={signOut}
        products={products}
      />
    </>
  );
}
