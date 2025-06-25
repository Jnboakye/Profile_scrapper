'use client';

import Link from 'next/link';

export default function BotPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f4f4f4' }}>
      {/* Back to Home */}
      <div style={{ padding: '1rem' }}>
        <Link href="/" style={{
          display: 'inline-block',
          textDecoration: 'none',
          backgroundColor: '#7f79ed',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}>
          ← Back to Home
        </Link>
      </div>

      {/* Chatbot iframe */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1000px',
          height: '700px',
          boxShadow: '0 0 15px rgba(0,0,0,0.1)',
          borderRadius: '1rem',
          overflow: 'hidden',
        }}>
          <iframe
            src="https://app.relevanceai.com/agents/d7b62b/b2abe964d2df-4ed5-bc10-a1ea93d25c0a/a3d9149a-bf68-4f95-bae4-15e0f29bb2a9/share?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=icon&primary_color=%23a88172&bubble_icon=pd%2Fsend-diagonal&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>
    </main>
  );
}
