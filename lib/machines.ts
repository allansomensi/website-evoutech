export type Machine = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  features: string[];
  image: string;
};

export const machines: Machine[] = [
  {
    slug: "biscomak-p120",
    name: "Biscomak P120",
    category: "Extrusora de biscoitos",
    summary: "Para biscoitos amanteigados tipo colonial.",
    description:
      "Ideal para a produção de biscoitos amanteigados tipo colonial. Faz a extrusão automática, o corte programado e o transporte dos biscoitos até as bandejas, garantindo agilidade e padronização em cada fornada.",
    features: [
      "Extrusão automática",
      "Corte programado",
      "Transporte até as bandejas",
      "Produto padronizado",
    ],
    image: "/img/machines/biscomak_p120.jpg",
  },
  {
    slug: "biscomak-p200",
    name: "Biscomak P200",
    category: "Extrusora de alta produção",
    summary: "Massas e biscoitos por extrusão, em grande escala.",
    description:
      "Equipamento de alta produção para massas e biscoitos por extrusão, com dois cilindros extrusores robustos. Indicado para operar junto a fornos contínuos em produção de grande escala.",
    features: [
      "Dois cilindros extrusores",
      "Largura útil de 300 a 1.500 mm",
      "Integração com fornos contínuos",
    ],
    image: "/img/machines/biscomak_p200.jpg",
  },
  {
    slug: "rotuladora",
    name: "Rotuladora",
    category: "Rotuladora semiautomática",
    summary: "Aplicação de etiquetas e rótulos autoadesivos.",
    description:
      "Rotuladora semiautomática para aplicação de etiquetas e rótulos autoadesivos. Uma solução econômica e versátil para aumentar a produtividade sem mudar toda a linha.",
    features: [
      "Operação semiautomática",
      "Rótulos e etiquetas autoadesivas",
      "Baixo custo de operação",
    ],
    image: "/img/machines/rotuladora.jpg",
  },
  {
    slug: "flex-cod",
    name: "Flex Cod",
    category: "Datador eletrônico",
    summary: "Datação para máquinas de filme contínuo.",
    description:
      "Datador eletrônico para máquinas com filme contínuo, projetado para altas taxas de produção. Marca a cada meia ou uma volta, com dígitos em latão no sistema Flex Code.",
    features: [
      "Até 250 ciclos por minuto",
      "Marcação a cada meia ou uma volta",
      "Dígitos em latão (sistema Flex Code)",
    ],
    image: "/img/machines/flex_cod.jpg",
  },
];
