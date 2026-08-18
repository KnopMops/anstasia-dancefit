import type { Metadata } from 'next'
import { Caveat, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '600'],
	variable: '--font-poppins',
	display: 'swap',
})

const caveat = Caveat({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '600'],
	variable: '--font-caveat',
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'DanceFit',
	description:
		'Клуб танцев DanceFit в Москве: зумба, боди-скульпт, стретчинг, шпагат. Групповые и персональные тренировки. Спецкурс со съемкой. Запишитесь на пробное занятие!',
	keywords: [
		'танцы',
		'зумба',
		'боди-скульпт',
		'стретчинг',
		'шпагат',
		'фитнес',
		'DanceFit',
	],
	openGraph: {
		title: 'DanceFit — Шаг к уверенности',
		description:
			'Каждая тренировка — это шаг к уверенности, легкости и фигуре мечты.',
		type: 'website',
		url: 'https://anastasia-dancefit.ru',
		images: [{ url: 'https://anastasia-dancefit.ru/logo.png' }],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${poppins.variable} ${caveat.variable} font-sans`}>
				{children}
			</body>
		</html>
	)
}
