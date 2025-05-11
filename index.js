const url = "http://43.207.107.77:5000/";

async function jumpToScorePage() {
  // createNewGame().then(
  //   (data) => {
  //     window.location.href = "./score/index.html";
  //   }
  // )
  window.location.href = "./score/index.html";
}

async function createGame() {
  const response = await fetch(url + "game");
  if (response.ok) {
    const data = await response.json();
    return data;
  }
}

//新規ゲーム作成
async function createNewGame() {
  try {
    const response = await fetch(url + "game", { method: "POST" });
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("エラーが生じました", error);
    throw error;
  }
}

