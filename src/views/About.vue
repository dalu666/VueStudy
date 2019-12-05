<template>
  <div class="about">
    <!-- <div class="row">
      <span>Departure Date：</span>
      <date-picker :time.sync="starttime" :option="option" :limit="limit"></date-picker>
    </div> -->

    <!-- for Vue 2.0 -->
    <header-ma></header-ma>
    <ul>
      <router-link tag="li" to="/getserve">go getserve</router-link>
      <router-link tag="li" to="/render">go render</router-link>
      <router-link tag="li" to="/directive">go directive</router-link>
    </ul>
    <div class="row">
      <span>Departure Date：</span>
      <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
    </div>
  </div>
</template>
<script>
// import myDatepicker from 'vue-datepicker'
import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue' 
import headerMa from '../components/header'
export default {
  data () {
    return {
      // for Vue 1.0
      // starttime: '',
      // endtime: '2016-01-19',
      // testTime: '',
      // multiTime: '',
      // for Vue 2.0
      startTime: {
        time: ''
      },
      endtime: {
        time: ''
      },
      option: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: "YYYY/MM/DD HH:mm:ss",
        placeholder: '2019/01/1 22:20:20',
        inputStyle: {
          'display': 'inline-block',
          'padding': '6px',
          'line-height': '22px',
          'font-size': '16px',
          'border': '2px solid #fff',
          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          'border-radius': '2px',
          'color': '#5F5F5F'
        },
        color: {
          header: '#ccc',
          headerText: '#f00'
        },
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel'
        },
        overlayOpacity: 0.5, // 0.5 as default
        // dismissible: true // as true as default
      },
      timeoption: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD HH:mm'
      },
      multiOption: {
        type: 'multi-day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format:"YYYY-MM-DD HH:mm"
      },
      limit: [{
        type: Array,
        default:function _default(){
          return [];
        }
      }
      // {
      //   type: 'fromto',
      //   from: '2016-02-01',
      //   to: '2016-02-20'
      // }
      ]
    }
  },
  components: {
    'date-picker': myDatepicker,
    headerMa
  }
}
</script>
