<template>

    <div class="container">
        <div class="row mt-5">
            <div class="col-md-6 m-auto">

                <div class="card">
                    <div class="card-header">
                        <router-link :to="{name:'List'}">All Data</router-link>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="storeData" >
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Your name"

                                v-model="form.name"
                                >
                                <div class="form-text text-danger" v-if="errors.name">{{errors.name[0]}}</div>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="form.email">
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

                           <span class="text-danger" v-if="errors.email">{{errors.email[0]}}</span>
                            </div>


                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Phone</label>
                                <input type="text" class="form-control" id="phone" aria-describedby="emailHelp" v-model="form.phone">

                                <span class="text-danger" v-if="errors.phone">{{errors.phone[0]}}</span>
                            </div>

                          <div class="mb-3">
                            <label for="gender">Gender</label>
                              <select class="form-control" name="" id="gender" v-model="form.gender">
                                  <option value="">Select One</option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                              </select>

                              <span class="text-danger" v-if="errors.gender">{{errors.gender[0]}}</span>
                          </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
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

        return{
            form:{
                   name:'',
                   email:'',
                   phone:'',
                   gender:'',

            },

            errors:{},

        }

    },



    methods:{

        storeData(){
            axios.post("/api/students",this.form).then((response)=>{

                  if (response.status===201){

                      this.errors="",
                          this.form=""
                  }

            }).catch((errors)=>{

                this.errors=errors.response.data.errors;

            });

        }


    }

}
</script>

<style scoped>

</style>
