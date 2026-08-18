'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const directions = [
	{
		name: 'Зумба',
		description:
			'Танцевальная интервальная тренировка. Сжигайте до 600 ккал за час, танцуя под жаркие латиноамериканские треки.',
		image: '/3.png',
	},
	{
		name: 'Bodysculpt',
		description:
			'Силовая тренировка с инвентарем и без. Создайте безупречный рельеф.',
		image: '/1.png',
	},
	{
		name: 'Стретчинг',
		description:
			'Подарите телу свободу движений. Избавьтесь от зажимов, стресса и усталости после рабочего дня.',
		image: '/2.jpg',
	},
	{
		name: 'Шпагат',
		description:
			'Докажите себе, что невозможное возможно. Плавная и безопасная растяжка приведет вас к заветной цели вне зависимости от вашего возраста.',
		image: '/5.jpg',
	},
]

const certificates = Array.from(
	{ length: 12 },
	(_, i) => `/crts/cr${i + 1}.jpg`,
)

export default function HomePage() {
	const [selectedCert, setSelectedCert] = useState<number | null>(null)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [showScrollTop, setShowScrollTop] = useState(false)

	const sectionsRef = useRef<Array<HTMLElement | null>>([])

	// Наблюдатель для анимации появления секций
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible')
					}
				})
			},
			{ threshold: 0.1 },
		)

		sectionsRef.current.forEach(section => {
			if (section) observer.observe(section)
		})

		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 500)
		}
		window.addEventListener('scroll', handleScroll)

		return () => {
			observer.disconnect()
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	// Блокировка прокрутки фона при открытой модалке
	useEffect(() => {
		if (selectedCert !== null) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [selectedCert])

	const openCert = (index: number) => setSelectedCert(index)
	const closeCert = () => setSelectedCert(null)
	const prevCert = () =>
		setSelectedCert(prev =>
			prev === null
				? 0
				: (prev + certificates.length - 1) % certificates.length,
		)
	const nextCert = () =>
		setSelectedCert(prev =>
			prev === null ? 0 : (prev + 1) % certificates.length,
		)

	// Свайпы для модалки
	const touchStartX = useRef<number | null>(null)
	const touchEndX = useRef<number | null>(null)

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX
	}
	const handleTouchEnd = (e: React.TouchEvent) => {
		touchEndX.current = e.changedTouches[0].clientX
		if (touchStartX.current !== null && touchEndX.current !== null) {
			const diff = touchStartX.current - touchEndX.current
			if (Math.abs(diff) > 50) {
				if (diff > 0) nextCert()
				else prevCert()
			}
		}
		touchStartX.current = null
		touchEndX.current = null
	}

	return (
		<div className='min-h-screen relative z-10'>
			{/* JSON-LD */}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'LocalBusiness',
						name: 'DanceFit',
						image: '/logo.png',
						address: {
							'@type': 'PostalAddress',
							streetAddress: 'проспект Вернадского, 95к4',
							addressLocality: 'Москва',
							addressCountry: 'RU',
						},
						telephone: '+79035858139',
						url: 'https://dancefit.ru',
					}),
				}}
			/>

			{/* Шапка */}
			<header className='sticky top-0 z-50 bg-white/80 shadow-sm'>
				<div className='max-w-[90rem] mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4'>
					<div className='flex items-center'>
						<Image
							src='/logo.png'
							alt='DanceFit'
							width={400}
							height={600}
							className='h-14 md:h-24 w-auto'
							priority
						/>
					</div>

					{/* Десктопное меню */}
					<nav className='hidden md:flex gap-6 font-semibold'>
						<a
							href='#directions'
							className='hover:opacity-70 transition-opacity'
						>
							Направления
						</a>
						<a href='#formats' className='hover:opacity-70 transition-opacity'>
							Форматы
						</a>
						<a href='#special' className='hover:opacity-70 transition-opacity'>
							Спецкурс
						</a>
						<a
							href='#certificates'
							className='hover:opacity-70 transition-opacity'
						>
							Сертификаты
						</a>
						<a href='#location' className='hover:opacity-70 transition-opacity'>
							Как добраться
						</a>
						<a href='#contact' className='hover:opacity-70 transition-opacity'>
							Запись
						</a>
					</nav>

					{/* Бургер */}
					<button
						type='button'
						onClick={() => setMobileMenuOpen(prev => !prev)}
						className='md:hidden text-3xl focus:outline-none cursor-pointer'
						aria-label='Открыть меню'
					>
						{mobileMenuOpen ? '×' : '☰'}
					</button>
				</div>

				{/* Мобильное меню */}
				{mobileMenuOpen && (
					<nav className='md:hidden bg-white/95 shadow-lg px-4 py-2 flex flex-col gap-3 font-semibold'>
						<a
							href='#directions'
							className='hover:opacity-70 transition-opacity py-1'
							onClick={() => setMobileMenuOpen(false)}
						>
							Направления
						</a>
						<a
							href='#formats'
							className='hover:opacity-70 transition-opacity py-1'
							onClick={() => setMobileMenuOpen(false)}
						>
							Форматы
						</a>
						<a
							href='#special'
							className='hover:opacity-70 transition-opacity py-1'
							onClick={() => setMobileMenuOpen(false)}
						>
							Спецкурс
						</a>
						<a
							href='#certificates'
							className='hover:opacity-70 transition-opacity py-1'
							onClick={() => setMobileMenuOpen(false)}
						>
							Сертификаты
						</a>
						<a
							href='#location'
							className='hover:opacity-70 transition-opacity py-1'
							onClick={() => setMobileMenuOpen(false)}
						>
							Как добраться
						</a>
						<a
							href='#contact'
							className='hover:opacity-70 transition-opacity py-1'
							onClick={() => setMobileMenuOpen(false)}
						>
							Запись
						</a>
					</nav>
				)}
			</header>

			{/* Hero секция */}
			<section
				className='py-12 md:py-24 px-4 md:px-6 relative fade-in'
				ref={el => {
					sectionsRef.current[0] = el
				}}
			>
				<div className='hero-blob absolute top-10 left-10'></div>
				<div className='max-w-[90rem] mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8 relative z-10'>
					<div className='md:w-1/2 w-full'>
						<h1 className='text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-3 md:mb-4 handwritten'>
							Каждая тренировка — это ваш шаг к уверенности, легкости и фигуре
							мечты.
						</h1>
						<p className='text-sm md:text-base mb-4 md:mb-6'>
							Выберите свое направление и начните меняться уже сегодня. Хватит
							сомневаться — ваше тело способно на большее!
						</p>
						<a
							href='#contact'
							className='btn-organic text-base px-4 py-2 inline-block'
						>
							Записаться
						</a>
					</div>
					<div className='md:w-1/2 w-full flex justify-center'>
						<Image
							src='/logo.png'
							alt='DanceFit'
							width={100}
							height={150}
							className='w-auto h-40 sm:h-56 md:h-80 rounded-2xl shadow-lg'
							priority
						/>
					</div>
				</div>
			</section>

			{/* Направления */}
			<section
				id='directions'
				className='py-12 md:py-20 px-4 md:px-6 relative fade-in'
				ref={el => {
					sectionsRef.current[1] = el
				}}
			>
				<div className='max-w-[90rem] mx-auto'>
					<h2 className='text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4 handwritten'>
						Наши направления
					</h2>
					<span className='hand-drawn-line mb-8 md:mb-12'></span>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
						{directions.map((dir, idx) => (
							<div key={idx} className='card-natural p-4 md:p-5 text-center'>
								<div className='relative aspect-[698/470] w-full mb-3 md:mb-4 rounded-xl overflow-hidden'>
									<Image
										src={dir.image}
										alt={dir.name}
										fill
										className='object-cover'
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 680px'
										loading={idx < 2 ? 'eager' : 'lazy'}
									/>
								</div>
								<h3 className='text-xl md:text-2xl font-bold mb-1 md:mb-2'>
									{dir.name}
								</h3>
								<p className='text-sm md:text-base'>{dir.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Форматы */}
			<section
				id='formats'
				className='py-12 md:py-20 px-4 md:px-6 relative fade-in'
				ref={el => {
					sectionsRef.current[2] = el
				}}
			>
				<div className='max-w-[90rem] mx-auto'>
					<h2 className='text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4 handwritten'>
						Форматы
					</h2>
					<p className='text-center text-base md:text-lg mb-8 md:mb-12'>
						Тренируйтесь так, как удобно вам. Групповые и индивидуальные
						тренировки.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10'>
						<div className='card-natural p-4 md:p-6 text-center'>
							<div className='relative aspect-[698/470] w-full mb-3 md:mb-5 rounded-xl overflow-hidden'>
								<Image
									src='/4.jpg'
									alt='Групповая тренировка'
									fill
									className='object-cover'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 680px'
								/>
							</div>
							<h3 className='text-xl md:text-2xl font-bold mb-1 md:mb-3'>
								Групповой драйв
							</h3>
							<p className='text-sm md:text-base'>
								Мощная энергетика единомышленников, поддержка и новые
								знакомства. Вместе расти быстрее и веселее!
							</p>
						</div>
						<div className='card-natural p-4 md:p-6 text-center'>
							<div className='relative aspect-[698/470] w-full mb-3 md:mb-5 rounded-xl overflow-hidden'>
								<Image
									src='/6.png'
									alt='Персональная тренировка'
									fill
									className='object-cover'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 680px'
								/>
							</div>
							<h3 className='text-xl md:text-2xl font-bold mb-1 md:mb-3'>
								Персональный фокус
							</h3>
							<p className='text-sm md:text-base'>
								100% внимания тренера. Программа пишется строго под ваши цели, а
								результат достигается в два раза быстрее.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Спецкурс */}
			<section
				id='special'
				className='py-12 md:py-20 px-4 md:px-6 relative fade-in'
				ref={el => {
					sectionsRef.current[3] = el
				}}
			>
				<div className='max-w-[90rem] mx-auto'>
					<h2 className='text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4 handwritten'>
						Спецкурс со съемкой
					</h2>
					<span className='hand-drawn-line mb-8 md:mb-12'></span>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 items-start'>
						<div className='md:col-span-3 flex justify-center'>
							<Image
								src='/spetz_cource.jpg'
								alt='Спецкурс со съемкой'
								width={1231}
								height={1277}
								className='max-w-full h-auto rounded-2xl img-natural'
							/>
						</div>
						<ul className='space-y-3 md:space-y-4 text-base md:text-lg md:col-span-1'>
							<li className='flex items-start gap-2 md:gap-3'>
								<span className='text-violet-600 text-xl md:text-2xl leading-none'>
									★
								</span>
								<span>
									<strong>Учим эффектную, цепляющую хореографию.</strong>
								</span>
							</li>
							<li className='flex items-start gap-2 md:gap-3'>
								<span className='text-violet-600 text-xl md:text-2xl leading-none'>
									★
								</span>
								<span>
									<strong>Преодоление страхов:</strong> Учимся уверенно работать
									на камеру и любить свое отражение.
								</span>
							</li>
							<li className='flex items-start gap-2 md:gap-3'>
								<span className='text-violet-600 text-xl md:text-2xl leading-none'>
									★
								</span>
								<span>
									<strong>Память на всю жизнь:</strong> Профессиональный
									видеоклип в стильном образе для ваших соцсетей.
								</span>
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Сертификаты */}
			<section
				id='certificates'
				className='py-12 md:py-20 px-4 md:px-6 relative fade-in'
				ref={el => {
					sectionsRef.current[4] = el
				}}
			>
				<div className='max-w-[90rem] mx-auto'>
					<h2 className='text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4 handwritten'>
						Сертификаты
					</h2>
					<span className='hand-drawn-line mb-8 md:mb-12'></span>
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4'>
						{certificates.map((src, i) => (
							<button
								key={src}
								type='button'
								onClick={() => openCert(i)}
								className='card-natural overflow-hidden p-0 cursor-pointer block'
								style={{
									border: 'none',
									background: 'none',
									textAlign: 'left',
									WebkitTapHighlightColor: 'transparent',
								}}
								aria-label={`Открыть сертификат ${i + 1}`}
							>
								<div className='relative aspect-[4/3] w-full overflow-hidden rounded-xl'>
									<Image
										src={src}
										alt={`Сертификат ${i + 1}`}
										fill
										className='object-cover pointer-events-none'
										sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
									/>
								</div>
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Как добраться */}
			<section
				id='location'
				className='py-12 md:py-20 px-4 md:px-6 relative fade-in'
				ref={el => {
					sectionsRef.current[5] = el
				}}
			>
				<div className='max-w-[90rem] mx-auto'>
					<h2 className='text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4 handwritten'>
						Как добраться
					</h2>
					<span className='hand-drawn-line mb-8 md:mb-12'></span>
					<div className='max-w-5xl mx-auto'>
						<div className='card-natural p-4 md:p-6 text-center'>
							<video
								controls
								className='w-full rounded-xl'
								src='/kak_proiti.mp4'
								preload='none'
								poster='/logo.png'
							>
								Ваш браузер не поддерживает видео.
							</video>
							<p className='mt-3 md:mt-4 text-base md:text-lg font-semibold'>
								г. Москва, проспект Вернадского, 95к4
							</p>
							<div className='mt-4'>
								<iframe
									src='https://yandex.ru/map-widget/v1/?text=Москва%2C%20проспект%20Вернадского%2C%2095к4&z=17'
									width='100%'
									height='300'
									style={{ border: 0, borderRadius: '12px' }}
									allowFullScreen
									loading='lazy'
									title='Карта'
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Контакты (без формы) */}
			<section
				id='contact'
				className='py-12 md:py-20 px-4 md:px-6 relative fade-in'
				ref={el => {
					sectionsRef.current[6] = el
				}}
			>
				<div className='max-w-3xl mx-auto text-center bg-white/40 rounded-[2rem] md:rounded-[3rem_1.5rem_3rem_1.5rem] p-6 md:p-10 shadow-xl'>
					<h2 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 handwritten'>
						Сделайте первый шаг прямо сейчас!
					</h2>
					<p className='text-base md:text-xl mb-6 md:mb-8'>
						Места в группах ограничены. Запишитесь на тренировку и активируйте
						лучшую версию себя!
					</p>
					<div className='flex flex-col sm:flex-row gap-3 md:gap-6 justify-center items-center'>
						<a
							href='tel:+79035858139'
							className='btn-organic text-lg md:text-xl inline-flex items-center gap-2'
						>
							<span>📞</span> +7 (903) 585-81-39
						</a>
						<a
							href='https://t.me/anastasaZSFB'
							target='_blank'
							rel='noopener noreferrer'
							className='btn-organic text-lg md:text-xl inline-flex items-center gap-2'
						>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='currentColor'
								xmlns='http://www.w3.org/2000/svg'
								className='inline-block mr-3'
							>
								<path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
							</svg>
							@anastasaZSFB
						</a>
					</div>
				</div>
			</section>

			{/* Подвал */}
			<footer className='py-6 md:py-8 text-center text-xs md:text-sm opacity-80'>
				<p>© {new Date().getFullYear()} DanceFit. Все права защищены.</p>
			</footer>

			{/* Кнопка наверх */}
			<button
				className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				aria-label='Наверх'
			>
				↑
			</button>

			{/* Фиксированная кнопка позвонить (мобильные) */}
			<a href='tel:+79035858139' className='call-fixed' aria-label='Позвонить'>
				📞 Позвонить
			</a>

			{/* Модалка сертификата */}
			{selectedCert !== null && (
				<div
					className='fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-2 md:p-4'
					onClick={closeCert}
				>
					<div
						className='relative max-w-5xl w-full max-h-full bg-white rounded-2xl overflow-hidden'
						onClick={e => e.stopPropagation()}
						onTouchStart={handleTouchStart}
						onTouchEnd={handleTouchEnd}
					>
						<button
							type='button'
							onClick={closeCert}
							className='absolute top-2 right-2 md:top-3 md:right-3 z-20 text-2xl md:text-3xl bg-white/80 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-white cursor-pointer'
							aria-label='Закрыть'
						>
							×
						</button>
						<button
							type='button'
							onClick={prevCert}
							className='absolute left-2 md:left-3 top-1/2 -translate-y-1/2 z-20 text-xl md:text-2xl bg-white/80 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-white cursor-pointer'
							aria-label='Предыдущий'
						>
							‹
						</button>
						<button
							type='button'
							onClick={nextCert}
							className='absolute right-2 md:right-3 top-1/2 -translate-y-1/2 z-20 text-xl md:text-2xl bg-white/80 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-white cursor-pointer'
							aria-label='Следующий'
						>
							›
						</button>
						<div className='overflow-auto max-h-[90vh]'>
							<Image
								src={certificates[selectedCert]}
								alt={`Сертификат ${selectedCert + 1}`}
								width={1200}
								height={900}
								className='w-full h-auto'
							/>
						</div>
						<div className='absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 bg-white/80 rounded-full px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm font-semibold'>
							{selectedCert + 1} / {certificates.length}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
