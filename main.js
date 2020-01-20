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
        attack(){
            this.hits = 'HITS';
            this.monster = 'MONSTER';
            this.displayTwo = true;
            this.number = Math.round(Math.random()*10);
            this.numberTwo = Math.round(Math.random()*10);
            this.myScore = this.myScore - this.number;
            this.monsterScore = this.monsterScore - this.numberTwo;
            this.width = this.monsterScore;
            if(this.myScore <= 0){
                alert('Game over!');
                this.myScore = 0;
                this.displayOne = true;
                this.displayTwo = false;
                this.display = false;
            }else if (this.monsterScore <= 0){
                alert('You win!');
                this.monsterScore = 0;
                this.displayOne = true;
                this.displayTwo = false;
                this.display = false;
            }
            
        },
        
    }
})