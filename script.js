// 룰렛 휠 설정
const ROULETTE_NUMBERS = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24,
  16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];

const NUMBER_COLORS = {
  0: "green",
  1: "red",
  2: "black",
  3: "red",
  4: "black",
  5: "red",
  6: "black",
  7: "red",
  8: "black",
  9: "red",
  10: "black",
  11: "black",
  12: "red",
  13: "black",
  14: "red",
  15: "black",
  16: "red",
  17: "black",
  18: "red",
  19: "red",
  20: "black",
  21: "red",
  22: "black",
  23: "red",
  24: "black",
  25: "red",
  26: "black",
  27: "red",
  28: "black",
  29: "black",
  30: "red",
  31: "black",
  32: "red",
  33: "black",
  34: "red",
  35: "black",
  36: "red",
};

// DOM 요소
const wheelInner = document.querySelector(".wheel-inner");
const ball = document.querySelector(".ball");
const resultNumber = document.querySelector(".number-display");
const resultColor = document.querySelector(".color-display");
const spinButton = document.getElementById("spin-button");
const simulateButton = document.getElementById("run-simulation-button");
const resetButton = document.getElementById("reset-button");
const bettingSystem = document.getElementById("betting-strategy");
const bettingOption = document.getElementById("betting-option");
const initialBet = document.getElementById("initial-bet");
const balance = document.getElementById("starting-balance");
const maxBet = document.getElementById("max-bet");
const simulationSpins = document.getElementById("simulation-spins");
const labouchereSequenceGroup = document.getElementById(
  "labouchere-sequence-group"
);
const labouchereSequence = document.getElementById("labouchere-sequence");
const strategyExplanation = document.getElementById("strategy-explanation");
const clearHistoryButton = document.getElementById("clear-history-button");
let betHistoryBody = document.getElementById("betting-history-body");

// 통계 요소
const currentBalanceEl = document.getElementById("current-balance");
const currentBetEl = document.getElementById("current-bet");
const totalSpinsEl = document.getElementById("total-spins");
const winsEl = document.getElementById("wins");
const lossesEl = document.getElementById("losses");
const winRateEl = document.getElementById("win-rate");
const maxConsecutiveLossesEl = document.getElementById(
  "max-consecutive-losses"
);
const maxDrawdownEl = document.getElementById("max-drawdown");
const maxBalanceEl = document.getElementById("max-balance");
const minBalanceEl = document.getElementById("min-balance");
const resultSummary = document.getElementById("result-summary");

// 탭 요소
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

// 차트
let balanceChart;
let betSizeChart;

// 시뮬레이션 상태
let gameState = {
  balance: 10000000,
  initialBet: 100000,
  currentBet: 100000,
  maxBet: 5000000,
  totalSpins: 0,
  wins: 0,
  losses: 0,
  consecutiveLosses: 0,
  maxConsecutiveLosses: 0,
  initialBalance: 10000000,
  maxBalance: 10000000,
  minBalance: 10000000,
  maxDrawdown: 0,
  balanceHistory: [],
  betHistory: [],
  spinHistory: [], // 배팅 내역을 저장할 배열
  labouchereSequence: [1, 2, 3, 4, 5],
  originalLabouchereSequence: [1, 2, 3, 4, 5],
  fibonacciSequence: [1, 1],
};

// 언어 설정
let currentLang = localStorage.getItem("selectedLanguage") || "ko";

// 현재 언어에 따른 텍스트 가져오기
function getText(key) {
  let langData;

  // 현재 언어에 따라 데이터 선택
  switch (currentLang) {
    case "ko":
      langData = ko;
      break;
    case "en":
      langData = en;
      break;
    case "ja":
      langData = ja;
      break;
    case "zh":
      langData = zh;
      break;
    default:
      langData = en;
  }

  return langData[key] || key;
}

// 언어 변경 함수
function changeLanguage(lang) {
  currentLang = lang;
  updateAllText();
  localStorage.setItem("selectedLanguage", lang);
}

