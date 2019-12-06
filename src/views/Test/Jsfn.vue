<template>
    <div>
        <div>js</div>
        <ul>
            <li>重复输出一个字符串 repeat</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'jsfn',
    created(){
        //  重复输出一个字符串
        this.stradd('abc',3)
        console.log('abc'.repeat(3))
        let a=6;
        setTimeout(()=>{
            // console.log(a); //66
            a=666;
        },1000)
        a=66;
        // 函数
        // (function(){
        //     var a = b = 5;
        // })();
        // a 前面有var 是局部作用域
        // b是全局
        // *************************************start
        String.prototype.repeatify =  function(times) {
            var str = '';
            for (var i = 0; i < times; i++) {
                str += this;
            }
            return str;
        };
        let str2='def'.repeatify(3)
        console.log(str2)
        // **********************************end
        console.log(this.isPrime(4))

        var aa = {n:10,m:20};
        var b = aa;
        b.n = 30;
        console.log(aa.n);
        console.log(b);
        console.log(this.fn3('101010000000'))
    },
    methods:{
        stradd (str,num){
            let that=this;
            let strn=str;
            if(num<1){
                return console.log("");
            } else if(num===1){
                return console.log(strn);
            }else{
                strn +=str;
                num--
            }
            that.stradd(strn,num)
        },
        fn2(){
            var x=1,
                y=0,
                z=0;
            function add(n){
                n=n+1;
            }
            y=add(x); 2
            z=x+y;3
            console.log("y1:"+y);2
            console.log("z1:"+z);3

            function add(n){
                n=n+3;
            }
            y=add(x);4
            z=x+y;5
            console.log("y2:"+y);
            console.log("z2:"+z);
        },
        isPrime(num){ //是不是质数
            if(typeof num !=="number" || !Number.isInteger(num)){
                return false;
            }
            if(num<2){
                return false;
            }
             if(num===2){
                return true;
            }else if(num % 2 ===0){
                return false;
            }
            let gen=Math.sprt(num);//不需要检查比输入数字的开方还要大的数字  3<2
            for(var i=3;i<=gen;i+=2){
                if(num%i===0){
                    return false;
                }
            }
            return true;
        },
        fn3(n){354
            if(!/^([1-9]\d*)/.test(n)){
                return '非法数据';
            }
            var unit = '千百十亿千百十万千百十个';
            if(n.length > unit.length){
                return '数据过长';   str.charAt('a')
            }
            var newStr = '';
            var nlength = n.length;   //3
            unit = unit.substr(unit.length - nlength);  //12-3=9-> 百十个 
            for(var i = 0; i < nlength; i++){     
                newStr += '零一二三四五六七八九'.charAt(n[i]) + unit.charAt(i);  
            }
            newStr = newStr.substr(0,newStr.length-1);
            newStr = newStr.replace(/零(千|百|十)/g,'零').replace(/(零)+/g,'零').replace(/零(亿|万)/g,'$1');
            return newStr;
        }
    }
}
</script>