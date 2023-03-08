// src/components/Warning/index.js 
import Vue from 'vue'
import Warning from './index.vue'

const WarningConstructor = Vue.extend(Warning) // 生成构造器

const warning = function(options={}) {
    const warningChild = new WarningConstructor({ // 实例
        data:options
    }).$mount() // 挂载

    const realDom = warningChild.$el // 真实 dom
    document.body.appendChild(realDom)

    return warningChild
}

export default warning