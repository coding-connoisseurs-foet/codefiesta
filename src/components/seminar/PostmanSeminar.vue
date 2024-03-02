<template>
    <div class="rule">
        <h1 class="heading">
            <span>{{ event.name }}</span>
        </h1>
        <p class="highlight">Description : </p>
        <p>{{ event.overview }}</p>

        <!-- ---------speaker card --------- -->
        <p class="highlight">Meet the Speakers :</p>
        <div class="speaker d-flex align-items-center justify-content-evenly w-100">
            <div class="pb-5 anime" v-for="speaker in event.speakers" :key="speaker.title">
                <div class="card text-center text-white">
                    <img :src="`https://github.com/${speaker.github}.png`" class="card-img-top" :alt="imageAlt" />
                    <div class="card-body w-100  d-flex flex-column align-items-center">
                        <h5 class="card-title w-100">{{ speaker.title }}</h5>
                        <p class="card-text">
                            <a class="btn border" :href="`https://github.com/${speaker.github}`" target="_blank">View On
                                Github</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- ---------speaker card --------- -->
        <p class="highlight">About Postman :</p>
        <p>{{ event.about }}</p>

        <p><span>Platform : </span> <a :href="event.link">www.postman.com</a></p>
        <div id="main-announce" class="w-100">
            <a href="https://lu.ma/s1ah6f4l" class="btn btn-lg mt-2 btn-outline-light rounded-0 cf-register"><span
                    class="glowing-text">Participate NOW</span></a>
        </div>
    </div>
</template>
  
<style>
.anime h5 {
    color: #faf1e6;
    font-size: 1.7em;
}

.anime {
    transition: 0.3s transform;
    width: 302px;
    margin-top: 11px;
}

.anime:hover {
    transform: scale(1.05);
}

.rule {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.rule p {
    width: 80%;
    color: #fff;
    font-size: 1.5em;
}

.rule p a {
    color: #fff;
    text-decoration: none;
}

.rule p a:hover {
    text-decoration: underline;
    color: var(--theme1);
}

.highlight {
    font-size: 2em !important;
    color: var(--theme1) !important;
    font-weight: 600 !important;
}

p span {
    color: var(--theme1);
    font-weight: 500;
    font-size: larger;
}

.speaker {
    width: 100%;
    display: flex;
}

.card-text .btn {
    background-color: var(--theme1);
    width: 90%;
    color: #000;
}

.card-text .btn:hover {
    background-color: #000;
    text-decoration: none;
}

.card {
    background-color: rgb(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(25px);
    box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.3);
}
</style>
  
<script>
export default {
    name: "PostmanSeminar",
    data() {
        return {
            event: {
                name: "All About API",
                overview:
                    "A comprehensive seminar on API basics and Postman tailored to equip participants with a solid understanding of API basics, including request-response mechanisms, methods, and their applications. Dive deep into practical sessions where you'll set up a project on Replit, design APIs employing every key method (GET, POST, PUT, DELETE), and master testing them using Postman.",
                speakers: [
                    {
                        title: "Siddhartha Mishra",
                        github: "SiddharthaMishra-dev",
                    },
                    {
                        title: "Arvind Srivastav",
                        github: "alwenpy",
                    },
                ],
                about: "Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.",
                link: "https://www.postman.com/"
            },
        };
    },
};
</script>