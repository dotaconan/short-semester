import React, { Component } from 'react';
import {StyleSheet,
        Text,
        View,
        Image,
        TouchableOpacity,
        Navigator,
} from 'react-native';
import SettingsContents from "./SettingsContents";

export default class Settings extends Component {

    goToSettingPage() {
        this.props.navigator.push({
            title: 'settingPage',
            component: SettingsContents
        })
    }

    render() {
        return (
            <View>
                <View style={styles.goal}>
                    <Image
                        style={styles.goalImage}
                        source = {require('../../img/goal.png')}></Image>
                    <Text style={styles.goalText}>
                        目标设定
                    </Text>
                </View>
                <View style={styles.line}>
                </View>

                <View style={styles.heavy}>
                    <Image
                        style={styles.heavyLeftImage}
                        source = {require('../../img/heavy.png')}></Image>
                    <Text style={styles.heavyText1}>
                        体重目标
                    </Text>
                    <Text style={styles.heavyText2}>
                        150KG
                    </Text>
                    <Image
                        style={styles.heavyRightImage}
                        source = {require('../../img/dayuhao.png')}></Image>
                </View>
                <View style={styles.line}>
                </View>
                <View style={styles.exercise}>
                    <Image
                        style={styles.heavyLeftImage}
                        source = {require('../../img/exercise.png')}></Image>
                    <Text style={styles.heavyText1}>
                        运动目标
                    </Text>
                    <Text style={styles.heavyText2}>
                        6000步
                    </Text>
                    <Image
                        style={styles.heavyRightImage}
                        source = {require('../../img/dayuhao.png')}></Image>
                </View>
                <View style={styles.line}>
                </View>

                <View style={styles.more}>
                    <Image
                        style={styles.goalImage}
                        source = {require('../../img/point.png')}></Image>
                    <Text style={styles.goalText}>
                        更多
                    </Text>
                </View>
                <View style={styles.line}>
                </View>
                <View style={styles.heavy}>
                    <Image
                        style={styles.heavyLeftImage}
                        source = {require('../../img/sleep.png')}></Image>
                    <Text style={styles.heavyText1}>
                        睡眠结果提醒
                    </Text>
                    <Text style={styles.heavyText2}>
                        优
                    </Text>
                    <Image
                        style={styles.heavyRightImage}
                        source = {require('../../img/dayuhao.png')}></Image>
                </View>
                <View style={styles.line}>
                </View>
                <View style={styles.heavy}>
                    <Image
                        style={styles.heavyLeftImage}
                        source = {require('../../img/mine.png')}></Image>
                    <Text style={styles.heavyText1}>
                        我的基本状况
                    </Text>
                    <Image
                        style={styles.mineRightImage}
                        source = {require('../../img/dayuhao.png')}></Image>
                </View>
                <View style={styles.line}>
                </View>

                <View style={styles.heavy}>
                    <Image
                        style={styles.heavyLeftImage}
                        source = {require('../../img/blue.png')}></Image>
                    <Text style={styles.heavyText1}>
                        蓝牙
                    </Text>
                    <Image
                        style={styles.settingRightImage}
                        source = {require('../../img/dayuhao.png')}></Image>
                </View>

                <View style={styles.line}>
                </View>

                <View style={styles.heavy}>
                    <Image
                        style={styles.heavyLeftImage}
                        source = {require('../../img/setting.png')}></Image>
                    <TouchableOpacity onPress={() => {this.goToSettingPage()}}>
                    <Text style={styles.heavyText1}>
                        设置
                    </Text>
                    </TouchableOpacity>
                    <Image
                        style={styles.settingRightImage}
                        source = {require('../../img/dayuhao.png')}></Image>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    goal:{
        flexDirection: 'row',
        marginTop:5,
    },
    goalImage:{
        marginLeft:14,
        marginTop:8,
        height: 20,
        width:20,
    },
    goalText:{
        marginTop:10,
        fontSize:16,
        marginLeft:10,
    },
    line:{
        marginTop:12,
        marginLeft:12,
        height: 0.5,
        width: 350,
        backgroundColor:'gray',
    },
    heavy:{
        flexDirection: 'row',
    },
    heavyLeftImage:{
        marginLeft:30,
        marginTop:10,
        height: 20,
        width:20,
    },
    heavyText1:{
        marginTop:15,
        fontSize:12,
        marginLeft:10,
    },
    heavyText2:{
        marginTop:15,
        fontSize:12,
        marginLeft:120,
    },
    heavyRightImage:{
        marginLeft:60,
        marginTop:13,
        height: 17,
        width:17,
    },
    exercise:{
        flexDirection: 'row',
    },
    more:{
        flexDirection: 'row',
        marginTop:10,
    },
    mineRightImage:{
        marginLeft:190,
        marginTop:13,
        height: 17,
        width:17,
    },
    settingRightImage:{
        marginLeft:240,
        marginTop:13,
        height: 17,
        width:17,
    },
});