// 페이지의 모든 텍스트 업데이트
function updateAllText() {
  // 제목 및 부제목
  document.getElementById("title").textContent = getText("title");
  document.getElementById("subtitle").textContent = getText("subtitle");

  // 룰렛 휠 섹션
  document.getElementById("roulette-wheel-title").textContent =
    getText("roulette_wheel");
  document.getElementById("spin-button").textContent = getText("spin");

  // 베팅 시스템 섹션
  document.getElementById("betting-system-title").textContent =
    getText("betting_system");
  document.querySelector('label[for="betting-strategy"]').textContent =
    getText("betting_strategy");
  document.querySelector('option[value="martingale"]').textContent =
    getText("martingale_full");
  document.querySelector('option[value="fibonacci"]').textContent =
    getText("fibonacci_full");
  document.querySelector('option[value="labouchere"]').textContent =
    getText("labouchere_full");
  document.querySelector('option[value="dalembert"]').textContent =
    getText("dalembert_full");
  document.querySelector('option[value="paroli"]').textContent =
    getText("paroli_full");

  document.querySelector('label[for="betting-option"]').textContent =
    getText("betting_option");
  document.querySelector('option[value="red"]').textContent =
    getText("red_full");
  document.querySelector('option[value="black"]').textContent =
    getText("black_full");
  document.querySelector('option[value="even"]').textContent =
    getText("even_full");
  document.querySelector('option[value="odd"]').textContent =
    getText("odd_full");
  document.querySelector('option[value="high"]').textContent =
    getText("high_full");
  document.querySelector('option[value="low"]').textContent =
    getText("low_full");

  document.querySelector('label[for="initial-bet"]').textContent =
    getText("initial_bet");
  document.querySelector('label[for="starting-balance"]').textContent =
    getText("starting_balance");
  document.querySelector('label[for="max-bet"]').textContent =
    getText("max_bet");

  const labouchereLabelEl = document.querySelector(
    'label[for="labouchere-sequence"]'
  );
  if (labouchereLabelEl) {
    labouchereLabelEl.textContent = getText("labouchere_sequence");
  }

  // 시뮬레이션 섹션
  document.getElementById("simulation-title").textContent =
    getText("simulation");
  document.querySelector('label[for="simulation-spins"]').textContent =
    getText("simulation_spins");
  document.getElementById("run-simulation-button").textContent =
    getText("run_simulation");
  document.getElementById("reset-button").textContent = getText("reset");

  document.querySelector(".current-balance-label").textContent =
    getText("current_balance");
  document.querySelector(".current-bet-label").textContent =
    getText("current_bet");
  document.querySelector(".total-spins-label").textContent =
    getText("total_spins");
  document.querySelector(".wins-label").textContent = getText("wins");
  document.querySelector(".losses-label").textContent = getText("losses");
  document.querySelector(".win-rate-label").textContent = getText("win_rate");

  // 베팅 내역 섹션
  document.getElementById("betting-history-title").textContent =
    getText("betting_history");
  document.querySelector("#betting-history-table th:nth-child(1)").textContent =
    getText("round");
  document.querySelector("#betting-history-table th:nth-child(2)").textContent =
    getText("number");
  document.querySelector("#betting-history-table th:nth-child(3)").textContent =
    getText("bet_amount");
  document.querySelector("#betting-history-table th:nth-child(4)").textContent =
    getText("result");
  document.querySelector("#betting-history-table th:nth-child(5)").textContent =
    getText("balance");

  const noHistoryEl = document.getElementById("no-betting-history");
  if (noHistoryEl) {
    noHistoryEl.textContent = getText("no_betting_history");
  }

  document.getElementById("clear-history-button").textContent =
    getText("clear_history");

  // 결과 분석 섹션
  document.getElementById("results-analysis-title").textContent =
    getText("results_analysis");

  const resultSummaryEl = document.getElementById("result-summary");
  if (
    resultSummaryEl &&
    resultSummaryEl.textContent.trim() ===
      getText("run_simulation_to_see_results")
  ) {
    resultSummaryEl.textContent = getText("run_simulation_to_see_results");
  }

  // 전략 설명 섹션
  document.getElementById("strategy-explanation-title").textContent = getText(
    "strategy_explanation"
  );
  updateStrategyExplanation();

  // 푸터
  document.getElementById("footer").textContent = getText("footer");

  // 언어 선택기 업데이트
  document.getElementById("language-select").value = currentLang;
}

