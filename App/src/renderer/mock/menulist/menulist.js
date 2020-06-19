
import Mock from 'mockjs'

const children = [
  {
    name: 'user',
    text: 'user'
  },
  {
    name: 'role',
    text: 'role'
  },
  {
    name: 'dept',
    text: 'dept'
  },
  {
    name: 'dict',
    text: 'dict'
  },
  {
    name: 'root',
    text: 'root'
  },
  {
    name: 'menu',
    text: 'menu'
  },
  {
    name: 'serve',
    text: 'serve'
  },
  {
    name: 'param',
    text: 'param'
  },
  {
    name: 'news',
    text: 'news'
  },
  {
    name: 'menu',
    text: 'menu'
  },
  {
    name: 'recruit',
    text: 'recruit'
  },
  {
    name: 'product',
    text: 'product'
  },
  {
    name: 'line',
    text: 'line'
  },
  {
    name: 'bar',
    text: 'bar'
  },
  {
    name: 'Histogram',
    text: 'Histogram'
  },
  {
    name: 'pie',
    text: 'pie'
  },
  {
    name: 'ring',
    text: 'ring'
  },
  {
    name: 'waterfall',
    text: 'waterfall'
  },
  {
    name: 'funnel',
    text: 'funnel'
  },
  {
    name: 'radar',
    text: 'radar'
  }

]
Mock.mock(RegExp('/menulist'), 'get', () => {
  return children
})
