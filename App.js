
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import {DATA} from './Data';
import Row from './components/Row';
import { useEffect, useState } from 'react';
import Search from './components/Search';

export default function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(DATA);
  }, [])

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  }

  
  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data = {items}
        renderItem = {renderItem}
      ></FlatList>
    </SafeAreaView>
  );
}

const renderItem = ({item}) => {
  return <Row person={item} />;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
