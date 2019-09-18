import React, {useRef, useContext} from 'react';
import {Image, Alert} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {logo} from '~/assets';
import {Store} from '~/store';

import {
  Container,
  SendButton,
  Input,
  Divisory,
  TextError,
  TextLabel,
  ButtonContainer,
} from './styles';

const UsuarioSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Nome muito curto!')
    .max(50, 'Nome muito longo!')
    .required('Campo requirido'),
});

const Home = ({navigation}) => {
  const inputSend = useRef();
  const {setUserName} = useContext(Store);
  const setUser = async ({name}) => {
    try {
      setUserName(name);
      navigation.navigate('UserList');
    } catch (error) {
      Alert.alert('Houve um erro, tente novamente.');
    }
  };

  return (
    <Container>
      <Formik
        initialValues={{name: ''}}
        validationSchema={UsuarioSchema}
        onSubmit={values => setUser(values)}>
        {props => (
          <>
            <Divisory>
              <Image source={logo} />
            </Divisory>
            <Divisory>
              <TextLabel>Digite seu nome:</TextLabel>
              <Input
                onSubmitEditing={props.handleSubmit}
                onChangeText={props.handleChange('name')}
              />
              {props.errors.name && props.touched.name && (
                <TextError>{props.errors.name}</TextError>
              )}
              <ButtonContainer>
                <SendButton
                  ref={inputSend}
                  onPress={props.handleSubmit}
                  title="Salvar"
                />
              </ButtonContainer>
            </Divisory>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default Home;
