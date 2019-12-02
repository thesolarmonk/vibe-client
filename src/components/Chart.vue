<template>
  <div class="chart">
    <canvas id="chart--sentiment"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  props: {
    track_data: {
      default: null
    }
  },
  data() {
    return {
      options: {
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 50,
            bottom: 50
          }
        },
        title: {
          display: true,
          text: 'Sentiment History (6-months)',
          fontColor: '#ffffff',
          padding: 20
        },
        legend: {
          display: true,
          labels: {
            fontColor: '#ffffff',
            padding: 20
          }
        },
        cutoutPercentage: 40,
        responsive: true
      }
    };
  },
  computed: {
    chart_data: function() {
      return {
        labels: ['0-15', '15-30', '30-45', '45-100'],
        datasets: [
          {
            backgroundColor: ['#00aeff', '#00ffc8', '#ffe600', '#ffae00'],
            data: this.dataset
          }
        ]
      };
    },
    dataset: function() {
      let sentiment_groups = [0, 0, 0, 0];

      if (this.track_data != null) {
        for (let i = 0; i < this.track_data.length; i++) {
          let sentiment_score = Math.floor(
            this.track_data[i].sentiment_score * 100
          );
          if (sentiment_score < 15) {
            sentiment_groups[0]++;
          } else if (sentiment_score >= 15 && sentiment_score < 30) {
            sentiment_groups[1]++;
          } else if (sentiment_score >= 30 && sentiment_score < 50) {
            sentiment_groups[2]++;
          } else if (sentiment_score >= 50) {
            sentiment_groups[3]++;
          }
        }
      }

      console.log(sentiment_groups);

      return sentiment_groups;
    }
  },
  watch: {
    chart_data: function() {
      this.createChart('chart--sentiment', this.chart_data, this.options);
    }
  },
  methods: {
    createChart(chartId, chartData, options) {
      const ctx = document.getElementById(chartId);
      new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: options
      });
    }
  }
};
</script>

<style>
.chart {
  width: 100%;
  height: 55%;
}
</style>
