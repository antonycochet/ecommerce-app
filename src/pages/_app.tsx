import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import UserContext from '../context/UserContext';
import { getAuthentificatedUser } from '../ts/helperFunctions/getAuthentificatedUser';
import CartProvider from '../context/CartContext';
Amplify.configure({ ...awsconfig, ssr: true });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContext.Provider value={getAuthentificatedUser()}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </UserContext.Provider>
  );
}
