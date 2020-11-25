import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { useNavigation } from "@react-navigation/native";

// import { Button } from "../../components";
import I18n from "../../I18n";
import styles from "./styles";
import { getPlaceholder } from "../../redux/actions";
import { Reducers } from "../../redux/types";

// const DATA = {
//   text:
//     "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
// };

const Component = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { placeholderState } = useSelector(
    (state: Reducers) => ({
      placeholderState: state.placeholder,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getPlaceholder());
  }, [dispatch]);

  const _renderItem = ({ item }: any) => (
    <View style={styles.row}>
      <Text>{item.title}</Text>
    </View>
  );

  const _renderEmptyItem = () => (
    <View style={styles.wrapEmptyData}>
      <Text>{I18n.t("empty")}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>nifty</Text>
      {/* <Text style={styles.text}>{DATA.text}</Text>
      <Button to={() => navigation.navigate("Splash2")} style={[styles.button]}>
        Get Started
      </Button> */}
      {/* <Button to={() => navigation.navigate("Splash2")} style={[styles.button]}>
        Get Started
      </Button> */}

      <FlatList
        keyboardShouldPersistTaps="handled"
        data={placeholderState.listPlaceholder}
        extraData={I18n.t("empty")}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItem}
        ListEmptyComponent={_renderEmptyItem}
      />
    </View>
  );
};

export default Component;
