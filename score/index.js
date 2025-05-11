const url = "http://43.207.107.77:5000/";

async function createGame() {
  const response = await fetch(url + "game");
  if (response.ok) {
    const data = await response.json();
    return data;
  }
}

const sampleElement = document.getElementById("sample");

async function sampleApi() {
  const response = await fetch(url + "games", { mode: "no-cors" });
  if (response.ok) {
    sampleElement.innerText = `status: ${response.status}`;
  }
}

//点数増減
async function addScore(gameID, pointPlayer1, pointPlayer2) {
  try {
    const response = await fetch(url + "game/latest/score/" + pointPlayer1 + "/" + pointPlayer2, {
      method: "POST",
    })
    const data = response.json()
    return data;
  } catch (error) {
    console.error("エラーが生じました", error)
    throw error
  }
}

//スコアのリセット
async function scoreReset() {
  try {
    const response = await fetch(url + "game/latest/reset", {
      method: "POST",
    })
    const data = response.json()
    return data;
  } catch (error) {
    console.error("エラーが生じました", error)
    throw error
  }
}

//点数の増減表示
let gameID = 1
let pointPlayer1 = 0
let pointPlayer2 = 0

function addScorePlayer1Print() {
  if (pointPlayer1 < 9) {
    pointPlayer1 += 1;
    document.querySelector('#Player1').innerText = pointPlayer1
    addScore(gameID, pointPlayer1, pointPlayer2)
  }
}

function addScorePlayer2Print() {
  if (pointPlayer2 < 9) {
    pointPlayer2 += 1;
    document.querySelector('#Player2').innerText = pointPlayer2
    addScore(gameID, pointPlayer1, pointPlayer2)
  }
}

function subScorePlayer1Print() {
  if (pointPlayer1 > 0) {
    pointPlayer1 -= 1;
    document.querySelector('#Player1').innerText = pointPlayer1
    addScore(gameID, pointPlayer1, pointPlayer2)
  }
}

function subScorePlayer2Print() {
  if (pointPlayer2 > 0) {
    pointPlayer2 -= 1;
    document.querySelector('#Player2').innerText = pointPlayer2
    addScore(gameID, pointPlayer1, pointPlayer2)
  }
}

//点数のリセット表示
function scoreResetPrint() {
  pointPlayer1 = 0;
  pointPlayer2 = 0;
  document.querySelector('#Player1').innerText = pointPlayer1
  document.querySelector('#Player2').innerText = pointPlayer2
  scoreReset();
}
