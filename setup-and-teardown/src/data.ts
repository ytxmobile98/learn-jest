const data: Record<string, {
    food?: string;
}> = {
    'San Juan': {
        food: 'Mofongo',
    },
    'Vienna': {
        food: 'Wiener Schnitzel',
    },
}

export function isCity(city: string): boolean {
    return city in data;
}

export function isValidCityFoodPair(city: string, food: string): boolean {
    return data?.[city]?.food === food;
}

export function initializeCityDatabase() {
    console.info('Initialized city database');
}

export function initializeFoodDatabase() {
    console.info('Initialized food database');
}

export function clearCityDatabase() {
    console.info('Cleared city database');
}