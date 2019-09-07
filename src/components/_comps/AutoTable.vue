<template>
  <div style="margin-top: 7px;">
    <Spin size="small" fix v-if="loading"></Spin>
    <Table size="small" v-if="!hideTable" ref="table" @on-sort-change="sortChanged" :columns="columns2" :data="rows" :border="border"/>
    <Row type="flex" justify="end" class="mgtb20">
      <Page :total="count" :pageSize="pageSize" :current="current" @on-page-size-change="pageSizeChanged" @on-change="pageChanged" size="small" show-total show-elevator show-sizer></Page>
    </Row>
  </div>
</template>

<script>
import * as util from '../../libs/util'
import AutoTableButtons from './AutoTableButtons'
import _ from 'underscore'

export default {
  props: ['uri', 'params', 'columns', 'defaultWidth', 'unAuto', 'border'],
  data () {
    return {
      search: {},
      rows: [],
      count: 0,
      current: 1,
      pageSize: 10,
      filterMap: {},
      hideTable: 0,
      loading: true // 很遗憾，iview的table还没有支持loading的效果
    }
  },
  computed: {
    columns2 () {
      return this.columns.map(c => _.extend({align: 'center'}, c, { // 搜索功能需要改变c，请注意
        render: c.renderText && ((h, ctx) => h('span', c.renderText(ctx.row))) ||
          // render 组件
          this.renderComp(c) ||
          // render字典
          this.renderDict(c) ||
          // render 按钮
          c.renderButtons && ((h, ctx) => h(AutoTableButtons, {props: {buttons: c.renderButtons(ctx.row), row: ctx.row}})) ||
          c.render,
        width: c.width || this.defaultWidth,
        filterRemote: this.filterRemote,
        filters: c.filter !== false && c.mapper && (c.mapper instanceof Array && c.mapper.map(e => ({value: e.code, label: e.name})) || _.pairs(c.mapper).map(e => ({value: e[0], label: e[1]}))),
        filterMultiple: false,
        renderHeader: c.searchable ? (h, ctx) => // 支持直接搜索
          h('div', {
            domProps: {
              className: 'tableth-block'
            }
          }, [
            h('span', c.title),
            h('i-input', {
              style: { width: '100%' },
              domProps: {
                value: c.search,
                className: 'inlinetop'
              },
              on: {
                'on-enter': this.reload,
                input: value => {
                  c.search = value
                }
              }
            })
          ])
          : c.renderHeader
      }))
    }
  },
  async mounted () {
    for (let event of ['on-selection-change', 'on-select', 'on-select-all', 'on-current-change', 'on-select-cancel']) {
      this.$refs.table.$on(event, (...args) => {
        this.$emit(event, ...args)
      })
    }
    // await setTimeout(300)
    if (!this.unAuto) {
      await this.reload()
    }
  },
  methods: {
    async reset () { // 重置表格的状态
      this.search = {}
      this.filterMap = {}
      this.current = 1
      this.hideTable = 1
      await this.$nextTick()
      this.hideTable = 0
      await this.reload()
    },
    filterRemote: function (selected, field) {
      if (!selected.length) {
        delete this.filterMap[field]
      } else {
        this.filterMap[field] = selected[0]
      }
      this.reload()
    },
    sortChanged: function ({ key, order }) {
      this.order = (order === 'asc' ? '+' : '-') + key
      this.reload()
    },
    pageChanged: function (pageNO) {
      this.current = pageNO
      this.reload()
    },
    pageSizeChanged: function (pageSize) {
      this.pageSize = pageSize
      this.reload()
    },
    async reload () {
      let pager = {
        pageNo: this.current,
        pageSize: this.pageSize || 10
      }
      // let search = _.pairs(this.search).filter(p => p[1])
      this.params = this.params && util.filterNullField(this.params)
      let params = _.extend({}, this.params, pager, this.filterMap, this.dkhFlag)
      let p = util.request(this.uri, { data: params })
      util.updateLoading(p, r => { this.loading = r })
      return p.then(r => {
        this.rows = r.data.list
        this.count = r.data.total
        return r
      })
    },
    renderComp (c) {
      let renderComp = c.renderComp
      if (!renderComp || !renderComp.type) return false
      if (renderComp.type.toLowerCase() === 'switch') {
        return (h, ctx) => h('AutoSwitch', {
          props: {...renderComp,
            value: ctx.row[c.key],
            row: ctx.row,
            load: renderComp.change
          },
          on: {
            input: function (value) {
              ctx.row[c.key] = value
            }
          }
        })
      } else if (renderComp.type.toLowerCase() === 'input') {
        return (h, ctx) => h('Input', {
          props: {
            size: 'small',
            ...renderComp,
            value: ctx.row[c.key],
            type: 'text',
            row: ctx.row
          },
          on: {
            input: function (value) {
              ctx.row[c.key] = value
            },
            'on-change': function (value) {
              renderComp.change && renderComp.change(ctx.row)
            }
          }
        })
      } else if (renderComp.type.toLowerCase() === 'select') {
        return (h, ctx) => h('AutoSelect', {
          props: {
            size: 'small',
            ...renderComp,
            value: ctx.row[c.key],
            row: ctx.row
          },
          on: {
            input: function (value) {
              ctx.row[c.key] = value
            },
            'on-change': function (value) {
              renderComp.change && renderComp.change(ctx.row)
            }
          }
        })
      }
      return false
    },
    // 展示字典文字
    renderDict (c) {
      if (!c.mapper) return false
      if (c.mapper instanceof Array) {
        // mapper格式： [{code: 1, name: '男', color: 'cyan'}, {code: 2, name: '女', color: 'red'}]
        return (h, ctx) => {
          let dict = c.mapper.find(o => o.code === ctx.row[c.key])
          return dict && h('Tag', {props: {color: dict.color}}, dict.name) || h('span', dict.name)
        }
      } else {
        return (h, ctx) => c.mapper[ctx.row[c.key]] !== null && h('Tag', {props: {color: 'cyan'}}, c.mapper[ctx.row[c.key]]) || h('span', c.mapper[ctx.row[c.key]])
      }
    }
  }
}
</script>
<style scoped>
  .mglr20{margin-left: 20px;margin-right: 20px;}
  .mgtb20{margin-top: 20px;margin-bottom: 20px;}
</style>
