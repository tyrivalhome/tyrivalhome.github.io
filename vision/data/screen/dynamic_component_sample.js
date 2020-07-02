(function () {
    return {
        template: `
            <button style="font-size:40px;"
                    @click="onEvent('click', config.data[0])">
                {{config.option.data.name}}
            </button>`,
        methods: {},
        watch: {},
        config: {
            style: {
                width: 400,
                height: 300,
                opacity: 1,
                visibility: 'visible'
            },
            option: {
                data: {name: null}
            },
            data: [
                {name: '按钮一', value: 80}
            ],
            event: [{
                name: 'click',
                comment: '点击事件',
                binders: [
                    {name: 'name', comment: '数据名', prop: 'name', state: null},
                    {name: 'series', comment: '数据值', state: null},
                    {name: 'data', comment: '参数对象', prop: 'data', state: null},
                ]
            }],
            proxy: {
                type: 1,
            },
            transform: {
                mapper: {
                    name: null
                }
            },
            trigger: [{
                show: true,
                name: '可见性',
                binder: null,
                prop: "config.style.visibility",
                defaultValue: true,
                isScript: true,
                mapper: [
                    {key: true, value: 'visible', comment: '返回 true 时显示'},
                    {key: false, value: 'hidden', comment: '返回 false 时隐藏'},
                ]
            }],
            handler: function (config) {
                console.log("handler")
                let data = config.data[0]
                let mapper = config.transform.mapper
                let propValue = mapper.name || 'name'
                config.option.data.name = data[propValue]
            },
            render: function (config) {
                console.log("render")
            }
        },
        hooks: {
            created: function (self) {
                console.log("created")
            },
            mounted: function (self) {
                console.log("mounted")
            },
            beforeDestroy: function (self) {
                console.log("beforeDestroy")
            },
            destroyed: function (self) {
                console.log("destroyed")
            },
            onEvent: function (eventName, item, index, self) {
                console.log("onEvent")
            },
            onStyleListener: function (val, oldVal, self) {
                console.log("onResizeListener")
            },
            onTriggerListener: function (val, oldVal, self) {
                console.log("onTriggerListener")
            },
            onDataListener: function (val, oldVal, self) {
                console.log("onDataListener")
            },
            onOptionListener: function (val, oldVal, self) {
                console.log("onOptionListener")
            },
            onProxyListener: function (val, oldVal, self) {
                console.log("onProxyListener")
            },
            onTransformListener: function (val, oldVal, self) {
                console.log("onTransformListener")
            },
            onEventListener: function (val, oldVal, self) {
                console.log("onEventListener")
            }
        }
    }
})()