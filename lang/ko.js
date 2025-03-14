const ko = {
  // 헤더
  title: "룰렛 전략 시뮬레이터",
  subtitle: "다양한 베팅 전략을 시뮬레이션하고 결과를 분석해보세요",

  // 룰렛 휠 섹션
  roulette_wheel: "룰렛 휠",
  spin: "회전",

  // 베팅 시스템 섹션
  betting_system: "베팅 시스템",
  betting_strategy: "베팅 전략:",
  martingale_full: "마틴게일 (Martingale)",
  fibonacci_full: "피보나치 (Fibonacci)",
  labouchere_full: "라브루쉐 (Labouchere)",
  dalembert_full: "달렘베르 (D'Alembert)",
  paroli_full: "파롤리 (Paroli)",
  betting_option: "베팅 옵션:",
  red_full: "빨간색 (Red)",
  black_full: "검은색 (Black)",
  even_full: "짝수 (Even)",
  odd_full: "홀수 (Odd)",
  high_full: "높은 숫자 (19-36)",
  low_full: "낮은 숫자 (1-18)",
  initial_bet: "초기 베팅액 (₩):",
  starting_balance: "시작 잔액 (₩):",
  max_bet: "최대 베팅액 (₩):",
  labouchere_sequence: "라브루쉐 시퀀스 (쉼표로 구분):",

  // 시뮬레이션 섹션
  simulation: "시뮬레이션",
  simulation_spins: "시뮬레이션 회전 수:",
  run_simulation: "시뮬레이션 실행",
  reset: "초기화",
  current_balance: "현재 잔액",
  current_bet: "현재 베팅액",
  total_spins: "총 회전 수",
  wins: "승리 수",
  losses: "패배 수",
  win_rate: "승률",

  // 배팅 내역 섹션
  betting_history: "배팅 내역",
  round: "회차",
  number: "번호",
  bet_amount: "베팅액",
  result: "결과",
  balance: "잔액",
  no_betting_history: "아직 베팅 내역이 없습니다.",
  clear_history: "내역 지우기",
  win: "승리",
  loss: "패배",

  // 결과 분석 섹션
  results_analysis: "결과 분석",
  balance_change: "잔액 변화",
  bet_change: "베팅액 변화",
  result_summary: "결과 요약",
  run_simulation_to_see_results: "시뮬레이션을 실행하여 결과를 확인하세요.",
  max_consecutive_losses: "최대 연속 패배",
  max_drawdown: "최대 낙폭",
  max_balance: "최대 잔액",
  min_balance: "최소 잔액",

  // 전략 설명 섹션
  strategy_explanation: "베팅 전략 설명",
  martingale: "마틴게일 (Martingale)",
  martingale_explanation:
    "가장 고전적이고 단순한 베팅 시스템입니다. 패배할 때마다 베팅액을 두 배로 늘리고, 승리하면 초기 베팅액으로 돌아갑니다. 이론적으로는 한 번의 승리로 모든 손실을 회복할 수 있지만, 연속 패배 시 베팅액이 기하급수적으로 증가하는 위험이 있습니다.",
  fibonacci: "피보나치 (Fibonacci)",
  fibonacci_explanation:
    "피보나치 수열(1, 1, 2, 3, 5, 8, 13, 21...)을 사용하는 베팅 시스템입니다. 패배 시 수열의 다음 숫자로 베팅액을 늘리고, 승리 시 수열에서 두 단계 뒤로 이동합니다. 마틴게일보다 베팅액 증가가 완만하지만, 연승 시 수익률이 낮아집니다.",
  labouchere: "라브루쉐 (Labouchere)",
  labouchere_explanation:
    "일련의 숫자 시퀀스(예: 1,2,3,4,5)를 사용하는 취소 시스템입니다. 베팅액은 시퀀스의 첫 번째와 마지막 숫자의 합입니다. 승리 시 사용한 두 숫자를 시퀀스에서 제거하고, 패배 시 사용한 베팅액을 시퀀스 끝에 추가합니다. 모든 숫자가 취소되면 이익이 발생합니다. 복잡하지만 유연한 전략입니다.",
  dalembert: "달렘베르 (D'Alembert)",
  dalembert_explanation:
    "수학적 균형 이론에 기반한 베팅 시스템입니다. 패배 시 베팅 단위를 1 증가시키고, 승리 시 1 감소시킵니다. 마틴게일보다 보수적이어서 베팅액 증가가 느리지만, 위험도 낮습니다. 승패 확률이 50%에 가까울 때 가장 효과적입니다.",
  paroli: "파롤리 (Paroli)",
  paroli_explanation:
    "마틴게일의 반대 개념으로 '역 마틴게일'이라고도 합니다. 승리 시 베팅액을 두 배로 늘리고, 패배 시 초기 베팅액으로 돌아갑니다. 보통 3연승 후 베팅액을 초기화합니다. 연승 시 수익을 극대화하고 손실을 최소화하는 공격적인 전략입니다.",
  tips_and_warnings: "팁과 주의사항",
  tip_1:
    "실제 카지노에서는 테이블 한도가 있어 마틴게일 전략의 무한 진행이 불가능합니다.",
  tip_2: "라브루쉐 전략은 시퀀스를 짧게 유지할수록 위험도가 낮아집니다.",
  tip_3:
    "피보나치 전략은 마틴게일보다 베팅액 증가가 완만하지만, 손실 회복에 더 많은 승리가 필요합니다.",
  tip_4:
    "달렘베르 전략은 보수적이지만 장기적으로 승률이 50% 미만이면 손실이 발생합니다.",
  tip_5:
    "파롤리 전략은 연승 시 수익을 극대화할 수 있지만, 연승 확률이 낮아 자주 초기화됩니다.",
  tip_6:
    "모든 베팅 시스템은 장기적으로 카지노의 수학적 우위를 극복할 수 없습니다.",

  // 시뮬레이션 결과
  simulation_results: "시뮬레이션 결과",
  starting_balance: "시작 잔액",
  final_balance: "최종 잔액",
  net_profit: "순이익",
  spins: "회전 수",
  bankruptcy: "파산했습니다!",
  error_occurred: "오류 발생",

  // 알림 메시지
  error_invalid_spins: "시뮬레이션 회전 수를 올바르게 입력해주세요.",
  error_invalid_initial_bet: "초기 베팅액을 올바르게 입력해주세요.",
  error_invalid_balance: "초기 잔액을 올바르게 입력해주세요.",
  error_invalid_max_bet: "최대 베팅액을 올바르게 입력해주세요.",
  error_invalid_labouchere:
    "라브루쉐 시퀀스를 올바른 형식으로 입력해주세요. (예: 1,2,3,4,5)",
  error_insufficient_balance: "잔액이 부족하여 시뮬레이션이 중단되었습니다.",
  error_bet_exceeds_max:
    "베팅액이 최대 베팅액을 초과하여 시뮬레이션이 중단되었습니다.",
  error_invalid_bet:
    "베팅액 계산 중 오류가 발생했습니다. 베팅액이 유효하지 않습니다.",
  error_bet_zero: "베팅액이 0 이하로 계산되었습니다.",

  // 푸터
  footer: "© 2025 룰렛 전략 시뮬레이터 | 실제 도박에는 적용하지 마세요",
};
