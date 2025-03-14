const en = {
  // Header
  title: "Roulette Strategy Simulator",
  subtitle: "Simulate various betting strategies and analyze the results",

  // Roulette Wheel Section
  roulette_wheel: "Roulette Wheel",
  spin: "Spin",

  // Betting System Section
  betting_system: "Betting System",
  betting_strategy: "Betting Strategy:",
  martingale_full: "Martingale",
  fibonacci_full: "Fibonacci",
  labouchere_full: "Labouchere",
  dalembert_full: "D'Alembert",
  paroli_full: "Paroli",
  betting_option: "Betting Option:",
  red_full: "Red",
  black_full: "Black",
  even_full: "Even",
  odd_full: "Odd",
  high_full: "High Numbers (19-36)",
  low_full: "Low Numbers (1-18)",
  initial_bet: "Initial Bet ($):",
  starting_balance: "Starting Balance ($):",
  max_bet: "Maximum Bet ($):",
  labouchere_sequence: "Labouchere Sequence (comma separated):",

  // Simulation Section
  simulation: "Simulation",
  simulation_spins: "Number of Spins:",
  run_simulation: "Run Simulation",
  reset: "Reset",
  current_balance: "Current Balance",
  current_bet: "Current Bet",
  total_spins: "Total Spins",
  wins: "Wins",
  losses: "Losses",
  win_rate: "Win Rate",

  // Betting History Section
  betting_history: "Betting History",
  round: "Round",
  number: "Number",
  bet_amount: "Bet Amount",
  result: "Result",
  balance: "Balance",
  no_betting_history: "No betting history yet.",
  clear_history: "Clear History",
  win: "Win",
  loss: "Loss",

  // Results Analysis Section
  results_analysis: "Results Analysis",
  balance_change: "Balance Change",
  bet_change: "Bet Size Change",
  result_summary: "Result Summary",
  run_simulation_to_see_results: "Run a simulation to see the results.",
  max_consecutive_losses: "Max Consecutive Losses",
  max_drawdown: "Max Drawdown",
  max_balance: "Max Balance",
  min_balance: "Min Balance",

  // Strategy Explanation Section
  strategy_explanation: "Strategy Explanation",
  martingale: "Martingale",
  martingale_explanation:
    "The most classic and simple betting system. Double your bet after each loss, and return to the initial bet after a win. Theoretically, you can recover all losses with a single win, but there's a risk of exponential bet increases during losing streaks.",
  fibonacci: "Fibonacci",
  fibonacci_explanation:
    "Uses the Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21...). Increase your bet to the next number in the sequence after a loss, and move back two steps after a win. The bet increases are more gradual than Martingale, but the profit rate is lower during winning streaks.",
  labouchere: "Labouchere",
  labouchere_explanation:
    "A cancellation system using a sequence of numbers (e.g., 1,2,3,4,5). The bet is the sum of the first and last numbers in the sequence. After a win, remove the two numbers used; after a loss, add the bet amount to the end of the sequence. Profit is made when all numbers are cancelled. Complex but flexible strategy.",
  dalembert: "D'Alembert",
  dalembert_explanation:
    "Based on mathematical equilibrium theory. Increase the betting unit by 1 after a loss, and decrease by 1 after a win. More conservative than Martingale with slower bet increases but lower risk. Most effective when win/loss probability is close to 50%.",
  paroli: "Paroli",
  paroli_explanation:
    "The opposite concept of Martingale, also known as 'Reverse Martingale'. Double your bet after a win, and return to the initial bet after a loss. Usually resets after 3 consecutive wins. An aggressive strategy that maximizes profits during winning streaks while minimizing losses.",
  tips_and_warnings: "Tips and Warnings",
  tip_1:
    "In real casinos, table limits prevent infinite progression of the Martingale strategy.",
  tip_2:
    "The Labouchere strategy has lower risk when the sequence is kept short.",
  tip_3:
    "The Fibonacci strategy has more gradual bet increases than Martingale, but requires more wins to recover losses.",
  tip_4:
    "The D'Alembert strategy is conservative but will result in losses if the win rate is below 50% in the long run.",
  tip_5:
    "The Paroli strategy can maximize profits during winning streaks, but winning streaks are rare so it often resets.",
  tip_6:
    "No betting system can overcome the mathematical edge of the casino in the long run.",

  // Simulation Results
  simulation_results: "Simulation Results",
  starting_balance: "Starting Balance",
  final_balance: "Final Balance",
  net_profit: "Net Profit",
  spins: "Spins",
  bankruptcy: "Bankruptcy!",
  error_occurred: "Error Occurred",

  // Alert Messages
  error_invalid_spins: "Please enter a valid number of simulation spins.",
  error_invalid_initial_bet: "Please enter a valid initial bet amount.",
  error_invalid_balance: "Please enter a valid starting balance.",
  error_invalid_max_bet: "Please enter a valid maximum bet amount.",
  error_invalid_labouchere:
    "Please enter a valid Labouchere sequence (e.g., 1,2,3,4,5).",
  error_insufficient_balance: "Simulation stopped due to insufficient balance.",
  error_bet_exceeds_max:
    "Simulation stopped because bet amount exceeds maximum bet.",
  error_invalid_bet: "Error calculating bet amount. The bet is invalid.",
  error_bet_zero: "Bet amount calculated to be zero or negative.",

  // Footer
  footer: "© 2025 Roulette Strategy Simulator | Do not apply to real gambling",
};
