<script setup>
import Card from './components/card.vue';
import Navbar from './components/Navbar.vue';
import ParentComponent from './components/ParentComponent.vue';

// Dummy data for cards
const cards = [
  {
    title: 'Card 1',
    text: 'This is the text for Card 1',
    buttonText: 'Learn More',
    cardButtonLink: 'https://example.com/card1',
  },
  {
    title: 'Card 2',
    text: 'This is the text for Card 2',
    buttonText: 'Learn More',
    cardButtonLink: 'https://example.com/card2',
  },
  {
    title: 'Card 3',
    text: 'This is the text for Card 3',
    buttonText: 'Learn More',
    cardButtonLink: 'https://example.com/card3',
  },
  {
    title: 'Card 4',
    text: 'This is the text for Card 4',
    buttonText: 'Learn More',
    // cardButtonLink: 'https://example.com/card4',
  },
];
</script>

<template>
  <Navbar title="My App" />
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <ParentComponent class="row justify-content-center justify-content-md-start mx-3 gap-3">
    <Card
      v-for="(card, index) in cards"
      :key="index"
      :cardTitle="card.title"
      :cardText="card.text"
      :cardButtonText="card.buttonText"
      :cardButtonLink="card.cardButtonLink"
    />
  </ParentComponent>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
