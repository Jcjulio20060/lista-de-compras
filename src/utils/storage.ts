import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToStorage = async (items: any[]) => {
  await AsyncStorage.setItem("shoppingList", JSON.stringify(items));
};

export const loadFromStorage = async () => {
  const data = await AsyncStorage.getItem("shoppingList");
  return data ? JSON.parse(data) : [];
};