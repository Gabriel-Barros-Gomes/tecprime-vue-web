<template>
    <div id="sign-form">
        <form>

            <div id="sign-email">
                <label class="label">Email</label>
                <div>
                    <input :class="hasErrors.has === true?'input is-rounded is-danger':'input is-rounded is-primary'" v-model="user.email" type="email" placeholder="Email" >
                </div>
            </div>
            <div id="email-verify" v-show="hasErrors.has === true && hasErrors.field === 'email'">
                <div >
                    <span id="email-verify">{{hasErrors.error}}</span>
                </div>
            </div>

            <div id="sign-password">
                <label class="label">Senha</label>
                <div>
                    <input :class="hasErrors.has === true?'input is-rounded is-danger':'input is-rounded is-primary'" v-model="user.password" type="password" placeholder="Senha" >
                </div>
            </div>
            <div id="password-verify" v-show="hasErrors.has === true && hasErrors.field === 'password'">
                <div >
                    <span id="password-verify">{{hasErrors.error}}</span>
                </div>
            </div>
            

            <div id="sign-repeat-password">
                <label class="label">Repita a Senha</label>
                <div>
                    <input :class="hasErrors.has === true?'input is-rounded is-danger':'input is-rounded is-primary'" v-model="repeatPassword" type="password" placeholder="Repita a Senha" >
                </div>
            </div>
            <div id="repeat-verify" v-show="hasErrors.has === true && hasErrors.field === 'password'">
                <div >
                    <span id="repeat-verify">{{hasErrors.error}}</span>
                </div>
            </div>

            <div id="buttons" class="buttons">
                <input class="button is-rounded is-warning" @click.prevent="onVerify()" type="button" value="Enviar">
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
           id:0,
           email:"",
           password:"",
           active: true
       })
       let repeatPassword = ref("")
       let hasErrors = ref ({
                error: "",
                has: false,
                field: "",
                fixed: false,
                fixedEmail: false,
                fixedPassword: false,
                fixedRepeatePassword: false
            })

        const onVerify = () => {
            
            if(user.value.email === ""){
                hasErrors.value.field = "email"
                hasErrors.value.error = "Campo email não pode ser nulo"
                hasErrors.value.has = true
                hasErrors.value.fixedEmail = false
                hasErrors.value.fixed = false
            }else{
                hasErrors.value.fixedEmail = true
            }

            if(!(user.value.password === repeatPassword.value)){
                hasErrors.value.field = "password"
                hasErrors.value.error = "As senhas não são iguais"
                hasErrors.value.has = true
                hasErrors.value.fixedRepeatePassword = false
                hasErrors.value.fixed = false
            }else{
                hasErrors.value.fixedRepeatePassword = true
            }

            if(user.value.password === "" || user.value.password === null || user.value.password === undefined){
                hasErrors.value.field = "password"
                hasErrors.value.error = "Campo senha não pode ser nulo"
                hasErrors.value.has = true
                hasErrors.value.fixedPassword = false
                hasErrors.value.fixed = false
            }else{
                hasErrors.value.fixedPassword = true
            }

            if( hasErrors.value.fixedEmail === true && hasErrors.value.fixedRepeatePassword === true && hasErrors.value.fixedPassword === true){
                hasErrors.value.fixed = true
                hasErrors.value.has = false
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
            const response = await UserService.create(user.value)

            console.log(response.data)
            if(response.status == 201){
                router.push('/login')
            }else{
                alert('erro na criação')
            }
        }


        return {
            user,
            repeatPassword,
            hasErrors,
            onVerify,
        }
        
    },
})
</script>
<style scoped>
#sign-email{
    padding-bottom: 1.4rem;
}
#sign-password{
    padding-bottom: 1.4rem;
}
#sign-repeat-password{
    padding-bottom: 1.4rem;
}

</style>