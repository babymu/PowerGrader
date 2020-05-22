import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Signup from './src/login/signup.js';
import Courses from './src/login/courses.js';
import Grades from './src/login/grades.js';
import GPA from './src/login/gpa.js';







const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Courses: { screen: Courses },
  Signup: { screen: Signup },
  Grades: { screen: Grades },
  GPA: { screen: GPA },


 
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

