import React, { createContext, useEffect, useState } from 'react';
import app from '../../FIrebase/FIrebase.init';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile
} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const createUserWithGoogle = (provider) => {
		return signInWithPopup(auth, provider);
	};
	const createUserWithGitHub = (provider) => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};

	const updateUserProfile = (profile) => {
		setLoading(true);
		return updateProfile(auth.currentUser, profile);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log(currentUser);
			setUser(currentUser);
		});
		return () => {
			return unsubscribe;
		};
	}, []);

	const authInfo = {
		user,
		loading,
		createUser,
		signIn,
		createUserWithGoogle,
		createUserWithGitHub,
		updateUserProfile,
		logOut
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
