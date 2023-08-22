"use client";

import '../globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import type { AppProps } from 'next/app'
import Head from 'next/head';
import icon from '../../public/favicon/favicon.ico'
import appleIcon from '../../public/favicon/apple-touch-icon.png'

const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_SERVER_URI || 'http://localhost:3001',
	cache: new InMemoryCache(),
});

const kindeDomain = process.env.NODE_ENV === "development" ? 'https://famefusion-pig.eu.kinde.com' : 'https://famefusion.kinde.com'
const redirectUri = process.env.NODE_ENV === "development" ? 'http://localhost:3000/' : 'https://famefusion-app.vercel.app/'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<KindeProvider>
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href={appleIcon.src} />
					<link rel="icon" href={icon.src} />
				</Head>
				<Component {...pageProps} />
			</KindeProvider>
		</ApolloProvider>
	)
}

export default MyApp