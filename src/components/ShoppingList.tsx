import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
// Importa os componentes necessários do React Native.

interface Item {
    id: string;
    name: string;
    bought: boolean;
}
// Define a interface `Item` que representa um item da lista de compras.

interface ShoppingListProps {
    items: Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}
// Define a interface `ShoppingListProps` que especifica as props esperadas pelo componente `ShoppingList`.

export default function ShoppingList({ items, setItems }: ShoppingListProps) {
    // Define o componente funcional `ShoppingList` que recebe `items` e `setItems` como props.

    const toggleItem = (id: string) => {
        // Função para alternar o estado de "bought" de um item com base no `id`.
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, bought: !item.bought } : item
                // Se o `id` do item corresponder, altera o estado de `bought`; caso contrário, mantém o item inalterado.
            )
        );
    };

    return (
        <View style={styles.container}>
            {/* Renderiza a lista de itens dentro de um contêiner. */}
            {items.map(item => (
                // Itera sobre os itens e renderiza cada um deles.
                <View key={item.id} style={[styles.item, item.bought && styles.itemBought]}>
                    {/* Define o estilo do item, aplicando um estilo adicional se ele estiver marcado como "bought". */}
                    <Text style={[styles.itemText, item.bought && styles.itemTextBought]}>
                        {/* Exibe o nome do item, aplicando um estilo adicional se ele estiver marcado como "bought". */}
                        {item.name}
                    </Text>
                    <TouchableOpacity style={styles.toggleButton} onPress={() => toggleItem(item.id)}>
                        {/* Botão para alternar o estado de "bought" do item. */}
                        <Text style={styles.toggleButtonText}>{item.bought ? "Desmarcar" : "✔"}</Text>
                        {/* Exibe "Desmarcar" se o item estiver comprado, caso contrário, exibe "✔". */}
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    // Define os estilos para os componentes do componente `ShoppingList`.

    container: {
        marginTop: 20,
        paddingHorizontal: 20,
        width: '100%',
        // Estilo do contêiner principal da lista.
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        // Estilo padrão de cada item da lista.
    },
    itemBought: {
        backgroundColor: "#e0ffe0",
        borderColor: "#4CAF50",
        // Estilo adicional para itens marcados como "bought".
    },
    itemText: {
        fontSize: 16,
        color: "#333",
        // Estilo do texto de cada item.
    },
    itemTextBought: {
        textDecorationLine: "line-through",
        color: "#888",
        // Estilo adicional para o texto de itens marcados como "bought".
    },
    toggleButton: {
        backgroundColor: "#4CAF50",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        // Estilo do botão de alternância.
    },
    toggleButtonText: {
        color: "#fff",
        fontWeight: "bold",
        // Estilo do texto dentro do botão de alternância.
    },
});