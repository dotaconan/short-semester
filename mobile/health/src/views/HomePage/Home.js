import React, { Component } from 'react';
import { Text, View,ImageBackground,StyleSheet,Image
} from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View>
                <View>
                    <ImageBackground
                        style ={styles.image}
                        source={{uri:'http://a1.qpic.cn/psb?/V10w7flv0u3s42/GEhx50RU1nZtuKq3lzQjiTi*jlhNNvPa3S170QtHu*g!/m/dDABAAAAAAAA&bo=1AKkAQAAAAADB1E!&rf=photolist'}}>
                    </ImageBackground>
                </View>
                <View style={styles.select}>
                    <Image
                        style={styles.selectImage}
                        source = {require('../../img/select.png')}></Image>
                    <Text style={styles.selectText}>
                        社区精选
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
                    <Image
                        style={[styles.imageDesign,styles.imageLeft]}
                        source={require('../../img/image3.png')}>
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
                <View style={styles.heavy}>
                    <Image
                        style={styles.heavyImage}
                        source={require('../../img/heavy.png')}>
                    </Image>
                    <View style={{flexDirection:'column'}}>
                    <Text style={styles.heavyText}>
                        体重
                    </Text>
                            <Text style={styles.dateText}>6月26日 18：00</Text>
                    </View>
                    <Text style={styles.dataText}>80.5KG</Text>
                </View>
                <View style={styles.sumDesign}>
                    <Image
                        style={styles.sumImage}
                        source={require('../../img/sum.png')}>
                    </Image>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    image:{
        marginTop:34,
        height:220,
        width:380,
        resizeMode:'cover',
    },
    select:{
        flexDirection: 'row',
        marginTop:6,
    },
    selectImage:{
        marginLeft:10,
        marginTop:5,
    },
    selectText:{
        marginTop:8,
        fontSize:20,
        marginLeft:10,
    },
    imageShow:{
        flexDirection:'row',
        marginTop:8,
    },
    imageDesign:{
        height:140,
        width:120,
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
    heavy:{
        marginTop:15,
        flexDirection: 'row',
    },
    heavyImage:{
        marginLeft:10,
        marginTop:5,
    },
    heavyText:{
        marginTop:8,
        fontSize:12,
        marginLeft:10,
    },
    dateText:{
        fontSize:8,
        marginLeft:10,
        marginTop:4,
    },
    dataText:{
        marginTop:15,
        marginLeft:180,
        fontSize:15,
    },
    sumDesign:{
        marginTop:30,
        marginLeft:155,
    },
    sumImage:{
        height:60,
        width:60,
    },
});