"use client";

import React, { useEffect, useState } from "react";
import fireStore from "@/lib/firestore";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { GoHeartFill } from "react-icons/go";

interface MessageProps {
  id: string;
  name: string;
  message: string;
  createdAt: string;
  theme: string;
}

interface NewMessageProps {
  name: string;
  message: string;
  theme: string;
}

const GuestBook = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [newMessage, setNewMessage] = useState<NewMessageProps>({
    name: "",
    message: "",
    theme: "default",
  });

  useEffect(() => {
    const q = query(
      collection(fireStore, "guestbook"),
      orderBy("createdAt", "desc")
    );

    // 실시간 반영을 위해 snapshot 메서드 사용
    const unsub = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<MessageProps, "id">),
      }));
      setMessages(messages);
    });

    return () => unsub();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newMessage.message) return;

    const messageToSubmit = {
      ...newMessage,
      name: newMessage.name === "" ? "익명" : newMessage.name,
      createdAt: new Date().toISOString(),
      theme: newMessage.theme,
    };

    try {
      await addDoc(collection(fireStore, "guestbook"), messageToSubmit);
      setNewMessage({ name: "", message: "", theme: "default" });
    } catch (error) {
      console.log(error);
    }
  };

  // theme colors
  const themeColors: Record<string, string> = {
    gray: "#A6AEBF",
    skyblue: "#C5D3E8",
    green: "#D0E8C5",
    yellow: "#FFF8DE",
    lightsand: "#F0EBE3",
    babypink: "#F3D0D7",
    lightpink: "#FFEFEF",
    default: "#E5E7EB",
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#30B0C7] mb-1">GUESTBOOK</h1>
        <p className="text-gray-400 mb-8 text-sm text-themeText-guide">
          Total: {messages.length}
        </p>

        {/* input form */}
        <form
          onSubmit={handleSubmit}
          className="border-4 p-6 rounded-lg shadow-lg mb-8"
          style={{
            borderColor: themeColors[newMessage.theme],
          }}
        >
          <div className="flex flex-row justify-between mb-4">
            <div className="flex flex-row w-[88%] items-center justify-between">
              <input
                type="text"
                placeholder="이름 (선택)"
                value={newMessage.name}
                onChange={(e) =>
                  setNewMessage((prev) => ({ ...prev, name: e.target.value }))
                }
                className="px-4 py-1.5 rounded text-themeText text-sm border border-themeText-border w-32 md:w-40 focus:outline-none focus:border-[#30B0C7]"
              />
              <div className="flex flex-row gap-1 sm:gap-2">
                {Object.entries(themeColors).map((theme) => (
                  <button
                    key={theme[0]}
                    type="button"
                    onClick={() =>
                      setNewMessage((prev) => ({ ...prev, theme: theme[0] }))
                    }
                  >
                    <GoHeartFill className="md:text-xl" color={theme[1]} />
                  </button>
                ))}
              </div>
            </div>
            <div className="px-2 py-1.5 w-[10%]"></div>
          </div>
          <div className="flex flex-row justify-between">
            <input
              placeholder="메시지를 입력하세요"
              value={newMessage.message}
              onChange={(e) =>
                setNewMessage((prev) => ({ ...prev, message: e.target.value }))
              }
              className="px-4 py-1.5 w-[88%] rounded text-themeText text-sm border border-themeText-border focus:outline-none focus:border-[#30B0C7]"
            />
            <button className="px-2 py-1.5  min-w-[36px] w-auto sm:w-[10%] border border-themeText-border text-themeText  text-xs sm:text-sm rounded whitespace-nowrap">
              게시
            </button>
          </div>
        </form>

        {/* message list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className="relative p-6 mb-2 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300"
              style={{
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
                backgroundColor: themeColors[message.theme],
              }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 w-16 h-8 opacity-50"></div>
              <div className="text-gray-800 flex flex-col gap-2">
                <p className="font-semibold text-sm mb-2">{message.name}</p>
                <p className="line-clamp-5 text-[#374151] h-32">
                  {message.message}
                </p>
                <p className="text-gray-500 text-xs">
                  {new Date(message.createdAt)
                    .toLocaleDateString("ko-KR", {
                      year: "2-digit",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .slice(0, 6)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestBook;
