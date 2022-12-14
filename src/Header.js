export default function Header({ theme, setTheme, language, setLanguage }) {
    return (
        <header>
            Header <br></br>
            Mevcut Tema = {theme} <br></br>
            <button onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}>Temayı Değiştir</button><br></br>
            Mevcut Dil = {language} <br></br>
            <button onClick={() => setLanguage(language == 'TR' ? 'EN' : 'TR')}>Temayı Değiştir</button>
        </header>
    )
}