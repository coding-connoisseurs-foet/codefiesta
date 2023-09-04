<template>
    <div id="timer" class="my-3">
        <span>battle begins in </span>
        <div id="actual-time">
            <span>{{ this.time.days }} days</span><br>
            <span>{{ this.time.hour }} hours</span><br>
            <span>{{ this.time.minute }} minutes</span><br>
            <span>{{ this.time.second }} seconds</span>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
    name: 'TimerVue',
    data() {
        return {
            time: ''
        }
    },
    props: {
        event_date: String
    },
    mounted() {
        this.countdown()
    },
    methods: {
        countdown() {
            setInterval(() => {
                let now = dayjs() + 5.5 * 60 * 60 * 1000
                let then = dayjs(this.event_date)
                let countdown = dayjs(then - now)
                this.time = {
                    days : countdown.format('DD') - "01",
                    hour: countdown.hour(),
                    minute: countdown.minute(),
                    second: countdown.second()
                }
            }, 1000)
        }
    }
}

</script>

<style>
    #timer{
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 5px;
    }
    #timer #actual-time{
        font-size: 200%;
        font-weight: 200;
    }
</style>
