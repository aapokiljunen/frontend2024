import { ThemeProvider } from "@emotion/react";
import CardList from "./components/CardList.jsx";
import { CssBaseline, createTheme } from "@mui/material";
import { blueGrey, grey, red } from "@mui/material/colors";
import { useState } from "react";

const theme = createTheme({
    palette: {
        primary: { main: blueGrey[300], contrastText: '#FFFFFF' },
        secondary: { main: blueGrey[700], contrastText: '#FFFFFF' },
        text: { primary: blueGrey[700], secondary: blueGrey[900], contrastText: '#FFFFFF' },
        delete: { main: red[400], secondary: grey[500] },
        background: { default: '#FFFFFF' }
    }
});

function App() {

    const [data, setData] = useState([
        {
            id: 1, otsikko: 'Assi', paiva: '2024-02-29',
            picture: 'kuvia/assi.jpg'
        },
        {
            id: 2, otsikko: 'Myynti', paiva: '2024-03-01',
            picture: 'kuvia/myynti.jpg'
        },
        {
            id: 3, otsikko: 'Tiko', paiva: '2024-06-24',
            picture: 'kuvia/tiko.jpg'
        },
        {
            id: 4, otsikko: 'Bite', paiva: '2024-05-31',
            picture: 'kuvia/yleinen1.jpg'
        },
        {
            id: 5, otsikko: 'Muu', paiva: '2024-02-29',
            picture: 'kuvia/yleinen2.jpg'
        },
    ]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <CardList data={data} setData={setData} />
        </ThemeProvider>
    )
}

export default App
