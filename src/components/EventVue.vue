<template>
    <div :class="`col-12-${event.col}`" :id="`event-${event.id}`">
        <div class="card my-3 text-white p-4 pb-0">
            <div class="card-body">
                <h5 class="card-title" style="font-size: 180%;">{{event.title}}</h5>
                <p class="card-text">{{event.description}}</p>
                <a href="#" class="btn btn-outline-light rounded-0 my-3">Go somewhere</a>
            </div>
        </div>
    </div>

</template>

<script>
    export default{
        props : [
            'event'
        ]
    }
</script>
    
<style scoped>
    .card{
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.3);
      backdrop-filter: blur( 25px );
      -webkit-backdrop-filter: blur( 25px );
      border-radius: 10px;
      border: 2px solid rgba( 255, 255, 255, 0.7 );
      height: 80vh;
    }
    .btn{
        transition: 0.3s;
    }
</style>