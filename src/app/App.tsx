// Importação Padrão do React e React Native
import { useState } from "react"; // Hook do React para gerenciar estado
import { View, Text, StyleSheet } from "react-native"; // Componentes do React Native para construção da interface

// Importação dos componentes
import ShoppingList from "../components/ShoppingList"; // Componente para exibir a lista de compras
import AddItemForm from "../components/AddItemForm"; // Componente para adicionar novos itens à lista

// Tipagem dos dados
interface Item {
  id: string; // Identificador único para cada item
  name: string; // Nome do item
  bought: boolean; // Status indicando se o item foi comprado
}

export default function App() {
  // Estado que armazena a lista de itens, inicializado como um array vazio
  const [items, setItems] = useState<Item[]>([]);

  return (
    <View style={styles.container}>
      {/* Título da aplicação */}
      <Text style={styles.title}>Lista de Compras</Text>

      {/* Formulário para adicionar novos itens à lista */}
      <AddItemForm setItems={setItems} />

      {/* Componente que exibe a lista de itens */}
      <ShoppingList items={items} setItems={setItems} />
    </View>
  );
}

// Estilos para os componentes da aplicação
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    backgroundColor: '#fff', // Cor de fundo branca
    justifyContent: 'center', // Centraliza os itens verticalmente
    alignItems: 'center', // Centraliza os itens horizontalmente
  },
  title: {
    fontSize: 24, // Tamanho da fonte do título
    fontWeight: 'bold', // Negrito no título
  },
});