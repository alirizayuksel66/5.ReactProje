export default function SwitchTheme({ theme, setTheme }) {
    return (
        <>
            Mevcut Tema = {theme} <br></br>
            <button onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}>Temayı Değiştir</button>
        </>
    )
}