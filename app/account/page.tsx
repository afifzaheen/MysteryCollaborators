"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { User, Package, CreditCard, Settings, LogOut } from "lucide-react"
import { useAuth } from "@/context/auth-context"

export default function AccountPage() {
  const { user, logout, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login")
    }
  }, [user, loading, router])

  if (loading || !user) {
    return (
      <div className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="glass p-6 rounded-sm">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gold-500/20 border border-gold-500/30 flex items-center justify-center mx-auto mb-4">
                    <User size={32} className="text-gold-500" />
                  </div>
                  <h2 className="text-xl font-medium">{user.name}</h2>
                  <p className="text-zinc-400 text-sm">{user.email}</p>
                </div>

                <nav className="space-y-1">
                  <Link
                    href="/account"
                    className="flex items-center space-x-3 text-gold-500 p-3 rounded-sm bg-gold-500/10"
                  >
                    <User size={18} />
                    <span>Account Overview</span>
                  </Link>
                  <Link
                    href="/account/orders"
                    className="flex items-center space-x-3 text-zinc-300 hover:text-gold-500 p-3 rounded-sm hover:bg-white/5 transition-colors"
                  >
                    <Package size={18} />
                    <span>Order History</span>
                  </Link>
                  <Link
                    href="/account/payment"
                    className="flex items-center space-x-3 text-zinc-300 hover:text-gold-500 p-3 rounded-sm hover:bg-white/5 transition-colors"
                  >
                    <CreditCard size={18} />
                    <span>Payment Methods</span>
                  </Link>
                  <Link
                    href="/account/settings"
                    className="flex items-center space-x-3 text-zinc-300 hover:text-gold-500 p-3 rounded-sm hover:bg-white/5 transition-colors"
                  >
                    <Settings size={18} />
                    <span>Account Settings</span>
                  </Link>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-3 text-zinc-300 hover:text-red-500 p-3 rounded-sm hover:bg-white/5 transition-colors w-full text-left"
                  >
                    <LogOut size={18} />
                    <span>Sign Out</span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="glass p-6 rounded-sm mb-8">
                <h2 className="text-xl font-medium mb-4">Account Overview</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-zinc-400">Name</h3>
                    <p>{user.name}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-400">Email</h3>
                    <p>{user.email}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-400">Member Since</h3>
                    <p>April 2023</p>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-sm">
                <h2 className="text-xl font-medium mb-4">Recent Orders</h2>
                <div className="text-center py-8">
                  <Package size={48} className="mx-auto text-zinc-600 mb-4" />
                  <p className="text-zinc-400 mb-4">You haven't placed any orders yet.</p>
                  <Link href="/showcase" className="btn-primary inline-block">
                    Start Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
