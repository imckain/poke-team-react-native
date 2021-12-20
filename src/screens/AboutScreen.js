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
            Thanks for downloading Dex Mate!
          </Text>
          <View style={{ height: 8 }} />
          <Text allowFontScaling={false} style={styles.subText}>
            This app is a project I built for fun and with the hopes that some may find it useful. 
            I did my best to create a clean project, free from bugs, but things do happen. 
          </Text>
          <View style={{ height: 8 }} />
          <Text allowFontScaling={false} style={[styles.text, { fontWeight: '600' }]}>
            So, if you discover a bug or even have an idea for a additional feature:
          </Text>
          <View style={{ height: 8 }} />
          <Text allowFontScaling={false} style={styles.subText}>
            Please! Let me know by emailing me at: 
          </Text>
          <Button style={styles.email} onPress={() => Linking.openURL(`mailto:dexmate.feedback@gmail.com?subject=Ticket: #${id}&body=Description or Feedback:`) } title="dexmate.feedback@gmail.com" />
          <View style={{ height: 8 }} />
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
            I enjoyed building this app and will continue to update and maintain Dex Mate, but I am only one person after all.
          </Text>
          <View style={{ height: 8 }} />
          <Text allowFontScaling={false} style={[styles.text, { fontWeight: '600' }]}>
            If you're a developer and would like to contribute:
          </Text>
          <View style={{ height: 8 }} />
          <Text allowFontScaling={false} style={styles.subText}>
            Shoot me an email at: 
          </Text>
          <Button style={styles.email} onPress={() => Linking.openURL('mailto:dexmate.dev@gmail.com') } title="dexmate.dev@gmail.com" />
          <View style={{ height: 8 }} />
        </View>
        <View style={styles.headerContainer}>
          <Text allowFontScaling={false} style={styles.header}>Special Thanks</Text>
        </View>
        <View style={styles.aboutMessage}>
          <Text allowFontScaling={false} style={[styles.text, { fontSize: 22, fontWeight: '600' }]} adjustsFontSizeToFit={true} numberOfLines={1}>
            Alex D
          </Text>
          <View style={{ height: 8 }} />
          <Text allowFontScaling={false} style={styles.subText}>
            Logo, Splash Screen, & App Icon Design
          </Text>
          <Text allowFontScaling={false} style={styles.subText}>
            Alex is a 3D artist and a close friend. Thanks for the awesome art my man.
          </Text>
          <View style={{ height: 8 }} />
          <Text allowFontScaling={false} style={[styles.text, { fontSize: 22, fontWeight: '600' }]} adjustsFontSizeToFit={true} numberOfLines={1}>
            To my friends
          </Text>
          <View style={{ height: 8 }} />
          <Text allowFontScaling={false} style={styles.subText}>
            Thank you to all my friends, who gave me great feedback and were bombarded by countless screenshots.
          </Text>
          <Text allowFontScaling={false} style={styles.subText}>
            You all were basically my focus group and helped me become a better developer.
          </Text>
          <Text allowFontScaling={false} style={[styles.subText, {  textAlign: 'center', fontWeight: '600', paddingTop: 16, fontSize: 28}]}>
            Cheers 🍻
          </Text>
          <View style={{ paddingVertical: 80 }}>
            <Button onPress={() => Linking.openURL('https://www.termsfeed.com/live/dfc6f396-3e6a-47a0-b08e-3d90c10613e1') } title="Privacy Policy" />
          </View>
          <Text allowFontScaling={false} style={styles.fairUse}>
            This app is an unofficial app and is NOT affiliated, endorsed or supported by Nintendo, GAME FREAK or The Pokémon company in any way. Some images used in this app are copyrighted and are supported under fair use. Some images used in this app are copyrighted and belong to Nintendo, GAME FREAK or The Pokémon Company. They are used in this app in accordance with the laws of Fair Use, for the United States of America. Pokémon and Pokémon character names are trademarks of Nintendo. No copyright infringement intended. Pokémon © 2002-2018 Pokémon. © 1995-2018 Nintendo/Creatures Inc./GAME FREAK inc.
          </Text>
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
  },
  fairUse: {
    fontSize: 12,
    color: '#ffffff73',
    paddingBottom: 60
  }
});

export default React.memo(AboutScreen);