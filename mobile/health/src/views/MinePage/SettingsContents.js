import React, { Component } from 'react';
import {StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile-rn';

export default class SettingsContents extends Component {
    render() {
        return (
            <View>
                <View style={styles.head}>
                    <Image
                        style={styles.headImage}
                        source = {require('../../img/reduce.png')}></Image>
                    <Text style={styles.headText}>
                        设置
                    </Text>
                </View>

                <View style={{marginTop:30}}>
                    <View style={styles.line}></View>

                    <View style={styles.account}>
                        <Text style={styles.accountText}>
                            账户绑定
                        </Text>
                        <Image
                            style={styles.accountImage}
                            source = {require('../../img/dayuhao.png')}></Image>
                </View>

                    <View style={styles.line}></View>

                    <View style={{height:15}}></View>

                    <View style={styles.line}></View>
                <View style={styles.account}>
                        <Text style={styles.accountText}>
                            个人信息
                        </Text>
                        <Image
                            style={styles.accountImage}
                            source = {require('../../img/dayuhao.png')}></Image>
                </View>
                    <View style={styles.line}></View>

                    <View style={{height:20}}></View>
                <View style={styles.line}></View>

                    <View style={styles.account}>
                        <Text style={styles.accountText}>
                            清理缓存
                        </Text>
                        <Image
                            style={styles.accountImage}
                            source = {require('../../img/dayuhao.png')}></Image>
                </View>
                    <View style={styles.line}></View>

                <View style={styles.account}>
                        <Text style={styles.accountText}>
                            检查更新
                        </Text>
                        <Image
                            style={styles.accountImage}
                            source = {require('../../img/dayuhao.png')}></Image>
                </View>
                    <View style={styles.line}></View>

                <View style={styles.account}>
                        <Text style={styles.accountText}>
                            关于
                        </Text>
                        <Image
                            style={styles.aboutImage}
                            source = {require('../../img/dayuhao.png')}></Image>
                </View>
                    <View style={styles.line}></View>


                </View>
                <View style={styles.exit}>
                    <Button type="primary">退出登录</Button>
                </View>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    line:{
        marginTop:12,
        marginLeft:12,
        height: 0.5,
        width: 350,
        backgroundColor:'gray',
    },
    head:{
        marginTop:50,
        flexDirection:'row',
    },
    headImage:{
        height:20,
        width:20,
        marginLeft:20,
    },
    headText:{
        textAlign: 'center',
        fontSize:20,
        marginLeft:130,
    },
    account:{
        flexDirection: 'row',
        marginLeft:20,
    },
    accountText:{
        fontSize:15,
        marginTop:12,
        marginLeft:12,
    },
    accountImage:{
        width:15,
        height:15,
        marginTop:10,
        marginLeft:220,
    },
    aboutImage:{
        width:15,
        height:15,
        marginTop:10,
        marginLeft:250,
    },
    exit:{
        marginTop:270,
        height:20,
    },
});