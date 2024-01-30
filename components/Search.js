import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function Search({executeSearch}){
    const [search, setSearch] = useState('');

    return(
        <View style={styles.searchbox}>
            <TextInput 
                value={search}
                onChangeText={text => setSearch(text)}
                placeholder="Search..."
                returnKeyType="search"
                onSubmitEditing={() => executeSearch(search)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchbox: {
      marginBottom: 20,
      borderColor: '#333',
      borderWidth: 1,
      borderRadius: 3,
      padding: 5,
      width: 200,
    },
  });