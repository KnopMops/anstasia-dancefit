// app/page.tsx
import Image from 'next/image'

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
		image: '/1.jpg',
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

export default function HomePage() {
	return (
		<div className='min-h-screen relative'>
			{/* Шапка */}
			<header className='sticky top-0 z-50 bg-white/50 backdrop-blur-md shadow-sm'>
				<div className='max-w-[90rem] mx-auto flex items-center justify-between px-6 py-4'>
					<div className='flex items-center'>
						<Image
							src='/logo.png'
							alt='DanceFit'
							width={400}
							height={600}
							className='h-12 w-auto md:h-14'
						/>
					</div>
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
						<a href='#location' className='hover:opacity-70 transition-opacity'>
							Как добраться
						</a>
						<a href='#contact' className='hover:opacity-70 transition-opacity'>
							Запись
						</a>
					</nav>
				</div>
			</header>

			{/* Hero секция */}
			<section className='py-24 px-6 relative'>
				<div className='hero-blob absolute top-10 left-10'></div>
				<div className='max-w-[90rem] mx-auto flex flex-col md:flex-row items-center gap-8'>
					<div className='md:w-1/2'>
						<h1 className='text-xl md:text-2xl font-bold leading-tight mb-4'>
							Каждая тренировка — это ваш шаг к уверенности, легкости и фигуре
							мечты.
						</h1>
						<p className='text-sm md:text-base mb-6'>
							Выберите свое направление и начните меняться уже сегодня. Хватит
							сомневаться — ваше тело способно на большее!
						</p>
						<a href='#contact' className='btn-organic text-base px-4 py-2'>
							Записаться
						</a>
					</div>
					{/* Маленькая картинка (используем logo.png) */}
					<div className='md:w-1/2 flex justify-center'>
						<Image
							src='/logo.png'
							alt='DanceFit'
							width={100}
							height={150}
							className='w-auto h-40 md:h-48'
						/>
					</div>
				</div>
			</section>

			{/* Направления */}
			<section id='directions' className='py-20 px-6'>
				<div className='max-w-[90rem] mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
						Наши направления
					</h2>
					<span className='hand-drawn-line mb-12'></span>
					<div className='grid md:grid-cols-2 gap-8'>
						{directions.map((dir, idx) => (
							<div key={idx} className='card-natural p-5 text-center'>
								{/* Фиксированный аспект и object-cover для одинаковых размеров */}
								<div className='relative aspect-[698/470] w-full mb-4 rounded-xl overflow-hidden'>
									<Image
										src={dir.image}
										alt={dir.name}
										fill
										className='object-cover'
									/>
								</div>
								<h3 className='text-2xl font-bold mb-2'>{dir.name}</h3>
								<p className='text-base'>{dir.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Форматы */}
			<section id='formats' className='py-20 px-6'>
				<div className='max-w-[90rem] mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
						Форматы
					</h2>
					<p className='text-center text-lg mb-12'>
						Тренируйтесь так, как удобно вам. Групповые и индивидуальные
						тренировки.
					</p>
					<div className='grid md:grid-cols-2 gap-10'>
						<div className='card-natural p-6 text-center'>
							<div className='relative aspect-[698/470] w-full mb-5 rounded-xl overflow-hidden'>
								<Image
									src='/4.jpg'
									alt='Групповая тренировка'
									fill
									className='object-cover'
								/>
							</div>
							<h3 className='text-2xl font-bold mb-3'>Групповой драйв</h3>
							<p>
								Мощная энергетика единомышленников, поддержка и новые
								знакомства. Вместе расти быстрее и веселее!
							</p>
						</div>
						<div className='card-natural p-6 text-center md:offset-down'>
							<div className='relative aspect-[698/470] w-full mb-5 rounded-xl overflow-hidden'>
								<Image
									src='/6.png'
									alt='Персональная тренировка'
									fill
									className='object-cover'
								/>
							</div>
							<h3 className='text-2xl font-bold mb-3'>Персональный фокус</h3>
							<p>
								100% внимания тренера. Программа пишется строго под ваши цели, а
								результат достигается в два раза быстрее.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Спецкурс */}
			<section id='special' className='py-20 px-6'>
				<div className='max-w-[90rem] mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
						Спецкурс со съемкой
					</h2>
					<span className='hand-drawn-line mb-12'></span>
					<div className='grid md:grid-cols-4 gap-10 items-start'>
						<div className='md:col-span-3 flex justify-center'>
							<Image
								src='/spetz_cource.jpg'
								alt='Спецкурс со съемкой'
								width={1231}
								height={1277}
								className='max-w-full h-auto rounded-2xl img-natural'
							/>
						</div>
						<ul className='space-y-4 text-lg md:col-span-1'>
							<li className='flex items-start gap-3'>
								<span className='text-violet-600 text-2xl leading-none'>★</span>
								<span>
									<strong>Учим эффектную, цепляющую хореографию.</strong>
								</span>
							</li>
							<li className='flex items-start gap-3'>
								<span className='text-violet-600 text-2xl leading-none'>★</span>
								<span>
									<strong>Преодоление страхов:</strong> Учимся уверенно работать
									на камеру и любить свое отражение.
								</span>
							</li>
							<li className='flex items-start gap-3'>
								<span className='text-violet-600 text-2xl leading-none'>★</span>
								<span>
									<strong>Память на всю жизнь:</strong> Профессиональный
									видеоклип в стильном образе для ваших соцсетей.
								</span>
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Как добраться */}
			<section id='location' className='py-20 px-6'>
				<div className='max-w-[90rem] mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
						Как добраться
					</h2>
					<span className='hand-drawn-line mb-12'></span>
					<div className='max-w-3xl mx-auto'>
						<div className='card-natural p-6 text-center'>
							<video
								controls
								className='w-full rounded-xl'
								src='/kak_proiti.mp4'
							>
								Ваш браузер не поддерживает видео.
							</video>
							<p className='mt-4 text-lg font-semibold'>
								г. Москва, проспект Вернадского, 95к4
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Призыв к действию с контактами */}
			<section id='contact' className='py-20 px-6'>
				<div className='max-w-3xl mx-auto text-center bg-white/40 rounded-[3rem_1.5rem_3rem_1.5rem] p-10 shadow-xl'>
					<h2 className='text-3xl md:text-4xl font-bold mb-6'>
						Сделайте первый шаг прямо сейчас!
					</h2>
					<p className='text-xl mb-8'>
						Места в группах ограничены. Запишитесь на тренировку и активируйте
						лучшую версию себя!
					</p>
					<div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
						<a
							href='tel:+79035858139'
							className='btn-organic text-xl inline-flex items-center gap-2'
						>
							<span>📞</span> +7 (903) 585-81-39
						</a>
						<a
							href='https://t.me/anastasaZSFB'
							target='_blank'
							rel='noopener noreferrer'
							className='btn-organic text-xl inline-flex items-center gap-2'
						>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='currentColor'
								xmlns='http://www.w3.org/2000/svg'
								className='inline-block'
							>
								<path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
							</svg>
							@anastasaZSFB
						</a>
					</div>
				</div>
			</section>

			{/* Подвал */}
			<footer className='py-8 text-center text-sm opacity-80'>
				<p>© {new Date().getFullYear()} DanceFit. Все права защищены.</p>
			</footer>
		</div>
	)
}
