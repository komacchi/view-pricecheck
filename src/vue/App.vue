<template lang='pug'>
  #app
    Header
    .container.is-fullhd
      .table-container
        table.table.is-bordered.is-hoverable
          thead
            tr.has-background-grey-lighter
               th 商品名
               th.price(nowrap) 新しい価格
               th.price(nowrap) 古い価格
               th.price(nowrap) 差額
          tbody
            tr(v-for="list in lists" :key="list.index" v-if="list.diff > 100")
              td
                a(:href='list.itemUrl', target='_blank') {{list.name}}
              td.price.has-text-danger {{list.newprice}}
              td.price {{list.oldprice}}
              td.price.has-text-danger.has-background-warning-light(v-if="list.diff > 5000 && list.diff < 9999") {{list.diff}}
              td.price.has-text-danger.has-background-danger-light(v-else-if="list.diff > 10000") {{list.diff}}
              td.price.has-text-danger.has-background-info-light(v-else) {{list.diff}}
    Footer
</template>

<style lang="scss">
@import 'reset-css';
@import 'bulma';
.table {
  width: 100%;
  font-size: 1.2rem;
  th {
    font-weight: bold;
  }
  .price {
    white-space: nowrap;
  }
}
</style>

<script>
import Header from './structure/header'
import Footer from './structure/footer'
import Axios from 'axios'

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      lists: null
    }
  },
  mounted() {
    Axios.get('./data/yodoprice.json')
      .then( response => (
        this.lists = response.data
      ))
  }
}
</script>
