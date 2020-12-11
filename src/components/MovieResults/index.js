import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom' //para tener acceso al history

import style from './style';

// eslint-disable-next-line react/prop-types
const MovieResults = ({ Title, Year, Type, imdbID, Poster, history }) => {
    const classes = style();

    const handleSeeMovieClick = () => {
        // eslint-disable-next-line react/prop-types
        history.push(`/movie/${imdbID}`)
    };

    return(
        <Card className={classes.cardContainer}>
            <Grid container>
            <Grid item>
                <img src={Poster} alt={Title} className={classes.poster}></img>
            </Grid>
            <Grid item className={classes.titleContainer}>
                <Typography>{Title}</Typography>
                <Typography>{Year}</Typography>
                <Typography>{Type}</Typography>
                <Button color="primary" variant="contained" onClick={handleSeeMovieClick}>Ver mas</Button>
            </Grid>
            </Grid>
        </Card>
    )
}

export default withRouter(MovieResults);