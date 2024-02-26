import { View, TouchableOpacity, TextInput, Alert } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import ChatRoomHeader from "../../components/chatRoomHeader";
import { StatusBar } from "expo-status-bar";
import MessageList from "../../components/MessageList";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Octicons } from "@expo/vector-icons";
import { useAuth } from "../../context/authContext";
import { getRoomId } from "../../utils/commons";
import { db } from "../../firebaseConfig";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";

export default function ChatRoom() {
  const item = useLocalSearchParams();
  const router = useRouter();
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const textRef = useRef("");
  const inputRef = useRef(null);

  useEffect(() => {
    createRoomIfNotExists();
    let roomId = getRoomId(user.uid, item.uid);
    const docRef = doc(db, "rooms", roomId);
    const messagesRef = collection(docRef, "messages");
    const q = query(messagesRef, orderBy("createdAt", "asc"));

    let unsub = onSnapshot(q, (snapshot) => {
      let allMessages = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setMessages([...allMessages]);
    });

    return unsub;
  }, []);

  const createRoomIfNotExists = async () => {
    let roomId = getRoomId(user.uid, item.uid);

    await setDoc(doc(db, "rooms", roomId), {
      roomId,
      createdAt: Timestamp.fromDate(new Date()),
    });
  };

  const handleSendMessage = async () => {
    let message = textRef.current.trim();
    if (!message) return;
    try {
      let roomId = getRoomId(user.uid, item.uid);

      const docRef = doc(db, "rooms", roomId);
      const messagesRef = collection(docRef, "messages");
      textRef.current = "";
      if (inputRef) inputRef.current.clear();
      const newMessage = await addDoc(messagesRef, {
        userId: user.uid,
        text: message,
        profileUrl: user.profileUrl,
        senderName: user.username,
        createdAt: Timestamp.fromDate(new Date()),
      });

      console.log("message", newMessage);
    } catch (error) {
      Alert.alert("message", error.message);
    }
  };

  console.log("messages", messages);

  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <ChatRoomHeader user={item} router={router} />
      <View className="flex-1">
        <View className="flex-1">
          <MessageList messages={messages} />
        </View>
        <View
          className="w-full bg-white flex-row justify-between items-center"
          style={{ height: hp(7), paddingHorizontal: wp(4) }}
        >
          <TextInput
            ref={inputRef}
            onChangeText={(value) => (textRef.current = value)}
            placeholder="Message"
            style={{ fontSize: hp(2) }}
            className="flex-1 mr-2 h-full"
          />
          <TouchableOpacity onPress={handleSendMessage}>
            <Octicons name="paper-airplane" size={hp(2.7)} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
