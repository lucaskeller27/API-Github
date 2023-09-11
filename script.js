const userName = 'seu_username';
const apiUrl = `https://api.github.com/users/${userName}`;

async function fetchGitHubUserData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok){
      throw new Error(`Erro na solitação: ${response.statusText}`);
    }
   
    const userData = await response.json();

      const pfp = userData.avatar_url;
      const nome = userData.name;
      const username = userData.login;
      const repos = userData.public_repos;
      const seguidores = userData.followers;
      const seguindo = userData.following;
      const reposUrl = userData.repos_url;

    console.log('Imagem do Avatar:', pfp);
    console.log('Nome:', nome);
    console.log('Username:', username);
    console.log('Quantidade de Repositórios:', repos);
    console.log('Quantidade de Seguidores:', seguidores);
    console.log('Quantidade de Usuários Seguindo:', seguindo);
    console.log('Link para Repositórios:', reposUrl);

  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

fetchGitHubUserData();