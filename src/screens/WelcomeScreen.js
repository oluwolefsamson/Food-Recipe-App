import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style = {{ flex: 1, alignItems: "center"}}>
			<Image source = {require ("../../assets/images/welcome1.png")}/>
            <Text 
            style = {{ 
            color: "green",
             fontSize: 25, 
             fontWeight: "bold",
            }}>
            50+ Premium Recipes
            </Text>

            <Text 
            style = {{ 
                fontSize: 42,
                fontWeight: 'bold',
                color: "#3c444c",
                marginTop: 44,
                marginBottom: 40,
            }}>
            CHEF SAMSON
            </Text>
            <TouchableOpacity 
            onPress={ () => navigation.navigate("RecipeList") }
            style = {{ 
                backgroundColor: "green", 
                borderRadius: 20,
                paddingVertical: 18,
                width: "80%",
                alignItems: 'center' 
            }}
            >

            <Text 
            style = {{ 
                fontSize: 18,
                color: '#fff',
                fontWeight: "700",
            }} >Let's Cook</Text>
            </TouchableOpacity>
		</View>
      
        
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({});