<template>
  <div class="event-page skyline">
    <h1 class="heading text-center display-4 fw-bold text-white">SEMINARS AND SPEAKERS</h1>
    <EventsPage />
  </div>
</template>

<script>
import EventsPage from '@/components/EventsPage.vue';

export default {
  name: "SpeakerPage",
  components: { EventsPage }
};
</script>
