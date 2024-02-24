
<template>
    <div  id="schedule">
        <TimeLine/>
        <EventsPage />
    </div>
</template>

<style>
</style>

<script>
import EventsPage from '@/components/EventsPage.vue';
import TimeLine from '@/components/TimeLine.vue';

export default{
    name: "schedulePage",
    components: { TimeLine, EventsPage }
}

</script>