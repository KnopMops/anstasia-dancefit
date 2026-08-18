// Данные для секций
const directions = [
	{
		name: 'Зумба',
		description:
			'Танцевальная интервальная тренировка. Сжигайте до 600 ккал за час, танцуя под жаркие латиноамериканские треки.',
		image: '/zumba.jpg', // замените на реальный путь позже
	},
	{
		name: 'Bodysculpt',
		description:
			'Силовая тренировка с инвентарем и без. Создайте безупречный рельеф.',
		image: '/bodysculpt.jpg',
	},
	{
		name: 'Стретчинг',
		description:
			'Подарите телу свободу движений. Избавьтесь от зажимов, стресса и усталости после рабочего дня.',
		image: '/stretching.jpg',
	},
	{
		name: 'Шпагат',
		description:
			'Докажите себе, что невозможное возможно. Плавная и безопасная растяжка приведет вас к заветной цели вне зависимости от вашего возраста.',
		image: '/split.jpg',
	},
]

export default function HomePage() {
	return (
		<div className='min-h-screen'>
			{/* Шапка */}
			<header className='sticky top-0 z-50 bg-white/60 backdrop-blur-md shadow-sm'>
				<div className='max-w-6xl mx-auto flex items-center justify-between px-6 py-4'>
					<div className='text-2xl font-bold tracking-wider'>DanceClub</div>
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
						<a href='#contact' className='hover:opacity-70 transition-opacity'>
							Запись
						</a>
					</nav>
				</div>
			</header>

			{/* Hero секция */}
			<section className='py-20 px-6'>
				<div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
					<div>
						<h1 className='text-4xl md:text-5xl font-bold leading-tight mb-6'>
							Каждая тренировка — это ваш шаг к уверенности, легкости и фигуре
							мечты.
						</h1>
						<p className='text-lg md:text-xl mb-8'>
							Выберите свое направление и начните меняться уже сегодня. Хватит
							сомневаться — ваше тело способно на большее!
						</p>
						<a
							href='#contact'
							className='inline-block bg-violet-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-violet-700 transform hover:-translate-y-0.5 transition-all'
						>
							Записаться
						</a>
					</div>
					<div className='image-placeholder h-72 md:h-96'>
						{/* Замените на <Image src="/hero.jpg" ... /> */}
						<span className='text-xl'>Фото</span>
					</div>
				</div>
			</section>

			{/* Направления */}
			<section id='directions' className='py-20 px-6'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-12 relative'>
						Наши направления
						<span className='block w-16 h-1 bg-violet-600 mx-auto mt-4 rounded-full'></span>
					</h2>
					<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
						{directions.map((dir, idx) => (
							<div
								key={idx}
								className='bg-white/60 rounded-2xl p-5 text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all'
							>
								<div className='image-placeholder h-40 mb-4'>
									{/* Замените на <Image src={dir.image} ... /> */}
									<span className='text-lg'>Фото</span>
								</div>
								<h3 className='text-xl font-bold mb-2'>{dir.name}</h3>
								<p className='text-sm'>{dir.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Форматы */}
			<section id='formats' className='py-20 px-6 bg-white/20'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
						Форматы
					</h2>
					<p className='text-center text-lg mb-12'>
						Тренируйтесь так, как удобно вам. Групповые и индивидуальные
						тренировки.
					</p>
					<div className='grid md:grid-cols-2 gap-8'>
						<div className='bg-white/60 rounded-2xl p-6 text-center shadow-md'>
							<div className='image-placeholder h-48 mb-5'>
								{/* Замените на <Image src="/group.jpg" ... /> */}
								<span className='text-xl'>Фото</span>
							</div>
							<h3 className='text-2xl font-bold mb-3'>Групповой драйв</h3>
							<p>
								Мощная энергетика единомышленников, поддержка и новые
								знакомства. Вместе расти быстрее и веселее!
							</p>
						</div>
						<div className='bg-white/60 rounded-2xl p-6 text-center shadow-md'>
							<div className='image-placeholder h-48 mb-5'>
								{/* Замените на <Image src="/personal.jpg" ... /> */}
								<span className='text-xl'>Фото</span>
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
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
						Спецкурс со съемкой
					</h2>
					<div className='grid md:grid-cols-2 gap-10 items-center'>
						<div className='image-placeholder h-72 md:h-96'>
							{/* Замените на <Image src="/video-course.jpg" ... /> */}
							<span className='text-xl'>Фото</span>
						</div>
						<ul className='space-y-4 text-lg'>
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

			{/* Призыв к действию */}
			<section id='contact' className='py-20 px-6 bg-white/30'>
				<div className='max-w-3xl mx-auto text-center'>
					<h2 className='text-3xl md:text-4xl font-bold mb-6'>
						Сделайте первый шаг прямо сейчас!
					</h2>
					<p className='text-xl mb-8'>
						Места в группах ограничены. Запишитесь на тренировку и активируйте
						лучшую версию себя!
					</p>
					<button className='bg-violet-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-violet-700 transform hover:-translate-y-1 transition-all'>
						Записаться на тренировку
					</button>
				</div>
			</section>

			{/* Подвал */}
			<footer className='py-8 text-center text-sm opacity-80'>
				<p>© {new Date().getFullYear()} DanceClub. Все права защищены.</p>
			</footer>
		</div>
	)
}
