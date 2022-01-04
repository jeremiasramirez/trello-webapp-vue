<template>
    <div>
        <img class="logo" src="../../../public/logo.png" alt="logo">
    </div>

     <section class="container__spinning__loading">
        <article class="spinning__loading"></article>
    </section> 
</template>

<script>
export default {
    name: 'StartPage',
    mounted(){
        let i=0;
        let loading=setInterval(()=>{
            i++;
            if(i==2){
                 clearInterval(loading);
                 this.$router.push("/home")
            }

        },2000);
    }
}
</script>

<style>
    .logo{
        border-radius:50%;
    }

     .container__spinning__loading{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top:30px;
        }    
        .spinning__loading{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border-left:3px solid rgb(94, 128, 238); 
            animation: scaleOnScale .4s infinite linear;
        }

      
        @keyframes scaleOnScale {
            from{
                transform: rotate(-360deg);
            }
            to{
                transform: rotate(0);
            }
        }
</style> 