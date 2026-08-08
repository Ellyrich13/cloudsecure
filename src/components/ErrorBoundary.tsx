import { Component, type ErrorInfo, type ReactNode } from 'react'
import { AlertOctagon } from 'lucide-react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white flex flex-col items-center justify-center px-6">
          <AlertOctagon className="text-red-400 mb-4" size={40} />
          <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
          <p className="text-slate-400 mb-6 text-center max-w-sm">
            An unexpected error occurred. Try reloading the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-6 py-2.5 rounded-lg transition"
          >
            Reload
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary