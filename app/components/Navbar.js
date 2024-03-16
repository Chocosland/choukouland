import React from 'react'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-20 w-screen h-24 bg-chocolate">
        <div className="w-full h-full p-6 flex items-center justify-between">
            <div className="h-full flex flex-row items-center gap-x-2">

            </div>
            <button className="h-full w-48 rounded-xl bg-white-chocolate text-black uppercase">
                Connect Wallet
            </button>
        </div>
    </nav>
  )
}

export default Navbar