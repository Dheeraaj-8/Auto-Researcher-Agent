import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, session, chatHistory } = await request.json()

    if (!message || !session) {
      return NextResponse.json({ 
        response: "Please provide a message and ensure you have an active research session." 
      })
    }

    console.log("Processing chat message:", message)

    // Generate a mock response based on the research session
    const mockResponse = `Based on your research on "${session.topic}", I can provide some insights:

${message.toLowerCase().includes('finding') || message.toLowerCase().includes('result') ? 
  `The key findings from your research include:
  ${session.keyFindings?.slice(0, 3).map((f: string) => `• ${f}`).join('\n  ') || '• Research findings are available in your session'}` :
  
  message.toLowerCase().includes('method') || message.toLowerCase().includes('approach') ?
  `The papers in your research cover various methodological approaches:
  • Deep learning and transformer architectures
  • Ethical AI frameworks and bias mitigation
  • Federated learning for privacy preservation
  • Explainable AI techniques` :
  
  message.toLowerCase().includes('paper') || message.toLowerCase().includes('author') ?
  `Your research includes ${session.papers?.length || 0} papers from various authors and institutions. The papers span recent years and have received significant citations, indicating their impact in the field.` :
  
  `I can help you understand your research on "${session.topic}". The literature review covers ${session.papers?.length || 0} papers with comprehensive analysis. Feel free to ask about specific findings, methodologies, or implications of the research.`
}

Would you like me to elaborate on any specific aspect of your research?`

    return NextResponse.json({ response: mockResponse })

  } catch (error) {
    console.error("Chat error:", error)
    return NextResponse.json({
      response: "Sorry, I encountered an error processing your question. Please try again or check if you have an active research session."
    })
  }
}
