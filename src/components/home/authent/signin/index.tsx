import Link from 'next/link';
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Signin() {
  const router = useRouter();
  const [onForm, setOnForm] = useState<{
    username: string;
    email: string;
    password: string;
  }>({
    username: '',
    email: '',
    password: '',
  });

  async function signIn() {
    const { username, password } = onForm;
    try {
      const user = await Auth.signIn(username, password).then(() =>
        router.push('/')
      );
      console.log(user);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  return (
    <>
      <input
        className="border-b placeholder:text-gray-500 border-gray-200 appearance-none bg-transparent w-full text-gray-800 font-semibold py-3 leading-tight focus:outline-none"
        type="text"
        placeholder="Nom d'utilisateur"
        aria-label="NomUtilisateur"
        onChange={(e) =>
          setOnForm({
            ...onForm,
            username: e.target.value,
          })
        }
      />
      <input
        className="border-b placeholder:text-gray-500 border-gray-200 appearance-none bg-transparent w-full text-gray-800 font-semibold py-3 leading-tight focus:outline-none"
        type="password"
        placeholder="Mot de passe"
        aria-label="Password"
        onChange={(e) =>
          setOnForm({
            ...onForm,
            password: e.target.value,
          })
        }
      />
      <Link
        href="/forgot-password"
        className="text-right italic text-sm text-gray-400 hover:text-blue-700 cursor-pointer"
      >
        Mot de passe oublié?
      </Link>
      <div className="space-y-4 w-full">
        <button
          className="flex-shrink-0 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 text-sm text-white py-3 px-2 rounded w-full focus:ring-2 focus:ring-blue-400 ring-offset-2"
          type="button"
          onClick={() => signIn()}
        >
          Je me connecte
        </button>
        <div className="border-b border-gray-600" />
        <Link
          className="flex-shrink-0 border border-gray-800 text-gray-800 text-sm py-3 px-2 rounded w-full inline-block text-center"
          href="/signup"
        >
          Je crée mon compte
        </Link>
      </div>
    </>
  );
}
