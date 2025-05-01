<template>
  <div class="planets-page">
    <div class="container p-5 content-wrapper">
      <h1 class="text-center mb-5 page-title">Planetas de Star Wars</h1>

      <!-- Loader -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-warning" role="status"></div>
      </div>

      <!-- Planetas -->
      <div v-else class="row row-cols-1 row-cols-md-3 g-4 mb-4">
        <Card 
          v-for="planet in planets" 
          :key="planet.url" 
          :planet="planet" 
        />
      </div>

      <!-- Paginación -->
      <div class="d-flex justify-content-center gap-3 pagination-controls">
        <button 
          @click="loadPrevPage" 
          :disabled="currentPage === 1"
          class="btn btn-outline-warning"
        >
          Anterior
        </button>
        
        <span class="align-self-center page-indicator">
          Página {{ currentPage }} de {{ totalPages }}
        </span>
        
        <button 
          @click="loadNextPage" 
          :disabled="currentPage === totalPages"
          class="btn btn-outline-warning"
        >
          Siguiente
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getPlanetsPage } from '../services/swapiService'
import Card from '../components/Card.vue'

const planets = ref([])
const loading = ref(true)
const currentPage = ref(1)
const totalPages = ref(1)

const loadPlanets = async (page = 1) => {
  try {
    loading.value = true
    const response = await getPlanetsPage(page)
    planets.value = response.data.results
    totalPages.value = Math.ceil(response.data.count / 10)
  } catch (error) {
    console.error('Error:', error)
  } finally {
    loading.value = false
  }
}

const loadNextPage = () => {
  currentPage.value++
  loadPlanets(currentPage.value)
}

const loadPrevPage = () => {
  currentPage.value--
  loadPlanets(currentPage.value)
}

onMounted(() => loadPlanets(1))
</script>

<style scoped>
.planets-page {
  background: 
    linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1400&auto=format&fit=crop') center/cover fixed;
  min-height: 100vh;
  padding: 20px;
}

.content-wrapper {
  background-color: rgba(10, 10, 30, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.page-title {
  color: #ffd700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 215, 0, 0.3);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-indicator {
  color: #ffffff;
  font-weight: 500;
  min-width: 120px;
  text-align: center;
}

.pagination-controls {
  padding: 20px 0;
  margin-top: 30px;
  border-top: 1px solid rgba(255, 215, 0, 0.3);
}
</style>