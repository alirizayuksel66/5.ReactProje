import Footer from "./Footer";
import Header from "./Header";
import { useAuth } from "./context";

export default function Home() {

    const { user } = useAuth()

    return (
        <>
            <Header />
            App
            {user && (
                <div style={{padding: 10, border: '1px solid  purple'}}>
                    Merhaba Kullanıcı
                </div>
            )}
            <Footer />
        </>
    )
}