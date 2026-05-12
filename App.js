import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF9C4' }}>
      <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#D84315' }}>
        जय हिन्द! 🇮🇳
      </Text>
      <Text style={{ fontSize: 20, marginTop: 15, textAlign: 'center' }}>
        यह मेरा बिना टेम्पलेट वाला ऐप है! मोबाइल से बनाया है! 💪
      </Text>
    </View>
  );
}
