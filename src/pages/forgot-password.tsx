import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';
import CollectCodeNewPassword from '../components/home/authent/forgotPassword/CollectCodeNewPassword';
import SendCodePassword from '../components/home/authent/forgotPassword/SendCodePassword';

export default function forgotPassword() {
  const [forgotPasswordSuccess, setForgotPasswordSuccess] =
    useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  return (
    <div className="w-full h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 flex items-center justify-center">
      <div className="max-w-7xl w-full bg-white shadow-2xl relative">
        <h1 className="text-2xl font-bold tracking-tighter absolute top-8 left-12 text-gray-900">
          Brandii.
        </h1>
        <div className="flex flex-row justify-evenly items-center py-12">
          <div className="flex flex-col w-3/12 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-gray-800">
                J'ai oublié mon mot de passe
              </h1>
              <p className="text-gray-500 font-medium tracking-tight">
                Pas de panique, vous pouvez modifier votre mot de passe en
                mettant votre nom d'utilisateur
              </p>
            </div>
            <form>
              <div className="flex flex-col space-y-8">
                {!forgotPasswordSuccess ? (
                  <SendCodePassword
                    setUsername={setUsername}
                    setForgotPasswordSuccess={setForgotPasswordSuccess}
                  />
                ) : (
                  <CollectCodeNewPassword username={username} />
                )}
              </div>
            </form>
          </div>
          <div className="w-6/12 bg-slate-50 rounded-2xl p-12">
            <Player
              autoplay
              loop
              src="https://assets8.lottiefiles.com/packages/lf20_ucbyrun5.json"
            >
              <Controls
                visible={false}
                buttons={['play', 'repeat', 'frame', 'debug']}
              />
            </Player>
          </div>
        </div>
      </div>
    </div>
  );
}
