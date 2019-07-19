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

        <sidebar-item :link="{name: 'Visão Geral', icon: 'fas fa-home', path: '/visaogeral'}"/>
        <sidebar-item :link="{name: 'Denúncias', icon: 'fas fa-exclamation-triangle', path: '/denuncia'}"/>
        <sidebar-item :link="{name: 'Sobre', icon: 'ni ni-single-02', path: '/sobre'}"/>
        <v-expansion-panel>
          <v-expansion-panel-content>
            <template v-slot:header>
              <div><i class="fas fa-home"></i> Visão Geral </div>
            </template>
            <div>
              <sidebar-item :link="{name: 'Todas as Obras', path: '/visaogeral'}"/>
            </div>
            <div>
              <sidebar-item :link="{name: 'Todas as Empresas', path: '/visaogeral'}"/>
            </div>
            <div>
              <sidebar-item :link="{name: 'Estatísticas', path: '/visaogeral'}"/>
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
</style>
