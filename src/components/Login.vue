<template>
  <div class="mt-4">
    <h2>Welcome to Vue.js Chat App</h2>
    <form class="detail-box my-5">
      <div class="form-group my-3">
        <h4>Login to Chat</h4>
        <input
          type="text"
          v-model="email"
          class="form-control mb-4 mt-4"
          placeholder="Enter your email..."
        />
        <input
          type="password"
          v-model="password"
          class="form-control mb-4"
          placeholder="Enter your password..."
          v-on:keyup.enter="login"
        />
        <router-link :to="{ path: 'signup' }">
          <h6 class="mb-3" style="font-weight: 600">Create an account</h6>
        </router-link>

        <button
          type="button"
          v-on:click="login"
          class="btn btn-primary"
          style="font-weight: 600"
        >Login</button>
      </div>
    </form>
  </div>
</template>


<script>
import firebase from '../serviecs/firebase'
export default {
    app: "Login",
    data(){
        return{
            email: "",
            password: ""
        }
    },
    methods: {
        login()
        {
            const auth = firebase.auth();
            auth.signInWithEmailAndPassword(this.email, this.password)
                .then(async res => {
                    if(res.user){
                        await firebase.firestore().collection("users")
                            .where("id", "==", res.user.uid)
                                .get()
                                    .then((queryShapShot) => {
                                        queryShapShot.forEach(doc => {
                                            let userData = doc.data();
                                            localStorage.setItem("id", userData.id)
                                            localStorage.setItem("name",userData.name)
                                            localStorage.setItem("email",userData.email)
                                            localStorage.setItem("password",userData.password)
                                            localStorage.setItem("photoURL", userData.URL)
                                            localStorage.setItem("description", userData.description)
                                            localStorage.setItem("FirebaseDocumentId", doc.id)
                                        })
                                    })
                                this.$toasted.show("Welcome to chat").goAway(1500)
                                this.$router.push('/chat')
                    }
                }).catch(err => {
                    this.$toasted.show(err.message).goAway(1500)
                })
        },

        created(){
            if(localStorage.getitem("id")) this.$router.push('/chat')
        }
    }
}

</script>


<style scoped>
input[type="text"],
input[type="password"] {
  margin: 0 auto;
  width: 80%;
  border: 1px solid lightgrey;
}
.detail-box {
  padding: 5px;
  border: 1px solid lightgrey;
  width: 400px;
  min-height: 250px;
  margin: 0 auto;
}
h2,
h4 {
  color: dodgerblue;
  font-weight: 600;
}
</style>