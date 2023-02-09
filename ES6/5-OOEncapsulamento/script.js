class Tv {
    constructor() {
        this._relacaoCanais = [2,4,5,7,10]
        this._canalAtivo = 5
        this._volume = 7
    }

    // getters e setters
    get canalAtivo() {
        return this._canalAtivo
    }

    set canalAtivo(canal) {
        if (this._relacaoCanais.indexOf(canal) !== -1) {
            this._canalAtivo = canal 
        } else {
            this._canalAtivo = null
        }
    }

}

let tv = new Tv()
tv.canalAtivo = 1
console.log(tv.canalAtivo)