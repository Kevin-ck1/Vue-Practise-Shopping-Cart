
new Vue({
    el: '#app',
    
    data: {
        product: 'Socks', 
        brand: 'Vue Mastery', 
        
        selectedVariant: 0,
        altText: 'A Pair of Socks',
        
        inventory: 0,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {variantId:2234, variantColor:"green", variantImage:"./assets/vmSocks-green-onWhite.jpg", variantQuantity: 100},
            {variantId:2235, variantColor:"Blue",  variantImage:"./assets/vmSocks-blue-onWhite.jpg", variantQuantity: 0},
        ],
        cart: 0,
    },
    methods: {
        addToCart(){
            this.cart += 1;
        },

        updateProduct(index){
            this.selectedVariant = index
            console.log(index)
        },
    },

    computed: {
        title(){
           return this.product + " " + this.brand
        },
        image(){
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity;
        },
    },

})