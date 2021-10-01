import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const ShowSearchResult = (props) => {
  if (!props.results.length) {
    return null;
  }

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainInfo}>
        <Text style={styles.name}>{Capitalize(props.results[0].name)} #{props.results[0].id}</Text> 
        <Image style={styles.imageStyle} source={{ uri: props.results[0].sprites.front_default }} />
      </View>
      <View style={styles.detailInfo}>
        <Text style={styles.detailHeaderText}>Base Stats:</Text>
        <View style={styles.baseStatContainer}>
          <Text style={styles.detailStatNameText}>{props.results[0].stats[0].stat.name}:</Text>
          <Text style={styles.detailBaseStatText}>{props.results[0].stats[0].base_stat}</Text>
        </View>
        <View style={styles.baseStatContainer}>
          <Text style={styles.detailStatNameText}>{props.results[0].stats[1].stat.name}:</Text>
          <Text style={styles.detailBaseStatText}>{props.results[0].stats[1].base_stat}</Text>
        </View>
        <View style={styles.baseStatContainer}>
          <Text style={styles.detailStatNameText}>{props.results[0].stats[2].stat.name}:</Text>
          <Text style={styles.detailBaseStatText}>{props.results[0].stats[2].base_stat}</Text>
        </View>
        <View style={styles.baseStatContainer}>
          <Text style={styles.detailStatNameText}>{props.results[0].stats[3].stat.name}:</Text>
          <Text style={styles.detailBaseStatText}>{props.results[0].stats[3].base_stat}</Text>
        </View>
        <View style={styles.baseStatContainer}>
          <Text style={styles.detailStatNameText}>{props.results[0].stats[4].stat.name}:</Text>
          <Text style={styles.detailBaseStatText}>{props.results[0].stats[4].base_stat}</Text>
        </View>
        <View style={styles.baseStatContainer}>
          <Text style={styles.detailStatNameText}>{props.results[0].stats[5].stat.name}:</Text>
          <Text style={styles.detailBaseStatText}>{props.results[0].stats[5].base_stat}</Text>
        </View>
        <View style={styles.typeContainer}>
          <Text style={styles.typeLabelText}>Type:</Text>
          <Text style={styles.typeText}>{props.results[0].types.map(el => Capitalize(el.type.name) + ' ')}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#ff0000',
    borderWidth: 2,
    borderRadius: 6,
    width: '90%',
    height: 'auto',
    alignSelf: 'center',
    backgroundColor: '#ff000055'
  },
  mainInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '60%'
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
    paddingLeft: 5,
    paddingVertical: 8,
  },
  baseStatContainer: {
    flexDirection: 'row',
    marginLeft: 7,
    marginRight: 6,
    justifyContent: 'space-between',
    width: '90%',
    paddingVertical: 2,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
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
  typeContainer: {
    flexDirection: 'column'
  },
  typeLabelText: {
    color: '#fff',
    fontSize: 22,
    marginTop: 7,
    fontWeight: '600'
  },
  typeText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 6,
    marginLeft: 7,
  },
  imageStyle: {
    height: 150,
    width: 150,
    marginBottom: 16,
    borderRadius: 90,
    backgroundColor: '#CFCFCF'
  }
});

export default React.memo(ShowSearchResult);