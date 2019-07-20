<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <!-- <sidebar-item
          :link="{
            name: 'Início',
            icon: 'ni ni-tv-2 text-primary',
            path: '/'
          }"
        /> -->

        <!-- <sidebar-item :link="{name: 'Visão Geral', icon: 'fas fa-home', path: '/visaogeral'}"/>
        <sidebar-item :link="{name: 'Denúncias', icon: 'fas fa-exclamation-triangle', path: '/denuncia'}"/>
        <sidebar-item :link="{name: 'Sobre', icon: 'ni ni-single-02', path: '/sobre'}"/> -->
        <v-expansion-panel class="noshadow">
          <v-expansion-panel-content>
            <template v-slot:header>
              <div><i class="fas fa-home" :link="{name: 'Visão Geral', path: '/visaogeral'}"></i> Visão Geral </div>
            </template>
            <div>
              <sidebar-item :link="{name: 'Todas as Obras', path: '/todas_obras'}"/>
            </div>
            <div>
              <sidebar-item :link="{name: 'Todas as Empresas', path: '/todas_empresas'}"/>
            </div>
            <div>
              <sidebar-item :link="{name: 'Estatísticas', path: '/estatisticas'}"/>
            </div>
          </v-expansion-panel-content>

          <v-expansion-panel-content>
            <template v-slot:header>
              <div><i class="fas fa-exclamation-triangle" :link="{name: 'Denúncias', path: '/denuncia'}"></i> Denúncias </div>
            </template>
            <div>
              <sidebar-item :link="{name: 'Nova Denúncia', path: '/nova_denuncia'}"/>
            </div>
            <div>
              <sidebar-item :link="{name: 'Listar Denúncias', path: '/listar_denuncia'}"/>
            </div>
          </v-expansion-panel-content>

          <v-expansion-panel-content>
            <template v-slot:header>
              <div><i class="fas fa-info-circle"></i> Sobre </div>
            </template>
            <div>
              <sidebar-item :link="{name: 'Sobre a Aplicação', path: '/sobre'}"/>
            </div>
          </v-expansion-panel-content>
          
        </v-expansion-panel>

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">

.noshadow{
  -webkit-box-shadow: none !important;
	-moz-box-shadow: none !important;
  box-shadow: none !important;
  border: none !important;
}

li{
  border: none !important;
}
</style>
