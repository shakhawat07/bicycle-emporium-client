import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";
import initializeAuthentication from '../FireBase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, role, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name, role: role };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, role, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

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

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        // console.log(idToken);
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    useEffect(() => {
        fetch(`https://hidden-ridge-10259.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('firebaseData', data);
                setAdmin(data?.admin);
                console.log('firebase', admin);
            })
    }, [user?.email, admin])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, role, method) => {
        const user = { email, displayName, role };
        fetch('https://hidden-ridge-10259.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }





    // const handleRegistration = e => {
    //     setError('');
    //     e.preventDefault();
    //     console.log(email, password);

    //     // password regex validation 
    //     if (password.length < 6) {
    //         setError('Password Must be at least 6 characters long.')
    //         return;
    //     }
    //     if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
    //         setError('Password Must contain 2 upper case');
    //         return;
    //     }
    //     if (!/(?=.*?[0-9])/.test(password)) {
    //         setError('Password contain at least 1 digit');
    //         return;
    //     }
    //     if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
    //         setError('Password contain at least one special character');
    //         return;
    //     }

    //     // login or registration validation 
    //     if (!isLogin) {
    //         processLogin(email, password);
    //     }
    //     else {
    //         registerNewUser(email, password);
    //     }
    // }

    // new registration 



    // proceed login 


    // google sign in 


    // const setUserName = () => {
    //     updateProfile(auth.currentUser, { displayName: name })
    //         .then(result => { })
    // }

    // const verifyEmail = () => {
    //     sendEmailVerification(auth.currentUser)
    //         .then(result => {
    //             console.log(result);
    //         })
    // }

    // const handleResetPassword = () => {
    //     sendPasswordResetEmail(auth, email)
    //         .then(result => { })
    // }


    // observer user state



    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;