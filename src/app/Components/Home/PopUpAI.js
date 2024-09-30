'use client'

import { useState, useRef, useEffect } from 'react'
import { IconButton, Button, TextField, Box, Typography } from '@mui/material'
import { MessageCircle, X, Bot } from "lucide-react"
import axios from 'axios'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { toast, Flip } from 'react-toastify'
import cookies from 'js-cookie'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Image from 'next/image'

export default function AIChatPopup() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')
    const [defaultMessage, setDefaultMessage] = useState('Dữ liệu không có thông tin về câu hỏi của bạn.')
    const [data, setData] = useState('')
    const scrollAreaRef = useRef(null)

    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
        }
    }, [messages])

    const fetchData = async () => {
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${cookies.get('jwt')}`
            const response = await axios.get('https://data.thaimau.vn/api/ai-data-texts')
            const data1 = response.data.data.map((item) => ({ id: item.id, text: item.content, topic: item.topic }))
            const concatenatedData = data1.map((item) => item.text).join(' ], [')
            setData(concatenatedData)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSend = async () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, isUser: true }])
            setInput("")
            const apiKey = process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY // Thay thế bằng API key của bạn
            const genAI = new GoogleGenerativeAI(apiKey)
            const model = genAI.getGenerativeModel({
                model: "gemini-1.5-pro"
            })
            let botResponse = ""
            setMessages(prev => [...prev, { text: botResponse, isUser: false }])
            try {
                const result = await model.generateContentStream(
                    "Bắt buộc dựa vào dữ liệu này data: " +
                    `[${data}]` +
                    ". Nếu câu hỏi nằm ngoài phạm vi của dữ liệu hoặc không liên quan đến dữ liệu đã cung cấp hoặc data là không có gì thì bắt buộc phải trả về kết quả theo format này " +
                    `${defaultMessage}` +
                    " và không được giải thích gì thêm cả. Còn nếu câu hỏi có bất kỳ từ khóa nào liên quan đến dữ liệu thì nhất định phải trả lời dựa trên dữ liệu đó. " +
                    " câu hỏi như sau " +
                    input +
                    " . Nếu câu hỏi nằm ngoài phạm vi của dữ liệu hoặc không liên quan đến dữ liệu đã cung cấp hoặc data là không có gì thì bắt buộc phải trả về kết quả theo format này " +
                    `${defaultMessage}` +
                    " và không được giải thích gì thêm cả. Còn nếu câu hỏi có bất kỳ từ khóa nào liên quan đến dữ liệu thì nhất định phải trả lời dựa trên dữ liệu đó. "
                )
                for await (const chunk of result.stream) {
                    const chunkText = chunk.text()
                    botResponse += chunkText
                    setMessages(prevMessages => {
                        const updatedMessages = [...prevMessages]
                        updatedMessages[updatedMessages.length - 1].text = botResponse
                        return updatedMessages
                    })
                }
            } catch (error) {
                if (error === "Resource has been exhausted") {
                    toast.error("API quota exceeded. Please try again later.", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        transition: Flip
                    })
                } else {
                    toast.error("An error occurred. Please try again.", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        transition: Flip
                    })
                }
            }
        }
    }

    return (
        <>
            <IconButton
                style={{ position: 'fixed', bottom: '16px', right: '16px', padding: '16px', borderRadius: '50%', backgroundColor: '#B1D3D2', boxShadow: '0px 0px 10px 1px' }}
                onClick={() => setIsOpen(true)}
            >
                <Image src="/logo-dondon-footer.png" alt="logo" width={50} height={50} />
            </IconButton>

            {isOpen && (
                <Box
                    style={{ position: 'fixed', bottom: '16px', right: '16px', width: '384px', height: '600px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0px 0px 10px 1px', display: 'flex', flexDirection: 'column', zIndex: 999 }}
                >
                    <Box
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderBottom: '1px solid #ddd', backgroundColor: '#B1D3D2', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                    >
                        <Typography variant="h6">Chat với DONDON AI</Typography>
                        <IconButton onClick={() => setIsOpen(false)}>
                            <X className="h-4 w-4" />
                        </IconButton>
                    </Box>

                    <Box style={{ padding: '16px', flex: 1, overflowY: 'auto' }} ref={scrollAreaRef}>
                        {messages.map((message, index) => (
                            <Box
                                key={index}
                                style={{
                                    marginBottom: '16px',
                                    textAlign: message.isUser ? 'right' : 'left',
                                }}
                            >
                                <Box
                                    style={{
                                        display: 'inline-block',
                                        padding: '8px',
                                        borderRadius: '8px',
                                        backgroundColor: message.isUser ? '#1976d2' : '#f0f0f0',
                                        color: message.isUser ? '#fff' : '#000',
                                    }}
                                >
                                    {message.isUser ? message.text : (
                                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                            {message.text}
                                        </ReactMarkdown>
                                    )}
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} style={{ padding: '16px', borderTop: '1px solid #ddd' }}>
                        <Box style={{ display: 'flex', gap: '8px' }}>
                            <TextField
                                type="text"
                                fullWidth
                                placeholder="Type your message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                size='small'
                            />
                            <Button type="submit" variant="contained" color="primary">Send</Button>
                        </Box>
                    </form>
                </Box>
            )}
        </>
    )
}