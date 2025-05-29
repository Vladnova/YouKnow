import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native";
import {StatusBar} from 'expo-status-bar';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="inverted" />
      <ScrollView contentContainerStyle={styles.blockBtn}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>News</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>Joke</Text>
        </TouchableOpacity>
      </ScrollView>
      {/*<BottomTabNavigator/>*/}
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b7afb",
  },
  blockBtn: {
    flexGrow: 1,
    alignItems: "center",
    marginTop: 32,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "#F4F7FA",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  btn: {
    width: "100%",
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#2b7afb"
  },
  textBtn: {
    fontSize: 18,
    color: "#272727",
  },
});
