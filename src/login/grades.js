import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated,ScrollView,

} from 'react-native';
import Courses from './courses.js';



class Grades extends React.Component {
state={

course1:'',

course2:'',

course3:'',

course4:'',

course5:'',

course6:'',
}
 
  render() {
    return (


      <View style={styles.container}>
       <ScrollView>


 
          <View style={styles.textContainer}>
          <Text style={styles.text1}>
Enter your grades below
</Text>
<View style={styles.contentContainer}>

 
<View style = {styles.box}>
 <Text style={styles.text1}>
Course 1
</Text>
<TextInput style = {styles.text}

onChangeText={(course1) => this.setState({course1})}

value={this.state.course1}

/>

</View>


<View style = {styles.box}>
 <Text style={styles.text1}>
Course 2
</Text>
<TextInput style = {styles.text}

onChangeText={(course2) => this.setState({course2})}

value={this.state.course2}

/>

</View>


<View style = {styles.box}>
 <Text style={styles.text1}>
Course 3
</Text>
<TextInput style = {styles.text}

onChangeText={(course3) => this.setState({course3})}

value={this.state.course3}

/>

</View>


<View style = {styles.box}>
 <Text style={styles.text1}>
Course 4
</Text>
<TextInput style = {styles.text}

onChangeText={(course4) => this.setState({course4})}

value={this.state.course4}

/>

</View>


<View style = {styles.box}>
 <Text style={styles.text1}>
Course 5
</Text>
<TextInput style = {styles.text}

onChangeText={(course5) => this.setState({course5})}

value={this.state.course5}

/>

</View>


<View style = {styles.box}>
 <Text style={styles.text1}>
Course 6
</Text>
<TextInput style = {styles.text}

onChangeText={(course6) => this.setState({course6})}

value={this.state.course6}

/>
</View>
<TouchableHighlight
              onPress={() => this.props.navigation.navigate('GPA')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            CONTINUE
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
      </View>
                  </ScrollView>
</View>
        

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },


  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },


  text1: {
    
    fontSize: 20,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

   touchableButton1: {
        backgroundColor: 'red',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 50,
         borderRadius: 10,
   
   
    },
   
    buttonText: {
     
        
        fontSize: 14,
        fontWeight:'bold',
    },
  text: {
  height: 43,
  width: 20,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},
});


export default Grades;
