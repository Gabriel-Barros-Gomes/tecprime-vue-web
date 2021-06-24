<template>
    <div id="login-form">
        <form>

            <div id="login-email">
                <label class="label">Email</label>
                <div>
                    <input :class="hasErrors.has === true?'input is-rounded is-danger':'input is-rounded is-primary'" v-model="user.email" type="text" placeholder="Email" >
                </div>
            </div>
            <div id="email-verify" v-show="hasErrors.has === true && hasErrors.field === 'email'">
                <div >
                    <span id="email-verify">{{hasErrors.error}}</span>
                </div>
            </div>


            <div id="login-password">
                <label class="label">Senha</label>
                <div>
                    <input :class="hasErrors.has === true?'input is-rounded is-danger':'input is-rounded is-primary'" v-model="user.password" type="password" placeholder="Senha" >
                </div>
            </div>
            <div id="email-verify" v-show="hasErrors.has === true && hasErrors.field === 'password'">
                <div >
                    <span id="email-verify">{{hasErrors.error}}</span>
                </div>
            </div>


            <div id="buttons" class="buttons">
                <input class="button is-rounded is-primary" @click.prevent="onVerify()" type="button" value="Enviar">
            </div>

        </form>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { UserService } from '../application/services/user/user-service'
import router from '../../router'

export default defineComponent({
    setup() {
        const user = ref({
           email:"",
           password:"",
       })
       let hasErrors = ref ({
                error: "",
                has: false,
                field: "",
                fixed: false,
                fixedEmail: false,
                fixedPassword: false,
            })

        const onVerify = () => {
            console.log(user.value)

            if(user.value.email === "" ){
                hasErrors.value.field = "email"
                hasErrors.value.error = "Campo email não pode ser nulo"
                hasErrors.value.has = true
                hasErrors.value.fixedEmail = false
                hasErrors.value.fixed = false
            }else{
                hasErrors.value.fixedEmail = true
            }

            if(user.value.password === ""){
                hasErrors.value.field = "password"
                hasErrors.value.error = "Campo senha não pode ser nulo"
                hasErrors.value.has = true
                hasErrors.value.fixedPassword = false
                hasErrors.value.fixed = false
            }else{
                hasErrors.value.fixedPassword = true
            }
            console.log(hasErrors.value)
            console.log(user.value)

            if( hasErrors.value.fixedEmail === true && hasErrors.value.fixedPassword === true){
                hasErrors.value.fixed = true
            }else{
                user.value.email = ""
                user.value.password = ""
            }


            if(hasErrors.value.has === false && hasErrors.value.fixed === true){
                try{
                    hasErrors.value.field = ""
                    onSave()
                }catch(e){
                    hasErrors.value.field = ""
                    console.error("Create Error",e)
                }
                
            }

        }

        const onSave = async () => {
            const response = await UserService.login(user.value)
            console.log(response.data)

            if(response.status == 401 || response.status == 403 ){
                alert("Email ou senha errados")
                localStorage.setItem('token', "")
            }else{
                localStorage.setItem('token', response.data.token) 
                router.push('/')
            }
        }


        return {
            user,
            hasErrors,
            onVerify,
        }
        
    },
})
</script>
<style scoped>
#login-email{
    padding-bottom: 1.4rem;
}
#login-password{
    padding-bottom: 1.4rem;
}

</style>