import { StyleSheet } from "react-native";
import App from "./App";

export default function Index() {
  return (
    <App/>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      flex: 1,
      paddingTop: 58,
    },
  }
)
