import { getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    // clear error
    useEffect(() => {
        setTimeout(() => {
            setError("");
        }, 5000);
    }, [error]);

    const auth = getAuth();

    // Google signin
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
    }

    // Email sign in
    function signInWithEmail(e) {
        e.preventDefault();
        return signInWithEmailAndPassword(auth, email, password);
    }
    // set name url
    function setNameFunction() {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => { })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));

    }
    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    // log out function
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // sign up with email password
    function singUp(e) {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setNameFunction();
                setUser(result.user);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => setIsLoading(false));
    }
    // get name
    function getName(e) {
        setName(e?.target?.value);
    }

    // get Email
    function getEmail(e) {
        setEmail(e?.target?.value);
    }
    // Get password
    function getPassword(e) {
        setPassword(e?.target?.value);
    }

    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        logOut,
        getEmail,
        getName,
        getPassword,
        singUp,
        signInWithEmail,
        error
    }
}

export default useFirebase;