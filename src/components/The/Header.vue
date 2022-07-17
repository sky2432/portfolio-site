<template>
  <header class="header">
    <div class="container">
      <h1 class="header-logo">
        <a href="."><i class="fas fa-paw icon"></i>SORA <span>ITO</span></a>
      </h1>
      <nav class="gnav">
        <ul class="gnav-list">
          <li class="gnav-item">
            <router-link class="gnav-item" :to="{ name: 'Top', hash: '#works' }"
              >WORKS</router-link
            >
          </li>
          <li class="gnav-item">
            <router-link class="gnav-item" :to="{ name: 'Top', hash: '#skill' }"
              >SKILL</router-link
            >
          </li>
          <li class="gnav-item">
            <router-link class="gnav-item" :to="{ name: 'Top', hash: '#about' }"
              >ABOUT</router-link
            >
          </li>
          <li class="gnav-item">
            <router-link
              class="gnav-item"
              :to="{ name: 'Top', hash: '#contact' }"
              >CONTACT</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 5px 10px -6px rgba(0, 0, 0, 0.1);
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
}

.header-logo {
  font-size: 20px;
  font-weight: bold;
  line-height: 1.2;
  margin-right: 20px;
  letter-spacing: 0.05em;
}

.header-logo a {
  color: #333;
}

.gnav-list {
  display: flex;
  justify-content: space-between;
  list-style: none;
}

.gnav-item:not(:last-child) {
  margin-right: 20px;
}

.gnav-item a {
  position: relative;
  font-size: 13px;
  font-weight: bold;
  display: inline-block;
  padding: 5px 0;
  transition: 0.3s;
  letter-spacing: 0.05em;
  color: #333;
}

.gnav-item a:after {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 3px;
  content: '';
  transition: 0.3s;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #333;
}

.gnav-item a:hover:after {
  width: 100%;
}
</style>
