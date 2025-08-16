import { useState, useRef, useEffect } from "react"

export function ChatHandler() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const BOT_MESSAGES = {
  greeting: "Halo aku si VHSONEBOT!",
  askOne: "Ketik 1",
  thanksOne: "Terimakasih"
}

  const [messages, setMessages] = useState([
  {
    id: 1,
    text: BOT_MESSAGES.greeting,
    sender: "bot",
    timestamp: new Date(),
  },
])
  const [inputMessage, setInputMessage] = useState("")
  //const [isNotif, setIsNotif] = useState(0)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  //const handleNotif = (notif) => {
  //  setIsNotif(notif)
  //}

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isChatOpen) {
      document.body.classList.add("chat-opened")
    } else {
      document.body.classList.remove("chat-opened")
    }

    return () => {
      document.body.classList.remove("chat-opened")
    }
  }, [isChatOpen])

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }


  const sendMessage = async (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    const botText =
    inputMessage.trim() === "1"
      ? BOT_MESSAGES.thanksOne
      : BOT_MESSAGES.askOne

  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      },
    ])
    setIsTyping(false)
  }, 1500)
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return {
    isChatOpen,
    toggleChat,
    messages,
    isTyping,
    messagesEndRef,
    setInputMessage,
    inputMessage,
    sendMessage,
    formatTime
  }
}
