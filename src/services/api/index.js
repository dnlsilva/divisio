import axios from 'axios';

const api = axios.create({
  baseURL: 'https://webchatapi.herokuapp.com/',
});

const getConversation = async () => {
  try {
    const {data} = await api('conversation');
    return data;
  } catch (error) {
    return error;
  }
};

const getConversationById = async id => {
  try {
    const conversation = await api(`conversation/${id}`);
    return conversation;
  } catch (error) {
    return error;
  }
};

export {getConversation, getConversationById};
