import React, {ReactNode} from 'react'

import {Colors} from 'ui/theme'

export type PageProps = {
	children: ReactNode
}

export const Page = ({children}: PageProps) => {
	return (
		<>
			{children}

			<style jsx global>{`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
					-webkit-font-smoothing: antialiased;
				}

				body {
					font-family: 'Inter';
					background-color: ${Colors.Background};
					color: ${Colors.White};
				}

				svg {
					vertical-align: middle;
				}

				img {
					max-width: 100%;
					width: 100%;
				}
			`}</style>
		</>
	)
}