// 룰렛 휠 생성
function createRouletteWheel() {
  // 기존 숫자 제거
  while (wheelInner.firstChild) {
    wheelInner.removeChild(wheelInner.firstChild);
  }

  const centerX = 140;
  const centerY = 140;
  const radius = 120;

  ROULETTE_NUMBERS.forEach((number, index) => {
    const angle = index * (360 / ROULETTE_NUMBERS.length) * (Math.PI / 180);
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    const numberElement = document.createElement("div");
    numberElement.classList.add("wheel-number");
    numberElement.classList.add(NUMBER_COLORS[number]);
    numberElement.textContent = number;

    // 위치 설정
    numberElement.style.left = `${x - 20}px`;
    numberElement.style.top = `${y - 20}px`;
    numberElement.style.transform = `rotate(${
      index * (360 / ROULETTE_NUMBERS.length) + 90
    }deg)`;

    wheelInner.appendChild(numberElement);
  });
}

// 베팅 계산 함수
function evaluateBet(number, betOption) {
  const color = NUMBER_COLORS[number];

  switch (betOption) {
    case "red":
      return color === "red";
    case "black":
      return color === "black";
    case "even":
      return number !== 0 && number % 2 === 0;
    case "odd":
      return number !== 0 && number % 2 === 1;
    case "high":
      return number >= 19 && number <= 36;
    case "low":
      return number >= 1 && number <= 18;
    default:
      return false;
  }
}

// 베팅 전략 함수
function calculateNextBet(strategy, currentBet, isWin) {
  switch (strategy) {
    case "martingale":
      if (isWin) {
        return gameState.initialBet;
      } else {
        return currentBet * 2;
      }

    case "fibonacci":
      if (isWin) {
        // 피보나치에서 승리 시 두 단계 뒤로
        if (gameState.fibonacciSequence.length <= 2) {
          gameState.fibonacciSequence = [1, 1];
          return gameState.initialBet;
        } else {
          gameState.fibonacciSequence = gameState.fibonacciSequence.slice(
            0,
            -2
          );
          return (
            gameState.fibonacciSequence[
              gameState.fibonacciSequence.length - 1
            ] * gameState.initialBet
          );
        }
      } else {
        // 피보나치 수열 계산
        if (!gameState.fibonacciSequence) {
          gameState.fibonacciSequence = [1, 1];
        }

        const nextFib =
          gameState.fibonacciSequence[gameState.fibonacciSequence.length - 1] +
          gameState.fibonacciSequence[gameState.fibonacciSequence.length - 2];
        gameState.fibonacciSequence.push(nextFib);
        return nextFib * gameState.initialBet;
      }

    case "labouchere":
      // 라브루쉐 시퀀스가 정의되지 않았을 경우 초기화
      if (
        !gameState.labouchereSequence ||
        !Array.isArray(gameState.labouchereSequence)
      ) {
        if (
          gameState.originalLabouchereSequence &&
          Array.isArray(gameState.originalLabouchereSequence)
        ) {
          gameState.labouchereSequence = [
            ...gameState.originalLabouchereSequence,
          ];
        } else {
          // 기본 시퀀스 설정
          gameState.labouchereSequence = [1, 2, 3, 4, 5];
          gameState.originalLabouchereSequence = [1, 2, 3, 4, 5];
        }
      }

      if (isWin) {
        // 라브루쉐에서 승리 시 시퀀스의 첫 번째와 마지막 숫자 제거
        if (gameState.labouchereSequence.length <= 2) {
          // 시퀀스가 비었거나 1-2개만 남으면 초기화
          gameState.labouchereSequence = [
            ...gameState.originalLabouchereSequence,
          ];
        } else {
          gameState.labouchereSequence = gameState.labouchereSequence.slice(
            1,
            -1
          );
        }
      } else {
        // 패배 시 현재 베팅액을 시퀀스 끝에 추가
        // 현재 베팅액을 단위로 변환 (초기 베팅액으로 나눔)
        const firstNum = gameState.labouchereSequence[0];
        const lastNum =
          gameState.labouchereSequence[gameState.labouchereSequence.length - 1];
        gameState.labouchereSequence.push(firstNum + lastNum);
      }

      // 다음 베팅액 계산 (시퀀스의 첫 번째와 마지막 숫자의 합)
      if (gameState.labouchereSequence.length === 0) {
        gameState.labouchereSequence = [
          ...gameState.originalLabouchereSequence,
        ];
        return gameState.initialBet;
      } else if (gameState.labouchereSequence.length === 1) {
        return gameState.labouchereSequence[0] * gameState.initialBet;
      } else {
        return (
          (gameState.labouchereSequence[0] +
            gameState.labouchereSequence[
              gameState.labouchereSequence.length - 1
            ]) *
          gameState.initialBet
        );
      }

    case "dalembert":
      if (isWin) {
        // 달렘베르에서 승리 시 단위 1 감소
        const unit = currentBet / gameState.initialBet;
        return Math.max(
          gameState.initialBet,
          (unit - 1) * gameState.initialBet
        );
      } else {
        // 패배 시 단위 1 증가
        const unit = currentBet / gameState.initialBet;
        return (unit + 1) * gameState.initialBet;
      }

    case "paroli":
      if (isWin) {
        // 파롤리에서 승리 시 베팅액 2배, 3연승 후 초기화
        gameState.paroliWins = (gameState.paroliWins || 0) + 1;
        if (gameState.paroliWins >= 3) {
          gameState.paroliWins = 0;
          return gameState.initialBet;
        } else {
          return currentBet * 2;
        }
      } else {
        // 패배 시 초기 베팅액으로 리셋
        gameState.paroliWins = 0;
        return gameState.initialBet;
      }

    default:
      return gameState.initialBet;
  }
}

