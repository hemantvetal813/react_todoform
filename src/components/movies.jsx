import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './like';


class Movies extends Component {
    state = {
        movies: getMovies(),
        headers: [
            { header: 'Sr.No.' },
            { header: 'Title' },
            { header: 'Genre' },
            { header: 'In Stock' },
            { header: 'dailyRentalRate' },
            { header: 'publishDate' },
            { header: 'Like' },
        ]
    };
    render () {
        return (
            <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-9">
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                { this.state.headers.map((h, i) => {
                                    return (
                                        <th key={ i }>{ h.header }</th>
                                    );

                                }) }
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.movies.map((movie, i) => {
                                return (
                                    <tr key={ movie._id }>
                                        <td >{ i + 1 }</td>
                                        <td >{ movie.title }</td>
                                        <td >{ movie.genre.name }</td>
                                        <td >{ movie.numberInStock }</td>
                                        <td >{ movie.dailyRentalRate }</td>
                                        <td >{ movie.publishDate ? new Date().toLocaleString() : '--' }</td>
                                        <td >
                                            <a onClick={ (evt) => this.handleLike(evt, movie) }>
                                                {/* onMouseEnter={ (evt) => this.handleRating(evt) }> */}
                                                {/* onMouseLeave={ () => setIsShown(false) }> */}
                                                <Like isLiked={ movie.liked } noOfStars={5} rating={Math.ceil((movie.rating || 0.5)/0.5)*0.5} />
                                            </a>
                                        </td>
                                    </tr>
                                );
                            }) }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    handleLike (evt, movie) {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movie };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

}

export default Movies;