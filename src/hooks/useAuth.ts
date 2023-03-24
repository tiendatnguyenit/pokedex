import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState();

  // Handle user state changes
  const onAuthStateChanged = (user: any) => {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return {
    user,
  };
};
