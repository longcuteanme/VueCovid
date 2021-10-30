<template>
  <div id="tableCountry" class="p-3 rounded-md">
    <div>
      <!-- <h1 class="my-3 text-3xl text-center text-white">All countries data</h1> -->
      <div class="flex justify-center w-full pr-5 mt-3">
        <a-input-search
          class="text-right"
          placeholder="input country name"
          style="width: 500px"
          @input="search = $event.target.value"
          @search="onSearch"
        />
      </div>
      <table class="w-auto max-h-screen text-center table-fixed mr-7">
        <thead>
          <td
            v-for="column in columns"
            :key="column.key"
            class="p-5 text-xl font-bold text-white border-b-2 border-white"
            :class="column.width"
          >
            {{ column.key }}
          </td>
        </thead>
      </table>
    </div>
    <div class="overflow-auto" style="height: 60vh">
      <table class="w-full h-auto max-h-screen text-center">
        <tbody>
          <tr class="relative countryRow" v-for="country in Countries" :key="country.ID">
            <td
              v-for="dataKey in dataKeys"
              :key="dataKey.key"
              class="p-5 text-lg font-bold text-white border-b border-white"
              :class="dataKey.width"
            >
              {{
                dataKey.key === "Date"
                  ? timeFormat(country[dataKey.key])
                  : country[dataKey.key]
              }}
            </td>
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 opacity-0 moreDetail bg-opacity-90"
            >
              <router-link :to="'country/'+country.Slug">
                <a-button @click="scrollToTop" type="danger" size="large" style="font-weight:bold;font-size:1rem"> More  Detail </a-button>
              </router-link>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import moment from "moment";

const columns = [
  { key: "Country", width: "w-1/6" },
  { key: "New Case", width: "w-1/6" },
  { key: "Confirmed", width: "w-1/6" },
  { key: "Recovered", width: "w-1/6" },
  { key: "Deaths", width: "w-1/6" },
  { key: "Lastest Update", width: "w-1/6" },
];

const dataKeys = [
  { key: "Country", width: "w-1/6" },
  { key: "NewConfirmed", width: "w-1/6" },
  { key: "TotalConfirmed", width: "w-1/6" },
  { key: "TotalRecovered", width: "w-1/6" },
  { key: "TotalDeaths", width: "w-1/6" },
  { key: "Date", width: "w-1/6" },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export default {
  name: "TableCountry",
  data() {
    return {
      search: "",
      columns,
      dataKeys,
    };
  },
  computed: {
    Countries() {
      return _.get(this.$store.state.summary, "Countries", []).filter((el) => {
        return el.Country.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
  methods: {
    timeFormat(time) {
      return moment(time).format("HH:mm:ss, DD/MM/YYYY");
    },
    onSearch(e) {
      this.search = e.target.value;
    },
    scrollToTop(){
      scrollToTop()
    }
  },
};
</script>

<style scoped>
#tableCountry {
  background-color: rgb(11, 36, 51);
  box-shadow: 0px 0px 10px white;
}
.moreDetail{
  transition: opacity 0.5s;
}
.countryRow:hover .moreDetail{
  opacity: 1;
}
</style>