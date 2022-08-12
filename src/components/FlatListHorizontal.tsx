import React from 'react';
import {
  Image,
  FlatList,
} from 'react-native';

export const FlatListHorizontal = ({ data }) => {
  const styles = {
    imageStyle: {
      height: 200,
      width: 200,
      margin: 10,
    },
  };

  const SmallImage = ({item}) => {
    return (
      <Image
        style={styles.imageStyle}
        source={{
          uri: item.download_url,
        }}
      />
    );
  };

  const renderItem = ({item}) => <SmallImage item={item} />;

  return (
    <FlatList
      data={data}
      horizontal
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};
