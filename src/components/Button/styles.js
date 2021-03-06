import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#446377',
    marginBottom: 40,
    alignItems: 'center',
    alignSelf: 'center',
    width: '70%',
  },
  buttonPress: {
    backgroundColor: '#446377',
  },
  buttonDisabled: {
    borderColor: '#bbb',
    backgroundColor: '#bbb',
  },
  text: {
    color: '#446377',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textPress: {
    color: '#fff',
  },
  top: {
    marginBottom: 25,
  },
  bottom: {
    marginTop: 25,
  },
  middle: {
    marginTop: 25,
    marginBottom: 25,
  }
})
