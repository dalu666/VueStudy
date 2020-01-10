<template>
    <div class="dragg">
		<div class="draggLeft">
			<ul class="moduleList">
				<li class="modeText"  draggable="true" @dragstart="handleDragStart($event,'span')"   >文本</li>
				<li draggable="true" @dragstart="handleDragStart($event,'input')">输入框</li>
			</ul>
		</div>
		<div class="draggRight" id="draggRight"  @drop.stop.prevent="handleDropOnCanvas($event)"
            @dragover.stop.prevent
            >
                <div v-for="(item,index) in selectionStyleMap" :key="index"
                    draggable="true"
                    :style="item.style"
                    @click.native.stop.prevent="handleComponentTrigger(childNode)"
                    @dragstart="handleDragStartDome(item,$event)"

                    @drop.native.stop.prevent="handleDropOnNode(item, $event)"
                    @dragover.stop.prevent
                >
                    
                    <input v-if="item.type=='input'" placeholder="请输入" type="text">
                    <span v-if="item.type=='span'" contenteditable="true" style="outline:none;">文本</span>
                </div>
		</div>
        <div class="styleBox">
            <ul>
                <li>宽：<input type="number" @input="changeWidth($event)" v-model="widthVal" @focus="getWidth" ></li>
                <li>高：<input type="number" ></li>
            </ul>
        </div>
	</div>
</template>
<script>
import modeDiv from '../../components/modeDiv.vue'
export default {
	name:'draggable',
	data(){
		return{
            nodeNum:0,
            selectionStyleMap:[],
            isDown:false,//鼠标是否按下,
            nodeId:'',
            widthVal:100
		}
	},
	components:{modeDiv},
	methods:{
        
        handleComponentTrigger(){
            console.log('点击')
        },
        handleDragStartDome(node, event){
            let start={
                left:event.offsetX,
                top:event.offsetY
            }
            node.start={...start};
            event.dataTransfer.setData('node', JSON.stringify(node));
            console.log(event)
        },
        handleDropOnNode(node,event){
            console.log('拖动结束')
            let offsetX = event.offsetX
            let offsetY = event.offsetY
            let style = {
                position: 'absolute',
                'pointer-events': 'auto',
                left: offsetX + 'px',
                top: offsetY + 'px',
                
            }
            event.style=style;
        },
        handleDragStart: function (event,type) {
            let _t = this
            this.nodeNum++
            // 拖拽的节点数据
            let nodeInfo = {
                id: 'node-' +this.nodeNum,
                innerHTML: '',
                type:type,
                start:{
                    left:event.offsetX,
                    top:event.offsetY
                }
            }
            event.dataTransfer.setData('node', JSON.stringify(nodeInfo))
            console.log(event)
        },
        handleDropOnCanvas(event){ //拖拽结束
            let that=this;
            // console.log(event.offsetX)
            let nodeInfo=JSON.parse(event.dataTransfer.getData('node'));
            
            this.nodeId=nodeInfo.id;
            let offsetX = event.offsetX - nodeInfo.start.left;
            let offsetY = event.offsetY-nodeInfo.start.top;
            let style = {
                position: 'absolute',
                'pointer-events': 'auto',
                left: offsetX + 'px',
                top: offsetY + 'px',
                width:'100px',
                height:'30px'
            }
            
            nodeInfo.style={...style}
            if (this.selectionStyleMap.length) {
                // 判断该节点是否已存在
                let nodeIndex = this.selectionStyleMap.findIndex(node => node.id === nodeInfo.id)
                if(nodeIndex>-1){
                    nodeInfo.style.width=that.selectionStyleMap[nodeIndex].style.width;
                    this.selectionStyleMap.splice(nodeIndex,1,nodeInfo) ;
                }else{
                    this.selectionStyleMap.push(nodeInfo) 
                }
            }else{
                this.selectionStyleMap.push(nodeInfo) 
            }
        },
        getWidth(){
            let nodeIndex = this.selectionStyleMap.findIndex(node => node.id === this.nodeId)
            let widthVal=this.selectionStyleMap[nodeIndex].style.width;
            this.widthVal=widthVal.replace(/px/, "")
        },
        changeWidth(event){
            let nodeIndex = this.selectionStyleMap.findIndex(node => node.id === this.nodeId)
            let widthVal=this.selectionStyleMap[nodeIndex].style.width;
            // console.log(widthVal.replace(/px/, ""))
            let newNode=this.selectionStyleMap[nodeIndex];
            newNode.style.width=event.target.value + 'px'
            this.selectionStyleMap.splice(nodeIndex,1,newNode);
        }
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
	width:60%;
	height :100%;
	border-right :1px solid #ccc;
    position :relative;
}
.draggRight div{
	border:1px solid #ccc;
	// width:100px;
	// height:30px;
}
.draggRight div input{
	border:none;
    height:28px;
    width:100%;
}
.draggRight div span{
    display:inline-block;
    height:28px;
    width:100%;
    line-height:28px;
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
.styleBox{
    float:left;
    width:20%;
}
.styleBox ul{
    padding-top:10px;
}
.styleBox ul li{
    margin-bottom:10px;
}
.styleBox ul li input{
    border:1px solid #ccc;
}
</style>