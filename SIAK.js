import React from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default class SIAK extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tugas1: 0,
      tugas2: 0,
      na: 0,
      predikat: ''
    };
  }

  render() {
    return (
     <View style={styles.vMain}>
     {/*view untuk header*/}
      <View style={styles.vHeader}>
      <Text>sudarma yasa</Text>
      </View>

      <View style={styles.vInput}>
        <View style={styles.itemInput}>
          <Text> Tugas 1</Text>
          <TextInput
              style={styles.TxtInput}
          keyboardType='numeric'
          onChangeText={
            (Txttugas1) => this.setState= ({tugas1:Txttugas1})
          }
           />
        </View>

        <View style={styles.itemInput}>
          <Text>
          Tugas 2</Text>
          <TextInput
            style={styles.TxtInput}
            keyboardType='numeric'
            onChangeText={
              (Txttugas2) => this.setState= ({tugas2:Txttugas2})
            }
           />
        </View>

      </View>

      <View style={styles.vtombol}>
      <Button
        title= "hitung"
        onPress= {
          () => {}

        }
      />
      </View>

      <View style={styles.vhasil}>
      <Text>NA = {this.state.na}</Text>
        <Text>predikat = {this.state.predikat}</Text>
      </View>

     </View>
    );
  }
}

const styles = StyleSheet.create({
vMain: {
  flex: 1,
  backgroundColor: '#FFAB40',
},
vHeader: {
  flex: 1,
  backgroundColor: '#0D47A1',
  alignItems: 'center',
  justifyContent: 'center'
},
vInput: {
  flex: 3,
  backgroundColor: '#90caf9',
},
itemInput: {
  flexDirection: 'row',
  marginTop: 10,
  marginLeft: 20
},
TxtInput: {
  width: 200,
  height: 30,
  borderWidth: 1,
  borderColor: 'grey'
},
vtombol: {

}
});
