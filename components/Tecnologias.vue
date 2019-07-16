<template>
  <v-container fluid grid-list-lg>
    <v-layout>
      <h1>Tecnologias</h1>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="(tecnologia, index) in tecnologias" :key="index" xs12 sm6>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">
                {{ tecnologia.nome }}
              </h3>
            </div>
          </v-card-title>
          <v-card-text>
            {{ tecnologia.descricao }}
            <v-list v-for="(imagem, index) in tecnologia.imagens" :key="index">
              <v-list-tile avatar>
                <v-list-tile-avatar size="40px">
                  <v-img :heigth="size" :src="imagem.path"></v-img>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ imagem.nome }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import tecnlogiasJson from './json/mergeJson.js'

export default {
  data: () => ({
    tecnologias: tecnlogiasJson
  })
}
</script>
