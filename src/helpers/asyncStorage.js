import AsyncStorage from '@react-native-community/async-storage';

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(`@${key}`);
    if (value !== null) {
      const data = JSON.parse(value);
      return data.length ? data : [data];
    }
  } catch (e) {
    return e;
  }
};

export const storeData = async (key, data) => {
  let itens = data;
  try {
    const oldItens = await getData(key);
    if (oldItens) {
      itens = oldItens.length > 1 ? [...oldItens, data] : [oldItens, data];
    }
    await AsyncStorage.setItem(`@${key}`, JSON.stringify(itens));
    return;
  } catch (e) {
    return e;
  }
};
