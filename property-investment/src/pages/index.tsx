import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import PropertyDashboard from '@/components/pages/PropertyDashboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <PropertyDashboard />
  )
}
