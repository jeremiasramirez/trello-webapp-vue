<template>

   <!-- banner  -->
    <Banner />


    <!-- container-->
    <section class="container__do">


        <!-- pending stacks-->
        <article class="pending" >
            
            <div class="title__module">
                <h1>Pending</h1> 
            </div>
            
            <div class="no-item" v-if="!pending.length">
                <img src="../../assets/images/do.svg" alt="">
                
            </div>

            <div class="task" v-for="( task, index ) in pending" :key="index">
                <div class="title">
                    <h1 class="title__task">{{ task.title }}</h1> 
                    <span class="date__task">{{ task.date }}</span>
                </div>

                <!--content task  -->
                <div class="content">
                       <p class="content__task">
                         {{ task.content}}
                    </p>
                </div>


                   <!-- options task  -->
                   <div class="options__task">
                      <button class="option">
                           <img src="../../assets/images/create.svg" alt="option">
                       </button>


                       <button class="option">
                           <img src="../../assets/images/share.svg" alt="option">
                       </button>
                    
                     

                        <button class="option" >
                           <img src="../../assets/images/move-to.svg" alt="option">
                         
                       </button>
                        
                        
                        <button class="option" v-on:click="deletePending(index)">
                           <img src="../../assets/images/delete.svg" alt="option">
                       </button>


                       <button class="option" v-on:click="complete(task)">
                           <img src="../../assets/images/do.svg" alt="option">
                       </button>

                        
                          <button class="option">
                           <img src="../../assets/images/resize.svg" alt="option">
                       </button>
                   </div>
            </div>

        </article>

     

     <!-- doing stacks -->
           
        <article class="pending" >
            
            <div class="title__module">
                <h1>Doing</h1> 
            </div>
            
            <div class="no-item" v-if="!doing.length">
                <img src="../../assets/images/do.svg" alt="">
                
            </div>

            <div class="task" v-for="( task, index ) in doing" :key="index">
                <div class="title">
                    <h1 class="title__task">{{ task.title }}</h1> 
                    <span class="date__task">{{ task.date }}</span>
                </div>

                <!--content task  -->
                <div class="content">
                       <p class="content__task">
                         {{ task.content}}
                    </p>
                </div>


                   <!-- options task  -->
                   <div class="options__task">
                      <button class="option">
                           <img src="../../assets/images/create.svg" alt="option">
                       </button>


                       <button class="option">
                           <img src="../../assets/images/share.svg" alt="option">
                       </button>
                    
                     

                        <button class="option" v-on:click="moveTo(task)">
                           <img src="../../assets/images/move-to.svg" alt="option">
                         
                       </button>
                        
                        
                        <button class="option" v-on:click="deleteDoing(index)">
                           <img src="../../assets/images/delete.svg" alt="option">
                       </button>


                       <button class="option" v-on:click="complete(task)">
                           <img src="../../assets/images/do.svg" alt="option">
                       </button>

                        
                          <button class="option">
                           <img src="../../assets/images/resize.svg" alt="option">
                       </button>
                   </div>
            </div>

        </article>





           <!-- do stacks -->
           
        <article class="pending" >
            
            <div class="title__module">
                <h1>Do</h1> 
            </div>
            
            <div class="no-item" v-if="!dod.length">
                <img src="../../assets/images/do.svg" alt="">
                
            </div>

            <div class="task" v-for="( task, index ) in dod" :key="index">
                <div class="title">
                    <h1 class="title__task">{{ task.title }}</h1> 
                    <span class="date__task">{{ task.date }}</span>
                </div>

                <!--content task  -->
                <div class="content">
                       <p class="content__task">
                         {{ task.content}}
                    </p>
                </div>


                   <!-- options task  -->
                   <div class="options__task">
                      <button class="option">
                           <img src="../../assets/images/create.svg" alt="option">
                       </button>


                       <button class="option">
                           <img src="../../assets/images/share.svg" alt="option">
                       </button>
                    
                    
                        
                        <button class="option" v-on:click="deleteDod(index)">
                           <img src="../../assets/images/delete.svg" alt="option">
                       </button>


                       <button class="option" v-on:click="complete(task)">
                           <img src="../../assets/images/do.svg" alt="option">
                       </button>

                        
                          <button class="option">
                           <img src="../../assets/images/resize.svg" alt="option">
                       </button>
                   </div>
            </div>

        </article>
    </section>

    
</template>
 

 


<script>
// banner
import Banner from "../../components/home/banner/banner";

import "./home.page.css";
export default {
    data(){
        return {
            deletePending: (index)=>{
                this.pending.splice(index,1)
            },
            deleteDoing: (index)=>{
                this.doing.splice(index,1)
            },
              deleteDod: (index)=>{
                this.dod.splice(index,1)
            },

             moveTo: (task)=>{
                 console.log(task)
             },
            
            addTo:()=>{},

            complete:(task)=>{
                console.log(task)
            },
            moveToDoing: (task,index)=>{
                console.log(task)
                console.log(index)
            },
             moveToDo: (task,index)=>{
                console.log(task)
                console.log(index)
            },




            pending: [
                {title: "Math", content: "Hacer los ejercicios de calculos y geometria analitica", date: "29 march 2021"},
                {title: "Biology", content: "Leer libro la genetica y biologia basica de maxwell.", date: "2 Dec 2021"},
                {title: "English", content: "Hacer los ejercicios de calculos y geometria analitica", date: "29 march 2021"},
                {title: "Russian class", content: "Leer libro la genetica y biologia basica de maxwell.", date: "2 Dec 2021"}
            
            ],
            doing: [
                {title: "Nature", content: "Hacer los ejercicios de calculos y geometria analitica", date: "29 march 2021"},
                {title: "Spanish", content: "Leer libro la genetica y biologia basica de maxwell.", date: "2 Dec 2021"},
                {title: "Technology", content: "Hacer los ejercicios de calculos y geometria analitica", date: "29 march 2021"},
                {title: "Databases II", content: "Leer libro la genetica y biologia basica de maxwell.", date: "2 Dec 2021"}
            
            ],
            dod: [
                {title: "Phisic", content: "Hacer los ejercicios de calculos y geometria analitica", date: "29 march 2021"},
                {title: "German", content: "Leer libro la genetica y biologia basica de maxwell.", date: "2 Dec 2021"},
                {title: "Francais", content: "Hacer los ejercicios de calculos y geometria analitica", date: "29 march 2021"},
                {title: "Admin I", content: "Leer libro la genetica y biologia basica de maxwell.", date: "2 Dec 2021"}
            
            ]
        }
    },

    components:{
        Banner
    },


   




}
</script>































