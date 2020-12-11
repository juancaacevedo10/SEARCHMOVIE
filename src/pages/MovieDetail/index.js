import React, {useEffect} from 'react';
import { Container, CircularProgress, Typography, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'

import { movieResult as movieResultSelector } from '../../redux/selectors'
import { searchMovieById } from '../../redux/actions/search'
import style from '../../components/MovieResults/style';


export default ({ match }) => { //
    const classes = style();
    const dispatch = useDispatch();
    const movieResult = useSelector(state => movieResultSelector(state));
    
    useEffect( () => {
        const movieId = match.params.id
        
        if (!movieResult || movieResult && movieResult.imdbID !== movieId) {
            dispatch(searchMovieById({ movieId }))
        }else{

        }
    })

    if(!movieResult){
        return <CircularProgress size={100} color='primary' ></CircularProgress>
    }
    
    return(
        <Container>
            <Typography variant='h3'>{movieResult.Title}</Typography>
            <Grid container>
                <Grid item>
                <img src={movieResult.Poster} alt={movieResult.Poster} ></img>
                </Grid>
                <Grid item className={classes.titleContainer}>
                    <Typography><strong>Actores: </strong>{movieResult.Actors} </Typography>
                    <Typography><strong>Director: </strong>{movieResult.Director} </Typography>
                    <Typography><strong>Genre: </strong>{movieResult.Genre} </Typography>
                    <Typography><strong>Language: </strong>{movieResult.Language} </Typography>
                    <Typography><strong>Metascore: </strong>{movieResult.Metascore} </Typography>
                    <Typography><strong>Released: </strong>{movieResult.Released} </Typography>
                    <Typography><strong>Production: </strong>{movieResult.Production} </Typography>
                    <Typography><strong>Rated: </strong>{movieResult.Rated} </Typography>
                    <Typography><strong>Runtime: </strong>{movieResult.Runtime} </Typography>
                    <Typography><strong>Type: </strong>{movieResult.Type} </Typography>
                    <Typography><strong>Year: </strong>{movieResult.Year} </Typography>
                    <Typography><strong>Country: </strong>{movieResult.Country} </Typography>

                </Grid>

            </Grid>
        </Container>
    )
}