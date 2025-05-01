<template>
  <div class="planet-card">
    <div class="card-header">
      <h3>{{ planet.name }}</h3>
      <span class="gravity">Gravedad: {{ planet.gravity }}</span>
    </div>
    <div class="card-body">
      <div class="info-row">
        <span class="label">Clima:</span>
        <span class="value">{{ planet.climate }}</span>
      </div>
      <div class="info-row">
        <span class="label">Terreno:</span>
        <span class="value">{{ planet.terrain }}</span>
      </div>
      <div class="info-row">
        <span class="label">Población:</span>
        <span class="value">{{ formattedPopulation }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    planet: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedPopulation() {
      if (this.planet.population === 'unknown') return 'Desconocida';
      return parseInt(this.planet.population).toLocaleString();
    }
  }
}
</script>

<style scoped>
.planet-card {
  background: #2a2a4a;
  border: 2px solid #ffd700;
  border-radius: 10px;
  color: white;
  height: 100%;
  transition: transform 0.3s ease;
}

.planet-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(255, 215, 0, 0.2);
}

.card-header {
  padding: 1rem;
  border-bottom: 1px solid #ffd700;
}

.card-header h3 {
  color: #ffd700;
  margin: 0;
  font-size: 1.4rem;
}

.gravity {
  color: #aaaaaa;
  font-size: 0.9rem;
}

.card-body {
  padding: 1.2rem;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px dashed rgba(255, 215, 0, 0.3);
}

.label {
  color: #00c8ff;
  font-weight: 600;
}

.value {
  color: #ffffff;
}
</style>