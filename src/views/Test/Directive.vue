<template>
    <div>
        <div>dirdective 全局组件  用于用户权限的操作</div>
        <div v-display-key="'1'">
            <button>button1</button>
        </div>
        <div v-display-key="'22'">
            <button>button2</button>
        </div>
        <div v-display-key="'23'">
            <button>button3</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'directive',
}
</script>