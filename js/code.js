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
                deno2 = this.denominatorTwo,
                numeR = this.numeratorR,
                denoR = this.denominatorR;
            
            var n1 = isNaN(nume1.trim()),
                d1 = isNaN(deno1.trim()),
                n2 = isNaN(nume2.trim()),
                d2 = isNaN(deno2.trim());
            
            if(!n1 && !d1 && !n2 && !d2) {
                //primer caso: denominador igual 
                if((deno1 == deno2) && (nume1 != nume2)) {
                    var numerators = [nume1, nume2],
                        lengthNumerators = numerators.length;
                    numerators.sort(function(a, b) {
                        return a - b;
                    });
                    this.numeratorR = numerators[lengthNumerators - 1];                    
                    this.denominatorR = deno1;
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
                }
                //fracciones iguales
                if((nume1 == nume2) && (deno1 == deno2) && (nume1 != 0) ) {
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
/* var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); */