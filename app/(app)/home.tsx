import { View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import ChatList from "../../components/chatList";
import { useAuth } from "../../context/authContext";
import { usersRef } from "../../firebaseConfig";
import { getDocs, query, where } from "firebase/firestore";

export default function Home() {
  const { user } = useAuth();
  const [users, setUsers] = useState([1, 2, 3, 4]);

  useEffect(() => {
    if (user.uid) {
      getUsers();
    }
  }, []);

  const getUsers = async () => {
    const q = query(usersRef, where(`uid`, "!=", user.uid));

    const querySnapshot = await getDocs(q);

    let data = [];

    querySnapshot.forEach((doc) => data.push({ ...doc.data() }));

    setUsers(data);
  };

  return (
    <View className="flex-1 bg-slate-900">
      {users.length > 0 ? (
        <ChatList users={users} />
      ) : (
        <View className="flex-1 justify-center">
          <ActivityIndicator size="large" color={"grey"} />
        </View>
      )}
    </View>
  );
}
