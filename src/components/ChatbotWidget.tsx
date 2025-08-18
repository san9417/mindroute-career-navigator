import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI Career Assistant. How can I help you with your career today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const commonQuestions = [
    "How does resume analysis work?",
    "What career domains do you support?",
    "How accurate are your predictions?",
    "Can I get resume improvement tips?"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: messages.length + 2,
      text: getBotResponse(inputMessage),
      isBot: true,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputMessage('');
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('resume') && lowerInput.includes('analysis')) {
      return "Our AI analyzes your resume using advanced NLP to extract skills, experience, and qualifications. We then use machine learning to predict suitable career paths with 95% accuracy.";
    } else if (lowerInput.includes('career') && lowerInput.includes('domain')) {
      return "We support 50+ career domains including Software Development, Data Science, Marketing, Finance, Healthcare, Education, and many more. Our system is continuously updated with new career paths.";
    } else if (lowerInput.includes('accurate') || lowerInput.includes('accuracy')) {
      return "Our career prediction model has a 95% accuracy rate, trained on thousands of professional profiles. We also provide confidence scores for each prediction to help you make informed decisions.";
    } else if (lowerInput.includes('improve') || lowerInput.includes('tips')) {
      return "Absolutely! After analyzing your resume, we provide personalized suggestions like adding quantifiable achievements, including relevant keywords, improving formatting, and highlighting key skills for your target career.";
    } else {
      return "That's a great question! Our AI-powered platform offers comprehensive career guidance. Feel free to upload your resume to get started, or ask me about specific features like career prediction, resume templates, or improvement suggestions.";
    }
  };

  const handleQuestionClick = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-gradient-primary shadow-glow hover:shadow-elegant transition-all duration-300"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 flex flex-col shadow-elegant border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between pb-3 bg-gradient-primary text-primary-foreground rounded-t-lg">
            <CardTitle className="text-lg font-semibold flex items-center">
              <Bot className="h-5 w-5 mr-2" />
              AI Career Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isBot
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.isBot && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      {!message.isBot && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                <div className="space-y-1">
                  {commonQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionClick(question)}
                      className="text-xs text-left w-full p-2 rounded bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask me anything..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-primary"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ChatbotWidget;