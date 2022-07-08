import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Pressable, Alert } from "react-native";
import { style } from "./SelectCollegeStyle";
import Select from "react-select";
const SelecCollege = ({ navigation }) => {
  const [dropDownValue, setDropDownValue] = useState("");
  console.log(dropDownValue);
  const details = [
    { value: "dbcy", label: "DBCY" },
    { value: "sacred heart", label: "Sacret heart" },
    { value: "lakshmi", label: "Lakshmi" },
    { value: "model college", label: "Model Collage" },
  ];
  const handleLogIn = () => {
    if (!dropDownValue) {
      Alert.alert("Please select college");
    } else {
      navigation.navigate("/home");
    }
  };
  return (
    <View style={style.selectColegePage}>
      <Image
        source={require("../../assets/cropped-HGR-LOGO.png")}
        style={style.logo}
      />
      <View style={style.dropDown}>
        <Text>Select Collage</Text>
        <Select options={details} onChange={(e) => setDropDownValue(e.value)} />
        <Pressable style={style.okButton} onPress={handleLogIn}>
          <Text style={style.okText}>Ok</Text>
        </Pressable>
      </View>
      <Text style={style.bottomBrand}>Powered by bosco soft</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SelecCollege;
