import { Auth } from 'aws-amplify';
import { useState } from 'react';
import useRouter from 'next/router';

interface ICollectCodeNewPassword {
  username: string;
}

export default function CollectCodeNewPassword({
  username,
}: ICollectCodeNewPassword) {
  const router = useRouter;
  const [onForm, setOnForm] = useState<{
    code: string;
    new_password: string;
    new_password_confirmation: string;
  }>({
    code: '',
    new_password: '',
    new_password_confirmation: '',
  });

  // Collect confirmation code and new password,
  async function collecteCodeAndNewPassword() {
    const { code, new_password, new_password_confirmation } = onForm;
    //Password and password confirmation have to be the same
    if (new_password === new_password_confirmation) {
      Auth.forgotPasswordSubmit(username, code, new_password)
        .then((data) => {
          router.push('/signin');
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <>
      <input
        className="border-b placeholder:text-gray-500 border-gray-200 appearance-none bg-transparent w-full text-gray-800 font-semibold py-3 leading-tight focus:outline-none"
        type="text"
        placeholder="Code"
        aria-label="Code"
        onChange={(e) =>
          setOnForm({
            ...onForm,
            code: e.target.value,
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
            new_password: e.target.value,
          })
        }
      />
      <input
        className="border-b placeholder:text-gray-500 border-gray-200 appearance-none bg-transparent w-full text-gray-800 font-semibold py-3 leading-tight focus:outline-none"
        type="password"
        placeholder="Confirmer le mot de passe"
        aria-label="ConfirmPassword"
        onChange={(e) =>
          setOnForm({
            ...onForm,
            new_password_confirmation: e.target.value,
          })
        }
      />
      <div className="space-y-4 w-full">
        <button
          className="flex-shrink-0 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 text-sm text-white py-3 px-2 rounded w-full focus:ring-2 focus:ring-blue-400 ring-offset-2"
          type="button"
          onClick={() => collecteCodeAndNewPassword()}
        >
          Je valide mon mot de passe
        </button>
        <div className="border-b border-gray-600" />
        <button
          className="flex-shrink-0 border border-gray-800 text-gray-800 text-sm py-3 px-2 rounded w-full"
          type="button"
        >
          Je me connecte
        </button>
      </div>
    </>
  );
}
