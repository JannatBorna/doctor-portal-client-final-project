import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup, 
    updateProfile,
    getIdToken
} from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeFirebase from './../pages/Login/Firebase/firebase.init';

// initialize Firebase app
initializeFirebase();

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
  
    // new User
    const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
            setAuthError('');
            
            // name set
            const newUser = { email, displayName: name };
            setUser(newUser);// send name to firebase after creation - manage users - update profile

            // save user to the database
            saveUser(email, name, 'POST');



        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            
        }).catch((error) => {
          
        });

        history.replace('/');
            
    })
    .catch((error) => {
        setAuthError(error.message);
          
        })
        .finally(() => setIsLoading(false));
}
       

//Login User
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    //google user
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);

             })
             .catch((error) => {
                 setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }




// Observer user state
      useEffect( () => { 
             const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                    getIdToken(user) //getIdToken
                       .then(idToken => {
                          setToken(idToken);
                       })
                  }
                else {
                    setUser({})
                  }
           setIsLoading(false);

    });
         

   return () => unsubscribe;

} ,[])

       


// admin data load- admin verified - যার email দেয়েছি সে কি admin or admin না - admin অনেক জায়গায় check করতে পারি তাই useFirebase এ করা হয়েছে
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])








const logOut =() => {
    setIsLoading(true);

    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    })
        .finally(() => setIsLoading(false));
} 


// Save Registered user information in the database / //user j data তৈরি করবে / redister /google.. korbe tar information database a thakbe.. সেই data .. database a রাখবো / saveUser ke sudu call kora hoise register modhe tai sudu register a kaj korbe - login a na
 const saveUser = (email, displayName, method) => {
   const user = {email, displayName};
     fetch('http://localhost:5000/users',{
       method: method,
       headers: {
           'content-type': 'application/json'
       },
       body: JSON.stringify(user)
   })
   .then()
 }
  
                
      return{
        user,
        admin,
        token,
        isLoading,
        registerUser,
        signInWithGoogle,
        logOut,
        loginUser,
        authError,
    }

}

export default useFirebase;         
            
   
       


            