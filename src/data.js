import { type } from "@testing-library/user-event/dist/type";

export const data = [
    {
      id: 1,
      image: 'imagens/abacaxi.jpg',
      name: 'Abacaxi',
      price: 10.00,
      unit: 'Unidade',
      type: 'fruta'
    },
    {
      id: 2,
      image: 'imagens/amora.jpg',
      name: 'Amora',
      price: 44.99,
      unit: 'Kg',
      type: 'fruta'
    },
    {
      id: 3,
      image: 'imagens/laranja.jpg',
      name: 'Laranja',
      price: 7.99,
      unit: 'Unidade',
      type: 'fruta'
    },
    {
      id: 4,
      image: 'imagens/banana.jpg',
      name: 'Banana Prata',
      price: 4.99,
      unit: 'kg',
      type: 'fruta'
    },
    {
      id: 5,
      image: 'imagens/figo.jpg',
      name: 'Figo',
      price: 64.90,
      unit: 'Kg',
      type: 'fruta'
    },
    {
      id: 6,
      image: 'imagens/morango.png',
      name: 'Morango',
      price: 14.99,
      unit: 'kg',
      type: 'fruta'
    },
    {
      id: 7,
      image: 'imagens/mamão.jpg',
      name: 'Mamão',
      price: 7.99,
      unit: 'Kg',
      type: 'fruta'
    },
    {
      id: 8,
      image: 'imagens/manga.jpg',
      name: 'Manga',
      price: 6.00,
      unit: '250g',
      type: 'fruta'
    },
    {
      id: 9,
      image: 'imagens/Maça.jpg',
      name: 'Maça',
      price: 8.39,
      unit: 'Kg',
      type: 'fruta'
    },
    {
      id: 10,
      image: 'imagens/melancia.jpg',
      name: 'Melancia',
      price: 8.79,
      unit: 'Kg',
      type: 'fruta'
    },
    {
      id: 11,
      image: 'imagens/uva.jpg',
      name: 'Uva Thompson',
      price: 14.97,
      unit: '500g',
      type: 'fruta'
    },
    {
      id: 12,
      image: 'imagens/limão.jpg',
      name: 'Limão',
      price: 6.98,
      unit: 'Kg',
      type: 'fruta'
    },
    {
      id: 13,
      image: 'imagens/Milho.jpg',
      name: 'Milho',
      price: 0.50,
      unit: 'Unidade',
      type: 'hortalica'
    },
    {
      id: 14,
      image: 'imagens/berinjela.jpg',
      name: 'Berinjela',
      price: 4.69,
      unit: 'Kg',
      type: 'hortalica'
    },
    {
      id: 15,
      image: 'imagens/rabanete.jpg',
      name: 'Rabanete',
      price: 3.50,
      unit: '250g',
      type: 'hortalica'
    },
    {
      id: 16,
      image: 'imagens/ervilha.jpg',
      name: 'Ervilha',
      price: 4.99,
      unit: 'kg',
      type: 'hortalica'
    },
    {
      id: 17,
      image: 'imagens/pimentão.jpg',
      name: 'Pimentão',
      price: 15.89,
      unit: 'Kg',
      type: 'hortalica'
    },
    {
      id: 18,
      image: 'imagens/tomate.jpg',
      name: 'Tomate',
      price: 6.99,
      unit: 'kg',
      type: 'hortalica'
    },
    {
      id: 19,
      image: 'imagens/hortela.jpg',
      name: 'Hortelã',
      price: 3.49,
      unit: '100g',
      type: 'verdura'
    },
    {
      id: 20,
      image: 'imagens/espinafre.jpg',
      name: 'Espinafre',
      price: 9.95,
      unit: '250g',
      type: 'hortalica'
    },
    {
      id: 21,
      image: 'imagens/couve flor.jpg',
      name: 'Couve Flor',
      price: 14.90,
      unit: '250g',
      type: 'hortalica'
    },
    {
      id: 22,
      image: 'imagens/repolho.jpg',
      name: 'Repolho',
      price: 5.49,
      unit: 'Kg',
      type: 'hortalica'
    },
    {
      id: 23,
      image: 'imagens/brocolis.jpg',
      name: 'Brócolis',
      price: 11.70,
      unit: 'Kg',
      type: 'hortalica'
    },
    {
      id: 24,
      image: 'imagens/pepino.jpg',
      name: 'Pepino',
      price: 15.90,
      unit: 'Kg',
      type: 'hortalica'
    },
    {
      id: 25,
      image: 'imagens/abobora.jpg',
      name: 'Abobora',
      price: 9.99,
      unit: 'Unidade',
      type: 'legume'
    },
    {
      id: 26,
      image: 'imagens/berinjela.jpg',
      name: 'Berinjela',
      price: 4.69,
      unit: 'Kg',
      type: 'legume'
    },
    {
      id: 27,
      image: 'imagens/rabanete.jpg',
      name: 'Rabanete',
      price: 3.50,
      unit: '250g',
      type: 'legume'
    },
    {
      id: 28,
      image: 'imagens/ervilha.jpg',
      name: 'Ervilha',
      price: 4.99,
      unit: 'kg',
      type: 'legume'
    },
    {
      id: 29,
      image: 'imagens/pimentão.jpg',
      name: 'Pimentão',
      price: 15.89,
      unit: 'Kg',
      type: 'legume'
    },
    {
      id: 30,
      image: 'imagens/tomate.jpg',
      name: 'Tomate',
      price: 6.99,
      unit: 'kg',
      type: 'legume'
    },
    {
      id: 31,
      image: 'imagens/hortela.jpg',
      name: 'Hortelã',
      price: 3.49,
      unit: '100g',
      type: 'legume'
    },
    {
      id: 32,
      image: 'imagens/espinafre.jpg',
      name: 'Espinafre',
      price: 9.95,
      unit: '250g',
      type: 'legume'
    },
    {
      id: 33,
      image: 'imagens/couve flor.jpg',
      name: 'Couve Flor',
      price: 14.90,
      unit: '250g',
      type: 'legume'
    },
    {
      id: 34,
      image: 'imagens/repolho.jpg',
      name: 'Repolho',
      price: 5.49,
      unit: 'Kg',
      type: 'legume'
    },
    {
      id: 35,
      image: 'imagens/brocolis.jpg',
      name: 'Brócolis',
      price: 11.70,
      unit: 'Kg',
      type: 'legume'
    },
    {
      id: 36,
      image: 'imagens/pepino.jpg',
      name: 'Pepino',
      price: 15.90,
      unit: 'Kg',
      type: 'legume'
    },
    {
      id: 37,
      image: 'imagens/cebola.jpg',
      name: 'Cebola',
      price: 5.99,
      unit: 'Kg',
      type: 'legume'
    },
    {
      id: 38,
      image: 'imagens/pimenta.jpg',
      name: 'Pimenta',
      price: 7.99,
      unit: '250g',
      type: 'legume'
    },
    {
      id: 39,
      image: 'imagens/batata doce.jpg',
      name: 'Batata doce',
      price: 3.50,
      unit: 'kg',
      type: 'legume'
    },
    {
      id: 40,
      image: 'imagens/cenoura.jpg',
      name: 'Cenoura',
      price: 12.99,
      unit: 'kg',
      type: 'legume'
    },
    {
      id: 41,
      image: 'imagens/pimentão.jpg',
      name: 'Pimentão',
      price: 15.89,
      unit: 'Kg',
      type: 'fruta'
    },
    {
      id: 42,
      image: 'imagens/uva.jpg',
      name: 'Uva',
      price: 7.99,
      unit: 'kg',
      type: 'fruta'
    },
    {
      id: 43,
      image: 'imagens/mamão.jpg',
      name: 'Mamão',
      price: 4.99,
      unit: 'Kg',
      type: 'fruta'
    },
    {
      id: 44,
      image: 'imagens/morango.jpg',
      name: 'Morango',
      price: 9.99,
      unit: 'kg',
      type: 'fruta'
    },
    {
      id: 45,
      image: 'imagens/kiwi.jpg',
      name: 'Kiwi',
      price: 5.99,
      unit: 'Kg',
      type: 'fruta'
    },
    {
      id: 46,
      image: 'imagens/limão.jpg',
      name: 'Limão',
      price: 6.99,
      unit: 'kg',
      type: 'fruta'
    },
    {
      id: 47,
      image: 'imagens/laranja.jpg',
      name: 'Laranja',
      price: 7.99,
      unit: 'kg',
      type: 'fruta'
    },
    {
      id: 48,
      image: 'imagens/maçã.jpg',
      name: 'Maçã',
      price: 12.99,
      unit: 'kg',
      type: 'fruta'
    },
    {
      id: 49,
      image: 'imagens/banana.jpg',
      name: 'Banana',
      price: 1.99,
      unit: 'kg',
      type: 'fruta'
    },
    {
      id: 50,
      image: 'imagens/tomate.jpg',
      name: 'Tomate',
      price: 10.99,
      unit: 'kg',
      type: 'fruta'
    },
    {
      id: 51,
      image: 'imagens/castanha de caju.jpg',
      name: 'Castanha de caju',
      price: 2.99,
      unit: 'kg',
      type: 'legume'
    },
    {
      id: 52,
      image: 'imagens/mangueira.jpg',
      name: 'Mangueira',
      price: 3.99,
      unit: 'kg',
      type: 'legume'
    },
    {
      id: 53,
      image: 'imagens/milho.jpg',
      name: 'Milho',
      price: 20.99,
      unit: 'kg',
      type: 'hortalica'
    },
    {
      id: 54,
      image: 'imagens/pao.jpg',
      name: 'Pão Caseiro',
      price: 9.99,
      unit: 'Unidade',
      type: 'outros'
    },
    {
      id: 55,
      image: 'imagens/bolacha.jpg',
      name: 'Bolacha Caseira',
      price: 21.69,
      unit: 'Kg',
      type: 'outros'
    },
    {
      id: 56,
      image: 'imagens/queijo.jpg',
      name: 'Queijo Artesanal',
      price: 27.90,
      unit: 'Kg',
      type: 'outros'
    },
    {
      id: 57,
      image: 'imagens/geleia artesanal.jpg',
      name: 'Geleia Artesanal',
      price: 17.99,
      unit: '500g',
      type: 'outros'
    },
    {
      id: 58,
      image: 'imagens/Mel de abelha.jpg',
      name: 'Mel de Abelha',
      price: 27.89,
      unit: 'Kg',
      type: 'outros'
    },
    {
      id: 59,
      image: 'imagens/alface.png',
      name: 'Alface',
      price: 2.59,
      unit: 'Unidade',
      type: 'verdura'
    },
    {
      id: 60,
      image: 'imagens/abobora.jpg',
      name: 'Abobora',
      price: 9.99,
      unit: 'Unidade',
      type: 'verdura'
    },
    {
      id: 61,
      image: 'imagens/Champiñones.jpg',
      name: 'Champignon',
      price: 5.75,
      unit: '300g',
      type: 'verdura'
    },
    {
      id: 62,
      image: 'imagens/cebola roxa.jpg',
      name: 'Cebola Roxa',
      price: 6.99,
      unit: 'kg',
      type: 'verdura'
    },
    {
      id: 63,
      image: 'imagens/pimentão.jpg',
      name: 'Pimentão',
      price: 15.89,
      unit: 'Kg',
      type: 'verdura'
    },
    {
      id: 64,
      image: 'imagens/tomate.jpg',
      name: 'Tomate',
      price: 6.99,
      unit: 'kg',
      type: 'verdura'
    },
    
    {
      id: 66,
      image: 'imagens/espinafre.jpg',
      name: 'Espinafre',
      price: 9.95,
      unit: '250g',
      type: 'verdura'
    },
    {
      id: 67,
      image: 'imagens/couve flor.jpg',
      name: 'Couve Flor',
      price: 14.90,
      unit: '250g',
      type: 'verdura'
    },
    {
      id: 68,
      image: 'imagens/repolho.jpg',
      name: 'Repolho',
      price: 5.49,
      unit: 'Kg',
      type: 'verdura'
    },
    {
      id: 69,
      image: 'imagens/brocolis.jpg',
      name: 'Brócolis',
      price: 11.70,
      unit: 'Kg',
      type: 'verdura'
    },
    {
      id: 70,
      image: 'imagens/pepino.jpg',
      name: 'Pepino',
      price: 15.90,
      unit: 'Kg',
      type: 'verdura'
    }
  
]

