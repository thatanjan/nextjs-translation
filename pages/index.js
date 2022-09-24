import { useRouter } from 'next/router'
import Link from 'next/link'

const Home = () => {
	const { locale, locales, push } = useRouter()
	console.log(locale)

	const handleClick = l => () => {
		push(`/`, undefined, { locale: l })

		/* push('/about', undefined, { locale: l }) */

		/* Not recommeneded */
		/* push(`/${l}/about`) */

		/* Not recommeneded */
		/* push(`/${l}`) */
		/* push(`/${l}/about`) */
	}

	return (
		<>
			<h1>{locale}</h1>

			<div>
				<h3>With useRouter</h3>
				<label for='cars'>Choose your locale: </label>

				{locales.map(l => (
					<button key={l} onClick={handleClick(l)}>
						{l}
					</button>
				))}
			</div>

			<div>
				<h3>With Link</h3>
				<h1>Choose your locale: </h1>

				{locales.map(l => (
					<h4 key={l}>
						<Link href={`/`} locale={l}>
							{l}
						</Link>
					</h4>
				))}
			</div>

			<div>
				<h1>Go to about page </h1>

				{locales.map(l => (
					<h2 key={l}>
						<Link href={`/about`} locale={l}>
							{l}
						</Link>
					</h2>
				))}
			</div>
		</>
	)
}

export default Home
