<template>
  <div>
    <header class="header">
      <div class="nav-container">
        <router-link to="/" class="top-icon">
          <font-awesome-icon icon="fa-solid fa-house-user" />
        </router-link>
        <router-link to="/profile" class="nav-item">
          <font-awesome-icon icon="fa-solid fa-address-card" />
          Profile
        </router-link>
        <router-link to="/works" class="nav-item">
          <font-awesome-icon icon="fa-solid fa-box-archive" />
          Works
        </router-link>
        <router-link to="/contact" class="nav-item">
          <font-awesome-icon icon="fa-solid fa-envelope" />
          Contact
        </router-link>
        <router-link to="/map" class="nav-item">
          <font-awesome-icon icon="fa-solid fa-map-marked-alt" />
          Map
        </router-link>
      </div>
      <input type="color" class="color-picker" @input="pickColor" />
    </header>
    
    <router-view />
  </div>
</template>

<script lang="ts">
  export default {
    methods: {
      pickColor(event: InputEvent) {
        const color = (event.target as HTMLInputElement).value;
        document.querySelector('.header')!.style.backgroundColor = color;
      },
    },
  };
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-image: linear-gradient(rgba(0,0,0,0.30),rgba(0,0,0,0.30)),url(/background.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.header {
  text-align: center;
  font-size: 18px;
  background-color: #43b5f3;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.top-icon {
  position: absolute;
  top: 50%;
  left: 20px;
  font-size: 300%;
  color: #fff;
  background-color: transparent;
  border: none;
  cursor: move;
  transform: translateY(-50%);
}

.nav-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-item {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: move;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  gap: 5px;
}

.nav-item:hover {
  background-color: rgba(0, 0, 0, 0.7);
  color: #00bfff;
}

.color-picker {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  top: 20px; /* ヘッダーの上に配置 */
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.color-picker::-webkit-color-swatch {
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.color-picker::-moz-color-swatch {
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
</style>
