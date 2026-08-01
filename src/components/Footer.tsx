function Footer() {
  return (
    <footer className="bg-slate-950/80 text-slate-500 text-center py-8 px-6 border-t border-slate-800">
      <p className="text-sm">
        © {new Date().getFullYear()} CloudSecure. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer