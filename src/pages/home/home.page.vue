<template>

   <!-- banner  -->
    <Banner />


    <!-- items -->
    <section class="container__do">
        <!-- pending items-->
        <article class="pending">
            
            <div class="title__module">
                <h1>Pending</h1> 
            </div>


            <div class="task">
                <div class="title">
                    <h1 class="title__task">{{"Title task de la maravilla ultra veloz".substring(0,20)+"..."}}</h1> 
                    <span class="date__task">10 march 2021</span>
                </div>
                <!--content task  -->
                <div class="content">
                       <p class="content__task">
                         {{"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe assumenda sapiente modi sed, voluptate similique ad quaerat ab commodi officiis,".substring(0,90) + "..."}}
                    </p>
                </div>


                   <!-- options task  -->


                   <div class="options__task">
                      
                       <button class="option">
                           <img src="../../assets/images/share.svg" alt="option">
                       </button>
                    
                     

                        <button class="option">
                           <img src="../../assets/images/move-to.svg" alt="option">
                       </button>
                        
                        
                        <button class="option">
                           <img src="../../assets/images/delete.svg" alt="option">
                       </button>


                       <button class="option">
                           <img src="../../assets/images/do.svg" alt="option">
                       </button>

                        
                          <button class="option">
                           <img src="../../assets/images/resize.svg" alt="option">
                       </button>
                   </div>
            </div>

        </article>

        <!-- doing -->
          <!-- <article class="doing">
            <h1>Hola</h1>
        </article> -->

        <!-- do -->
          <!-- <article class="do">
            <h1>Hola</h1>
        </article> -->
    </section>

    
</template>
 

 


<script>
// banner
import Banner from "../../components/home/banner/banner";

import "./home.page.css";
export default {
    data(){
        return {
            pending: [

            ],
            doing: [

            ],
            do: [

            ]
        }
    },

    components:{
        Banner
    },

    addTo(){}




}
</script>































