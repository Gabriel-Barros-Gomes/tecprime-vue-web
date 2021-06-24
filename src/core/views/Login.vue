<template>

    <div id="login">

        <div id="login-header">
            <div id="login-image">
                <img id="img-login" src="../../assets/tecprimelogo.png">
            </div>
            <div id="login-title">
                <label class="title">Entrar</label>
            </div>
            
        </div>

        <div id="login-canvas">
            <LoginForm/>
        </div>

        <div id="login-footer">
            <label>
                Desenvolvido por Gabriel Barros Gomes Para demostração de habilidades Para Tecprime.
            </label>
        </div>

    </div>
</template>

<script>
import { defineComponent } from 'vue'
import  LoginForm  from '../components/LoginForm.vue'

export default defineComponent({
    name:"Sign",
    components: {
        LoginForm
    },
    setup() {
        

    },
})
</script>
<style scoped>
#login{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
}
#login-header{
    padding: 2rem;
}
#login-footer{
    position: fixed;
    bottom: 0;
}
#img-login{
    background-color: black;
    max-width: 8rem;
    max-height: 8rem;
}
</style>