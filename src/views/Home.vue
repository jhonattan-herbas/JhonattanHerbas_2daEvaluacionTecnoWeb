<template>
  <div class="home-container">
    <div class="jumbotron">
      <h1>Explora la Galaxia</h1>
      <p class="subtitle">Descubre los planetas de Star Wars</p>
      <router-link to="/planets" class="cta-button">
        Comenzar Exploración
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
              url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1471&auto=format&fit=crop');
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.jumbotron {
  background: rgba(10, 10, 30, 0.8);
  border: 2px solid #ffd700;
  border-radius: 15px;
  padding: 3rem;
  text-align: center;
  max-width: 800px;
}

h1 {
  color: #ffd700;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
}

.subtitle {
  color: #00c8ff;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.cta-button {
  background: linear-gradient(to right, #ffd700, #ffaa00);
  color: #000;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
}
</style>