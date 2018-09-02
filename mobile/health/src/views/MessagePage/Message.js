import React from 'react';
import { Alert,
         View,
         ScrollView,
} from 'react-native';
import { SearchBar } from 'antd-mobile-rn';
import Essay from '../MessagePage/Essay'

export default class Message extends React.Component<any, any> {
    state = {
        value: '请输入您要搜索的内容',
    };
    onChange = (value: any) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    render() {
        return (
            <ScrollView>
                <View>
                    <SearchBar
                        value={this.state.value}
                        placeholder="搜索"
                        onSubmit={(value: any) => Alert.alert(value)}
                        onCancel={this.clear}
                        onChange={this.onChange}
                        showCancelButton/>
                </View>

                <Essay/>
            </ScrollView>
        );
    }
}