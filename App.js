import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import Dice1 from './assets/dice_1.png';
import Dice2 from './assets/dice_2.png';
import Dice3 from './assets/dice_3.png';
import Dice4 from './assets/dice_4.png';
import Dice5 from './assets/dice_5.png';
import Dice6 from './assets/dice_6.png';

export default function App() {
  const [number, setNumber] = useState(Dice1);

  const rollDice = () => {
    let num = Math.floor(Math.random() * 6) + 1;
    switch (num) {
      case 1:
        setNumber(Dice1);
        break;
      case 2:
        setNumber(Dice2);
        break;
      case 3:
        setNumber(Dice3);
        break;
      case 4:
        setNumber(Dice4);
        break;
      case 5:
        setNumber(Dice5);
        break;
      case 6:
        setNumber(Dice6);
        break;
      default:
        setNumber(Dice1);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={number} />
      <Text style={styles.text}>{number}</Text>
      <Button title="Roll Dice" onPress={rollDice} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    color: 'black',
  },
  image: {
    width: 160,
    height: 190,
  },
});
