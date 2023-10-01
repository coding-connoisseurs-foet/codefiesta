<template>
    <div id="countdown" style="letter-spacing: 5px;">
        <div>
            <span style="font-size: 2.6em;">{{ days }}</span>
            <span style="font-size: 1em;"> Days</span>
        </div>
        <div>
            <span style="font-size: 2.6em;">{{ hours }}</span>
            <span style="font-size: 1em;"> Hours</span>
        </div>
        <div>
            <span style="font-size: 2.6em;">{{ minutes }}</span>
            <span style="font-size: 1em;"> Minutes</span>
        </div>
        <div>
            <span style="font-size: 2.6em;">{{ seconds }}</span>
            <span style="font-size: 1em;"> Seconds</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TimerVue',
    data() {
        return {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
        }
    },
    props: {
        event_date: String
    },
    mounted() {
        this.countdown()
        setInterval(this.countdown, 1000);
    },
    methods: {
        countdown() {
            var current_date = new Date().getTime();
            var target_date = new Date(this.event_date).getTime();
            var seconds_left = (target_date - current_date) / 1000;

            this.days = this.pad(parseInt(seconds_left / 86400));
            seconds_left = seconds_left % 86400;

            this.hours = this.pad(parseInt(seconds_left / 3600));
            seconds_left = seconds_left % 3600;

            this.minutes = this.pad(parseInt(seconds_left / 60));
            this.seconds = this.pad(parseInt(seconds_left % 60));

        },
        pad(n) {
            return (n < 10 ? '0' : '') + n;
        }
    }
}
</script>

<style>
    #countdown{
        color: white;
        display: flex;
        margin: 35px 32%;
    }
    #countdown div{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 10px;
    }
    #countdown div span:first-child{
        padding: 5px 10px;
        border-radius: 5px;
        color: #fff;
    }
</style>
