<template>
  <div id="Footer" class="px-32 mt-20 bg-gray-900 py-7">
    <table class="w-full table-fixed">
      <thead>
        <td class="w-1/2 px-3 py-1 text-3xl font-bold text-white">
          Info contact
        </td>
        <td class="w-1/2 px-3 py-1 text-3xl font-bold text-white">
          Technology used
        </td>
      </thead>
      <tbody>
        <td class="w-1/2 p-3 align-top">
          <table class="w-full">
            <tbody>
              <tr v-for="info in infoContact" :key="info.key">
                <td class="pb-4">
                  <a-icon
                    :type="info.key"
                    style="color: white; font-size: 30px"
                  />
                </td>
                <td class="pb-4 text-xl text-white">{{ info.info }}</td>
              </tr>
            </tbody>
          </table>
        </td>
        <td class="w-1/2 p-3 align-top">
          <img
            class="inline-block w-16 m-2"
            v-for="icon in iconGroup"
            :src="icon.src"
            :alt="icon.alt"
            :key="icon.src"
          />
        </td>
      </tbody>
    </table>
    <hr class="border border-white" />
    <table class="m-auto">
      <tbody key="tbody">
        <tr>
          <td>
            <a-icon
              type="github"
              style="color: white; font-size: 20px; padding: 5px"
            />
          </td>
          <td class="p-4">
            <a class="text-lg text-white" href="https://github.com/longcuteanme/VueCovid">
              https://github.com/longcuteanme/VueCovid
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import antd from "../assets/icon/antd.png";
import axios from "../assets/icon/axios.png";
import bizchart from "../assets/icon/bizchart.png";
// import i18 from "../assets/icon/i18.png";
import lodash from "../assets/icon/lodash.png";
import moment from "../assets/icon/moment.png";
import vuex from "../assets/icon/vuex.png";
import tailwind from "../assets/icon/tailwind.png";
import vueRouter from "../assets/icon/vueRouter.png"

const iconGroup = [
  { src: antd, alt: "antd" },
  { src: tailwind, alt: "tailwind" },
  { src: vuex, alt: "vuex" },
  { src: vueRouter, alt: "vueRouter" },
  { src: axios, alt: "axios" },
  { src: bizchart, alt: "bizchart" },
  { src: lodash, alt: "lodash" },
  { src: moment, alt: "moment" },
];
const infoContact = [
  { key: "user", info: "Trịnh Văn Long - 23y" },
  { key: "phone", info: "0384912727" },
  { key: "mail", info: "psatrinhlongat48@gmail.com" },
];
export default {
  name: "Footer",
  data() {
    return {
      iconGroup,
      infoContact,
    };
  },
};
</script>

<style scoped>
#Footer {
  box-shadow: 0px 0px 7px black;
}
</style>