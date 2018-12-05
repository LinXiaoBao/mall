<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span>Goods</span>
    </nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a class="default cur">Default</a>
          <a class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a class="filterby stopPop" @click="showFilterPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" :class="{'filterby-show': filterBy}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd>
                <a :class="{'cur': priceChecked === 'all'}" @click="priceChecked = 'all'">All</a>
              </dd>
              <dd v-for="(item, key) in priceFilter" :key="key" @click="setPriceFilrer(key)">
                <a :class="{'cur': priceChecked === key}">{{item.startPrice}} - {{item.endPrice}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item, key) in goodsList" :key="key">
                  <div class="pic">
                    <a href="#"><img :src="`static/${item.prodcutImg}`" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.prodcutPrice}}</div>
                    <div class="btn-area">
                      <a class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-show="overLayFlay" @click="closePop"></div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import NavHeader from '@/components/NavHeader.vue'
  import NavBread from '@/components/NavBread.vue'
  import NavFooter from '@/components/NavFooter.vue'
  import axios from 'axios'

  export default{
    data(){
      return {
        goodsList: [],
        priceFilter: [
          {
            startPrice: '0.00',
            endPrice: '500.00'
          },
          {
            startPrice: '500.00',
            endPrice: '1000.00'
          },
          {
            startPrice: '1000.00',
            endPrice: '1500.00'
          }
        ],
        priceChecked: 'all',
        filterBy: false,
        overLayFlay: false
      }
    },
    components: {
      NavHeader,
      NavBread,
      NavFooter
    },
    mounted () {
      this.getGoodsData()
    },
    methods: {
      getGoodsData () {
        axios.get('/api/goodsData').then((res) => {
          this.goodsList = res.data.result
        })
      },
      showFilterPop () {
        this.filterBy = true
        this.overLayFlay = true
      },
      closePop () {
        this.filterBy = false
        this.overLayFlay = false
      },
      setPriceFilrer (index) {
        this.priceChecked = index
        this.closePop()
      }
    }
  }
</script>
