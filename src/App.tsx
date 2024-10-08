import React, { useState } from 'react'
import { Compass, Leaf, Scroll } from 'lucide-react'

const sections = [
  { title: '中医', icon: Leaf, content: '中医是中国传统医学体系，强调整体观念和阴阳平衡。' },
  { title: '占卜', icon: Scroll, content: '占卜是一种古老的预测方法，用于洞察未来和指导决策。' },
  { title: '风水', icon: Compass, content: '风水是研究环境与人之间和谐关系的中国传统学说。' },
]

function App() {
  const [activeSection, setActiveSection] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-serif">
      <header className="bg-gray-900 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">中华传统智慧</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-8">
          {sections.map((section, index) => (
            <button
              key={section.title}
              onClick={() => setActiveSection(index)}
              className={`flex flex-col items-center p-4 rounded-lg transition-colors ${
                activeSection === index ? 'bg-gray-800 text-white' : 'bg-white hover:bg-gray-200'
              }`}
            >
              <section.icon size={48} />
              <span className="mt-2 text-lg">{section.title}</span>
            </button>
          ))}
        </div>
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md ink-wash">
          <h2 className="text-2xl font-bold mb-4">{sections[activeSection].title}</h2>
          <p className="text-lg">{sections[activeSection].content}</p>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-4 text-center mt-8">
        <p>© 2024 中华传统智慧. 保留所有权利。</p>
      </footer>
    </div>
  )
}

export default App