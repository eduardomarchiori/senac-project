<template>
  <header>
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Senac_logo.svg/2560px-Senac_logo.svg.png"
        alt="logo"
      />
    </div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/register">Cadastrar</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderApp",
};
</script>

<style scoped>
header {
  background-color: white;
  padding: 12px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  gap: 1rem;
}

img {
  width: 60px;
}

a {
  text-decoration: none;
  color: #004272;
  font-size: 18px;
}
</style>
