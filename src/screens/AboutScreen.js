import React from 'react';
import { Text, View, StyleSheet, Button, Linking, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const AboutScreen = (props) => {

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: 'flex-start' }}>
        <TouchableOpacity style={{ paddingHorizontal: 18 }} onPress={() => props.navigation.goBack(null)}>
          <Ionicons name="ios-chevron-back-outline" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>About</Text>
        </View>
        <View style={styles.aboutMessage}>
          <Text style={[styles.text, { fontSize: 22, fontWeight: '600' }]} adjustsFontSizeToFit={true} numberOfLines={1}>Thanks for downloading Poke-Book!</Text>
          <View style={{ height: 8 }} />
          <Text style={styles.text}>
            This app is a project I built for fun and with the hopes that some may find it useful. 
            I did my best to create a clean project, free from bugs, but things do happen. 
          </Text>
          <View style={{ height: 8 }} />
          <Text style={styles.text}>So, if you discover a bug or even have an idea for a aditional feature:</Text>
          <Text style={styles.text}>
            Please! Let me know by emailing me at: 
          </Text>
          <Button style={styles.email} onPress={() => Linking.openURL('mailto:support@example.com?subject=SendMail&body=Description') } title="support@example.com" />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>To Any Developers</Text>
        </View>
        <View style={styles.aboutMessage}>
          <Text style={[styles.text, { fontSize: 22, fontWeight: '600' }]} adjustsFontSizeToFit={true} numberOfLines={1}>Interested in helping?</Text>
          <View style={{ height: 8 }} />
          <Text style={styles.text}>
            I enjoyed building this app and will continue to update and maintain Poke-Book, but I am only one person after all.
          </Text>
          <View style={{ height: 8 }} />
          <Text style={styles.text}>If you're a developer and would like to contribute.</Text>
          <Text style={styles.text}>
            Shoot me an email, or connect with me on LinkedIn: 
          </Text>
          <Button style={styles.email} onPress={() => Linking.openURL('mailto:support@example.com?subject=SendMail&body=Description') } title="support@example.com" />
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => Linking.openURL('https://www.linkedin.com/in/ianmckain/') }>
            <Ionicons name="ios-logo-linkedin" size={48} color="#0B66C2" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353340',
    flex: 1,
    paddingTop: 60
  },
  headerContainer: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 6,
  },
  break: {
    height: 2,
    width: '100%',
    marginBottom: 8,
  },
  header: {
    fontSize: 42,
    fontWeight: '600',
    color: '#fff',
  },
  aboutMessage: {
    paddingHorizontal: 24
  },
  text: {
    color: '#fff',
    fontSize: 18
  }
});

export default React.memo(AboutScreen);