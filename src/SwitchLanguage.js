export default function SwitchLanguage({ language, setLanguage }) {
    return (
        <>
            Mevcut Dil = {language} <br></br>
            <button onClick={() => setLanguage(language == 'TR' ? 'EN' : 'TR')}>Temayı Değiştir</button>
        </>
    )
}