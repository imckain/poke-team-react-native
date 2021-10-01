import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const DetailModal = (props) => {
  const results = props.route.params.results[0]

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainInfo}>
        <Text style={styles.name}>{Capitalize(results.name)} #{results.id}</Text> 
        <View style={styles.spriteContainer}>
          <Image style={styles.imageStyle} source={{ uri: results.sprites.front_default }} />
          <Image style={styles.imageStyle} source={{ uri: results.sprites.back_default }} />
        </View>
      </View>
      <View style={styles.detailInfo}>
        <View>
          <Text style={styles.typeLabelText}>Type:  <Text style={styles.typeText}>{results.types.map(el => Capitalize(el.type.name) + ' ')}</Text></Text>
        </View>
        <Text style={styles.detailHeaderText}>Base Stats:</Text>
        <View style={styles.baseStatContainer}>
          <Text style={styles.detailStatNameText}>{results.stats[0].stat.name}:</Text>
          <Text style={styles.detailBaseStatText}>{results.stats[0].base_stat}</Text>
        </View>
        <View style={styles.baseStatContainer}>
          <Text style={styles.detailStatNameText}>{results.stats[1].stat.name}:</Text>
          <Text style={styles.detailBaseStatText}>{results.stats[1].base_stat}</Text>
        </View>
        <View style={styles.baseStatContainer}>
          <Text style={styles.detailStatNameText}>{results.stats[2].stat.name}:</Text>
          <Text style={styles.detailBaseStatText}>{results.stats[2].base_stat}</Text>
        </View>
        <View style={styles.baseStatContainer}>
          <Text style={styles.detailStatNameText}>{results.stats[3].stat.name}:</Text>
          <Text style={styles.detailBaseStatText}>{results.stats[3].base_stat}</Text>
        </View>
        <View style={styles.baseStatContainer}>
          <Text style={styles.detailStatNameText}>{results.stats[4].stat.name}:</Text>
          <Text style={styles.detailBaseStatText}>{results.stats[4].base_stat}</Text>
        </View>
        <View style={styles.baseStatContainer}>
          <Text style={styles.detailStatNameText}>{results.stats[5].stat.name}:</Text>
          <Text style={styles.detailBaseStatText}>{results.stats[5].base_stat}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderColor: '#fff',
    borderWidth: 2,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: '#272537',
  },
  spriteContainer: {
    flexDirection: 'row'
  },
  mainInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
    paddingTop: 20
  },
  name: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 32,
    fontWeight: '600',
    marginVertical: 8,
    marginHorizontal: 12
  },
  detailInfo: {
    flex: 1,
    borderColor: '#ff0000',
    borderWidth: 2,
    paddingLeft: 5,
    paddingVertical: 8,
  },
  typeLabelText: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 10,
    fontWeight: '600'
  },
  typeText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10
  },
  baseStatContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 6,
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 2,
  },
  detailHeaderText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600'
  },
  detailStatNameText: {
    color: '#fff',
    fontSize: 16,
  },
  detailBaseStatText: {
    color: '#fff',
    alignSelf: 'flex-end',
    fontWeight: '600',
    fontSize: 16,
  },
  imageStyle: {
    height: 150,
    width: 150,
    marginBottom: 16,
  }
});

export default React.memo(DetailModal);