import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  header: {
    marginTop: 180,
    marginBottom: 60,
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#db6f6a",
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: "#efefef",
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
