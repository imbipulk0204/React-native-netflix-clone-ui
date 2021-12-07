import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    //   display:"flex",
      flex: 1,
    //   flexDirection:"row",
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    image:{
        width:100,
        height:150,
        resizeMode:"cover",
        borderRadius:4,
        margin:5,
    },
    title:{
        fontSize:18,
        fontWeight:"bold"
    }
  });
  

export default styles;