import { Link } from 'react-router-dom'
import { ShieldAlert } from 'lucide-react'

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white flex flex-col items-center justify-center px-6">
      <ShieldAlert className="text-teal-400 mb-4" size={40} />
      <h1 className="text-3xl font-bold mb-2">Page not found</h1>
      <p className="text-slate-400 mb-6 text-center">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/"
        className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-6 py-2.5 rounded-lg transition"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound