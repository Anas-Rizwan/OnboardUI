import React from 'react';
import { View ,Text, StyleSheet,StatusBar , Image, SafeAreaView,  } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../assets/colors/colors';


const data = [
    {
        id : 1,
        title : "pick up & Deliver",
        text : "Nisi sint incididunt cillum ut quis officia. Tempor dolore exercitation nostrud velit tempor. Esse dolore laborum elit veniam. Sunt eiusmod commodo dolor ad. Magna commodo eu non dolor laborum minim aliqua commodo quis in.",
        image : require('../assets/Images/img1.png')
    },
    {
        id : 2,
        title : "Buy & Deliver",
        text : "Nisi sint incididunt cillum ut quis officia. Tempor dolore exercitation nostrud velit tempor. Esse dolore laborum elit veniam. Sunt eiusmod commodo dolor ad. Magna commodo eu non dolor laborum minim aliqua commodo quis in.",
        image : require('../assets/Images/img2.png')
    },
    {
        id : 3,
        title : "Fix  & Deliver",
        text : "Nisi sint incididunt cillum ut quis officia. Tempor dolore exercitation nostrud velit tempor. Esse dolore laborum elit veniam. Sunt eiusmod commodo dolor ad. Magna commodo eu non dolor laborum minim aliqua commodo quis in.",
        image : require('../assets/Images/img3.png')
    },
];

const Onboard = (item)=>{
    const renderItem = ({item})=>{
        return(
            <SafeAreaView>
            <View style={[ styles.main ,

            {
                backgroundColor : item.id==1 ? colors.darkblue : item.id==2 ? colors.white : colors.black,
            },
            ]}>
                <View>
                <Image source = {item.image} style={styles.image}/>
                </View>

                <Text style={[styles.title,
                 {
                    color : item.id==1 ? colors.yellow : item.id==2 ? colors.orange : colors.blue,
                },
                ]}>{item.title}</Text>
                <Text style={[styles.text , 
                {color : item.id==1 ? colors.white : item.id==2 ? colors.lightblack : colors.white,}
                ]}>{item.text}</Text>
                </View>
                </SafeAreaView>
        )
    };

    const keyExtractor = (item)=> item.id;
    
    



    return(

        <View style={{flex : 1}}>

            <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          data={data}
          renderItem={renderItem}
          keyExtractor = {keyExtractor}
          dotStyle = {styles.dotStyle}
          activeDotStyle = { styles.activeDotStyle}
          showNextButton = {false}
          showDoneButton = {false}
        />
      </View>
    );
    };


const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
    },
    image : {
        width: 420,
        height: 600,
        marginVertical: -50,
        opacity : 0.9,
    },
    
    title : {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        marginHorizontal: 20,
        marginTop: -20,
    },
    
    text : {
        color : colors.gray,
        marginHorizontal: 20,
        width: 380,
    },
    dotStyle : {
        borderWidth: 1,
        borderColor: colors.gray ,
        marginBottom: 100,
        
    },
    
    activeDotStyle : {
        marginBottom: 100,
        backgroundColor: colors.blue,

    },

});


export default Onboard;