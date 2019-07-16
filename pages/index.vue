<template>
  <main>
    <section id="topo">
      <topo />
    </section>
    <section id="tecnologias">
      <tecnologias />
    </section>
    <!-- <section id="clientes">
      <v-container>
        <v-layout>
          <h1>
            Clientes
          </h1>
        </v-layout>
      </v-container>
    </section> -->
    <section id="contato">
      <contato />
    </section>
  </main>
</template>
<script>
import Topo from '../components/Topo'
import Tecnologias from '../components/Tecnologias'
import Contato from '../components/Contato'

export default {
  components: {
    Topo,
    Tecnologias,
    Contato
  }
}
</script>

<style lang="stylus">
main
  max-width 100%
  overflow hidden
#topo
  background url(/bg1.jpg) no-repeat center center
  height 100vh
  position relative
  z-index 3

#tecnologias
  background #212121
  position relative
  z-index 4

  &:before
    content ""
    position absolute
    top -150px
    width 0
    height 0
    border-style solid
    border-width 150px 100vw 0 0
    border-color transparent #212121 transparent transparent

  &:after
    content ""
    position absolute
    width 0
    height 0
    border-style solid
    border-width 0 100vw 150px 0
    border-color transparent #212121 transparent transparent

#clientes
  padding-top 150px
  height 100vh
  background rgb(36,34,69)
  background linear-gradient(180deg, rgba(24,3,42,1) 0%, rgba(130,204,236,1) 100%)

#contato
  padding-top 150px
  height 100vh
  background url(/bg2.png) no-repeat center center
</style>
