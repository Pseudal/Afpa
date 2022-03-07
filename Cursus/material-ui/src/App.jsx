import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';


const App = () => {
    return(
        <>
            <CssBaseline />
            <AppBar position="relative" >
                <Toolbar>
                    <PhotoCamera sx={{marginRight: '20px'}}/>
                        <Typography variant="h6">
                            Photo Album   
                        </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm" sx={{ marginTop: '50px' }}>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album    
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum voluptate ab aspernatur odit non officia ut architecto dicta distinctio hic unde ad, sunt quasi?
                        </Typography>
                        <div sx={{marginTop: '40px'}}>
                            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        see my photo
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
       </>
    );
}

export default App;