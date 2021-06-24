<template>

    <div id="sign">

        <div id="sign-header">
            <div id="sign-image">
                <img id="img-sign" src="../../assets/tecprimelogo.png">
            </div>
            <div id="sign-title">
                <label class="title">Cadastre-se</label>
            </div>
            
        </div>

        <div id="sign-canvas">
            <SignForm/>
        </div>

        <div id="sign-footer">
            <label>
                Desenvolvido por Gabriel Barros Gomes Para demostração de habilidades Para Tecprime.
            </label>
        </div>

    </div>
</template>

<script>
import { defineComponent } from 'vue'
import  SignForm  from '../components/SignForm.vue'

export default defineComponent({
    name:"Sign",
    components: {
        SignForm
    },
    setup() {
        

    },
})
</script>
<style scoped>
#sign{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
}
#sign-header{
    padding: 2rem;
}
#sign-footer{
    position: fixed;
    bottom: 0;
}
#img-sign{
    background-color: black;
    max-width: 8rem;
    max-height: 8rem;
}
</style>
