document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário
    calcDist(); // Chama a função para calcular a distribuição eletrônica
});

function calcDist() {
    const numeroAt = parseInt(document.getElementById('numeroAtomico').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(numeroAt) || numeroAt < 1) {
        resultadoDiv.innerHTML = 'Por favor, insira um número atômico válido.';
        return;
    }

    // Array com elementos da tabela periódica
    const elementos = [
        { numero: 1, simbolo: 'H', nome: 'Hidrogênio' },
        { numero: 2, simbolo: 'He', nome: 'Hélio' },
        { numero: 3, simbolo: 'Li', nome: 'Lítio' },
        { numero: 4, simbolo: 'Be', nome: 'Berílio' },
        { numero: 5, simbolo: 'B', nome: 'Boro' },
        { numero: 6, simbolo: 'C', nome: 'Carbono' },
        { numero: 7, simbolo: 'N', nome: 'Nitrogênio' },
        { numero: 8, simbolo: 'O', nome: 'Oxigênio' },
        { numero: 9, simbolo: 'F', nome: 'Flúor' },
        { numero: 10, simbolo: 'Ne', nome: 'Neônio' },
        { numero: 11, simbolo: 'Na', nome: 'Sódio' },
        { numero: 12, simbolo: 'Mg', nome: 'Magnésio' },
        { numero: 13, simbolo: 'Al', nome: 'Alumínio' },
        { numero: 14, simbolo: 'Si', nome: 'Silício' },
        { numero: 15, simbolo: 'P', nome: 'Fósforo' },
        { numero: 16, simbolo: 'S', nome: 'Enxofre' },
        { numero: 17, simbolo: 'Cl', nome: 'Cloro' },
        { numero: 18, simbolo: 'Ar', nome: 'Argônio' },
        { numero: 19, simbolo: 'K', nome: 'Potássio' },
        { numero: 20, simbolo: 'Ca', nome: 'Cálcio' },
        { numero: 21, simbolo: 'Sc', nome: 'Escândio' },
        { numero: 22, simbolo: 'Ti', nome: 'Titânio' },
        { numero: 23, simbolo: 'V', nome: 'Vanádio' },
        { numero: 24, simbolo: 'Cr', nome: 'Cromo' },
        { numero: 25, simbolo: 'Mn', nome: 'Manganês' },
        { numero: 26, simbolo: 'Fe', nome: 'Ferro' },
        { numero: 27, simbolo: 'Co', nome: 'Cobalto' },
        { numero: 28, simbolo: 'Ni', nome: 'Níquel' },
        { numero: 29, simbolo: 'Cu', nome: 'Cobre' },
        { numero: 30, simbolo: 'Zn', nome: 'Zinco' },
        { numero: 31, simbolo: 'Ga', nome: 'Gálio' },
        { numero: 32, simbolo: 'Ge', nome: 'Germânio' },
        { numero: 33, simbolo: 'As', nome: 'Arsênio' },
        { numero: 34, simbolo: 'Se', nome: 'Selênio' },
        { numero: 35, simbolo: 'Br', nome: 'Bromo' },
        { numero: 36, simbolo: 'Kr', nome: 'Criptônio' },
        { numero: 37, simbolo: 'Rb', nome: 'Rubídio' },
        { numero: 38, simbolo: 'Sr', nome: 'Estrôncio' },
        { numero: 39, simbolo: 'Y', nome: 'Ítrio' },
        { numero: 40, simbolo: 'Zr', nome: 'Zircônio' },
        { numero: 41, simbolo: 'Nb', nome: 'Nióbio' },
        { numero: 42, simbolo: 'Mo', nome: 'Molibdênio' },
        { numero: 43, simbolo: 'Tc', nome: 'Tecnécio' },
        { numero: 44, simbolo: 'Ru', nome: 'Rutênio' },
        { numero: 45, simbolo: 'Rh', nome: 'Ródio' },
        { numero: 46, simbolo: 'Pd', nome: 'Paládio' },
        { numero: 47, simbolo: 'Ag', nome: 'Prata' },
        { numero: 48, simbolo: 'Cd', nome: 'Cádmio' },
        { numero: 49, simbolo: 'In', nome: 'Índio' },
        { numero: 50, simbolo: 'Sn', nome: 'Estanho' },
        { numero: 51, simbolo: 'Sb', nome: 'Antimônio' },
        { numero: 52, simbolo: 'Te', nome: 'Telúrio' },
        { numero: 53, simbolo: 'I', nome: 'Iodo' },
        { numero: 54, simbolo: 'Xe', nome: 'Xenônio' },
        { numero: 55, simbolo: 'Cs', nome: 'Césio' },
        { numero: 56, simbolo: 'Ba', nome: 'Bário' },
        { numero: 57, simbolo: 'La', nome: 'Lantânio' },
        { numero: 58, simbolo: 'Ce', nome: 'Cério' },
        { numero: 59, simbolo: 'Pr', nome: 'Praseodímio' },
        { numero: 60, simbolo: 'Nd', nome: 'Neodímio' },
        { numero: 61, simbolo: 'Pm', nome: 'Promécio' },
        { numero: 62, simbolo: 'Sm', nome: 'Samário' },
        { numero: 63, simbolo: 'Eu', nome: 'Európio' },
        { numero: 64, simbolo: 'Gd', nome: 'Gadolínio' },
        { numero: 65, simbolo: 'Tb', nome: 'Térbio' },
        { numero: 66, simbolo: 'Dy', nome: 'Disprósio' },
        { numero: 67, simbolo: 'Ho', nome: 'Hólmio' },
        { numero: 68, simbolo: 'Er', nome: 'Érbio' },
        { numero: 69, simbolo: 'Tm', nome: 'Túlio' },
        { numero: 70, simbolo: 'Yb', nome: 'Itérbio' },
        { numero: 71, simbolo: 'Lu', nome: 'Lutécio' },
        { numero: 72, simbolo: 'Hf', nome: 'Háfnio' },
        { numero: 73, simbolo: 'Ta', nome: 'Tântalo' },
        { numero: 74, simbolo: 'W', nome: 'Tungstênio' },
        { numero: 75, simbolo: 'Re', nome: 'Rênio' },
        { numero: 76, simbolo: 'Os', nome: 'Ósmio' },
        { numero: 77, simbolo: 'Ir', nome: 'Irídio' },
        { numero: 78, simbolo: 'Pt', nome: 'Platina' },
        { numero: 79, simbolo: 'Au', nome: 'Ouro' },
        { numero: 80, simbolo: 'Hg', nome: 'Mercúrio' },
        { numero: 81, simbolo: 'Tl', nome: 'Tálio' },
        { numero: 82, simbolo: 'Pb', nome: 'Chumbo' },
        { numero: 83, simbolo: 'Bi', nome: 'Bismuto' },
        { numero: 84, simbolo: 'Po', nome: 'Polônio' },
        { numero: 85, simbolo: 'At', nome: 'Astato' },
        { numero: 86, simbolo: 'Rn', nome: 'Radônio' },
        { numero: 87, simbolo: 'Fr', nome: 'Frâncio' },
        { numero: 88, simbolo: 'Ra', nome: 'Rádio' },
        { numero: 89, simbolo: 'Ac', nome: 'Actínio' },
        { numero: 90, simbolo: 'Th', nome: 'Tório' },
        { numero: 91, simbolo: 'Pa', nome: 'Protactínio' },
        { numero: 92, simbolo: 'U', nome: 'Urânio' },
        { numero: 93, simbolo: 'Np', nome: 'Netúnio' },
        { numero: 94, simbolo: 'Pu', nome: 'Plutônio' },
        { numero: 95, simbolo: 'Am', nome: 'Amerício' },
        { numero: 96, simbolo: 'Cm', nome: 'Cúrio' },
        { numero: 97, simbolo: 'Bk', nome: 'Berquélio' },
        { numero: 98, simbolo: 'Cf', nome: 'Califórnio' },
        { numero: 99, simbolo: 'Es', nome: 'Einstênio' },
        { numero: 100, simbolo: 'Fm', nome: 'Férmio' },
        { numero: 101, simbolo: 'Md', nome: 'Mendelévio' },
        { numero: 102, simbolo: 'No', nome: 'Nobélio' },
        { numero: 103, simbolo: 'Lr', nome: 'Laurêncio' },
        { numero: 104, simbolo: 'Rf', nome: 'Rutherfórdio' },
        { numero: 105, simbolo: 'Db', nome: 'Dúbnio' },
        { numero: 106, simbolo: 'Sg', nome: 'Seabórgio' },
        { numero: 107, simbolo: 'Bh', nome: 'Bóhrio' },
        { numero: 108, simbolo: 'Hs', nome: 'Hássio' },
        { numero: 109, simbolo: 'Mt', nome: 'Meitnério' },
        { numero: 110, simbolo: 'Ds', nome: 'Darmstádio' },
        { numero: 111, simbolo: 'Rg', nome: 'Roentgênio' },
        { numero: 112, simbolo: 'Cn', nome: 'Copernício' },
        { numero: 113, simbolo: 'Nh', nome: 'Nihônio' },
        { numero: 114, simbolo: 'Fl', nome: 'Fleróvio' },
        { numero: 115, simbolo: 'Mc', nome: 'Moscóvio' },
        { numero: 116, simbolo: 'Lv', nome: 'Livermório' },
        { numero: 117, simbolo: 'Ts', nome: 'Tenessino' },
        { numero: 118, simbolo: 'Og', nome: 'Oganessônio' }
    ];
    

    // Encontrar o elemento correspondente ao número atômico
    const elemento = elementos.find(el => el.numero === numeroAt);

    if (!elemento) {
        resultadoDiv.innerHTML = 'Elemento não encontrado na tabela periódica.';
        return;
    }

    const subniveis = [
        ["1s", 2], ["2s", 2], ["2p", 6], ["3s", 2], ["3p", 6], ["4s", 2],
        ["3d", 10], ["4p", 6], ["5s", 2], ["4d", 10], ["5p", 6], ["6s", 2],
        ["4f", 14], ["5d", 10], ["6p", 6], ["7s", 2], ["5f", 14], ["6d", 10], ["7p", 6]
    ];

    let distribuicao = [];
    let eletronsRestantes = numeroAt;
    // codigo com for para realizar a contagem dos eletrons e a difinição dos subniveis eletronicos, utilizando o numero atomico como base para definir o ultimo subnivel,quando o valor de eletrons restantes chegar a 0 ,sera finalizado o loop. 
    for (let i = 0; i < subniveis.length; i++) {
        const subnivel = subniveis[i][0];
        const maxEletrons = subniveis[i][1];
        //caso o numero de eletrons chegar a 0, interrompe o loop
        if (eletronsRestantes <= 0) break;
        //caso o numero de eletrons restantes seja maior que a capacidade do subnivel atual, é chamado outro subnivel para ser preenchido e esse subnivel vai ser adicionado a distribuição.
        if (eletronsRestantes >= maxEletrons) {
            distribuicao.push(`${subnivel}${maxEletrons}`);
            eletronsRestantes -= maxEletrons;
        } 
        //caso o numero de eletrons não ultrapaasse a capacidade maxima do subnivel atual, sera repassado o valor a distribuição e a variavel eletronsRestantes sera zerada, encerrando o loop
        else {
            distribuicao.push(`${subnivel}${eletronsRestantes}`);
            eletronsRestantes = 0;
        }
    }



    //codigo utilizado para encontrar a ultima camada, utlizando um .map para criar um novo array com os valores dentro da distribuição,
    const ultimaCamada = Math.max(...distribuicao.map(s => parseInt(s[0])));

    //codigo utilizado para encontrar a camada de valencia, utilizando a variavel destribuição e transformando seu valor no valor da ultima camada(fazendo com que sejam as mesmas coisas)
    const camadaValencia = distribuicao.filter(s => parseInt(s[0]) === ultimaCamada);

    //codigo utilizado para calcular o numero de eletrons na camada de valencia, utiliza um total mais o valor armazanado na ultima camada, utilizando o reduce para somar total e s em um unico valor(total vira um numero e s retorna somente o ultimo subnivel por causa do .slice, a partir de 0) 
    const nEletronsValencia = camadaValencia.reduce((total, s) => total + parseInt(s.slice(2)), 0);

    //para calcular o subnivel mais energetico é somente adicionado um contador de elementos da variavel distribuição
    const subnivelMaisEnergetico = distribuicao[distribuicao.length - 1];
    
    //para calcular o numero de eletrons no subnivel mais energetico é utilizado de base o subnivel mais energetico, utilizando tambem a função slice para percorrer o array e retornar o ultimo valor a partir de 2
    const nEletronsSubnivelMaisEnergetico = parseInt(subnivelMaisEnergetico.slice(2));


    //
    resultadoDiv.innerHTML = `
        <p><strong>Elemento:</strong> ${elemento.nome} (${elemento.simbolo})</p>
        <p><strong>Distribuição eletrônica:</strong> ${distribuicao.join(' ')}</p>
        <p><strong>Camada de valência:</strong> Nível ${ultimaCamada}</p>
        <p><strong>Número de elétrons na camada de valência:</strong> ${nEletronsValencia}</p>
        <p><strong>Subnível mais energético:</strong> ${subnivelMaisEnergetico}</p>
        <p><strong>Número de elétrons no subnível mais energético:</strong> ${nEletronsSubnivelMaisEnergetico}</p>
    `;
}
