import React, { Component } from 'react';

class Like extends Component {
    state = {
        ratings: this.props.rating,
        changeRating: true
    };

    render () {
        const { noOfStars } = this.props;
        const { ratings } = this.state;
        return (
            <div >
                { new Array(noOfStars).fill().map((s, i) => {
                    return (
                        <i key={ i }
                            className={ ratings >= i + 1 ? "fa fa-star" : (i + 1 - ratings) == 0.5 ? "fa fa-star-half-o" : "fa fa-star-o" }
                            aria-hidden="true"
                            onClick={ () => this.setNewRating(i) }
                            onMouseMove={ (evt) => this.handleRating(i, evt) }
                            onMouseLeave={ () => this.setPreviousRating() }
                        ></i>
                    );
                }) }
            </div>
        );
    }

    handleRating (i, evt) {
        // console.log(evt.screenX,evt.clientX,evt.pageX);
        let ratings = i + 1;
        let changeRating = false;
        this.setState({ ratings, changeRating });
    }
    setPreviousRating () {
        let ratings = this.props.rating;
        !this.state.changeRating && this.setState({ ratings });
    }
    setNewRating (i) {
        let ratings = i + 1;
        console.log(ratings);
        let changeRating = true;
        this.setState({ ratings, changeRating });
    }
}

export default Like;