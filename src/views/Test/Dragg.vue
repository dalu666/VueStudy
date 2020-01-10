<template>
    <div class="dragg">
		<div class="draggLeft">
			<ul class="moduleList">
				<li class="modeText"  draggable="true" @dragstart="handleDragStart($event)"   >文本</li>
				<li >输入框</li>
				{{positionX}}
			</ul>
		</div>
		<div class="draggRight" id="draggRight"  draggable="true"  @drop.stop="handleDropOnCanvas($event)" @dragover.stop >
                <div
                    draggable="true"
                    @dragstart="handleDragStartDome($event)"
                    @drop.stop.prevent="handleDropOnNode($event)"
                    @dragover.stop.prevent="handleover($event)"
                >
                    test
                </div>
		</div>
	</div>
</template>
<script>
export default {
	name:'dragg',
	data(){
		return{
			positionX:0,
            positionY:0,
            nodeNum:0,
            selectionStyleMap:[]
		}
	},
	methods:{

        handleDragStartDome(event){
            console.log('右子元素开始')
        },
        handleDropOnNode(node,event){
            console.log('右子拖动结束')
        },
        handleover(){
            console.log('右子结束')
        },
        handleDragStart: function (event) {
            console.log('左开始')
        },
        handleDropOnCanvas(event){ //拖拽结束
            console.log('右父开始')
            
        },
    },
}
</script>
<style lang="stylus" scoped>
.dragg{
	display:flex;
	width:100%;
	height :100%;
	position relative
}
.draggLeft{
	width:20%;
	height :100%;
	border-right :1px solid #ccc;
	box-sizing:border-box;
}
.draggRight{
	width:80%;
	height :100%;
	border-right :1px solid #ccc;
    position :relative;
}
.draggRight div{
	border:1px solid #ccc;
	// position:absolute;
	width:100px;
	height:30px;
}
.div1{
	border:1px solid #ccc;
	position:absolute;
	width:100px;
	height:30px;
}
.moduleList{
	padding-top:10px;
}
.moduleList li{
	display:inline-block;
	height:30px;
	line-height :30px;
	border:1px solid #ccc;
	width :100px;
	cursor pointer;
	margin :0 10px;
	text-align:center;
}
.modeText{
	position:relative;
}
</style>