<script setup>
import Card from '@/components/card.vue';
import ParentComponent from '@/components/ParentComponent.vue';
import logoImage from '@/assets/logo.svg';

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
  <header>
    <img alt="Vue logo" class="logo" :src="logoImage" width="125" height="125" />
  </header>

  <ParentComponent class="row justify-content-center justify-content-md-start mx-3 mt-2 gap-3">
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
/* Component scoped styles */
</style>
