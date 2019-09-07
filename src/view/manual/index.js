export default [{
  path: 'msgs',
  name: 'msgs',
  meta: {
    icon: 'ios-mail-outline',
    title: '发送消息'
  },
  component: () => import('@/view/manual/sendMsg.vue')
}, {
  path: 'rpcQuery',
  name: 'rpcQuery',
  meta: {
    icon: 'md-git-network',
    title: 'RPC查询诊断'
  },
  component: () => import('@/view/manual/rpcQuery.vue')
}]

// 人工干预消息类型
export let messageTypes = {1: '价格变更', 2: 'B中台商品变更', 3: '商城商品变更', 4: '扩展信息变更', 5: '评论变更', 6: '库存变更', 8: '商品池权限变更'}

// 消息维度
export let entityTypes = {skuIds: '1', contractNO: '2', skuPool: '3', skuGroup: '4', syncAll: '5'}
