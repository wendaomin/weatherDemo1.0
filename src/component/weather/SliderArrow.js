import React from 'react'
export default class Slider extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLeftClick() {
        this.props.turn(-1);
    }

    handleRightClick() {
        this.props.turn(1);
    }

    render() {
        var style = {
            display: this.props.isShow ? "block" : "none"
            
        };
        return (
            <div style={style}>
                <a href="#" className="arrow arrow-left" onClick={this.handleLeftClick.bind(this)}></a>
                <a href="#" className="arrow arrow-right" onClick={this.handleRightClick.bind(this)}></a>
            </div>

        )
    }
}


