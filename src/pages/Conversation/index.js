import React, {useEffect, useState, useContext} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {Message} from '~/components';

import {Store} from '~/store';
import {getConversationById} from '~/services/api';

import {EmptyText, EmptyView, Container} from './style';

const Conversation = ({navigation}) => {
  const {selectedUser} = useContext(Store);
  const [conversationList, setConversationList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function initialize() {
      setLoading(true);
      try {
        const {messages} = await getConversationById(selectedUser._id);
        setConversationList(messages);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    initialize();
  }, [selectedUser._id]);

  const handleReload = async () => {};

  return (
    <Container>
      <FlatList
        onRefresh={() => handleReload()}
        refreshing={loading}
        data={[...conversationList].reverse()}
        style={style.flex}
        inverted
        renderItem={({item}) => (
          <Message message={item} name={selectedUser.name} />
        )}
        keyExtractor={i => i._id}
        ListEmptyComponent={
          loading === false && (
            <EmptyView>
              <EmptyText>Não há mensagens.</EmptyText>
            </EmptyView>
          )
        }
        contentContainerStyle={style.contentContainerStyle}
      />
    </Container>
  );
};

const style = StyleSheet.create({
  flex: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingBottom: 10,
  },
});

export default Conversation;
