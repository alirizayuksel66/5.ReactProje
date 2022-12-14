import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";
import { useAuth } from "./context";

export default function Header() {

    const { user, setUser } = useAuth()

    const login = () => {
        setUser({
            Fullname: 'Ali Rıza Yüksel',
            ID: 1
        })
    }

    const logout = () => {
        setUser(false)
    }

    return (
        <header>
            Header <br></br>
            {user && <button onClick={logout}>Çıkış Yap</button> || <button onClick={login}>Giriş Yap</button>} <br></br>
            <SwitchTheme></SwitchTheme><br></br>
            <SwitchLanguage></SwitchLanguage>
        </header>
    )
}