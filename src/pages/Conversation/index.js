import React, {useEffect, useState, useContext} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {Store} from '~/store';
import {getConversationById} from '~/services/api';

import {Message, MessageInput} from '~/components';
import {EmptyText, EmptyView, Container} from './style';

import {getData, storeData} from '~/helpers/asyncStorage';

const Conversation = () => {
  const {selectedUser} = useContext(Store);

  const [conversationList, setConversationList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messageText, setMessageText] = useState('');
  const [sending, setSending] = useState(false);

  useEffect(() => {
    async function initialize() {
      setLoading(true);
      try {
        const {messages} = await getConversationById(selectedUser._id);
        const async = await getData(`conversation/${selectedUser._id}`);
        let itens = [];
        messages && messages.length && (await messages.map(i => itens.push(i)));
        async && async.length && (await async.map(i => itens.push(i)));
        setConversationList(itens);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    initialize();
  }, [selectedUser._id]);

  const handleReload = async () => {};

  const handleSend = async () => {
    setSending(true);
    const data = {
      _id: Math.round(Math.random() * 36 ** 12).toString(36),
      value: messageText,
      direction: 'outgoing',
      conversation: conversationList.length
        ? conversationList[0].conversation
        : Math.round(Math.random() * 36 ** 12).toString(36),
      __v: 0,
    };
    setConversationList([...conversationList, data]);
    setMessageText('');
    await storeData(`conversation/${selectedUser._id}`, data);
    setSending(false);
  };

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
      <MessageInput
        text={messageText}
        textCallback={i => setMessageText(i)}
        sending={sending}
        sendCallback={() => handleSend()}
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
