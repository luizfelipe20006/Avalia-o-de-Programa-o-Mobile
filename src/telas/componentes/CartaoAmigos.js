import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CartaoAmigo from './CartaoAmigo';
import amigos from '../data/amigosMocks'; // Importa os dados dos amigos

const ListaAmigos = () => {
  const renderItem = ({ item }) => (
    <CartaoAmigo amigo={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={amigos} // Usa os dados importados
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum amigo encontrado.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#888',
  },
});

export default ListaAmigos;