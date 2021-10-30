<template>
  <div id="CountryDetail">
    <div class="px-32 py-10">
      <h1 class="mt-10 mb-1 font-bold text-center text-white text-7xl">
        {{ currentInfo.Country.toUpperCase() }}
      </h1>
      <p class="mb-24 text-xl italic text-center text-white">
        Last update: {{ lastUpdated }}
      </p>

      <div class="flex justify-between">
        <!-- new Case -->
        <div class="text-center">
          <div
            class="inline-block p-3 m-0 bg-yellow-400 rounded-full hover:bg-yellow-500 icon"
          >
            <a-icon type="plus" />
          </div>
          <h1 class="mt-3 mb-0 text-2xl font-bold text-white">Active</h1>
          <p class="mt-1 text-xl font-bold text-white">{{ active }}</p>
        </div>

        <!-- Confirmed case -->
        <div class="text-center">
          <div
            class="inline-block p-3 m-0 bg-blue-400 rounded-full hover:bg-blue-500 icon"
          >
            <a-icon type="exclamation" />
          </div>
          <h1 class="mt-3 mb-0 text-2xl font-bold text-white">Confirmed</h1>
          <p class="mt-1 text-xl font-bold text-white">{{ confirmed }}</p>
        </div>

        <!-- Recovered case -->
        <div class="text-center">
          <div
            class="inline-block p-3 m-0 bg-green-400 rounded-full hover:bg-green-500 icon"
          >
            <a-icon type="check" />
          </div>
          <h1 class="mt-3 mb-0 text-2xl font-bold text-white">Recovered</h1>
          <p class="mt-1 text-xl font-bold text-white">{{ recovered }}</p>
        </div>

        <!-- Death case -->
        <div class="text-center">
          <div
            class="inline-block p-3 m-0 bg-red-400 rounded-full hover:bg-red-500 icon"
          >
            <a-icon type="close" />
          </div>
          <h1 class="mt-3 mb-0 text-2xl font-bold text-white">Deaths</h1>
          <p class="mt-1 text-xl font-bold text-white">{{ deaths }}</p>
        </div>
      </div>

      <hr class="w-full my-10 border border-white" />

      <div class="w-full h-auto p-3 bg-white">
        <v-chart class="m-0 chart" :option="option" />
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import moment from "moment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent
]);

export default {
  name: "CountryDetail",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "",
  },
  data() {
    return {};
  },
  computed: {
    countryInfo() {
      return this.$store.state.countryInfo;
    },
    monthInfo() {
      const length = this.countryInfo.length;
      let month = 30;
      if (length < month) {
        month = length;
      }
      const monthInfo = this.countryInfo
        .slice(this.countryInfo.length - month)
        .map((item) => {
          return {
            Confirmed: item.Confirmed,
            Deaths: item.Deaths,
            Recovered: item.Recovered,
            Active: item.Active,
            Date: moment(item.Date).format("DD/MM"),
          };
        });
      return monthInfo;
    },
    monthDate() {
      return this.monthInfo.map((item) => {
        return item.Date;
      });
    },
    monthActive() {
      return this.monthInfo.map((item) => {
        return item.Active;
      });
    },
    monthConfirmed() {
      return this.monthInfo.map((item) => {
        return item.Confirmed;
      });
    },
    monthRecovered() {
      return this.monthInfo.map((item) => {
        return item.Recovered;
      });
    },
    monthDeaths() {
      return this.monthInfo.map((item) => {
        return item.Deaths;
      });
    },
    currentInfo() {
      return this.countryInfo[this.countryInfo.length - 1];
    },
    lastUpdated() {
      return moment(_.get(this.currentInfo, "Date", "No data")).format(
        "HH:mm:ss DD/MM/YYYY"
      );
    },
    active() {
      return _.get(this.currentInfo, "Active", "No data");
    },
    confirmed() {
      return _.get(this.currentInfo, "Confirmed", "No data");
    },
    recovered() {
      return _.get(this.currentInfo, "Recovered", "No data");
    },
    deaths() {
      return _.get(this.currentInfo, "Deaths", "No data");
    },
    option() {
      return {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["Active", "Confirmed", "Recovered", "Deaths"],
        },
        xAxis: {
          type: "category",
          data: this.monthDate,
          axisPointer: {
            type: "shadow",
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Active",
            type: "bar",
            data: this.monthActive,
          },
          {
            name: "Confirmed",
            type: "bar",
            data: this.monthConfirmed,
          },
          {
            name: "Recovered",
            type: "bar",
            data: this.monthRecovered,
          },
          {
            name: "Deaths",
            type: "bar",
            data: this.monthDeaths,
          },
        ],
      };
    },
  },
  mounted() {
    this.$store.dispatch("getCountryInfo", this.$route.params.id);
  },
};
</script>

<style scoped>
.chart {
  height: 600px;
}
.icon {
  box-shadow: 0px 0px 3px white;
}
.icon >>> .anticon {
  margin: 0px;
  font-size: 50px;
  color: white;
}
</style>