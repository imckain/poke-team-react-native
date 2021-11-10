import React from 'react';
import { Text, View, StyleSheet, Button, Linking, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid'

import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const AboutScreen = (props) => {
  const id = uuid.v4()

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: 'flex-start', paddingBottom: 12 }}>
        <TouchableOpacity style={styles.back} onPress={() => props.navigation.goBack(null)}>
          <Ionicons name="ios-chevron-back-outline" size={32} color="#fff" /><Text allowFontScaling={false} style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ paddingHorizontal: 12 }}>
        <View style={styles.headerContainer}>
          <Text allowFontScaling={false} style={styles.header}>About</Text>
        </View>
        <View style={styles.aboutMessage}>
          <Text allowFontScaling={false} style={[styles.text, { fontSize: 22, fontWeight: '600' }]} adjustsFontSizeToFit={true} numberOfLines={1}>
            Thanks for downloading Poke-Pal!
          </Text>
          <View style={{ height: 8 }} />
          <Text allowFontScaling={false} style={styles.subText}>
            This app is a project I built for fun and with the hopes that some may find it useful. 
            I did my best to create a clean project, free from bugs, but things do happen. 
          </Text>
          <View style={{ height: 8 }} />
          <Text allowFontScaling={false} style={[styles.text, { fontWeight: '600' }]}>
            So, if you discover a bug or even have an idea for a aditional feature:
          </Text>
          <View style={{ height: 8 }} />
          <Text allowFontScaling={false} style={styles.subText}>
            Please! Let me know by emailing me at: 
          </Text>
          <Button style={styles.email} onPress={() => Linking.openURL(`mailto:pokepal.feedback@gmail.com?subject=Ticket: #${id}&body=Description or Feedback:`) } title="pokepal.feedback@gmail.com" />
        </View>
        <View style={styles.headerContainer}>
          <Text allowFontScaling={false} style={styles.header}>Developers</Text>
        </View>
        <View style={styles.aboutMessage}>
          <Text allowFontScaling={false} style={[styles.text, { fontSize: 22, fontWeight: '600' }]} adjustsFontSizeToFit={true} numberOfLines={1}>
            Interested in helping?
          </Text>
          <View style={{ height: 8 }} />
          <Text allowFontScaling={false} style={styles.subText}>
            I enjoyed building this app and will continue to update and maintain Poke-Pal, but I am only one person after all.
          </Text>
          <View style={{ height: 8 }} />
          <Text allowFontScaling={false} style={[styles.text, { fontWeight: '600' }]}>
            If you're a developer and would like to contribute:
          </Text>
          <View style={{ height: 8 }} />
          <Text allowFontScaling={false} style={styles.subText}>
            Shoot me an email at: 
          </Text>
          <View style={{ paddingBottom: 60 }}>
            <Button style={styles.email} onPress={() => Linking.openURL('mailto:pokepal.dev@gmail.com') } title="pokepal.dev@gmail.com" />
            {/* <View style={styles.iconContainer}>
              <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => Linking.openURL('https://www.linkedin.com/in/ianmckain/') }>
                <Ionicons name="ios-logo-linkedin" size={48} color="#0B66C2" />
              </TouchableOpacity>
              <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => Linking.openURL('https://github.com/imckain') }>
                <Ionicons name="ios-logo-github" size={48} color="#fff" />
              </TouchableOpacity>
            </View> */}
            <View style={{ paddingTop: 80 }}>
              <Button onPress={() => Linking.openURL('https://www.termsfeed.com/live/dfc6f396-3e6a-47a0-b08e-3d90c10613e1') } title="Privacy Policy" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    paddingTop: 60,
  },
  headerContainer: {
    paddingHorizontal: 12,
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
  },
  subText: {
    color: 'rgb(225, 225, 225)',
    fontSize: 18,
    paddingLeft: 6
  },
  iconContainer: { 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    paddingBottom: 10
  },
  back: { 
    paddingHorizontal: 18, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#fff'
  }
});

export default React.memo(AboutScreen);