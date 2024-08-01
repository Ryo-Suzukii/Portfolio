<template>
  <div class="map-wrapper">
    <div class="map-controls">
      <label for="style-select">Map Style:</label>
      <select id="style-select" v-model="selectedStyle" @change="updateMapStyle">
        <option v-for="style in styles" :key="style.value" :value="style.value">
          {{ style.label }}
        </option>
      </select>
    </div>
    <div id="map" class="map-container"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';

export default {
  name: 'Map',
  data() {
    return {
      map: null,
      selectedStyle: 'mapbox://styles/mapbox/streets-v11',
      styles: [
        { value: 'mapbox://styles/mapbox/streets-v11', label: 'Streets' },
        { value: 'mapbox://styles/mapbox/outdoors-v11', label: 'Outdoors' },
        { value: 'mapbox://styles/mapbox/light-v10', label: 'Light' },
        { value: 'mapbox://styles/mapbox/dark-v10', label: 'Dark' },
        { value: 'mapbox://styles/mapbox/satellite-v9', label: 'Satellite' },
        { value: 'mapbox://styles/mapbox/satellite-streets-v11', label: 'Satellite Streets' }
      ]
    };
  },
  mounted() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3V6LXJ5IiwiYSI6ImNsdmc5MmJoeDB1OW4ybnQ3dG00OG95cGsifQ.NgI5LK0VcDofV_dTKYtIOw';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.selectedStyle,
      center: [139.6917, 35.6895],
      zoom: 9
    });
  },
  methods: {
    updateMapStyle() {
      if (this.map) {
        this.map.setStyle(this.selectedStyle);
      }
    }
  },
  beforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }
};
</script>

<style>
.map-wrapper {
  position: relative;
}

#style-select {
  margin-bottom: 10px;
  position: relative;
  z-index: 10;
}

.map-controls {
  position: absolute;
  top: 10px;
  left: 10px;
  background: white;
  padding: 10px;
  border-radius: 4px;
  font-size: large;
}

.map-container {
  width: 100%;
  height: 100vh;
}
</style>
