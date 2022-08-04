import { User, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";

interface DefaultState {
    isLogged: boolean;
    user: undefined;

    login: (email: string, pass: string) => Promise<string | null>;
}

interface LoggedState {
    isLogged: true;
    user: User;

    login: (email: string, pass: string) => Promise<string | null>;
}

type States = DefaultState | LoggedState

const context = createContext<States>({
    isLogged: false
} as DefaultState);

interface Props {
    children?: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ isLogged, setLogged ] = useState<boolean>(false);
    const [ user, setUser ] = useState<User>();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user ?? undefined);
            setLoading(false);
        });

        return unsubscribe;
    });

    function handleLogin(email: string, pass: string){
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, email, pass)
                .then((data) => {
                    setUser(data.user)
                    resolve(null)
                })
                .catch((error) => {
                    reject(error.code)
                });
        });
    }

    const value = {
        isLogged,
        user,
        login: handleLogin
    } as States;

    console.log(value);

    return (
        <context.Provider value={value}>
            { !loading && children }
        </context.Provider>
    )
}

function useAuth(){
    return useContext(context);
}

export {
    AuthProvider,
    useAuth
}