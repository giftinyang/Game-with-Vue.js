new Vue({
    el: '#app',
    data: {
        display: true,
        displayOne: false,
        displayTwo: false,
        number: Math.round(Math.random()*10),
        numberTwo: Math.round(Math.random()*10),
        myScore: 100,
        monsterScore: 100,
        hits: '',
        monster: '',

     
    },
    methods: {
        changeDisplay() {
            this.display = false;
            this.displayOne = true;
            this.displayTwo = false;
            this.myScore = 100;
            this.monsterScore = 100;
        },
    }
})