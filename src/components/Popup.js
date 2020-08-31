import React from 'react';
import './Hangman.css';

class Popup extends React.Component {
    render() {
        return (
            <div className="popup">
                <div className="popup_inner">
                    <h1 style={{ color: 'white' }}>{this.props.text}</h1>
                    <button className="popup_btn btn-lg btn-primary" onClick={this.props.reset}>Try Again</button>
                </div>
            </div>
        );
    }
}

export default Popup;