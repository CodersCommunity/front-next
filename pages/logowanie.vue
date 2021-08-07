<template>
  <div>
    <TitleContainer>
      <h1>Logowanie</h1>
    </TitleContainer>

    <Box>
      <ValidationObserver v-slot="{ handleSubmit }" ref="validationObserver">
        <form class="login-form" @submit.prevent="handleSubmit(submitLogin)">
          <InputText
            v-model="login"
            vid="login"
            name="Nazwa użytkownika"
            label="Nazwa użytkownika lub hasło"
            placeholder="Login"
            rules="required"
          />
          <InputText
            v-model="password"
            vid="password"
            type="password"
            label="Hasło"
            placeholder="Hasło"
            rules="required"
          />

          <label>
            <input v-model="rememberMe" type="checkbox" />
            Zapamiętaj mnie
          </label>

          <br />
          <br />

          <BaseButton type="submit">Zaloguj</BaseButton>
        </form>
      </ValidationObserver>
    </Box>
  </div>
</template>

<script lang="ts">
import { ValidationObserver } from 'vee-validate'
import Vue, { VueConstructor } from 'vue'
import { MutationTypes } from '~/store'

export default (
  Vue as VueConstructor<
    Vue & {
      $refs: { validationObserver: InstanceType<typeof ValidationObserver> }
    }
  >
).extend({
  layout: 'sidebar',
  asyncData({ store, redirect }) {
    if (store.state.currentUser) redirect('/')
  },
  data() {
    return {
      isLoading: false,
      login: '',
      password: '',
      rememberMe: false,
    }
  },
  head: {
    title: 'Logowanie',
  },
  methods: {
    async submitLogin() {
      if (this.isLoading) return
      this.isLoading = true

      try {
        const user = await this.$httpService.login.login({
          login: this.login,
          password: this.password,
          rememberMe: this.rememberMe,
        })

        this.$store.commit(MutationTypes.SetCurrentUser, user)
        this.$router.replace('/')
      } catch (err) {
        if (!err.response) throw err
        this.$refs.validationObserver.setErrors(err.response.data.fields)
      } finally {
        this.isLoading = false
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.login-form {
  padding: 30px 0;
}
</style>
