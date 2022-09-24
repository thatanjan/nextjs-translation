import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const About = () => {
	const { locale, locales, push } = useRouter()

	const { t: translate } = useTranslation('about')

	return (
		<>
			<h1>Locale: {locale}</h1>

			<h2>{translate('hello world')}</h2>

			<h2>
				<Link href='/' locale={locale}>
					Go to home
				</Link>
			</h2>
		</>
	)
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['about'])),
			// Will be passed to the page component as props
		},
	}
}

export default About
