const ESTADO_INICIAL = {
  roupa: [{}],
  feed: [
    {
      id: 1,
      modelo: "Fender",
      preco: "R$ 8500",
    },
    {
      id: 2,
      modelo: "Suhr",
      preco: "R$ 12000",
    },
    {
      id: 3,
      modelo: "Tagima",
      preco: "R$ 4000",
    },
    {
      id: 4,
      modelo: "Squier",
      preco: "R$ 2500",
    },
  ],
};

export default function roupas(state = ESTADO_INICIAL, action) {
  if (action.type === "ADICIONAR_CARRINHO") {
    return {
      ...state,
      roupa: action.roupas,
    };
  }
  return state;
}
