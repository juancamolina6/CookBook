import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F8F4F0'
    },
    innerContainer:{
        flex: 1,
        padding:20,
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input:{
        borderWidth:1, 
        borderColor: '#ccc', 
        borderRadius: 8,
        padding: 10,
        marginBottom: 8,
        fontSize:16
    },
    errorText:{
        color: 'red',
        fontSize: 12,
        marginBottom: 8
    },
    saveButton:{
        backgroundColor: '#4caf50',
        padding:15,
        borderRadius:8,
        alignItems:'center',
        marginBottom:10
    },
    saveButtonDisabled:{
        backgroundColor: '#ccc'
    },
    clearButton:{
        backgroundColor: '#f44336',
        padding:15,
        borderRadius:8,
        alignItems: 'center'
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
})
export default styles;