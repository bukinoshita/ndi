import React from 'react'

import {Page} from 'layouts/page'
import {Weight} from 'ui/theme'

if ('document' in global) {
	const vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh}px`)

	window.addEventListener('resize', () => {
		// We execute the same script as before
		const vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', `${vh}px`)
	})
}

const Home = () => {
	return (
		<Page>
			<main>
				<h1>não diga isso.</h1>
			</main>

			<style jsx>{`
				main {
					display: flex;
					align-items: center;
					min-height: calc(var(--vh, 1vh) * 100);
					text-align: center;
				}

				h1 {
					text-align: center;
					font-weight: ${Weight.Medium};
					display: inline-block;
					margin-left: auto;
					margin-right: auto;
					font-size: 18px;
				}
			`}</style>
		</Page>
	)
}

export default Home
