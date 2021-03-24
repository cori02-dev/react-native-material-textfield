import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 12,
    lineHeight: 16,
    backgroundColor: 'transparent',
    paddingTop: 8,
    paddingBottom: 2,
    textAlign: 'left',
  },
  rightComponent: {
    paddingTop: 8,
    paddingBottom: 2,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  }
});
