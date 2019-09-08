/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
} from 'react-native'

import KeepAwake from 'react-native-keep-awake';
import moment from 'moment';



export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment().format("LTS"),
            day: moment().format('dddd'),
            date: moment().format("ll"),
        }
    }

    setTime(){
        setTimeout(() => {
            this.setState({
                time: moment().format("LTS"),
                day: moment().format('dddd'),
                date: moment().format("ll")
            });
        }, 1000);
    }

    componentDidMount() {
        this.setTime();
    }

    render() {
        this.setTime();
        return (
            <View style={styles.container}>
				<StatusBar 
                backgroundColor = "#000"
                barStyle = "light-content"
                />
				<Text style={styles.timeText}>
					{this.state.time}
				</Text>
				<Text style={styles.dateText}>
                    {this.state.day}, {this.state.date}
				</Text>

				<KeepAwake />
			</View>
        )
    }
}

//style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
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
    }
})