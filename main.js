var app=new Vue({
	el:'#app',
	data:{
		brand:'Vue Mastery',
		product:'Socks',
		image:'images/socks.jpg',
		description:'socks',
		link:'index.html',
		inStock:false,
		selectedVariant:0,
		details:["80% cotton","20% polyester","Gender-Neutral"],
		variants:[
		{variantId:2234,variantSock:"green-sock",variantColor:"green",variantImage:"images/red-socks.jpg"},
		{variantId:2235,variantSock:"blue-sock",variantColor:"blue",variantImage:"images/blue-socks.jpg"}],
		inventory:2,
		sale:true,
		cart:1000	    
	},
	methods:{ 
		addToCart(){
		this.cart+=1
	},
	RemoveToCart(){
		this.cart-=1
	},
	// variantImage for updateproduct
	updateProduct(variantImage){
		this.image=variantImage
	},
	updateImage(index){
			this.selectedVariant=index
			console.log(index)
	}
},
    computed:{
    	title(){
    		return this.brand+' '+this.product
    	},
    	photo(){
    		return this.variants[this.selectedVariant].variantImage    		
    	}
    }
})