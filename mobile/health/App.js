import React from 'react';
import { View, Text,ImageBackground,StyleSheet } from 'react-native';
import { TabBar} from 'antd-mobile-rn';
import Home from './src/views/HomePage/Home';
import Message from './src/views/MessagePage/Message';
import Find from './src/views/FindPage/Find';
import Mine from './src/views/MinePage/Mine';

export default class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        //设置应用默认的页面组件
        this.state = {
            selectedTab: 'stateTab',
        };
    }

    //设置点击tab的事件
    onChangeTab(tabName: any) {
        this.setState({
            selectedTab: tabName,
        });
    }

    render() {
        return (
            <TabBar style={{flex:1}}>
                <TabBar.Item
                    title='状态'
                    icon={require('./src/img/home.png')}
                    selected={this.state.selectedTab === 'stateTab'}
                    onPress={() => this.onChangeTab('stateTab')}>

                    <Home/>

                </TabBar.Item>
                <TabBar.Item
                    icon={require('./src/img/message.png')}
                    title='资讯'
                    badge={22}
                    selected={this.state.selectedTab === 'messageTab'}
                    onPress={() => this.onChangeTab('messageTab')}>

                    <Message/>

                </TabBar.Item>
                <TabBar.Item
                    icon={require('./src/img/find.png')}
                    title='发现'
                    selected={this.state.selectedTab === 'findTab'}
                    onPress={() => this.onChangeTab('findTab')}>


                    <Find/>

                </TabBar.Item>
                <TabBar.Item
                    icon={require('./src/img/me.png')}
                    title='我的'
                    selected={this.state.selectedTab === 'mineTab'}
                    onPress={() => this.onChangeTab('mineTab')}>

                    <Mine/>

                </TabBar.Item>
            </TabBar>
        );
    }
}