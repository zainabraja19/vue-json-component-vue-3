<template>
    <div class="json-view-item">
        <!-- Handle Objects and Arrays-->
        <div v-if="data.type === 'object' || data.type === 'array'">
            <div>
                <span
                    :aria-expanded="open ? 'true' : 'false'"
                    class="data-key me-3"
                    @click.stop="toggleOpen"
                >
                    <div style="display: inline-block; vertical-align: middle">
                        <span v-if="!arrowExpand">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="var(--vjc-key-color)"
                                viewBox="0 0 256 256"
                                v-if="!open"
                            >
                                <path
                                    d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"
                                    opacity="0.2"
                                ></path>
                                <path
                                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"
                                ></path>
                            </svg>
                        </span>
                        <span v-else>
                            <span v-html="arrowExpand" v-if="!open" />
                        </span>
                        <span v-if="!arrowCollapse">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="var(--vjc-key-color)"
                                viewBox="0 0 256 256"
                                v-if="open"
                            >
                                <path
                                    d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"
                                    opacity="0.2"
                                ></path>
                                <path
                                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-85.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,130.34Z"
                                ></path>
                            </svg>
                        </span>
                        <span v-else>
                            <span v-html="arrowCollapse" v-if="open" />
                        </span>
                    </div>
                    <div style="display: inline-block; margin-left: 0.5em">
                        <slot name="dataKey" />
                        {{ data.key }}:
                    </div>
                    <div
                        style="display: inline-block; margin-left: 0.5em"
                        class="properties"
                    >
                        {{ lengthString }}
                    </div>
                </span>
                <div style="display: inline-block; vertical-align: middle">
                    <div
                        class="hover"
                        @click="clickEventFilter(data)"
                        v-if="!firstKey && useFilter"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="var(--vjc-key-color)"
                            viewBox="0 0 256 256"
                        >
                            <path
                                d="M221.9,61.38l-67.74,72.31a8,8,0,0,0-2.16,5.47v55.49a8,8,0,0,1-3.56,6.66l-32,21.33A8,8,0,0,1,104,216V139.16a8,8,0,0,0-2.16-5.47L34.1,61.38A8,8,0,0,1,40,48H216A8,8,0,0,1,221.9,61.38Z"
                                opacity="0.2"
                            ></path>
                            <path
                                d="M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm108.34,72.28A15.92,15.92,0,0,0,144,139.17v55.49L112,216V139.17a15.92,15.92,0,0,0-4.32-10.94L40,56H216Z"
                            ></path>
                        </svg>
                    </div>
                    <div
                        class="hover"
                        @click="clickEventFilter(data, true)"
                        v-else-if="firstKey && selected_dev_row && useFilter"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="darkred"
                            viewBox="0 0 256 256"
                        >
                            <path
                                d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"
                                opacity="0.2"
                            ></path>
                            <path
                                d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
            <json-view-item
                v-for="child in data.children"
                :key="getKey(child)"
                :data="child"
                v-show="open"
                :maxDepth="maxDepth"
                :canSelect="canSelect"
                :style="{ border: noBorder ? 'none' : '' }"
                :firstKey="false"
                :arrowExpand="arrowExpand"
                :customParams="customParams"
                :length_of_value="length_of_value"
                :noBorder="noBorder"
                :arrowCollapse="arrowCollapse"
                :useFilter="useFilter"
                :use_ellipsis="use_ellipsis"
                @filter="$emit('filter', $event)"
                @selected="bubbleSelected"
            />
        </div>
        <!-- Handle Leaf Values -->
        <div
            v-if="data.type === 'value'"
            :class="valueClasses"
            @click="clickEvent(data)"
            @keyup.enter="clickEvent(data)"
            @keyup.space="clickEvent(data)"
            :role="canSelect ? 'button' : undefined"
            :tabindex="canSelect ? '0' : undefined"
        >
            <span class="value-key">
                <slot name="dataKey" />
                {{ data.key }}:
            </span>
            <span
                v-if="!use_ellipsis"
                :class="'showOverflow'"
                :v-html="data.value"
                :style="getValueStyle(data.value)"
            >
                <!-- <slot name="dataValue" /> {{ data.value }} -->
            </span>
            <span
                v-else
                :style="getValueStyle(data.value)"
                :class="
                    Show_overflow ? 'showOverflow hover' : 'hideOverflow hover'
                "
            >
                <slot name="dataValue" />
                {{
                    data.value?.length > length_of_value_checked
                        ? Show_overflow
                            ? data.value
                            : data.value?.slice(0, length_of_value_checked)
                        : data.value
                }}
                <span
                    v-if="data.value?.length > length_of_value_checked"
                    @click="
                        data.value?.length > length_of_value_checked
                            ? (Show_overflow = !Show_overflow)
                            : ''
                    "
                    v-html="!Show_overflow ? elipsis : unelipsis"
                />
            </span>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref, computed, toRefs, toRef } from 'vue'
