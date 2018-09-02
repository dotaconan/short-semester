import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView

} from 'react-native';
import FindSwiper from '../FindPage/FindSwiper'

export default class Find extends Component {


    render() {
        return (
            <View style={styles.container}>
                <View>
                    <FindSwiper/>
                </View>
                <View style={styles.hot}>
                    <Image
                        style={styles.hotImage}
                        source = {require('../../img/hot.png')}></Image>
                    <Text style={styles.hotText}>
                        热门活动
                    </Text>
                </View>
                <View style={styles.imageShow}>
                    <Image
                        style={styles.imageDesign}
                        source={require('../../img/image1.png')}>
                    </Image>
                    <Image
                        style={[styles.imageDesign,styles.imageLeft]}
                        source={require('../../img/image2.png')}>
                    </Image>
                </View>
                <View style={styles.moreDesign}>
                    <Text style={styles.moreText}>
                        更多
                    </Text>
                    <Image
                        style={styles.moreImage}
                        source={require('../../img/more.png')}>
                    </Image>
                </View>
                <View style={styles.interval}>

                </View>
                <View style={styles.class}>
                    <Image
                        style={styles.classImage}
                        source = {require('../../img/class.png')}></Image>
                    <Text style={styles.classText}>
                        健身课堂
                    </Text>
                </View>
                <View style={styles.imageShow}>
                    <Image
                        style={styles.imageDesign}
                        source={require('../../img/image3.png')}>
                    </Image>
                    <Image
                        style={[styles.imageDesign,styles.imageLeft]}
                        source={require('../../img/image2.png')}>
                    </Image>
                </View>
                <View style={styles.moreDesign}>
                    <Text style={styles.moreText}>
                        更多
                    </Text>
                    <Image
                        style={styles.moreImage}
                        source={require('../../img/more.png')}>
                    </Image>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    hot:{
        flexDirection: 'row',
        marginTop:6,
    },
    hotImage:{
        marginLeft:10,
        marginTop:5,
    },
    hotText:{
        marginTop:13,
        fontSize:20,
        marginLeft:8,
    },
    imageShow:{
        flexDirection:'row',
        marginTop:8,
    },
    imageDesign:{
        height:140,
        width:180,
    },
    imageLeft:{
        marginLeft:5,
    },
    moreDesign:{
        flexDirection:'row',
        marginTop:12,
        marginLeft:160,
    },
    moreText:{
        textAlign: 'center',
        fontSize:18,
        fontStyle:'italic',
        fontFamily:'Courier',
        fontWeight:'100',
    },
    moreImage:{
        height:25,
        width:27,
    },
    interval:{
        marginTop:2,
        backgroundColor:'#f3f3f3',
        height:7,
        width:380,
    },
    class:{
        flexDirection: 'row',
        marginTop:6,
    },
    classImage:{
        marginLeft:10,
        marginTop:5,
    },
    classText:{
        marginTop:13,
        fontSize:20,
        marginLeft:8,
    },
});
