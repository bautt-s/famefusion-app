// used in price filter
export function calculateRange(arr: string[]): [number, number] {
    let bottom = 1;
    let upper = 120;

    arr.forEach(item => {
        if (item === '-30') {
            bottom = 1;
            upper = Math.min(30, upper);
        } else if (item === '30 - 40') {
            bottom = Math.max(30, bottom);
            upper = Math.min(40, upper);
        } else if (item === '40 - 50') {
            bottom = Math.max(40, bottom);
            upper = Math.min(50, upper);
        } else if (item === '+50') {
            bottom = Math.max(50, bottom);
            upper = 120;
        }
    });

    return [bottom, upper];
}

// used in about section (profile)
export function formatNumber(number: number) {
    let absNumber = Math.abs(number)
    const suffixes = ["", "k", "M", "B", "T"]
    let suffixIndex = 0

    while (absNumber >= 1000 && suffixIndex < suffixes.length - 1) {
        absNumber /= 1000
        suffixIndex++
    }

    const decimalPlaces = (suffixIndex === 0 || absNumber >= 100) ? 0 : (absNumber >= 10) ? 1 : 2

    return (number < 0 ? '-' : '') + absNumber.toFixed(decimalPlaces).replace(/\.?0+$/, '') + suffixes[suffixIndex]
}

// used in review section & modal (profile)
export const starReview = (stars: number) => {
    const starArray = []
    const intPart = Math.trunc(stars)

    for (let i = 0; i < intPart; i++) starArray.push('star')
    if (stars % 1 !== 0) starArray.push('half')
    if (starArray.length !== 5) {
        for (let j = starArray.length; j < 5; j++) starArray.push('empty')
    }

    return starArray
}

// used for the languages in booking components
export const capitalizeArray = (array: string[] | undefined) => {
    if (array) {
        return array.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
    } else return []
}

// used on fan signup (interests)
export const capitalizeWords = (inputString: string) => {
    let words = inputString.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(' ');
}