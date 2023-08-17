"use client";

import '../globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import type { AppProps } from 'next/app'

const client = new ApolloClient({
	uri: process.env.SERVER_URI || 'http://localhost:3001',
	cache: new InMemoryCache(),
});

const kindeDomain = process.env.NODE_ENV === "development" ? 'https://famefusion-pig.eu.kinde.com' : 'https://famefusion.kinde.com'
const redirectUri = process.env.NODE_ENV === "development" ? 'http://localhost:3000/' : 'https://famefusion-app.vercel.app/'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<KindeProvider>
				<Component {...pageProps} />
			</KindeProvider>
		</ApolloProvider>
	)
}

export default MyApp