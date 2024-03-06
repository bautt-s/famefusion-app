# FameFusion -- Client
This is the repository for the FameFusion client. Below, you will find all dependencies, instruction and information regarding the app.

## Dependencies & installation
Client is made with Next.js on TypeScript, styled mostly with Tailwind CSS.
Other dependencies include:

 1. ApolloClient, to fetch data from the api.
 2. Kinde, which is an authentication service with a super simple setup and run up. It is currently being used due to authentication not being a main focus on the initial MVP, but it might be replaced by Auth0 or another similar library.
 3. Several styling libraries: MaterialUI (mainly for filters), Flowbite (for a diverse amount of UI elements), Tailwind Datepicker for a clean and easy datepicker, and Swiper for carousels. Plus, Tailwind and its needed dependencies.

To install them, simply run `npm install` inside the directory. To run the app in dev environment, run `npm run dev`.

## Environment variables
There are 7 needed environment variables that need to be defined. All of them, related to Kinde (authentication service). They all can be found in the [Kinde documentation](https://kinde.com/docs/), and they are: 

 1. *KINDE_SITE_URL*: main URL for the site. at the moment, set to localhost:3000 on dev environment.
 2. *KINDE_ISSUER_URL*: issuer provided by the respective Kinde provider.
 3. *KINDE_POST_LOGOUT_REDIRECT_URL*: user will be taken to this URL when they log out. at the moment, also set to localhost:3000 on dev environment.
 4. *KINDE_POST_LOGIN_REDIRECT_URL*: user will be taken to this URL when successfully logging in. at the moment, they are taken to /roles, which is a page made to redirect the user to home page if they are already registered and have a role. if they do not have a role, then they are not redirected to home, but instead to a screen prompting them with choosing one.
 5. *KINDE_CLIENT_ID*: self explaining.
 6. *NEXT_PUBLIC_ISSUER_URL*: same as issuer.
 7. *NEXT_PUBLIC_CLIENT_ID*: same as client ID.


## Known bugs & unfinished features
Below, a list of the bugs left unsolved, that need to be addressed as soon as possible.

 1. /roles page flickers when doing the behaviour that was described before in this text. visually, doesn't truly work like it should. so, either we take a different approach or find a way to fix it.
 2. filter accordions in /browse page do not work after interacting with the rest of the web app. haven't found the reason for this error yet, but maybe it would be better to implement different accordion UI from some other library.
 3. there are some things to be improved with responsible behaviour, mainly in /browse/:id pages, specifically on small desktop screens.
 4. there is a lot of placeholder data. it should be obvious which are and which are not, based on user interaction. 
 5. interests editing on celebrity edit page is not working at the moment.
 
 Speaking of unfinished features, last things that were being worked on, were celebrity profile editing, handling of users with both celebrity and fan roles, and handling how experiences can be managed by users once the payment process has concluded.
