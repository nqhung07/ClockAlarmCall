/* eslint-disable no-self-compare */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    TextInput,
    Button,
} from 'react-native';

import KeepAwake from 'react-native-keep-awake';
import moment from 'moment';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment().format('LT'),
            day: moment().format('dddd'),
            date: moment().format('ll'),
            isAlarm: '',
            timeAlarm: moment('9:32 AM', 'hh:mm a').format('LT'),
            timeSet: '',
        };
    }

    setTime() {
        setTimeout(() => {
            this.setState({
                time: moment().format('LT'),
                day: moment().format('dddd'),
                date: moment().format('ll'),
                isAlarm: this.state.time === this.state.timeAlarm ? 'true' : 'false',
            });
        }, 1000);
    }

    setTimeAlarm(){
        this.setState({
            timeAlarm: moment(this.state.timeSet, 'hh:mm a').format('LT') 
        });
    }

    componentDidMount() {
        this.setTime();
    }

    render() {
        this.setTime();
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#000"
                    barStyle="light-content"
                />
                <Text style={styles.timeText}>
                    {this.state.timeAlarm}
                </Text>
                <Text style={styles.timeText}>
                    {this.state.time}
                </Text>
                <Text style={styles.dateText}>
                    {this.state.isAlarm}, {this.state.day}, {this.state.date}
                </Text>

                <TextInput
                    style={styles.TextInput}
                    placeholder="--:-- --"
                    value={this.state.timeSet}
                    onChangeText={(text) => this.setState({ timeSet: text })}
                />

                <Button
                    title = "SAVE"
                    onPress = {()=>this.setTimeAlarm()}
                />

                <KeepAwake />
            </View>
        );
    }
}

//style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeText: {
        color: '#999999',
        fontSize: 50,
    },
    dateText: {
        color: '#999999',
        fontSize: 30,
    },
    timeInput: {
        backgroundColor: 'skyblue',
        width: '50%',
        borderColor: 'red',
        borderWidth: 2,
        color: 'red',
    },
})
    ;
