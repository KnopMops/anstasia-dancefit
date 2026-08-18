import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '600', '700'],
	variable: '--font-poppins',
})

export const metadata: Metadata = {
	title: 'DanceFit — Шаг к уверенности',
	description:
		'Клуб танцев DanceFit. Зумба, Bodysculpt, стретчинг, шпагат. Групповые и индивидуальные тренировки. Спецкурс со съемкой.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${poppins.variable} font-sans`}>{children}</body>
		</html>
	)
}
