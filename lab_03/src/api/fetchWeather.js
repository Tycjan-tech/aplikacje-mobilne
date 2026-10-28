
const URL = 'https://api.openweathermap.org/data/2.5/weather';


const API_KEY = '76b52bd3f59f414486f6027949d5465a';

export async function fetchWeather(query) {
  const params = new URLSearchParams({
    q: query.trim().toLowerCase(),
    units: 'metric',
    lang: 'pl',
    appid: API_KEY,
  });

  let response;

  try {
    response = await fetch(`${URL}?${params}`);
  } catch {
    throw new Error('Brak połączenia z internetem.');
  }

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Nie znaleziono miasta.');
    }

    if (response.status === 401) {
      throw new Error(
        'Nieprawidłowy lub nieaktywny klucz API.'
      );
    }

    throw new Error(
      `Błąd serwera pogody (${response.status}).`
    );
  }

  return response.json();
}
