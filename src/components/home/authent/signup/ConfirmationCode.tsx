import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { useRouter } from 'next/router';

interface ConfirmationCodeInterface {
  username: string;
}

export default function ConfirmationCode({
  username,
}: ConfirmationCodeInterface) {
  const router = useRouter();
  const [onForm, setOnForm] = useState<{
    code: string;
  }>({
    code: '',
  });

  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(username);
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
    }
  }

  async function confirmSignUp() {
    const { code } = onForm;
    try {
      await Auth.confirmSignUp(username, code).then(() => router.push('/'));
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  return (
    <>
      <input
        className="border-b placeholder:text-gray-500 border-gray-200 text-lg appearance-none bg-transparent w-full text-gray-800 font-semibold py-3 leading-tight focus:outline-none"
        type="text"
        placeholder="Code de confirmation"
        aria-label="CodeConfirmation"
        onChange={(e) =>
          setOnForm({
            ...onForm,
            code: e.target.value,
          })
        }
      />
      <div className="space-y-4 w-full">
        <button
          className="flex-shrink-0 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 text-sm text-white py-3 px-2 rounded w-full focus:ring-2 focus:ring-blue-400 ring-offset-2"
          type="button"
          onClick={() => confirmSignUp()}
        >
          Je confirme mon compte
        </button>
        <div className="border-b border-gray-600" />
        <button
          className="flex-shrink-0 border border-gray-800 text-gray-800 text-sm py-3 px-2 rounded w-full"
          type="button"
          onClick={() => resendConfirmationCode()}
        >
          Renvoyer le code de confirmation
        </button>
      </div>
    </>
  );
}
