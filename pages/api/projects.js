// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    projects: [   
    {
      id: 1,
      uid: "github_repo",
      name: "Github REPO",
      createdBy: "Lucas Rodrigues Severo",
      completedOn: "20 fevereiro 2020",
      categories: ["Aplicação Web"],
      link: "https://github.com/Lucas-Severo/github-repo",
      description: "Um projeto web que utiliza api do Github para realizar busca de projetos"
    },
    {
      id: 2,
      uid: "tindev",
      name: "TinDev",
      createdBy: "Lucas Rodrigues Severo",
      completedOn: "20 março 2020",
      categories: ["Aplicação Web"],
      link: "https://github.com/Lucas-Severo/Tindev",
      description: "Um projeto web relaciona vários desenvolvedores cadastrados no github"
    },
    {
      id: 3,
      uid: "fashionista",
      name: "Fashionista",
      createdBy: "Lucas Rodrigues Severo",
      completedOn: "20 março 2020",
      categories: ["Aplicação Web"],
      link: "https://github.com/Lucas-Severo/Fashionista",
      description: "Um ecommerce para a venda de produtos da moda feminina"
    },
    {
      id: 4,
      uid: "covid_cleaner",
      name: "CovidCleaner",
      createdBy: "Lucas Rodrigues Severo",
      completedOn: "20 março 2020",
      categories: ["Extensão Web"],
      link: "https://github.com/Lucas-Severo/CovidCleaner",
      description: "Uma extensão para google chrome que substitui a palavra covid com o símbolo da vacina"
    }
  ]
  })
}
