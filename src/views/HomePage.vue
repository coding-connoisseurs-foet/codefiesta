<template>
    <div class="container-fluid w-100">
        <div class="row cf-head-wrapper p-5 justify-content-between align-items-center">
            <div class="col-md-auto col-12">
                <div class="text-md-start text-center">
                    <HeaderView/>
                    <h1 id="cf-head" class="my-3 text-white">
                        Code Fiesta
                    </h1>
                    <h4 class="text-white" id="cf-tagline">The flagship coding festival of FoET, Lucknow University</h4>
                    <div id="main-announce">
                        <a href="#" class="btn btn-lg my-5 btn-outline-light rounded-0" id="cf-register">
                            <span class="glowing-text">
                                REGISTER NOW
                            </span>
                        </a>
                    </div>
                   
                </div>
            </div>
            <div class="col-md-auto col-12 text-md-start text-center">
                <TimerVue event_date="2023-09-22 12:00"/>
            </div>
        </div>
    </div>
</template>

<style>
    :root{
        --glow-color: #fff;
    }
    @import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');
    #cf-head{
        font-family: 'Patua One', cursive;
        animation: slow 1s ease-in-out 0.5s forwards;
        text-transform: uppercase;
        font-size: 10vw;
        min-width: 100px;
    }
    .cf-head-wrapper{
        min-height: 100vh;
        background-image: linear-gradient(to bottom, #0000 30%, #000000);
    }
    #cf-tagline{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        letter-spacing: 5px;
        font-size: 90%;
        text-transform: uppercase;
    }
    /* #cf-register{
        text-transform: uppercase;
        letter-spacing: 5px;
        transition: 0.2s ease-in-out;
    } */
    
    @keyframes slow {
        0%{
            opacity: 0%;
            filter: blur(10px);
        }
        100%{
            filter: blur(0);
        }
    }
    #cf-register {
        position: relative;
        color: var(--glow-color);
        cursor: pointer;
        border: 0.15em solid var(--glow-color);
        border-radius: 0.45em;
        background: none;
        perspective: 5rem;
        letter-spacing: 5px;

        -webkit-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
            0px 0px 0.5em 0px var(--glow-color);
        -moz-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
            0px 0px 0.5em 0px var(--glow-color);
        box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
            0px 0px 0.5em 0px var(--glow-color);
        animation: border-flicker 2s linear infinite;
    }

    #cf-register::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.7;
        filter: blur(1em);
        transform: translateY(120%) rotateX(95deg) scale(1, 0.35);
        background: var(--glow-color);
        pointer-events: none;
    }

    #cf-register::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        z-index: -1;
        background-color: var(--glow-color);
        box-shadow: 0 0 2em 0.2em var(--glow-color);
        transition: opacity 100ms linear;
    }

    #cf-register:hover {
        color: rgba(0, 0, 0, 0.8);
        text-shadow: none;
        animation: none;
    }


    #cf-register:hover:before {
        filter: blur(1.5em);
        opacity: 1;
    }

    #cf-register:hover:after {
        opacity: 1;
    }

    @keyframes faulty-flicker {
    0% {
        opacity: 0.1;
    }
    2% {
        opacity: 0.1;
    }
    4% {
        opacity: 0.5;
    }
    19% {
        opacity: 0.5;
    }
    21% {
        opacity: 0.1;
    }
    23% {
        opacity: 1;
    }
    80% {
        opacity: 0.5;
    }
    83% {
        opacity: 0.4;
    }

    87% {
        opacity: 1;
    }
    }

    @keyframes text-flicker {
    0% {
        opacity: 0.1;
    }

    2% {
        opacity: 1;
    }

    8% {
        opacity: 0.1;
    }

    9% {
        opacity: 1;
    }

    12% {
        opacity: 0.1;
    }
    20% {
        opacity: 1;
    }
    25% {
        opacity: 0.3;
    }
    30% {
        opacity: 1;
    }

    70% {
        opacity: 0.7;
    }
    72% {
        opacity: 0.2;
    }

    77% {
        opacity: 0.9;
    }
    100% {
        opacity: 0.9;
    }
    }

    @keyframes border-flicker {
    0% {
        opacity: 0.1;
    }
    2% {
        opacity: 1;
    }
    4% {
        opacity: 0.1;
    }

    8% {
        opacity: 1;
    }
    70% {
        opacity: 0.7;
    }
    100% {
        opacity: 1;
    }
    }
    #cf-cc{
        
    }
</style>

<script>
import HeaderView from '@/components/HeaderView.vue';
import TimerVue from '@/components/TimerVue.vue';
    export default {
        name: 'HomePage',
        components: {
            TimerVue,
            HeaderView
        }
    }
</script>
