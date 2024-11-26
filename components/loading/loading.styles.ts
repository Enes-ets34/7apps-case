import Colors from "@/app/theme/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.overlay,
      zIndex: 999,
    },
    lottie: {
      width: 300,
      height: 300,
    },
  });
  