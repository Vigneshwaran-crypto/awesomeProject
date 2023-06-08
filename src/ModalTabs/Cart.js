import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useQueries, useQuery} from 'react-query';
import {LOG} from '../Common/utils';
import {fetchPosts} from '../ReactQuery/ReactQueries';

const Cart = () => {
  const [post, setPost] = useState([]);
  const {isLoading, isError, data, error} = useQuery('posts', fetchPosts);

  LOG("data's in cart from fetch :", data);

  return (
    <View style={styles.container}>
      {data ? (
        <ScrollView>
          {data.map((val, i) => (
            <Text key={i}>{val.name}</Text>
          ))}
        </ScrollView>
      ) : (
        <Text>No Values Found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});

export default Cart;
