new Vue({
    el: '#app',
    data: {
        numeratorOne: '',
        denominatorOne: '',
        numeratorTwo: '',
        denominatorTwo: '',
        numeratorR: '',
        denominatorR: '',
        comparation: 'Fracción mayor'
    },
    methods: {
        calcular: function() {
            var nume1 = this.numeratorOne,
                deno1 = this.denominatorOne,
                nume2 = this.numeratorTwo,
                deno2 = this.denominatorTwo;
            
            var n1 = parseInt(nume1.trim()),
                d1 = parseInt(deno1.trim()),
                n2 = parseInt(nume2.trim()),
                d2 = parseInt(deno2.trim());
            
            if(n1 && d1 && n2 && d2) {
                //primer caso: denominador igual 
                if((deno1 == deno2) && (nume1 != nume2)) {
                    var numerators = [nume1, nume2],
                        lengthNumerators = numerators.length;
                    numerators.sort(function(a, b) {
                        return a - b;
                    });
                    this.numeratorR = numerators[lengthNumerators - 1];                    
                    this.denominatorR = deno1;
                    this.comparation = 'Fracción mayor';
                }
                //segundo caso: numerador igual
                if((nume1 == nume2) && (deno1 != deno2)){
                    var denominators = [deno1, deno2],
                        lengthDenominators = denominators.length;
                    denominators.sort(function(a, b) {
                        return a - b;
                    });
                    this.numeratorR = nume1;                    
                    this.denominatorR = denominators[0];
                    this.comparation = 'Fracción mayor';
                }
                //tercer caso: numerador y denominador diferente
                if((nume1 != nume2) && (deno1 != deno2)) {
                    var x = nume1 / deno1,
                        y = nume2 / deno2,
                        fractionMayor;
                    var fraction = [x, y];
                    fraction.sort(function(a, b) {
                        return a - b;
                    }); 
                    fractionMayor = fraction[fraction.length - 1];
                    if(x == y) {
                        this.comparation = 'F. Equivalentes';
                        this.numeratorR = nume1;                    
                        this.denominatorR = deno1;
                    }
                    else if(fractionMayor == x) {
                        this.numeratorR = nume1;                    
                        this.denominatorR = deno1; 
                        this.comparation = 'Fracción mayor';
                    }
                    else if(fractionMayor == y) {
                        this.numeratorR = nume2;                    
                        this.denominatorR = deno2;
                        this.comparation = 'Fracción mayor';
                    }
                }
                //fracciones iguales
                if((nume1 == nume2) && (deno1 == deno2)) {
                    this.comparation = 'Fraciones iguales';
                    this.numeratorR = nume1;                    
                    this.denominatorR = deno1;
                } 
            }
        },
        changeNumber: function() {
            this.numeratorR = '';
            this.denominatorR = '';
            this.comparation = 'Fracción mayor';
        },
        clean: function() {
            this.numeratorOne = '';
            this.denominatorOne = '';
            this.numeratorTwo = '';
            this.denominatorTwo = '';
            this.numeratorR = '';
            this.denominatorR = '';
            this.comparation = 'Fracción mayor';
        }
    }

});