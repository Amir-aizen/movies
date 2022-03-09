<template>
  <!-- wrapping div-->
  <!-- -->
  <div dir="auto" class="container">
    <div id="navbar" class="tabs">
      <ul class="movieShow">
        <li
          class="movie-button"
          v-for="tab in tabs"
          :key="tab.name"
          :class="{ 'is-active': tab.isActive }"
        >
          <a class="effects" :href="tab.href" @click="selectTab(tab)"
            ><span>{{ $t(tab.name) }}</span></a
          >
        </li>
      </ul>
    </div>

    <div class="main-inform" id="main">
      <div class="tabs-details ">
        <slot></slot>
      </div>
      <tab class="nav-movie" name="johnwick" :selected="true">
        <JohnWick />
      </tab>

      <tab class="nav-movie" name="johnwick2">
        <JohnWickTwo />
      </tab>

      <tab class="nav-movie" name="johnwick3">
        <JohnWickThree />
      </tab>

      <tab class="nav-movie" name="terminator">
        <Terminator />
      </tab>

      <tab class="nav-movie" name="spiderman">
        <SpiderMan />
      </tab>

      <tab class="nav-movie" name="fast&furious">
        <FastAndFurious />
      </tab>

      <tab class="nav-movie" name="avengers">
        <Avengers />
      </tab>

      <tab class="nav-movie" name="ironman">
        <IronMan />
      </tab>
    </div>
  </div>
</template>

<script>
import tab from "@/components/tab.vue";
import JohnWick from "@/components/JohnWick.vue";
import JohnWickTwo from "@/components/JohnWickTwo.vue";
import JohnWickThree from "@/components/JohnWickThree.vue";
import Terminator from "@/components/Terminator.vue";
import SpiderMan from "@/components/SpiderMan.vue";
import FastAndFurious from "@/components/FastAndFurious.vue";
import Avengers from "@/components/Avengers.vue";
import IronMan from "@/components/IronMan.vue";

export default {
  name: "HelloI18n",
  components: {
    tab,
    JohnWick,
    JohnWickTwo,
    JohnWickThree,
    Terminator,
    SpiderMan,
    FastAndFurious,
    Avengers,
    IronMan
  },
  data() {
    return { tabs: [] };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.href == selectedTab.href;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
//grid using flexbox
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.tabs {
  flex: 1;
}
.main-inform {
  flex: 3;
  height: 600px;
  overflow-y: scroll;
  overflow-x: hidden;
}
#navbar {
  height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.movie-button {
  list-style: none;
  padding: 10px;
}
//hover effect on buttons
a {
  position: relative;
  height: 60px;
  width: 80%;
  padding: 5px 12px;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #ffffff;
  border: 1px solid rgba(22, 76, 167, 0.6);
  border-radius: 10px;
  color: rgb(90, 86, 86);
  font-weight: 400;
  font-size: 20px;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    animation: rotate 0.7s ease-in-out both;
    span {
      animation: storm 0.7s ease-in-out both;
      animation-delay: 0.06s;
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }
  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}
@keyframes storm {
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }
  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }
  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }
  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
}
.effects {
  &:before,
  &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: black;
    content: "";
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    z-index: -1;
    transform: translate(100%, -25%) translate3d(0, 0, 0);
  }
  &:hover {
    &:before,
    &:after {
      opacity: 0.15;
      transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1),
        opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
    }
    &:before {
      transform: translate3d(50%, 0, 0) scale(0.9);
    }
    &:after {
      transform: translate(50%, 0) scale(1.1);
    }
  }
}
//responsive section
@media screen and (max-width: 768px) {
  a {
    font-size: 2vw;
    height: 30px;
    width: 100%;
    padding: 3px;
  }
  .main-inform {
    height: 450px;
  }
  #navbar {
    height: 400px;
  }
}
@media screen and (max-width: 411px) {
  a {
    height: 15px;
  }
}
</style>

<i18n>
{
  "en": {
    "hello": "welcome to our website",
    "johnwick": "johnwick",
    "johnwick2": "johnwick2",
    "johnwick3": "johnwick3",
    "fast&furious": "fast&furious",
    "terminator": "terminator",
    "avengers": "avengers",
    "spiderman": "spiderman",
    "ironman": "ironman"
  },
  "ar": {
    "hello": "مرحبا بك فى موقعنا",
    "johnwick": "جون ويك",
    "johnwick2": " جون ويك2",
    "johnwick3": "جون ويك3",
    "fast&furious": "السرعة والغضب",
    "terminator": "المبيد",
    "avengers": "المنتقمون",
    "spiderman": "الرجل العنكبوت",
    "ironman": "الرجل الحديدي"
  }
 
}
</i18n>
