import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import NavbarMobile from './NavbarMobile';
import NavbarWeb from './NavbarWeb';

const navigation: {
  categories: {
    id: string;
    name: string;
    products: {
      name: string;
      href: string;
      imageSrc: string;
      imageAlt: string;
    }[];
  }[];
} = {
  categories: [
    {
      id: 'shop',
      name: 'La boutique',
      products: [
        {
          name: 'Desk and Office',
          href: '/products/1',
          imageSrc:
            'https://images.pexels.com/photos/8131589/pexels-photo-8131589.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Desk and Office',
          href: '/products/2',
          imageSrc:
            'https://images.pexels.com/photos/8129909/pexels-photo-8129909.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Desk and Office',
          href: '/products/3',
          imageSrc:
            'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
      ],
    },
  ],
};

const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

interface NavbarInterface {
  user: { username: string };
}

export default function Navbar({ user }: NavbarInterface) {
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
        navigation={navigation}
        classNames={classNames}
        open={open}
        setOpen={setOpen}
        user={user}
        signOut={signOut}
      />
      {/* Mobile web */}
      <NavbarWeb
        navigation={navigation}
        classNames={classNames}
        setOpen={setOpen}
        user={user}
        signOut={signOut}
      />
    </>
  );
}
