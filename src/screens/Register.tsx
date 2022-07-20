import * as React from "react";
import { VStack } from "native-base";
import { Alert } from "react-native";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import fireStore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [patrimony, setPatrimony] = React.useState("");
  const [description, setDescription] = React.useState("");

  const navigation = useNavigation();

  function handleNewOrder() {
    if (!patrimony || !description) {
      return Alert.alert("Register", "Preencha todos os campos.");
    }

    setIsLoading(true);
    fireStore()
      .collection("orders")
      .add({
        patrimony,
        description,
        status: "open",
        created_at: fireStore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        Alert.alert("Solicitação", "Solicitação registrada com sucesso.");
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        return Alert.alert(
          "solicitação",
          "Não foi possível registrar o pedido."
        );
      });
  }

  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Nova solicitação" />
      <Input
        onChangeText={setPatrimony}
        placeholder="Número do patrimônio"
        mt={4}
      />
      <Input
        placeholder="Descrição do problema"
        flex={1}
        mt={5}
        multiline
        textAlignVertical="top"
        onChangeText={setDescription}
      />
      <Button
        isLoading={isLoading}
        onPress={handleNewOrder}
        title="Cadastrar"
        mt={5}
      />
    </VStack>
  );
}
