import './App.css'
import TnVote from "./pages/TnVote"

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="brand">
          <span className="brand-badge">TN</span>
          <h1>TN Vote</h1>
        </div>
        <p className="app-subtitle">Choose your favorite party and make your voice count.</p>
      </header>

      <main className="vote-page">
        <TnVote />
      </main>
    </div>
  )
}

export default App