export default defineComponent({
    name: 'json-view-item',
})
</script>
<script setup>
const emit = defineEmits(['selected', 'filter'])
const Show_overflow = ref(false)
const props = defineProps({
    data: {
        required: true,
        type: Object,
    },
    selected_dev_row: {
        required: false,
        default: '',
        type: String,
    },
    maxDepth: {
        type: Number,
        required: false,
        default: 1,
    },
    firstKey: {
        type: Boolean,
        required: false,
        default: true,
    },
    canSelect: {
        type: Boolean,
        required: false,
        default: false,
    },
    noBorder: {
        type: Boolean,
        required: false,
        default: false,
    },
    useFilter: {
        type: Boolean,
        required: false,
        default: false,
    },
    customParams: {
        type: Object,
        required: false,
        default: () => {},
    },
    arrowExpand: {
        type: [String, Number],
        required: false,
        default: '',
    },
    arrowCollapse: {
        type: [String, Number],
        required: false,
        default: '',
    },
    length_of_value: {
        type: Number,
        required: false,
        default: 50,
    },
    use_ellipsis: {
        type: Boolean,
        required: false,
        default: false,
    },
})

const open = ref(props.data.depth < props.maxDepth)

const toggleOpen = () => {
    open.value = !open.value
}

const length_of_value_checked = computed(() =>
    props.length_of_value < 1 ? 50 : props.length_of_value
)

const clickEvent = (data) => {
    emit('selected', {
        key: data.key,
        value: data.value,
        path: data.path,
        depth: data.depth,
    })
}

const clickEventFilter = (data, reset = false) => {
    let paths = data.path.split('.')
    paths.pop()
    let selected_path = Number.isFinite(Number(data.key))
        ? paths.join('.')
        : `${paths.join('.')}.${data.key}`
    if (data.path.slice(0, -1) === selected_path) {
        selected_path = selected_path + `[${data.key}]`
    }
    emit('filter', {
        key: data.key,
        type: data.type,
        path: data.path,
        depth: data.depth,
        selected_path,
        reset,
    })
}
const bubbleSelected = (data) => {
    emit('selected', data)
}

const getKey = (value) => {
    if (!isNaN(value.key)) {
        return value.key + ':'
    } else {
        return '"' + value.key + '":'
    }
}

const getValueStyle = (value) => {
    const type = typeof value
    switch (type) {
        case 'string':
            return { color: 'var(--vjc-string-color)' }
        case 'number':
            return { color: 'var(--vjc-number-color)' }
        case 'boolean':
            return {
                color: value
                    ? 'var(--vjc-boolean-color-true)'
                    : 'var(--vjc-boolean-color-false)',
            }
        case 'object':
            return { color: 'var(--vjc-null-color)' }
        case 'undefined':
            return { color: 'var(--vjc-null-color)' }
        default:
            return { color: 'var(--vjc-valueKey-color)' }
    }
}

const valueClasses = computed(() => {
    return {
        'value-key': true,
        'can-select': props.canSelect,
    }
})

const lengthString = computed(() => {
    if (props.data.type === 'array') {
        if (props?.customParams?.item) {
            return props.data.length === 1
                ? `${props.data.length} ${props.customParams.item[0]}`
                : `${props.data.length} ${props.customParams.item[1]}`
        } else {
            return props.data.length === 1
                ? props.data.length + ' item'
                : props.data.length + ' items'
        }
    }

    if (props?.customParams?.item) {
        return props.data.length === 1
            ? `${props.data.length} ${props.customParams.property[0]}`
            : `${props.data.length} ${props.customParams.property[1]}`
    } else {
        return props.data.length === 1
            ? props.data.length + ' property'
            : props.data.length + ' properties'
    }
})

const elipsis =
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm56-88a12,12,0,1,1-12-12A12,12,0,0,1,184,128Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,96,128Z"></path></svg>'
const unelipsis =
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm0-44a12,12,0,1,1-12-12A12,12,0,0,1,140,84Zm0,88a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"></path></svg>'
</script>
<style>
.hover {
    opacity: 1;
}
.hover:hover {
    opacity: 0.6;
    cursor: pointer;
}

.hideOverflow {
    overflow-x: hidden !important;
    word-wrap: break-word;
    white-space: normal;
}
.showOverflow {
    overflow: auto;
    word-wrap: break-word;
    white-space: normal;
}
</style>