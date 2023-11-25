import { Condicao } from "../model/condicao.model";

export const CONDICOES: Condicao[]=[
    {id: 1, name: 'Abalado', type: 'Medo', description:`O personagem sofre –2 em testes de perícia. Se ficar abalado novamente, em vez disso fica apavorado.`},
    {id: 2, name: 'Agarrado', type: 'Movimento', description:`O personagem fica desprevenido e imóvel, sofre –2 em testes de ataque e só pode atacar com armas leves. Ataques à distância contra um alvo envolvido em uma manobra agarrar têm 50% de chance de acertar o alvo errado`},
    {id: 3, name: 'Alquebrado', type: 'Mental', description:`O custo em pontos de mana das habilidades do personagem aumenta em +1.`},
    {id: 4, name: 'Apavorado', type: 'Medo', description:`O personagem sofre –5 em testes de perícia e não pode se aproximar voluntariamente da fonte do medo.`},
    {id: 5, name: 'Atordoado', type: 'Mental', description:`O personagem fica desprevenido e não pode fazer ações.`},
    {id: 6, name: 'Caído', type: 'Movimento', description:`O personagem sofre –5 em ataques corpo a corpo e seu deslocamento é reduzido a 1,5m. Além disso, sofre –5 na Defesa contra ataques corpo a corpo e recebe +5 na Defesa contra ataques à distância (cumulativos com outras condições).`},
    {id: 7, name: 'Cego', type: 'Sentidos', description:`O personagem fica desprevenido e lento, não pode fazer testes de Percepção para observar e sofre –5 em testes de perícias baseadas em Força ou Destreza. Todos os alvos de seus ataques recebem camuflagem total. Você é considerado cego enquanto estiver em uma área de escuridão total, a menos que algo lhe permita perceber no escuro.`},
    {id: 8, name: 'Confuso', type: 'Mental', description:`O personagem comporta-se de modo aleatório. Role 1d6 no início de seus turnos: 1) Movimenta-se em uma direção escolhida por uma rolagem de 1d8; 2-3) Não pode fazer ações, e fica balbuciando incoerentemente; 4-5) Usa a arma que estiver empunhando para atacar a criatura mais próxima, ou a si mesmo se estiver sozinho (nesse caso, apenas role o dano); 6) A condição termina e pode agir normalmente.`},
    {id: 9, name: 'Debilitado', type: '', description:`O personagem sofre –5 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se o personagem ficar debilitado novamente, em vez disso fica inconsciente.`},
    {id: 10, name: 'Desprevenido', type: '', description:`O personagem sofre –5 na Defesa e em Reflexos. Você fica desprevenido contra inimigos que não possa perceber.`},
    {id: 11, name: 'Doente', type: 'Metabolismo', description:`Sob efeito de uma doença.`},
    {id: 12, name: 'Em Chamas', type: '', description:`O personagem está pegando fogo. No início de seus turnos, sofre 1d6 pontos de dano de fogo. O personagem pode gastar uma ação padrão para apagar o fogo com as mãos. Imersão em água também apaga as chamas.`},
    {id: 13, name: 'Enfeitiçado', type: 'Mental', description:`O personagem se torna prestativo em relação à fonte da condição. Ele não fica sob controle da fonte, mas percebe suas palavras e ações da maneira mais favorável possível. A fonte da condição recebe +10 em testes de Diplomacia com o personagem.`},
    {id: 14, name: 'Enjoado', type: 'Metabolismo', description:`O personagem só pode realizar uma ação padrão ou de movimento (não ambas) por rodada. Ele pode gastar uma ação padrão para fazer uma investida, mas pode avançar no máximo seu deslocamento (e não o dobro)`},
    {id: 15, name: 'Enredado', type: 'Movimento', description:`O personagem fica lento, vulnerável e sofre –2 em testes de ataque.`},
    {id: 16, name: 'Envenenado', type: 'Veneno', description:`O efeito desta condição varia de acordo com o veneno. Pode ser perda de vida recorrente ou outra condição (como fraco ou enjoado). Perda de vida recorrente por venenos é cumulativa.`},
    {id: 17, name: 'Esmorecido', type: 'Mental', description:`O personagem sofre –5 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos.`},
    {id: 18, name: 'Exausto', type: 'Cansaço', description:`O personagem fica debilitado, lento e vulnerável. Se ficar exausto novamente, em vez disso fica inconsciente.`},
    {id: 19, name: 'Fascinado', type: 'Mental', description:`Com a atenção presa em alguma coisa. O personagem sofre –5 em Percepção e não pode fazer ações, exceto observar aquilo que o fascinou. Esta condição é anulada por ações hostis contra o personagem ou se o que o fascinou não estiver mais visível. Balançar uma criatura fascinada para tirá-la desse estado gasta uma ação padrão.`},
    {id: 20, name: 'Fatigado', type: 'Cansaço', description:`O personagem fica fraco e vulnerável. Se ficar fatigado novamente, em vez disso fica exausto.`},
    {id: 21, name: 'Fraco', type: '', description:`O personagem sofre –2 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se ficar fraco novamente, em vez disso fica debilitado.`},
    {id: 22, name: 'Frustrado', type: 'Mental', description:`O personagem sofre –2 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos. Se ficar frustrado novamente, em vez disso fica esmorecido.`},
    {id: 23, name: 'Imóvel', type: 'Movimento', description:`Todas as formas de deslocamento do personagem são reduzidas a 0m.`},
    {id: 24, name: 'Inconsciente', type: '', description:`O personagem fica indefeso e não pode fazer ações, incluindo reações (mas ainda pode fazer testes que sejam naturalmente feitos quando se está inconsciente, como testes de Constituição para estabilizar sangramento). Balançar uma criatura para acordá-la gasta uma ação padrão.`},
    {id: 25, name: 'Indefeso', type: '', description:`O personagem fica desprevenido, mas sofre –10 na Defesa, falha automaticamente em testes de Reflexos e pode sofrer golpes de misericórdia.`},
    {id: 26, name: 'Lento', type: 'Movimento', description:`Todas as formas de deslocamento do personagem são reduzidas à metade (arredonde para baixo para o primeiro incremento de 1,5m) e ele não pode correr ou fazer investidas.`},
    {id: 27, name: 'Ofuscado', type: 'Sentidos', description:`O personagem sofre –2 em testes de ataque e de Percepção.`},
    {id: 28, name: 'Paralisado', type: 'Movimento', description:`Fica imóvel e indefeso e só pode realizar ações puramente mentais.`},
    {id: 29, name: 'Pasmo', type: 'Metamorfose', description:`Não pode fazer ações.`},
    {id: 30, name: 'Petrificado', type: 'Mental', description:`O personagem fica inconsciente e recebe redução de dano 8.`},
    {id: 31, name: 'Sangrando', type: 'Metabolismo.', description:`No início de seu turno, o personagem deve fazer um teste de Constituição (CD 15). Se falhar, perde 1d6 pontos de vida e continua sangrando. Se passar, remove essa condição.`},
    {id: 32, name: 'Sobrecarregado', type: 'Movimento', description:`O personagem sofre penalidade de armadura –5 e seu deslocamento é reduzido –3m.`},
    {id: 33, name: 'Surdo', type: 'Sentidos', description:`O personagem não pode fazer testes de Percepção para ouvir e sofre –5 em testes de Iniciativa. Além disso, é considerado em condição ruim para lançar magias.`},
    {id: 34, name: 'Surpreendido', type: '', description:`O personagem fica desprevenido e não pode fazer ações.`},
    {id: 35, name: 'Vulnerável', type: '', description:`O personagem sofre –2 na Defesa.`},

];