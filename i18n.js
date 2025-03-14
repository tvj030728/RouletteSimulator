// 다국어 지원 기능
document.addEventListener("DOMContentLoaded", function () {
  // 언어 선택기 요소 가져오기
  const languageSelect = document.getElementById("language-select");

  // 현재 언어 설정 (로컬 스토리지에서 가져오거나 기본값 설정)
  let currentLang = localStorage.getItem("selectedLanguage") || "ko";

  // 언어 선택기 초기값 설정
  languageSelect.value = currentLang;

  // 페이지 로드 시 텍스트 업데이트
  updateAllText();

  // 언어 변경 이벤트 리스너
  languageSelect.addEventListener("change", function () {
    currentLang = this.value;
    localStorage.setItem("selectedLanguage", currentLang);
    updateAllText();
  });

  // 모든 텍스트 업데이트 함수
  function updateAllText() {
    // ID가 있는 요소들 업데이트
    updateElementById("title", getText("title"));
    updateElementById("subtitle", getText("subtitle"));
    updateElementById("roulette-wheel-title", getText("roulette_wheel"));
    updateElementById("spin", getText("spin"));
    updateElementById("betting-system-title", getText("betting_system"));
    updateElementById("simulation-title", getText("simulation"));
    updateElementById("run_simulation", getText("run_simulation"));
    updateElementById("betting-history-title", getText("betting_history"));
    updateElementById("results-analysis-title", getText("results_analysis"));
    updateElementById(
      "strategy-explanation-title",
      getText("strategy_explanation")
    );
    updateElementById(
      "current-strategy-title",
      getText(document.getElementById("betting-strategy").value)
    );
    updateElementById("tips-and-warnings-title", getText("tips_and_warnings"));
    updateElementById("footer", getText("footer"));

    // data-i18n 속성이 있는 모든 요소 업데이트
    const i18nElements = document.querySelectorAll("[data-i18n]");
    i18nElements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      element.textContent = getText(key);
    });

    // 전략 설명 업데이트
    updateStrategyExplanation();
  }

  // ID로 요소 텍스트 업데이트
  function updateElementById(id, text) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = text;
    }
  }

  // 키에 해당하는 텍스트 가져오기
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

    // 키에 해당하는 텍스트 반환 (없으면 키 그대로 반환)
    return langData[key] || key;
  }

  // 전략 설명 업데이트 함수
  function updateStrategyExplanation() {
    const strategy = document.getElementById("betting-strategy").value;
    const strategyTitle = document.getElementById("current-strategy-title");
    const strategyExplanation = document.getElementById(
      "current-strategy-explanation"
    );

    strategyTitle.textContent = getText(strategy);
    strategyExplanation.textContent = getText(strategy + "_explanation");
  }

  // 베팅 전략 변경 시 설명 업데이트
  document
    .getElementById("betting-strategy")
    .addEventListener("change", updateStrategyExplanation);
});
