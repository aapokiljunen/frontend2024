import { Box, Button, FormControlLabel, FormGroup, Grid, InputLabel, List, ListItem, ListItemText, Slider, Switch, TextField } from "@mui/material"
import { useState } from "react"

function App() {

    const [students, setStudents] = useState([]);
    const [name, setName] = useState('');
    const [grade, setGrade] = useState(0);
    const [recommended, setRecommended] = useState(false);


    const marks = [
        { value: 0, label: '0' },
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
    ];

    const handleAdd = () => {
        const student = { name: name, grade: grade, recommended: recommended };
        if(student.name) {
            setStudents([...students, student])
            handleCancel();
        }
        handleCancel();
    }

    const handleCancel = () => {
        setName('');
        setGrade(0);
        setRecommended(false)
    }

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleGrade = (event, value) => {
        setGrade(value);
    }
    const handleRecommended = (event, value) => {
        setRecommended(value);
    }


    return (
        <Box padding={2} s>
            <Grid>
                <TextField value={name} onChange={handleName} id="outlined-basic" label="Nimi" variant="outlined" required sx={{ marginBottom: 3 }} />
                <InputLabel>Arvosana</InputLabel>
                <Slider
                    value={grade}
                    onChange={handleGrade}
                    defaultValue={0}
                    valueLabelDisplay="auto"
                    shiftStep={1}
                    step={1}
                    marks={marks}
                    min={0}
                    max={5}
                    sx={{ width: 500, marginBottom: 3 }}
                />
                <FormGroup>
                    <FormControlLabel control={<Switch checked={recommended} onChange={handleRecommended} />} label="Suosittelen" labelPlacement="start" />
                </FormGroup>
                <Button onClick={handleAdd} variant="outlined">Lisää</Button>
                <Button onClick={handleCancel} variant="outlined" color="secondary" sx={{ marginLeft: 2 }}>Peruuta</Button>

                <List>
                    {students.map(e =>
                        <ListItem>
                            <ListItemText
                                primary={e.name}
                                secondary={`Arvosana: ${e.grade}. Suositellaan: ${e.recommended ? "Kyllä" : "Ei"} `}
                            />
                        </ListItem>,
                    )}
                </List>
            </Grid>
        </Box>

    )
}

export default App
