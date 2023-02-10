<template>
  <section class="hero is-info is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Vue Form Demo
        </h1>
        </h2>
        <router-link to="/feedback" class="button is-primary is-large">Get started</router-link>
        <p>This is a demo for the NJ meetup</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Home',
  created () {
  }
}
</script>

<style scoped>
.button {
  min-width: 250px;
  margin-bottom: 15px;
}

p {
  margin-bottom: 15px;
}
</style>
