<template>
  <div class="home">
    <div>
      <ul v-for="index in users" :key="index">
        <li>
            <div>
              {{user}} <div><input type="button" class="button is-rounded is-small is-danger" value="Deletar"></div> 
              <div><input type="button" class="button is-rounded is-small is-primary" value="Editar"></div> 
            </div>
          </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import router from '../../router'
import { UserService } from '../application/services/user/user-service';

export default defineComponent({
  name: 'Home',
  setup(){
    const users = ref([])
    const user = ref({
      id:0,
      email:"",
      password:"",
      active: true
    })

    onMounted(async() => {
      const token = localStorage.getItem('token')
      const response = await UserService.getAll()
      
      if(response.status == 401 || response.status == 403){
        router.push("/login")
      }else{
        console.log(response.data)
        users.value = response.data.users
      }
    })

    

    return {
      users,
      user
    }
  }
});
</script>
