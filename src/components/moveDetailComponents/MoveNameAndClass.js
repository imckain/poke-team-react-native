import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import checkType from '../functions/checkType';

const MoveNameAndClass = ({ results, fontSize, alignSelf, param, lines, typeFontSize, attributeFontSize, textAlign }) => {
  const isValid = (el) => {
    if (el.damage_class === null) {
      return 'N/A'
    } else return el.damage_class.name
  }

  const showType = (el) => {
    return el === 'card' ? <View style={[styles.typeBox, { backgroundColor: checkType(results.type.name) }]}><Text allowFontScaling={false} style={[styles.typeText, { fontSize: typeFontSize }]}>{results.type.name}</Text></View> : null
  }

  const showAttribute = (el) => {
    return el === 'modal' ? <Text allowFontScaling={false} style={[styles.damageClass, { alignSelf: alignSelf, fontSize: attributeFontSize }]}>Damage Class:  <Text style={[styles.damageClassSub, { fontSize: attributeFontSize }]}>{isValid(results)}</Text></Text> : null
  }

  return (
    <View style={[styles.dmgClassView, { alignSelf: alignSelf }]}>
      <View style={[styles.nameContainer, { alignSelf: alignSelf }]}>
        <Text allowFontScaling={false} adjustsFontSizeToFit={true} numberOfLines={lines} style={[styles.name, { fontSize: fontSize, alignSelf: alignSelf, textAlign: textAlign }]}>{results.name.replaceAll('-', ' ')}</Text>
        {showType(param)}
      </View>
      {showAttribute(param)}
    </View>
  );
};

const styles = StyleSheet.create({
  dmgClassView: {
    paddingTop: 8,
    paddingBottom: 6,
    width: 'auto',
    height: 'auto',
  },
  nameContainer: {
    flexDirection: 'column', 
    alignItems: 'flex-start',
  },
  name: {
    color: '#fff',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.712)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    alignSelf: 'center',
    textTransform: 'capitalize',
    paddingBottom: 6
    
  },
  damageClass: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.712)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    paddingBottom: 6,
  },
  damageClassSub: {
    color: 'rgb(223, 223, 223)',
    fontSize: 16,
    fontWeight: '400',
    textShadowColor: 'rgba(0, 0, 0, 0.712)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 3,
    textTransform: 'capitalize',
  },
  typeBox: {
    borderRadius: 10,
    backgroundColor: '#464450',
    justifyContent: 'center',
    width: 'auto',
    height: 'auto',
    marginBottom: 6,
    paddingVertical: 3,
  },
  typeText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    textShadowColor: 'rgb(0, 0, 0)',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 4,
    textTransform: 'capitalize',
  },
});

export default MoveNameAndClass;
