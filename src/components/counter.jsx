import React, { Component } from 'react';

class Counter extends Component {

    render() {
        return (
            this.props.counters.map(c => {
                return(
                    <div key={c.id}>
                        <h1>{c.value}</h1>
                        <button onClick={() => this.props.bodmas(c,'add')}> + </button>
                        <button onClick={() => this.props.bodmas(c,'sub')}> - </button>
                        <button onClick={() => this.props.bodmas(c,'mul')}> * </button>
                        <button onClick={() => this.props.bodmas(c,'div')}> / </button>
                        <button onClick={() => this.props.bodmas(c,'mod')}> % </button>
                        <button onClick={() => this.props.bodmas(c,'square')}> ^ </button>
                    </div>
                )
            })
         );
    }
}

export default Counter;