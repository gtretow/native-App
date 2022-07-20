import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export default function dateformat(
  timeStamp: FirebaseFirestoreTypes.Timestamp
) {
  if (timeStamp) {
    const date = new Date(timeStamp.toDate());

    const day = date.toLocaleDateString("pt-BR");
    const hour = date.toLocaleTimeString("pt-BR");

    return `${day} às ${hour}`;
  }
}
