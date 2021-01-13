<template lang='pug'>
  #app
    Header
    .container.is-fullhd
      .table-container
        table.table.is-bordered.is-hoverable
          thead
            tr.has-background-grey-lighter
               th 商品名
               th.price ステータス
               th.price(nowrap) 新しい価格
          tbody
            tr(v-for="list in lists" :key="list.index")
              td
                a(:href='list.itemUrl', target='_blank') {{list.name}}
              td.price.has-text-danger {{list.backorder}}
              td.price.has-text-danger {{list.newprice}}
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
