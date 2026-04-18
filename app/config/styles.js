import { Platform } from "react-native";
 
import colours from './colours';

export default{
    colors: colours,
    text:
    {
        color: colours.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
}