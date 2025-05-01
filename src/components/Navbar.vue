<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-gold">
    <div class="container">
      <router-link class="navbar-brand text-dark" to="/">
        Star Wars Portal
      </router-link>
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/">Home</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Estilos dorados firmes */
.navbar.bg-gold {
  background: linear-gradient(135deg, #ffd700 0%, #daa520 100%);
  border-bottom: 2px solid #b8860b;
}

.navbar-brand {
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 1px;
}

.text-dark {
  color: #1a1a1a !important;
}

.nav-link {
  font-weight: 500;
  padding: 0.5rem 1rem;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.router-link-active {
  font-weight: bold;
  text-decoration: underline;
  text-underline-offset: 5px;
}
</style>