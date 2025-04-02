import { useState } from "react"; 
// Importa o hook useState do React para gerenciar o estado local do componente.

import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from "react-native"; 
// Importa componentes e utilitários do React Native para criar a interface do usuário.

import "react-native-get-random-values"; 
// Importa uma biblioteca para garantir que valores aleatórios sejam gerados corretamente em dispositivos móveis.

interface Item {
  id: string;
  name: string;
  bought: boolean;
}
// Define uma interface TypeScript para representar um item, com um ID único, nome e status de compra.

export default function AddItemForm({ setItems }: { setItems: React.Dispatch<React.SetStateAction<Item[]>> }) {
  // Define o componente funcional `AddItemForm` que recebe `setItems` como prop para atualizar a lista de itens.

  const [itemName, setItemName] = useState(""); 
  // Define um estado local `itemName` para armazenar o nome do item que o usuário está digitando.

  const addItem = () => {
    // Função chamada ao adicionar um novo item.

    if (itemName.trim() === "") {
      // Verifica se o nome do item está vazio ou contém apenas espaços.
      Alert.alert("Erro", "O nome do item não pode estar vazio."); 
      // Exibe um alerta informando que o nome do item é obrigatório.
      return; 
      // Interrompe a execução da função.
    }

    const uniqueId = Date.now().toString(); 
    // Gera um ID único para o item usando o timestamp atual.

    setItems(prevItems => [...prevItems, { id: uniqueId, name: itemName.trim(), bought: false }]); 
    // Atualiza a lista de itens adicionando um novo item com o ID gerado, o nome fornecido e o status `bought` como `false`.

    setItemName(""); 
    // Limpa o campo de entrada após adicionar o item.
  };

  return (
    <View style={styles.container}>
      {/* Contêiner principal do formulário com estilos aplicados. */}
      <Text style={styles.title}>Adicionar Novo Item</Text>
      {/* Título do formulário. */}
      <TextInput
        value={itemName}
        onChangeText={setItemName}
        placeholder="Digite o nome do item"
        placeholderTextColor="#aaa"
        style={styles.input}
      />
      {/* Campo de entrada de texto para o nome do item. */}
      <TouchableOpacity style={styles.btn} onPress={addItem}>
        <Text style={styles.btnText}>Adicionar</Text>
      </TouchableOpacity>
      {/* Botão que chama a função `addItem` ao ser pressionado. */}
    </View>
  );
}

const styles = StyleSheet.create({
  // Define os estilos do componente usando StyleSheet do React Native.

  container: {
    marginTop: 20, // Margem superior.
    padding: 20, // Espaçamento interno.
    backgroundColor: '#f9f9f9', // Cor de fundo.
    borderRadius: 10, // Bordas arredondadas.
    shadowColor: '#000', // Cor da sombra.
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra.
    shadowOpacity: 0.2, // Opacidade da sombra.
    shadowRadius: 4, // Raio da sombra.
    elevation: 5, // Elevação para sombra no Android.
    width: '90%', // Largura relativa à tela.
    alignSelf: 'center', // Centraliza o contêiner horizontalmente.
  },
  title: {
    fontSize: 18, // Tamanho da fonte.
    fontWeight: 'bold', // Negrito.
    marginBottom: 10, // Margem inferior.
    color: '#333', // Cor do texto.
    textAlign: 'center', // Centraliza o texto.
  },
  input: {
    borderWidth: 1, // Largura da borda.
    borderColor: '#ccc', // Cor da borda.
    padding: 10, // Espaçamento interno.
    marginBottom: 15, // Margem inferior.
    borderRadius: 8, // Bordas arredondadas.
    backgroundColor: '#fff', // Cor de fundo.
    fontSize: 16, // Tamanho da fonte.
  },
  btn: {
    backgroundColor: '#4CAF50', // Cor de fundo do botão.
    padding: 12, // Espaçamento interno.
    borderRadius: 8, // Bordas arredondadas.
    alignItems: 'center', // Centraliza o texto no botão.
  },
  btnText: {
    color: '#fff', // Cor do texto do botão.
    fontWeight: 'bold', // Negrito.
    fontSize: 16, // Tamanho da fonte.
  },
});