const apiKey = process.env.EXPO_PUBLIC_API_KEY;
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export const fetchWeatherData = async (city: string) => {
  try {
    const response = await fetch(url + city + `&appid=${apiKey}`);
    const data = await response.json();
    if (response.ok) {
      return { data, error: null };
    } else {
      return { data: null, error: data.message };
    }
  } catch (error) {
    return { data: null, error: "Failed to fetch weather data" };
  }
};
