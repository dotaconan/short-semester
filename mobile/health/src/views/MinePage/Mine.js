import React, { Component } from 'react';
import {StyleSheet,
        Text,
        View,
        Image,
} from 'react-native';
import Settings from'../MinePage/Settings';
export default class Mine extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.head}>
                        <Image
                            style={styles.content}
                            source={require('../../img/content.png')}>
                        </Image>
                        <Image
                            style={styles.news}
                            source={require('../../img/news.png')}>
                        </Image>
                    </View>

                    <View style={styles.personal}>
                        <Text style={styles.nickname}>
                            BIG
                        </Text>
                        <Image
                            style={styles.heads}
                            source={require('../../img/heads.png')}>
                        </Image>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.dayFoot}>日均步数</Text>
                            <Text style={styles.dayData}>1000</Text>
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.monthFoot}>月均步数</Text>
                            <Text style={styles.monthData}>1000</Text>
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.yearFoot}>年均步数</Text>
                            <Text style={styles.yearData}>1000</Text>
                        </View>
                    </View>
                </View>

                <Settings/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    top:{
        marginTop:33,
        height: 220,
        width: 375,
        backgroundColor:'#70a4ed',
    },
    head:{
        flexDirection: 'row',
    },
    content:{
        marginTop: 10,
        marginLeft: 15,
        height: 25,
        width: 25,
    },
    news:{
        marginTop: 14,
        marginLeft:290,
        height: 25,
        width: 25,
    },
    personal:{
        flexDirection:'column',
    },
    nickname:{
        fontSize:20,
        marginLeft:170,
    },
    heads:{
        marginTop:7,
        marginLeft:155,
        height:60,
        width:60,
    },
    dayFoot:{
        fontSize: 15,
        marginLeft:18,
        marginTop:15,
        color:'#fff',
    },
    dayData:{
        marginLeft:30,
        marginTop:18,
        color: '#fff'
    },
    monthFoot:{
        fontSize: 15,
        marginLeft:75,
        marginTop:15,
        color:'#fff',
    },
    monthData:{
        marginLeft:87,
        marginTop:18,
        color: '#fff'
    },
    yearFoot:{
        fontSize: 15,
        marginLeft:70,
        marginTop:15,
        color:'#fff',
    },
    yearData:{
        marginLeft:80,
        marginTop:18,
        color: '#fff'
    },
});