//classe que vai organizar os dados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = [
      {
        login: "maykbrito",
        name: "Mayk Brito",
        public_repos: "76",
        followers: "120000",
      },
      {
        login: "diego3g",
        name: "Diego Fernandes",
        public_repos: "76",
        followers: "120000",
      },
    ];
  }
}

//class que vai criar a visualização e eventos do html
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);
    
    this.tbody = this.root.querySelector("table tbody");

    this.update();
  }

  update() {
    this.removeAllTr();

    this.entries.forEach((user) => {
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user p').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textCotent = user.name
      row.querySelector('.user span').textCotent = user.login
      row.querySelector('.repositories').textCotent = user.public_repos
      row.querySelector('.followers').textCotent = user.followers

      this.tbody.append(row);
    });
  }

  createRow() {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td class="user">
        <img src="https://github.com/diego3g.png" alt="imagem de diego3g">
        <a href="https://github.com/diego3g" target="_blank">
          <p>Diego Fernanades</p>
          <span>diego3g</span>
        </a>
      </td>
      <td class="repositories"> 48 </td>
      <td class="followers"> 22503 </td>
      <td>
        <button class="remove">&times;</button>
      </td>
    `;

    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
