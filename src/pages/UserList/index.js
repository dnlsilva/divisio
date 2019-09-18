import React, {useEffect, useState, useContext} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {Store} from '~/store';
import {Card} from '~/components';
import {getConversation} from '~/services/api';

import {EmptyText, EmptyView, Container} from './style';

const UserList = ({navigation}) => {
  const {userName, setSelectedUser} = useContext(Store);
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function initialize() {
      const res = await getConversation();
      setConversation(res);
      setLoading(false);
    }
    initialize();
  }, []);

  const handleReload = async () => {
    setConversation([]);
    setLoading(true);
    try {
      const res = await getConversation();
      setConversation(res);
    } catch (error) {
      setConversation([]);
    }
    setLoading(false);
  };

  const handleSelectUser = user => {
    navigation.navigate('Conversation');
    setSelectedUser(user);
  };

  return (
    <Container>
      <EmptyText>{`Olá ${userName}`}</EmptyText>
      <FlatList
        onRefresh={() => handleReload()}
        refreshing={loading}
        data={conversation}
        style={style.flex}
        renderItem={({item}) => (
          <Card action={() => handleSelectUser(item)}>
            <EmptyText>{item.name}</EmptyText>
          </Card>
        )}
        keyExtractor={i => i._id}
        ListEmptyComponent={
          loading === false && (
            <EmptyView>
              <EmptyText>Não há nenhum usuario cadastrado.</EmptyText>
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

export default UserList;