// 룰렛 스핀 함수
function spinRoulette() {
  return new Promise((resolve) => {
    const randomIndex = Math.floor(Math.random() * ROULETTE_NUMBERS.length);
    const number = ROULETTE_NUMBERS[randomIndex];
    const rotations = 5; // 완전한 회전 수
    const endAngle =
      360 * rotations + randomIndex * (360 / ROULETTE_NUMBERS.length);

    // 휠 회전
    wheelInner.style.transform = `rotate(${-endAngle}deg)`;

    // 공 애니메이션
    ball.style.opacity = "1";
    ball.style.animation =
      "ballMove 5s cubic-bezier(0.35, 0, 0.25, 1) forwards";

    // 결과 표시 (애니메이션 후)
    setTimeout(() => {
      ball.style.animation = "none";

      resultNumber.textContent = number;
      resultColor.style.backgroundColor =
        NUMBER_COLORS[number] === "green"
          ? "#00a651"
          : NUMBER_COLORS[number] === "red"
          ? "#e81e25"
          : "#1e1e1e";

      resolve(number);
    }, 5000);
  });
}

// 단일 스핀 실행
async function playSpin() {
  spinButton.disabled = true;
  simulateButton.disabled = true;

  const number = await spinRoulette();
  const betOutcome = evaluateBet(number, bettingOption.value);
  const isWin = betOutcome;

  // 배팅 내역 추가
  addSpinToHistory(number, gameState.currentBet, isWin);

  updateGameState(isWin);
  updateStats();

  spinButton.disabled = false;
  simulateButton.disabled = false;

  return isWin;
}

// 배팅 내역 추가 함수
function addSpinToHistory(number, betAmount, isWin) {
  const spinData = {
    spin: gameState.totalSpins + 1,
    number: number,
    betAmount: betAmount,
    isWin: isWin,
    balance: isWin
      ? gameState.balance + betAmount
      : gameState.balance - betAmount,
    color: NUMBER_COLORS[number],
  };

  gameState.spinHistory.push(spinData);
  updateBetHistoryTable();
}

