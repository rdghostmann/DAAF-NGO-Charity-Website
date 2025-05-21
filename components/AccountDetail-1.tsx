"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, CheckCircle, BanknoteIcon as Bank } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const AccountDetail1 = () => {
  const [copied, setCopied] = useState(false)

  const accountInfo = {
    name: "Diocese of Asaba Agape Foundation",
    number: "1229962722",
    bank: "Zenith Bank PLC",
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto"
    >
      <Card className="border-2 border-slate-200 shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left: Icon and vertical separator */}
          <div className="flex flex-col items-center justify-center bg-gradient-to-b from-slate-700 to-slate-900 p-8 md:w-1/3 min-w-[180px]">
            <div className="bg-white p-4 rounded-full shadow-md mb-4">
              <Bank className="h-12 w-12 text-slate-700" />
            </div>
            <div className="text-white text-lg font-semibold text-center">Bank Account</div>
          </div>
          {/* Right: Details */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl font-bold text-slate-800">Account Information</CardTitle>
              <CardDescription>Banking details for donations and contributions</CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-center md:gap-8">
                <div>
                  <p className="text-xs font-medium text-slate-500 mb-1">Account Name</p>
                  <p className="text-base font-semibold text-slate-800">{accountInfo.name}</p>
                </div>
                <Separator orientation="vertical" className="hidden md:block h-10 mx-4" />
                <div>
                  <p className="text-xs font-medium text-slate-500 mb-1">Account Number</p>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-mono font-bold tracking-wider text-slate-800">{accountInfo.number}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(accountInfo.number)}
                      className="relative"
                    >
                      {copied ? (
                        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-green-600">
                          <CheckCircle className="h-5 w-5" />
                        </motion.div>
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                      <span
                        className={`absolute -top-8 right-0 bg-slate-800 text-white text-xs px-2 py-1 rounded ${copied ? "opacity-100" : "opacity-0"} transition-opacity`}
                      >
                        Copied!
                      </span>
                    </Button>
                  </div>
                </div>
                <Separator orientation="vertical" className="hidden md:block h-10 mx-4" />
                <div>
                  <p className="text-xs font-medium text-slate-500 mb-1">Bank Name</p>
                  <p className="text-base font-semibold text-slate-800">{accountInfo.bank}</p>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-4">
                <Button
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white"
                  onClick={() => copyToClipboard(`${accountInfo.name}\n${accountInfo.number}\n${accountInfo.bank}`)}
                >
                  Copy All Details
                </Button>
              </motion.div>
              <div className="bg-slate-50 p-4 rounded-lg mt-4">
                <p className="text-sm text-slate-600 italic">
                  Your generous donations help us continue our mission of serving and empowering vulnerable individuals and communities.
                </p>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default AccountDetail1