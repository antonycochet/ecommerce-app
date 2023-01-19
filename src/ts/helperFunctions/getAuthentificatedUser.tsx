import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';

export function getAuthentificatedUser() {
  const [user, setUser] = useState<{ username: string }>({ username: '' });

  const getUser = () => {
    Auth.currentAuthenticatedUser({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((userAuthent) => {
        console.log(userAuthent);
        setUser({ ...user, username: userAuthent.getUsername() });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, []);

  return user;
}
