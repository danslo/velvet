import {setClientLink} from "../utils/client";
import {useContext} from "react";
import {AuthContext} from "../context/auth";
import {useGenerateAdminTokenMutation} from "../types";
import {useSnackbar} from "notistack";

export default function useAuth() {
    const {token, setToken} = useContext(AuthContext);
    const [generateAdminTokenMutation] = useGenerateAdminTokenMutation();
    const {enqueueSnackbar} = useSnackbar();

    return {
        isLoggedIn: !!token,

        logout: () => {
            localStorage.removeItem('token');
            setClientLink(null);
            setToken(null);
            window.location.href = '/';
        },

        login: (username: string, password: string) => {
            generateAdminTokenMutation({variables: {username: username, password: password}})
                .then(result => {
                    const token = result.data!.generateAdminToken;
                    localStorage.setItem('token', token);
                    setClientLink(token);
                    setToken(token);
                })
                .catch(reason => {
                    enqueueSnackbar(reason.message, {variant: "error"});
                });
        }
    }
}
