// used for default user profile pic
export const defaultImg = 
'https://sites.nicholas.duke.edu/clarklab/files/2011/01/default_profile-d80441a6f25a9a0aac354978c65c8fa9.jpg'

// used for benefits slides on landing page
export const benefitsSlides = [
    {
        index: 0,
        img: 'benefits-image-1.png',
        cta: 'Sign Up',
        color: 'button-slide-1',
        description: 'Interact with celebrities for unforgettable moments, gaining motivation, guidance, and personal inspiration for your own aspirations.'
    },
    {
        index: 1,
        img: 'benefits-image-2.png',
        cta: 'Join as Talent',
        color: 'button-slide-2',
        description: 'Connect directly with your fans in offline encounters, fostering more personal connection that goes beyond social media.'
    },
    {
        index: 2,
        img: 'benefits-image-3.png',
        cta: 'Join as Business',
        color: 'button-slide-3',
        description: 'Collaborate with celebrities for engaging content, promotions, and partnerships to reach a wider audience and increase brand awareness.'
    }
]

// hardcoded data used in main browse page
export const filterItems = ['Show All', 'Featured', 'Actors', 'Athletes',
    'Comedians', 'Creators', 'Musicians', 'Professionals', 'Reality TV']

// do not forget to add this to db model (used in collab detail page & modal)
export const categories = ['shopping', 'fashion', 'consultation', 'style']

// interests in fan signup
export const allInterests = ['lifestyle', 'fashion', 'beauty', 'travel', 'health & fitness', 'food & drinks',
    'entertainment', 'art & culture', 'photography', 'music & dance', 'gardening',
    'finance', 'volunteering', 'pets & animals', 'camping', 'gaming', 'education',
    'technology', 'reading', 'fishing', 'meditation', 'sports', 'comedy']

// categories in celebrity signup
export const allCategories = ['lifestyle', 'fashion', 'beauty', 'travel', 'health & fitness', 'food & drinks',
    'entertainment', 'art & culture', 'photography', 'music & dance', 'entrepeneur & business',
    'finance', 'non-profit & social causes', 'pets & animals', 'green & sustainable', 'gaming', 'education',
    'automotive & transportation', 'technology', 'other', 'sports', 'comedy']

// genders used in celebrity signup
export const genders = ['male', 'female', 'transgender', 'non-binary', 'other']

// used to check for valid URL input
export const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}([\/\w\.-]*)*\/?$/