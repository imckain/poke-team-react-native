import React, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useGetResultsFromUrl } from "../../hooks/useGetResultsFromUrl";
import { useAdvancedResults } from "../../hooks/useAdvancedResults";
import PokemonNameAndId from "../../components/PokemonDetailComponents/PokemonNameAndId";
import FrontSprite from "../../components/PokemonDetailComponents/Sprites/FrontSprite";
import ShinyFrontSprite from "../../components/PokemonDetailComponents/Sprites/ShinyFrontSprite";
import BackSprite from "../../components/PokemonDetailComponents/Sprites/BackSprite";
import ShinyBackSprite from "../../components/PokemonDetailComponents/Sprites/ShinyBackSprite";
import TypeDetail from "../../components/PokemonDetailComponents/TypeDetail";
import AbilityDetail from "../../components/PokemonDetailComponents/AbilityDetail";
import ModalBaseStats from "../../components/PokemonDetailComponents/ModalBaseStats";
import SecondaryMovesDetail from "../../components/PokemonDetailComponents/SecondaryMovesDetail";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import VersionDetail from "../../components/PokemonDetailComponents/VersionDetail";

const SecondaryDetailModal = (props) => {
  const [isShiny, setIsShiny] = useState(false);
  const [getResultsFromUrl, urlResults] = useGetResultsFromUrl();
  const [advancedSearchAPI, advancedResults] = useAdvancedResults();
  const [results, setResults] = useState(props.route.params.results);

  useEffect(() => {
    setResults(props.route.params.results);
  }, [props.route.params.results]);

  const changeSprites = useCallback(
    (el) => {
      if (el === true) {
        return (
          <View style={{ width: "100%" }}>
            <TouchableOpacity
              style={{ zIndex: 1 }}
              onPress={() => setIsShiny(false)}
            >
              <View style={styles.changeButton}>
                <MaterialIcons
                  name="360"
                  size={24}
                  color="rgb(223, 223, 223)"
                />
                <Text allowFontScaling={false} style={styles.changeLabel}>
                  Shiny
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.spriteContainer}>
              <ShinyFrontSprite width={160} height={160} results={results} />
              <ShinyBackSprite width={160} height={160} results={results} />
            </View>
          </View>
        );
      }
      if (el === false) {
        return (
          <View style={{ width: "100%" }}>
            <TouchableOpacity
              style={{ zIndex: 1 }}
              onPress={() => setIsShiny(true)}
            >
              <View style={styles.changeButton}>
                <MaterialIcons
                  name="360"
                  size={24}
                  color="rgb(223, 223, 223)"
                />
                <Text allowFontScaling={false} style={styles.changeLabel}>
                  Normal
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.spriteContainer}>
              <FrontSprite width={160} height={160} results={results} />
              <BackSprite width={160} height={160} results={results} />
            </View>
          </View>
        );
      }
    },
    [results]
  );

  const isLocationAvailable = () => {
    if (urlResults === undefined)
      return (
        <View style={[styles.headerWrapper, { width: "90%" }]}>
          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            style={[
              styles.locationNavigation,
              { fontStyle: "italic", color: "rgba(255, 255, 255, 0.5)" },
            ]}
          >
            Encounter Details Not Available
          </Text>
        </View>
      );
    else
      return (
        <View
          style={[
            styles.headerWrapper,
            {
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            },
          ]}
        >
          <Text
            allowFontScaling={false}
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            style={styles.locationNavigation}
          >
            Encounter Details
          </Text>
          <Entypo
            name="triangle-right"
            size={32}
            color="rgba(255, 255, 255, 0.5)"
          />
        </View>
      );
  };

  const getGeneration = (el) => {
    return el.id <= 151
      ? "Gen I"
      : el.id <= 251
      ? "Gen II"
      : el.id <= 386
      ? "Gen III"
      : el.id <= 493
      ? "Gen IV"
      : el.id <= 649
      ? "Gen V"
      : el.id <= 721
      ? "Gen VI"
      : el.id <= 809
      ? "Gen VII"
      : el.id <= 901
      ? "Gen VIII"
      : null;
  };

  const showPrevious = () => {
    if (results.id > 1 && results.id < 899) {
      return (
        <TouchableOpacity
          onPress={() => {
            advancedSearchAPI(results.id - 1);
          }}
        >
          <Ionicons
            name="chevron-back"
            size={32}
            color="rgba(255, 255, 255, 0.5)"
          />
        </TouchableOpacity>
      );
    }
    if (results.id > 10001) {
      return (
        <TouchableOpacity
          onPress={() => {
            advancedSearchAPI(results.id - 1);
          }}
        >
          <Ionicons
            name="chevron-back"
            size={32}
            color="rgba(255, 255, 255, 0.5)"
          />
        </TouchableOpacity>
      );
    } else return <View style={{ width: 37 }} />;
  };

  const showNext = () => {
    if (results.id < 898) {
      return (
        <TouchableOpacity
          onPress={() => {
            advancedSearchAPI(results.id + 1);
          }}
        >
          <Ionicons
            name="chevron-forward"
            size={32}
            color="rgba(255, 255, 255, 0.5)"
          />
        </TouchableOpacity>
      );
    }
    if (results.id > 898 && results.id < 10200) {
      return (
        <TouchableOpacity
          onPress={() => {
            advancedSearchAPI(results.id + 1);
          }}
        >
          <Ionicons
            name="chevron-forward"
            size={32}
            color="rgba(255, 255, 255, 0.5)"
          />
        </TouchableOpacity>
      );
    } else return <View style={{ width: 37 }} />;
  };

  useEffect(() => {
    getResultsFromUrl(results.location_area_encounters);
  }, []);

  useEffect(() => {
    if (advancedResults !== null && advancedResults !== undefined) {
      setResults(advancedResults[0]);
    }
  }, [advancedResults]);

  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.closeMessage}>
        Pull down to close
      </Text>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.mainInfo}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 22,
              width: "100%",
            }}
          >
            {showPrevious()}
            <PokemonNameAndId
              lines={1}
              fontSize={48}
              width={"80%"}
              results={results}
            />
            {showNext()}
          </View>
          <View style={{ height: 20 }} />
          {changeSprites(isShiny)}
        </View>
        <View style={styles.detailInfo}>
          <Text style={styles.gen}>{getGeneration(results)}</Text>
          <TypeDetail margin={13} detailFontSize={24} results={results} />
          <AbilityDetail
            navigation={props.navigation}
            margin={13}
            headerFontSize={28}
            detailFontSize={24}
            results={results}
          />
          <ModalBaseStats
            headerFontSize={28}
            detailFontSize={22}
            margin={13}
            results={results}
          />
          <SecondaryMovesDetail
            navigation={props.navigation}
            margin={13}
            results={results}
          />
          <VersionDetail margin={13} results={results} />
          <TouchableOpacity
            onPress={() => {
              getResultsFromUrl(results.location_area_encounters);
              if (urlResults !== null && urlResults !== undefined) {
                return props.navigation.navigate("LocationDetailModal", {
                  results: urlResults,
                });
              }
            }}
            style={styles.encounterContainer}
          >
            {isLocationAvailable()}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SecondaryDetailModal;
