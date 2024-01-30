import React from "react";
import { Text } from "react-native";

export default function Row(props){
    return(
        <Text>{props.person.firstname + ', ' + props.person.lastname}</Text>
    );
}