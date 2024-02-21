
<template>
    <div class="w-100" id="schedule">
        <TimeLine/>
        <EventsPage />
    </div>
</template>

<style scoped>
#schedule{
    min-height: 100vh;
}
</style>

<script>
import EventsPage from '@/components/EventsPage.vue';
import TimeLine from '@/components/TimeLine.vue';

export default{
    name: "schedulePage",
    components: { TimeLine, EventsPage }
}

</script>