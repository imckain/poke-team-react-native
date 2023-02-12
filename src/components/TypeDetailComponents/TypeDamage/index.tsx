import React, { useCallback, useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import { styles } from "./styles";
import { useGetResultsFromUrl } from "../../../hooks/useGetResultsFromUrl";
import { checkType } from "../../../functions/checkType";
import { Entypo } from "@expo/vector-icons";

type Props = {
  results: any;
  navigation: any;
};

const TypeDamage = ({ results, navigation }: Props) => {
  const [getResultsFromUrl, urlResults] = useGetResultsFromUrl();
  const [collapsed, setCollapsed] = useState(false);
  const [dblDmgToCollapsed, setDblDmgToCollapsed] = useState(true);
  const [halfDmgToCollapsed, setHalfDmgToCollapsed] = useState(true);
  const [noDmgToCollapsed, setNoDmgToCollapsed] = useState(true);
  const [dblDmgFrmCollapsed, setDblDmgFrmCollapsed] = useState(true);
  const [halfDmgFrmCollapsed, setHalfDmgFrmCollapsed] = useState(true);
  const [noDmgFrmCollapsed, setNoDmgFrmCollapsed] = useState(true);

  const checkForCollapse = useCallback((el) => {
    if (el === true) {
      return (
        <TouchableOpacity
          style={styles.headerWrapper}
          onPress={() => setCollapsed(false)}
        >
          <Text allowFontScaling={false} style={[styles.headerText]}>
            Damage Multipliers
          </Text>
          <Entypo name="plus" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      );
    }
    if (el === false) {
      return (
        <TouchableOpacity
          style={styles.headerWrapper}
          onPress={() => setCollapsed(true)}
        >
          <Text allowFontScaling={false} style={[styles.headerText]}>
            Damage Multipliers
          </Text>
          <Entypo name="minus" size={32} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      );
    }
  }, []);

  const checkForCollapseOnMultipliers = useCallback((el, fn, dmg) => {
    if (el === true) {
      return (
        <TouchableOpacity
          style={styles.headerWrapper}
          onPress={() => fn(false)}
        >
          <Text allowFontScaling={false} style={styles.dmgCaseHeader}>
            {dmg}
          </Text>
          <Entypo name="plus" size={24} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      );
    }
    if (el === false) {
      return (
        <TouchableOpacity style={styles.headerWrapper} onPress={() => fn(true)}>
          <Text allowFontScaling={false} style={styles.dmgCaseHeader}>
            {dmg}
          </Text>
          <Entypo name="minus" size={24} color="rgba(255, 255, 255, 0.5)" />
        </TouchableOpacity>
      );
    }
  }, []);

  const showType = (el) => {
    const typeBox = el.map((item) => {
      return (
        <View
          key={item.name}
          style={[styles.typeBox, { backgroundColor: checkType(item.name) }]}
        >
          <TouchableOpacity
            onPress={() => {
              getResultsFromUrl(item.url);
            }}
          >
            <Text allowFontScaling={false} style={[styles.typeText]}>
              {item.name + " "}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });

    return typeBox;
  };

  const doubleDmgTo = (el) => {
    return showType(el.damage_relations.double_damage_to);
  };

  const halfDmgTo = (el) => {
    return showType(el.damage_relations.half_damage_to);
  };

  const noDmgTo = (el) => {
    return showType(el.damage_relations.half_damage_to);
  };

  const doubleDmgFrom = (el) => {
    return showType(el.damage_relations.double_damage_from);
  };

  const halfDmgFrom = (el) => {
    return showType(el.damage_relations.half_damage_from);
  };

  const noDmgFrom = (el) => {
    return showType(el.damage_relations.half_damage_from);
  };

  useEffect(() => {
    if (urlResults !== null && urlResults !== undefined) {
      return navigation.navigate("TypeDetailModal", {
        results: urlResults,
      });
    }
  }, [urlResults]);

  return (
    <View style={[styles.container]}>
      {checkForCollapse(collapsed)}
      <Collapsible collapsed={collapsed}>
        <View style={styles.scrollViewStyle}>
          <View style={styles.damageContainer}>
            <View style={styles.dmgCaseView}>
              {checkForCollapseOnMultipliers(
                dblDmgToCollapsed,
                setDblDmgToCollapsed,
                "2x Damage To:"
              )}
              <Collapsible collapsed={dblDmgToCollapsed}>
                <View style={styles.dmgResultsContainer}>
                  {doubleDmgTo(results)}
                </View>
              </Collapsible>
            </View>
            <View style={styles.dmgCaseView}>
              {checkForCollapseOnMultipliers(
                halfDmgToCollapsed,
                setHalfDmgToCollapsed,
                "0.5x Damage To:"
              )}
              <Collapsible collapsed={halfDmgToCollapsed}>
                <View style={styles.dmgResultsContainer}>
                  {halfDmgTo(results)}
                </View>
              </Collapsible>
            </View>
            <View style={styles.dmgCaseView}>
              {checkForCollapseOnMultipliers(
                noDmgToCollapsed,
                setNoDmgToCollapsed,
                "0x Damage To:"
              )}
              <Collapsible collapsed={noDmgToCollapsed}>
                <View style={styles.dmgResultsContainer}>
                  {noDmgTo(results)}
                </View>
              </Collapsible>
            </View>
            <View style={styles.dmgCaseView}>
              {checkForCollapseOnMultipliers(
                dblDmgFrmCollapsed,
                setDblDmgFrmCollapsed,
                "2x Damage From:"
              )}
              <Collapsible collapsed={dblDmgFrmCollapsed}>
                <View style={styles.dmgResultsContainer}>
                  {doubleDmgFrom(results)}
                </View>
              </Collapsible>
            </View>
            <View style={styles.dmgCaseView}>
              {checkForCollapseOnMultipliers(
                halfDmgFrmCollapsed,
                setHalfDmgFrmCollapsed,
                "0.5x Damage From:"
              )}
              <Collapsible collapsed={halfDmgFrmCollapsed}>
                <View style={styles.dmgResultsContainer}>
                  {halfDmgFrom(results)}
                </View>
              </Collapsible>
            </View>
            <View style={styles.dmgCaseView}>
              {checkForCollapseOnMultipliers(
                noDmgFrmCollapsed,
                setNoDmgFrmCollapsed,
                "0x Damage From:"
              )}
              <Collapsible collapsed={noDmgFrmCollapsed}>
                <View style={styles.dmgResultsContainer}>
                  {noDmgFrom(results)}
                </View>
              </Collapsible>
            </View>
          </View>
        </View>
      </Collapsible>
    </View>
  );
};

export default TypeDamage;
