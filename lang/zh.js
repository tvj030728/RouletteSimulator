// 중국어 언어 파일
const zh = {
  // 页眉
  title: "轮盘赌策略模拟器",
  subtitle: "模拟各种投注策略并分析结果",

  // 轮盘赌轮部分
  roulette_wheel: "轮盘赌轮",
  spin: "旋转",

  // 投注系统部分
  betting_system: "投注系统",
  betting_strategy: "投注策略:",
  martingale_full: "马丁格尔 (Martingale)",
  fibonacci_full: "斐波那契 (Fibonacci)",
  labouchere_full: "拉布谢尔 (Labouchere)",
  dalembert_full: "达朗贝尔 (D'Alembert)",
  paroli_full: "帕罗利 (Paroli)",
  betting_option: "投注选项:",
  red_full: "红色 (Red)",
  black_full: "黑色 (Black)",
  even_full: "偶数 (Even)",
  odd_full: "奇数 (Odd)",
  high_full: "高数字 (19-36)",
  low_full: "低数字 (1-18)",
  initial_bet: "初始投注额 (¥):",
  starting_balance: "起始余额 (¥):",
  max_bet: "最大投注额 (¥):",
  labouchere_sequence: "拉布谢尔序列 (逗号分隔):",

  // 模拟部分
  simulation: "模拟",
  simulation_spins: "模拟旋转次数:",
  run_simulation: "运行模拟",
  reset: "重置",
  current_balance: "当前余额",
  current_bet: "当前投注额",
  total_spins: "总旋转次数",
  wins: "胜利次数",
  losses: "失败次数",
  win_rate: "胜率",

  // 投注历史部分
  betting_history: "投注历史",
  round: "回合",
  number: "号码",
  bet_amount: "投注额",
  result: "结果",
  balance: "余额",
  no_betting_history: "暂无投注历史。",
  clear_history: "清除历史",
  win: "胜利",
  loss: "失败",

  // 结果分析部分
  results_analysis: "结果分析",
  balance_change: "余额变化",
  bet_change: "投注额变化",
  result_summary: "结果摘要",
  run_simulation_to_see_results: "运行模拟以查看结果。",
  max_consecutive_losses: "最大连续失败",
  max_drawdown: "最大回撤",
  max_balance: "最大余额",
  min_balance: "最小余额",

  // 策略说明部分
  strategy_explanation: "投注策略说明",
  martingale: "马丁格尔 (Martingale)",
  martingale_explanation:
    "最经典和简单的投注系统。每次失败后将投注额翻倍，赢了则回到初始投注额。理论上，一次胜利就能弥补所有损失，但连续失败时投注额会呈指数增长，风险较大。",
  fibonacci: "斐波那契 (Fibonacci)",
  fibonacci_explanation:
    "使用斐波那契数列（1, 1, 2, 3, 5, 8, 13, 21...）的投注系统。失败后将投注额增加到数列中的下一个数字，胜利后在数列中后退两步。比马丁格尔投注额增长更缓慢，但连胜时的收益率较低。",
  labouchere: "拉布谢尔 (Labouchere)",
  labouchere_explanation:
    "使用一系列数字序列（例如：1,2,3,4,5）的取消系统。投注额是序列中第一个和最后一个数字的总和。胜利后从序列中删除使用的两个数字，失败后将投注额添加到序列末尾。当所有数字都被取消时产生利润。复杂但灵活的策略。",
  dalembert: "达朗贝尔 (D'Alembert)",
  dalembert_explanation:
    "基于数学平衡理论的投注系统。失败后将投注单位增加1，胜利后减少1。比马丁格尔更保守，投注额增长较慢，风险也较低。在胜负概率接近50%时最有效。",
  paroli: "帕罗利 (Paroli)",
  paroli_explanation:
    '马丁格尔的相反概念，也称为"反马丁格尔"。胜利后将投注额翻倍，失败后回到初始投注额。通常在连续3次胜利后重置投注额。在连胜时最大化利润，同时最小化损失的激进策略。',
  tips_and_warnings: "提示和警告",
  tip_1: "在真实赌场中，由于桌面限制，马丁格尔策略无法无限进行。",
  tip_2: "拉布谢尔策略在序列保持较短时风险较低。",
  tip_3: "斐波那契策略比马丁格尔投注额增长更缓慢，但需要更多胜利来弥补损失。",
  tip_4: "达朗贝尔策略较为保守，但长期胜率低于50%时会产生损失。",
  tip_5: "帕罗利策略可以在连胜时最大化利润，但连胜概率较低，因此经常重置。",
  tip_6: "长期来看，没有投注系统能够克服赌场的数学优势。",

  // 模拟结果
  simulation_results: "模拟结果",
  starting_balance: "起始余额",
  final_balance: "最终余额",
  net_profit: "净利润",
  spins: "旋转次数",
  bankruptcy: "破产！",
  error_occurred: "发生错误",

  // 提示消息
  error_invalid_spins: "请输入有效的模拟旋转次数。",
  error_invalid_initial_bet: "请输入有效的初始投注额。",
  error_invalid_balance: "请输入有效的起始余额。",
  error_invalid_max_bet: "请输入有效的最大投注额。",
  error_invalid_labouchere: "请输入有效的拉布谢尔序列（例如：1,2,3,4,5）。",
  error_insufficient_balance: "由于余额不足，模拟已停止。",
  error_bet_exceeds_max: "由于投注额超过最大投注额，模拟已停止。",
  error_invalid_bet: "计算投注额时出错。投注额无效。",
  error_bet_zero: "投注额计算为零或负数。",

  // 页脚
  footer: "© 2025 轮盘赌策略模拟器 | 请勿应用于实际赌博",
};
