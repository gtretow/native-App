import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import AppRoutes from "./app.routes";
import Signin from "../screens/Signin";
import Loading from "../components/Loadings";

export default function Routes() {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState<FirebaseAuthTypes.User>();

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged((response) => {
      setUser(response);
      setLoading(false);
    });

    return subscriber;
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <Signin />}
    </NavigationContainer>
  );
}
