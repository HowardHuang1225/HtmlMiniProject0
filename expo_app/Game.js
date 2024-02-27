import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const board = history[currentStep]; // Use the current step to set the board

  const handlePress = (index) => {
    const newHistory = history.slice(0, currentStep + 1); // Copy the history up to the current step
    const currentBoard = newHistory[newHistory.length - 1];
    if (currentBoard[index] || winner) return;
    const newBoard = [...currentBoard];
    newBoard[index] = currentPlayer;
    setHistory([...newHistory, newBoard]);
    setCurrentStep(newHistory.length);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    checkWinner(newBoard) && setWinner(currentPlayer);
  };

  const checkWinner = (board) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  };

  const undoLastMove = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      setWinner(null); // Reset winner as we are undoing the move
    }
  };

  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentStep(0);
    setCurrentPlayer('X');
    setWinner(null);
  };

  const renderSquare = (index) => {
    return (
      <TouchableOpacity style={styles.square} onPress={() => handlePress(index)}>
        <Text style={styles.text}>{board[index]}</Text>
      </TouchableOpacity>
    );
  };

  const renderMessage = () => {
    if(!(board[0]&&board[1]&&board[2]&&board[3]&&board[4]&&board[5]&&board[6]&&board[7]&&board[8]&&!winner)){
        return (
        <View style={styles.messageContainer}>
          {winner ? (
            <Text style={styles.message}>         {winner} wins!</Text>
          ) : (
            <Text style={styles.message}>         {currentPlayer}'s turn</Text>
          )}
          <TouchableOpacity style={styles.resetBtn} onPress={resetGame}>
            <Text style={styles.resetText0}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetBtn1} onPress={undoLastMove}>
            <Text style={styles.resetText0}>Undo Last Move</Text>
          </TouchableOpacity>
        </View>
      );
    }
    else{
        return (
        <View style={styles.messageContainer}>
          
            <Text style={styles.message}>            Draw</Text>

          <TouchableOpacity style={styles.resetBtn} onPress={resetGame}>
            <Text style={styles.resetText0}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetBtn1} onPress={undoLastMove}>
            <Text style={styles.resetText0}>Undo Last Move</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        {[0, 1, 2].map((row) => (
          <View key={row} style={styles.row}>
            {renderSquare(row * 3)}
            {renderSquare(row * 3 + 1)}
            {renderSquare(row * 3 + 2)}
          </View>
        ))}
      </View>
      {renderMessage()}
    </View>
    
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  board: {
    width: 300,
    height: 300,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  },
  message: {
    fontSize: 30,
    marginTop: 20,
  },
  resetBtn: {
    backgroundColor: '#FF5252', // Bright red color for the reset button
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    borderRadius: 25, // Rounded corners
    borderWidth: 1, // Border width
    borderColor: '#FFC0CB', // Light pink border color
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 1 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 3, // Shadow radius
    elevation: 3, // Elevation for Android
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    marginTop: 20, // Margin to the top of the button
  },
  resetBtn1: {
    backgroundColor: 'blue', // Bright red color for the reset button
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    borderRadius: 25, // Rounded corners
    borderWidth: 1, // Border width
    borderColor: 'lightblue', // Light pink border color
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 1 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 3, // Shadow radius
    elevation: 3, // Elevation for Android
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    marginTop: 20, // Margin to the top of the button
  },

  // Add a style for the text inside your reset button if you need it
  resetText0: {
    color: 'white', // White color for the text
    fontSize: 24, // Font size
    fontWeight: '600', // Font weight
  },
});

export default Game;