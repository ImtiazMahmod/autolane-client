import { useEffect, useState } from 'react';
import initializeAuth from '../../src/FireBase/firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut } from "firebase/auth";



initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            setUser(result.user)
          })
            .catch(error => {
            
            })
        .finally(()=> setIsLoading(false))
        
    }

    ///obserber of user state
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
              setIsLoading(false)
        });
    }, []);

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
  
            })
        .finally(()=> setIsLoading(false))
    };

    return {
        user,isLoading,
        googleSignIn,
        logOut
    }
}

export default useFirebase;