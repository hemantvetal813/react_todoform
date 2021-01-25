import React, { Component } from 'react';

class AddMovie extends Component {
    state = {};
    render () {
        return (
            <form>
                <div className="form-group col-md-3">
                    <label htmlFor="movie_name">Movie Name</label>
                    <input type="text" className="form-control" id="movie_name" aria-describedby="emailHelp" placeholder="Enter Name"></input>
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */ }
                </div>
                <div className="form-group col-md-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        );
    }

    submit(e) {
        console.log(1);
    }
}

export default AddMovie;