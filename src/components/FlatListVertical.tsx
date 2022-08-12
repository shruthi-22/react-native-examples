import React from 'react';
import {
  TouchableOpacity,
  Button,
  Image,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import {Modal} from './Modal';

const styles = StyleSheet.create({
  item: {
    padding: 20,
  },
  imageStyle: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
});

export const FlatListVertical = ({data}) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [activeImageUrl, setActiveImageUrl] = React.useState(null);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const renderItem = ({item}) => <ImageCard item={item} />;

  const Item = ({downloadUrl}) => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: downloadUrl,
          }}
        />
      </View>
    );
  };

  const ImageCard = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setIsModalVisible(true);
          setActiveImageUrl(item.download_url);
        }}>
        <View>
          <Card style={{margin: 10, alignItems: 'center'}}>
            <Item downloadUrl={item.download_url} />
          </Card>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <MyModal
        activeImageUrl={activeImageUrl}
        isModalVisible={isModalVisible}
        handleModal={handleModal}
      />
    </View>
  );
};

const MyModal = ({activeImageUrl, isModalVisible, handleModal}) => {
  return (
    <Modal
      style={{alignItems: 'center'}}
      isVisible={isModalVisible}
      onBackdropPress={isModalVisible ? handleModal : undefined}>
      <Modal.Container>
        <Modal.Header title="LogRocket is fab!" />
        <Modal.Body>
          <Image
            style={{height: 330, width: 330, margin: 10}}
            source={{
              uri: activeImageUrl,
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button title="Close" onPress={handleModal} />
        </Modal.Footer>
      </Modal.Container>
    </Modal>
  );
};