// 배팅 내역 테이블 업데이트
function updateBetHistoryTable() {
  // betHistoryBody가 null인 경우 다시 가져오기 시도
  if (!betHistoryBody) {
    betHistoryBody = document.getElementById("betting-history-body");
    if (!betHistoryBody) {
      console.error("베팅 내역 테이블을 찾을 수 없습니다.");
      return;
    }
  }

  // 테이블이 비어있으면 "내역 없음" 메시지 제거
  if (betHistoryBody.querySelector(".text-center")) {
    betHistoryBody.innerHTML = "";
  }

  // 최근 20개 항목만 표시 (최신순)
  const recentSpins = [...gameState.spinHistory].reverse().slice(0, 20);

  for (const spin of recentSpins) {
    // 이미 추가된 항목인지 확인
    const existingRow = document.getElementById(`spin-${spin.spin}`);
    if (existingRow) continue;

    const row = document.createElement("tr");
    row.id = `spin-${spin.spin}`;

    row.innerHTML = `
      <td>${spin.spin}</td>
      <td>
        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: ${
          spin.color === "red"
            ? "#e81e25"
            : spin.color === "black"
            ? "#1e1e1e"
            : "#00a651"
        }; margin-right: 5px;"></span>
        ${spin.number}
      </td>
      <td>₩${spin.betAmount.toLocaleString()}</td>
      <td class="${spin.isWin ? "win" : "loss"}">${
      spin.isWin ? "승리" : "패배"
    }</td>
      <td>₩${spin.balance.toLocaleString()}</td>
    `;

    betHistoryBody.insertBefore(row, betHistoryBody.firstChild);
  }

  // 내역이 없는 경우 메시지 표시
  if (gameState.spinHistory.length === 0) {
    betHistoryBody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center">아직 베팅 내역이 없습니다.</td>
      </tr>
    `;
  }
}

// 배팅 내역 지우기
function clearBetHistory() {
  // betHistoryBody가 null인 경우 다시 가져오기 시도
  if (!betHistoryBody) {
    betHistoryBody = document.getElementById("betting-history-body");
    if (!betHistoryBody) {
      console.error("베팅 내역 테이블을 찾을 수 없습니다.");
      return;
    }
  }

  gameState.spinHistory = [];
  updateBetHistoryTable();
}

// 게임 상태 업데이트
function updateGameState(isWin) {
  gameState.totalSpins++;

  if (isWin) {
    gameState.balance += gameState.currentBet;
    gameState.wins++;
    gameState.consecutiveLosses = 0;
  } else {
    gameState.balance -= gameState.currentBet;
    gameState.losses++;
    gameState.consecutiveLosses++;

    if (gameState.consecutiveLosses > gameState.maxConsecutiveLosses) {
      gameState.maxConsecutiveLosses = gameState.consecutiveLosses;
    }
  }

  // 최대 잔액 및 최대 낙폭 업데이트
  if (gameState.balance > gameState.maxBalance) {
    gameState.maxBalance = gameState.balance;
  }

  if (gameState.balance < gameState.minBalance) {
    gameState.minBalance = gameState.balance;
    // 최대 낙폭 계산 (최고점에서 현재까지의 낙폭)
    const currentDrawdown = gameState.maxBalance - gameState.balance;
    if (currentDrawdown > gameState.maxDrawdown) {
      gameState.maxDrawdown = currentDrawdown;
    }
  }

  // 다음 베팅액 계산
  try {
    const nextBet = calculateNextBet(
      bettingSystem.value,
      gameState.currentBet,
      isWin
    );

    if (isNaN(nextBet) || nextBet <= 0) {
      throw new Error(
        "베팅액 계산 중 오류가 발생했습니다. 베팅액이 유효하지 않습니다."
      );
    }

    gameState.currentBet = Math.min(
      nextBet,
      gameState.maxBet,
      gameState.balance
    );

    if (gameState.currentBet <= 0) {
      throw new Error("베팅액이 0 이하로 계산되었습니다.");
    }
  } catch (error) {
    throw error;
  }

  // 이력 업데이트
  gameState.balanceHistory.push(gameState.balance);
  gameState.betHistory.push(gameState.currentBet);
}

// 통계 업데이트
function updateStats() {
  currentBalanceEl.textContent = "₩" + gameState.balance.toLocaleString();
  currentBetEl.textContent = "₩" + gameState.currentBet.toLocaleString();
  totalSpinsEl.textContent = gameState.totalSpins;
  winsEl.textContent = gameState.wins;
  lossesEl.textContent = gameState.losses;
  winRateEl.textContent =
    gameState.totalSpins > 0
      ? Math.round((gameState.wins / gameState.totalSpins) * 100) + "%"
      : "0%";
  maxConsecutiveLossesEl.textContent = gameState.maxConsecutiveLosses;
  maxDrawdownEl.textContent = "₩" + gameState.maxDrawdown.toLocaleString();
  maxBalanceEl.textContent = "₩" + gameState.maxBalance.toLocaleString();
  minBalanceEl.textContent = "₩" + gameState.minBalance.toLocaleString();

  // 차트 업데이트
  if (gameState.balanceHistory.length > 1) {
    updateCharts();
  }
}

// 차트 초기화
function initCharts() {
  const balanceCtx = document.getElementById("balance-chart").getContext("2d");
  const betSizeCtx = document.getElementById("bet-chart").getContext("2d");

  if (balanceChart) {
    balanceChart.destroy();
  }

  if (betSizeChart) {
    betSizeChart.destroy();
  }

  balanceChart = new Chart(balanceCtx, {
    type: "line",
    data: {
      labels: Array.from(
        { length: gameState.balanceHistory.length },
        (_, i) => i
      ),
      datasets: [
        {
          label: "잔액",
          data: gameState.balanceHistory,
          borderColor: "#007aff",
          backgroundColor: "rgba(0, 122, 255, 0.1)",
          fill: true,
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: false,
        },
      },
      plugins: {
        title: {
          display: true,
          text: "잔액 변화",
        },
      },
    },
  });

  betSizeChart = new Chart(betSizeCtx, {
    type: "line",
    data: {
      labels: Array.from({ length: gameState.betHistory.length }, (_, i) => i),
      datasets: [
        {
          label: "베팅액",
          data: gameState.betHistory,
          borderColor: "#ff3b30",
          backgroundColor: "rgba(255, 59, 48, 0.1)",
          fill: true,
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: false,
        },
      },
      plugins: {
        title: {
          display: true,
          text: "베팅액 변화",
        },
      },
    },
  });
}

// 차트 업데이트
function updateCharts() {
  if (!balanceChart || !betSizeChart) {
    initCharts();
    return;
  }

  balanceChart.data.labels = Array.from(
    { length: gameState.balanceHistory.length },
    (_, i) => i
  );
  balanceChart.data.datasets[0].data = gameState.balanceHistory;
  balanceChart.update();

  betSizeChart.data.labels = Array.from(
    { length: gameState.betHistory.length },
    (_, i) => i
  );
  betSizeChart.data.datasets[0].data = gameState.betHistory;
  betSizeChart.update();
}

// 시뮬레이션 실행
async function runSimulation() {
  simulateButton.disabled = true;
  spinButton.disabled = true;

  // 시뮬레이션 버튼에 로딩 표시 추가
  simulateButton.innerHTML = '<span class="loading"></span> 시뮬레이션 중...';

  // 입력값 검증
  if (
    isNaN(parseInt(simulationSpins.value)) ||
    parseInt(simulationSpins.value) <= 0
  ) {
    alert("시뮬레이션 회전 수를 올바르게 입력해주세요.");
    simulateButton.disabled = false;
    spinButton.disabled = false;
    simulateButton.innerHTML = '<i class="fas fa-cogs"></i> 시뮬레이션 실행';
    return;
  }

  if (isNaN(parseInt(initialBet.value)) || parseInt(initialBet.value) <= 0) {
    alert("초기 베팅액을 올바르게 입력해주세요.");
    simulateButton.disabled = false;
    spinButton.disabled = false;
    simulateButton.innerHTML = '<i class="fas fa-cogs"></i> 시뮬레이션 실행';
    return;
  }

  if (isNaN(parseInt(balance.value)) || parseInt(balance.value) <= 0) {
    alert("초기 잔액을 올바르게 입력해주세요.");
    simulateButton.disabled = false;
    spinButton.disabled = false;
    simulateButton.innerHTML = '<i class="fas fa-cogs"></i> 시뮬레이션 실행';
    return;
  }

  if (isNaN(parseInt(maxBet.value)) || parseInt(maxBet.value) <= 0) {
    alert("최대 베팅액을 올바르게 입력해주세요.");
    simulateButton.disabled = false;
    spinButton.disabled = false;
    simulateButton.innerHTML = '<i class="fas fa-cogs"></i> 시뮬레이션 실행';
    return;
  }

  if (bettingSystem.value === "labouchere") {
    try {
      const sequence = labouchereSequence.value
        .split(",")
        .map((x) => parseInt(x.trim()));
      if (sequence.some(isNaN) || sequence.length === 0) {
        throw new Error("라브루쉐 시퀀스가 올바르지 않습니다.");
      }
    } catch (error) {
      alert("라브루쉐 시퀀스를 올바른 형식으로 입력해주세요. (예: 1,2,3,4,5)");
      simulateButton.disabled = false;
      spinButton.disabled = false;
      simulateButton.innerHTML = '<i class="fas fa-cogs"></i> 시뮬레이션 실행';
      return;
    }
  }

  const totalSpins = parseInt(simulationSpins.value);

  // 시뮬레이션 시작 시 상태 저장
  const startBalance = gameState.balance;
  const startBets = gameState.totalSpins;
  const startWins = gameState.wins;
  const startLosses = gameState.losses;

  let errorOccurred = false;
  let errorMessage = "";

  for (let i = 0; i < totalSpins; i++) {
    const number =
      ROULETTE_NUMBERS[Math.floor(Math.random() * ROULETTE_NUMBERS.length)];
    const betOutcome = evaluateBet(number, bettingOption.value);

    // 배팅 내역 추가 (시뮬레이션에서는 최대 100개만 기록)
    if (i < 100) {
      addSpinToHistory(number, gameState.currentBet, betOutcome);
    }

    try {
      updateGameState(betOutcome);
    } catch (error) {
      errorOccurred = true;
      errorMessage = error.message;
      break;
    }

    // 파산 체크
    if (gameState.balance <= 0 || gameState.balance < gameState.initialBet) {
      errorOccurred = true;
      errorMessage = "잔액이 부족하여 시뮬레이션이 중단되었습니다.";
      break;
    }

    // 베팅액이 최대 베팅액을 초과하는지 체크
    if (gameState.currentBet > gameState.maxBet) {
      errorOccurred = true;
      errorMessage =
        "베팅액이 최대 베팅액을 초과하여 시뮬레이션이 중단되었습니다.";
      break;
    }

    // UI가 막히지 않도록 주기적으로 UI 업데이트
    if (i % 100 === 0 || i === totalSpins - 1) {
      updateStats();
      // 진행 상황 업데이트
      simulateButton.innerHTML = `<span class="loading"></span> 시뮬레이션 중... ${Math.round(
        (i / totalSpins) * 100
      )}%`;
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }

  // 최종 업데이트
  updateStats();

  // 시뮬레이션 결과 요약
  const netProfit = gameState.balance - startBalance;
  const profitPercentage = (netProfit / startBalance) * 100;
  const simSpins = gameState.totalSpins - startBets;
  const simWins = gameState.wins - startWins;
  const simLosses = gameState.losses - startLosses;
  const simWinRate = simSpins > 0 ? (simWins / simSpins) * 100 : 0;

  resultSummary.innerHTML = `
        <h3>시뮬레이션 결과</h3>
        <p>시작 잔액: ₩${startBalance.toLocaleString()}</p>
        <p>최종 잔액: ₩${gameState.balance.toLocaleString()}</p>
        <p>순이익: ₩${netProfit.toLocaleString()} (${profitPercentage.toFixed(
    2
  )}%)</p>
        <p>회전 수: ${simSpins}</p>
        <p>승리: ${simWins} (${simWinRate.toFixed(2)}%)</p>
        <p>패배: ${simLosses}</p>
        <p>최대 연속 패배: ${gameState.maxConsecutiveLosses}</p>
        <p>최대 낙폭: ₩${gameState.maxDrawdown.toLocaleString()} (${(
    (gameState.maxDrawdown / startBalance) *
    100
  ).toFixed(2)}%)</p>
        <p>최대 베팅액: ₩${Math.max(
          ...gameState.betHistory
        ).toLocaleString()}</p>
        ${gameState.balance <= 0 ? '<p class="alert">파산했습니다!</p>' : ""}
        ${
          errorOccurred ? `<p class="alert">오류 발생: ${errorMessage}</p>` : ""
        }
    `;

  if (errorOccurred) {
    alert(errorMessage);
  }

  // 결과 탭으로 전환
  activateTab("summary-tab");

  simulateButton.disabled = false;
  spinButton.disabled = false;
  simulateButton.innerHTML = '<i class="fas fa-cogs"></i> 시뮬레이션 실행';
}

// 탭 활성화 함수
function activateTab(tabId) {
  // 모든 탭 비활성화
  tabs.forEach((tab) => tab.classList.remove("active"));
  tabContents.forEach((content) => content.classList.remove("active"));

  // 선택한 탭 활성화
  document.querySelector(`.tab[data-tab="${tabId}"]`).classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

// 리셋 함수
function resetGame() {
  gameState = {
    balance: parseInt(balance.value),
    initialBet: parseInt(initialBet.value),
    currentBet: parseInt(initialBet.value),
    maxBet: parseInt(maxBet.value),
    totalSpins: 0,
    wins: 0,
    losses: 0,
    consecutiveLosses: 0,
    maxConsecutiveLosses: 0,
    initialBalance: parseInt(balance.value),
    maxBalance: parseInt(balance.value),
    minBalance: parseInt(balance.value),
    maxDrawdown: 0,
    balanceHistory: [parseInt(balance.value)],
    betHistory: [parseInt(initialBet.value)],
    spinHistory: [], // 배팅 내역 초기화
    fibonacciSequence: [1, 1],
    labouchereSequence: [1, 2, 3, 4, 5],
    originalLabouchereSequence: [1, 2, 3, 4, 5],
  };

  if (bettingSystem.value === "labouchere") {
    try {
      const sequence = labouchereSequence.value
        .split(",")
        .map((x) => parseInt(x.trim()));

      if (sequence.some(isNaN) || sequence.length === 0) {
        throw new Error("라브루쉐 시퀀스가 올바르지 않습니다.");
      }

      gameState.labouchereSequence = [...sequence];
      gameState.originalLabouchereSequence = [...sequence];
    } catch (error) {
      alert("라브루쉐 시퀀스를 올바른 형식으로 입력해주세요. (예: 1,2,3,4,5)");
      // 기본값 유지
    }
  }

  updateStats();
  initCharts();
  updateBetHistoryTable();
  resultSummary.textContent = "시뮬레이션을 실행하여 결과를 확인하세요.";
}

// 베팅 전략 설명 업데이트
function updateStrategyExplanation() {
  const strategy = document.getElementById("betting-strategy").value;
  const explanationTitle = document.getElementById("current-strategy-title");
  const explanationText = document.getElementById(
    "current-strategy-explanation"
  );

  explanationTitle.textContent = getText(strategy);
  explanationText.textContent = getText(strategy + "_explanation");

  // 팁과 주의사항 업데이트
  document.getElementById("tips-and-warnings-title").textContent =
    getText("tips_and_warnings");
  document.getElementById("tip-1").textContent = getText("tip_1");
  document.getElementById("tip-2").textContent = getText("tip_2");
  document.getElementById("tip-3").textContent = getText("tip_3");
  document.getElementById("tip-4").textContent = getText("tip_4");
  document.getElementById("tip-5").textContent = getText("tip_5");
  document.getElementById("tip-6").textContent = getText("tip_6");
}

// 초기화 및 이벤트 리스너
document.addEventListener("DOMContentLoaded", () => {
  // DOM 요소 다시 초기화
  betHistoryBody = document.getElementById("betting-history-body");

  // 룰렛 휠 생성
  createRouletteWheel();

  // 차트 초기화
  initCharts();

  // 이벤트 리스너
  spinButton.addEventListener("click", playSpin);
  simulateButton.addEventListener("click", runSimulation);
  resetButton.addEventListener("click", resetGame);
  bettingSystem.addEventListener("change", updateStrategyExplanation);
  clearHistoryButton.addEventListener("click", clearBetHistory);

  // 입력값 변경 시 게임 리셋
  initialBet.addEventListener("change", resetGame);
  balance.addEventListener("change", resetGame);
  maxBet.addEventListener("change", resetGame);
  labouchereSequence.addEventListener("change", resetGame);

  // 탭 이벤트 리스너
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activateTab(tab.dataset.tab);
    });
  });

  // 초기 전략 설명 설정
  updateStrategyExplanation();

  // 초기 게임 상태 설정
  resetGame();

  // 저장된 언어 설정 불러오기
  const savedLang = localStorage.getItem("selectedLanguage");
  if (savedLang) {
    currentLang = savedLang;

    // 언어 선택기 값 설정
    const languageSelect = document.getElementById("language-select");
    if (languageSelect) {
      languageSelect.value = currentLang;
    }
  }

  // 초기 텍스트 업데이트
  updateAllText();
});
