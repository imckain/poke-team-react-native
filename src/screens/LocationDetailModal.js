import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const LocationDetailModal = (props) => {
  let results = [];

  if (props.route.params.results[0] === undefined) {
    results = props.route.params.results
  } else results = props.route.params.results

  const locationBox = (el) => {
    return (
      <FlatList 
        horizontal={false}
        data={results}
        keyExtractor={(item) => item.location_area.url}
        renderItem={({ item }) => {
          const version = item.version_details.map(i => {
            return <Text key={i.version.name} style={styles.versionText}>{i.version.name}</Text>
          })
          return (
            <View style={{paddingBottom: 12}}>
              <View style={styles.versionHeader}>
                {version}
              </View>
              <View style={styles.locationBox}>
                <Text style={styles.locationName}>{item.location_area.name.replace('-', ' ')}</Text>
              </View>
            </View>
          )
        }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <View style={{paddingBottom: 80}}>
        {locationBox(results)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: '#353340',
    paddingHorizontal: 12,
    paddingTop: 22
  },
  versionHeader: {
    flexDirection: 'row',
    paddingLeft: 12,
    flexWrap: 'wrap'
  },
  versionText: {
    color: '#fff',
    fontWeight: '600',
    paddingRight: 10,
    fontSize: 22,
    textTransform: 'capitalize',
  },
  locationBox: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#464450',
    margin: 7,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 'auto'
  },
  locationName: {
    color: 'rgb(223, 223, 223)',
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 12,
    paddingVertical: 3,
    textTransform: 'capitalize',
  },
});

export default LocationDetailModal;