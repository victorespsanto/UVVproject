import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerTop: {
        justifyContent: 'flex-start'
    },

    textPage:{
        backgroundColor:'orange',
        padding: 20
    },

    container2: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        

    },

    button__homeOpcao: {
        marginLeft: 20,
    },

    container3: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15

    },

    button__language: {
        backgroundColor: 'blue',
        width: 200,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        marginTop: 20
    },

    text_language: {
        color: "#fff",
        padding: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },

    button__home:{
        marginRight: 0
    },
    darkbg:{
        backgroundColor:"#333"
    },
    login__logomarca:{
        marginBottom: 20
    },
    login__msg:(text='none')=>({
        fontWeight:"bold",
        fontSize: 22,
        color:"red",
        marginBottom: 15,
        display: text
    }),
    login__form:{
        width: "80%"
    },
    login__input:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        marginBottom: 15
    },
    login__button:{
        padding: 12,
        backgroundColor: "#F58634",
        alignSelf:"center",
        borderRadius:10, 
        marginTop: 10
    },
    login__buttonText:{
        fontWeight:"bold",
        fontSize: 22,
        color:"#333"
    },

    area__menu:{
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 10,
        width: '100%',
        backgroundColor:'#111',
        alignItems:'center',
        justifyContent:'center'
    },
    button__home2:{
        textAlign:'left'
    },
    area__title:{
        width: '80%',
        fontWeight:'bold',
        fontSize:20,
        color:'#fff',
        textAlign:'center'
    },
    button__logout:{
        textAlign:'right'

    },

    buttonNNovoCadastro: {
        backgroundColor:'#000',
        borderRadius: 10, 
        marginTop: 20
    },

    text__novoCadastro: {
        color: 'red',
        fontSize: 18,
        padding: 10,
        fontWeight: 'bold',
    },

    text__head: {
        color: 'steelblue',
        fontSize: 28,
        fontWeight: 'bold'        
    },

    text__Profile: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold' 
    },

    trocaSenha: {
        marginTop: 20,
    
    }, 

    area__novoUsusario: {
        marginTop: 20
    },

    vieW_cadastroChaves: (text='green')=>( {
        backgroundColor: text,
        width: 250,
        marginTop: 10,
        padding: 10

    }),

    text__CadastroChaveReservada: (text)=> ({
        display: text
    }),

    text__CadastroChaves: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold'
    },
    
    area__tab:{
        backgroundColor: '#000'
    }

});

export {css};