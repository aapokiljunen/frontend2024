import { SettingsOverscan } from "@mui/icons-material"
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material"
import { useState } from "react";


export default function CardList({ data, setData }) {

    const [frontCardId, setFrontCardId] = useState(null);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    const handleShow = (id) => {
        setFrontCardId(id);
    };

    return (
        <Box>
            <Grid container spacing={2} padding={1} >
                {data.map(e => {
                    return (
                        <Grid item key={e.id} >
                            <Card sx={{ width: e.id === frontCardId ? 615 : 300, zIndex: e.id === frontCardId ? 1 : 'auto', backgroundColor: theme => theme.palette.primary.main }}>
                                <CardContent sx={{ justifyContent: 'center' }}>
                                    {e.id !== frontCardId ?
                                        (<Button color='secondary' startIcon={<SettingsOverscan />} onClick={() => handleShow(e.id)}>Näytä</Button>) : 
                                        (<Button color='secondary' startIcon={<SettingsOverscan />} onClick={() => handleShow(null)}>Pienennä</Button>) 
                                    }
                                    <Button color='delete' startIcon={<DeleteIcon />} onClick={() => handleDelete(e.id)}>Poista</Button>
                                </CardContent>
                                <CardHeader
                                    title={<Typography variant="h6" sx={{ color: theme => theme.palette.primary.contrastText }}>{e.otsikko}</Typography>}
                                    subheader={<Typography variant="subtitle2" sx={{ color: theme => theme.palette.primary.contrastText }}>{e.paiva}</Typography>}
                                />

                                <CardContent>
                                    <CardMedia
                                        component='img'
                                        height='200'
                                        image={e.picture}
                                        alt='Ei kuvaa' />
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
                }
            </Grid>
        </Box >
    )
}