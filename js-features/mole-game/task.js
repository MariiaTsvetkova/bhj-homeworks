let holes = document.getElementsByClassName('hole');

[...holes].forEach(hole => {
    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            score.incrementKills();
            return;
        }

        score.incrementMisses();
    }
});


let score = {
    kills: 0,
    misses: 0,

    getKills() {
        return this.kills;
    },

    setKills(value) {
        this.kills = value;
        document.getElementById('dead').innerText = this.kills;
    },

    incrementKills(value = 1) {
        this.setKills(this.kills + value);
        this.check();
    },

    getMisses() {
        return this.misses;
    },

    setMisses(value) {
        this.misses = value;
        document.getElementById('lost').innerText = this.misses;
    },

    incrementMisses(value = 1) {
        this.setMisses(this.misses + value);
        this.check();
    },

    check() {
        if (this.getKills() === 10 || this.getMisses() === 5) {
            this.setKills(0);
            this.setMisses(0);
        }
    }
}