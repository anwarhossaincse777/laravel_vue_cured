<template>

    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">

                <div class="card">
                    <div class="card-header">
                        <router-link :to="{name:'Add'}">Add New</router-link>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(student,index) in students.data" :key="index">
                                <th scope="row">{{++index}}</th>
                                <td>{{student.name}}</td>
                                <td>{{student.email}}</td>
                                <td>{{student.phone}}</td>
                                <td>{{student.gender}}</td>
                                <td>
                                    <router-link :to="{name:'StudentEdit',params:{id:student.id}}" class="btn btn-sm btn-info">Edit</router-link>
                                    <a href="" class="btn btn-sm btn-danger" @click.prevent="destroy(student.id)">Delete</a>


                                </td>

                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: "List",

     data(){
        return {

            students:[]
        }

     },

    mounted() {
       this.fetchData();

    },



    methods:{
         fetchData(){
             axios.get("/api/students").then((response)=>{

                 this.students=response.data

             }).catch(()=>{


             });

         },

        destroy(id){
            if (!window.confirm("Are You sure to delete ?")){
                  return;

            }

            axios.delete("/api/students/"+id).then((response)=>{

                if(response.status===200){
                   this.fetchData();
                }

            }).catch(()=>{


            });



        }

    },





}
</script>

<style scoped>

</style>
