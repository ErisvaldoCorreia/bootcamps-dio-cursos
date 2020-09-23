const obj = {
    contexto: function() {

        setTimeout(() => {
            this.logs('Testando espera de saida')
            console.log(func1Argumento(5));
            console.log(func2ArgsReturnDireto(3, 7));
            console.log(funcReturnBlock('Texto do value'));
        }, 2000);

    },

    logs: function(value) {
        console.log(value)
    }
};

obj.contexto();

// Arrow Functions e formas de poder declarar: //

const funcVazia = () => {};

const func1Argumento = a => a + a;

const func2ArgsReturnDireto = (a, b) => a + b;

const funcReturnBlock = value => {
    let texto = `Texto mais o valor passado ${value}`
    return texto;
};

// Default Params

const funcDefault = (a = 1, b = 1) => {
    return a * b;
}

// chamada de função com argumentos diversos.
console.log(funcDefault(4))
console.log(funcDefault(6, undefined))
console.log(funcDefault(undefined, 2))
console.log(funcDefault());
console.log(funcDefault(3,3))
