import React, { Component } from 'react';
import './Hangman.css';
import { randomWord } from './Words.js';
// Import images from the components/images folder that represent image of hangman
import step0 from './images/0.jpg';
import step1 from './images/1.jpg';
import step2 from './images/2.jpg';
import step3 from './images/3.jpg';
import step4 from './images/4.jpg';
import step5 from './images/5.jpg';
import step6 from './images/6.jpg';

class Hangman extends Component {
  // Default props, holds amount of guessed allowed and array of images in components/images folder
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6]
  }

  // Constructor sets state attributes --> the mistake counter, set of guessed words by user and answer
  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([""]),
      answer: randomWord().toUpperCase()
    }
  }

  // Function: Handles the guessed letter of user
  // Output: Adds the letter into the set guessed[] array, if letter present in this.answer then add 0, otherwise 1
  handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }));
  }

  // Word to be guessed representation, letters guessed will show up and the ones not yet guessed as a undercolon "_"
  guessedWord() {
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  // This will generate the buttons for each letter of the alphabet.
  generateButtons() {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => (
      <button
        // Represent the buttons as large with 2px space
        class="btn btn-lg btn-dark m-2"
        key={letter}
        value={letter}
        // Call function to handle the guess to add to set of guessed letters and increment of wrong counter
        onClick={this.handleGuess}
        // Disable the letter already clicked
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  // Function: this function handles the reset button
  // Output will reset the state of the object with how it is initialized
  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([""]),
      answer: randomWord().toUpperCase()
    });
  }

  render() {
    // Boolean values to check if Game is over or user has won
    const gameOver = this.state.mistake >= this.props.maxWrong;
    let gameStat = this.generateButtons();
    const isWinner = this.guessedWord().join("") === this.state.answer;

    if (isWinner) {
      gameStat = "Congratulations!! You guessed the correct word!! Reset and play again!"
    }

    if (gameOver) {
      gameStat = "You Lost!! Reset and try again!!"
    }

    return (
      <div className="Hangman container">
        <h1 className="text-center"> Hangman</h1>
        <div className="float-right">Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
        <div className="text-center">
          <img src={this.props.images[this.state.mistake]} alt="" />
        </div>
        <div className="text-center">
          <p> Guess the Horror Movie:</p>
          <p>
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <p>{gameStat}</p>
          <button className="btn btn-lg btn-danger" onClick={this.resetButton}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Hangman;