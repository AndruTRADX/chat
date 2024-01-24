import Contacts from '@/components/Contacts'
import Settings from '@/components/Settings'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen bg-white h-screen">
      <Settings />
      <Contacts />
      {children}
    </main>
  )
}
