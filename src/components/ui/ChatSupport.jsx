import { useState } from 'react'
import { Bot } from "lucide-react"
import { useEffect } from 'react'

export default function ChatSupport() {
    const [isChatOpen, setIsChatOpen] = useState(false)

    const toggleChat = (toggle) => {
      return setIsChatOpen(toggle)
    }

    useEffect(() => {
        if (isChatOpen) {
            document.body.classList.add('chat-opened')
        } else {
            document.body.classList.remove('chat-opened')
        }

        return () => {
            document.body.classList.remove('chat-opened')
        } 
    }, [isChatOpen])

    return (
        <div className=''>

        </div>
    )
}