<template>
  <div :class="['h-screen', 'w-screen', 'flex', 'justify-center', 'bg-gray-400', textColor]">
    <div class="text-center">
      <h1 class="text-4xl font-bold mt-10 text-gray-800">Hava Durumu Uygulaması</h1>
      <div class="mt-6">
        <input 
          @keydown.enter="getWeather"
          v-model="city" 
          type="text" 
          placeholder="Şehir adı giriniz"
          class="border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 mt-4 text-gray-800"
        >
        <button @click="getWeather" class="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 focus:outline-none hover:bg-blue-600">Hava Durumu Ara</button>
      </div>
      <div v-if="loading" class="mt-8 text-gray-800">Veriler yükleniyor...</div>
      <div v-else-if="error" class="mt-8 text-red-600">Hata oluştu: {{ error }}</div>
      <div v-else-if="weather" class="mt-8">
        <h2 class="text-2xl font-semibold">{{ weather.name }} - {{ weather.sys.country }}</h2>
        <div class="flex items-center justify-center mt-4">
          <img :src="'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '.png'" :alt="weather.weather[0].description">
          <div class="ml-4">
            <p class="text-lg text-gray-800">{{ weather.weather[0].description }}</p>
            <p class="text-5xl font-bold text-gray-800">{{ Math.round(weather.main.temp) }}°C</p>
          </div>
        </div>
        <div class="mt-6 text-gray-800">
          <p><span class="font-semibold">En düşük sıcaklık:</span> {{ Math.round(weather.main.temp_min) }}°C</p>
          <p><span class="font-semibold">En yüksek sıcaklık:</span> {{ Math.round(weather.main.temp_max) }}°C</p>
          <p><span class="font-semibold">Nem:</span> {{ weather.main.humidity }}%</p>
          <p><span class="font-semibold">Rüzgar:</span> {{ Math.round(weather.wind.speed) }} m/s</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const city = ref(""); 
const loading = ref(false); 
const error = ref("");
const weather = ref(null);

const getWeather = async () => {
  if (!city.value) return; 

  loading.value = true;
  error.value = "";

  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=720e14a97c5d3d04e35f0f1190d02e20&units=metric`
    );
    weather.value = response.data;
    city.value = ""
  } catch (error) {
    error.value = "Hava durumu verileri alınamadı.";
  } finally {
    loading.value = false;
  }
};

const textColor = () => {
  if (weather.value) {
    const condition = weather.value.weather[0].main.toLowerCase();
    switch (condition) {
      case 'thunderstorm':
        return 'text-white';
      case 'drizzle':
      case 'rain':
        return 'text-white';
      case 'snow':
        return 'text-black';
      case 'clear':
        return 'text-black';
      case 'clouds':
        return 'text-white';
      default:
        return 'text-white';
    }
  } else {
    return 'text-white';
  }
};
</script>
