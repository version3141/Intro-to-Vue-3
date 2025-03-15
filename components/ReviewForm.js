app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
        </select>
        <label for="recommend">Would you recommend this product?</label>
        <input type="radio" id="yes" value="yes" v-model="recommend" />
        <label for="yes">Yes</label>
        
        <input type="radio" id="no" value="No" v-model="recommend" />
        <label for="no">Noo!</label>
        <br>
        <input class="button" type="submit" value="Submit">
    </form>`,
    data(){
        return {
            name:'',
            review:'',
            rating:null,
            recommend:null
        }
    },
    methods:{
        onSubmit(){
            
            let productReview={
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend
            }
            
            this.$emit('review-submitted', productReview)

            this.name=''
            this.review=''
            this.rating=null
            recommend=null
        }
    }

});