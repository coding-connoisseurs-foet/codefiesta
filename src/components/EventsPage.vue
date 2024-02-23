<template>
    <div class="sticky-parent" id="events">
        <h1>Day1</h1>
        <div class="row justify-content-start">
            <EventVue v-for="event in events" :event="event" :key="event.id"></EventVue>
        </div>
    </div>
</template>

<style scoped>
#events{
    min-height: 100vh;
}
</style>

<script>
    import EventVue from '@/components/EventVue.vue'
    export default{
        data(){
            return {
                events : [
                    {
                        "id" : 1,
                        "title" : "Event1",
                        "col" : 5,
                        "description" : "This is event 1"
                    },
                    {
                        "id" : 2,
                        "title" : "Event2",
                        "col" : 7,
                        "description" : "This is event 2"
                    },
                    {
                        "id" : 3,
                        "title" : "Event3",
                        "col" : 4,
                        "description" : "This is event 3"
                    }
                ]
            }
        },
        components : {
            EventVue
        }
    }
</script>