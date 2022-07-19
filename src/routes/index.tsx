import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./app.routes";
import Signin from "../screens/Signin";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
