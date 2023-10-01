import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#5856D6',
  white: '#ffffff',
  black: '#000',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  marginTop: {
    marginTop: 20,
  },
  menuIcon: {
    marginLeft: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  subTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonColorPurple: {
    backgroundColor: '#5856D6',
  },
  buttonColorOrange: {
    backgroundColor: '#FF9427',
  },
  bigButton: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 10,
  },
  bigButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  menuButton: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  menuText: {
    marginLeft: 20,
    fontSize: 20,
  },
});
