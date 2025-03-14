const ja = {
  // ヘッダー
  title: "ルーレット戦略シミュレーター",
  subtitle: "様々なベッティング戦略をシミュレーションして結果を分析しましょう",

  // ルーレットホイールセクション
  roulette_wheel: "ルーレットホイール",
  spin: "スピン",

  // ベッティングシステムセクション
  betting_system: "ベッティングシステム",
  betting_strategy: "ベッティング戦略:",
  martingale_full: "マーチンゲール (Martingale)",
  fibonacci_full: "フィボナッチ (Fibonacci)",
  labouchere_full: "ラブシェール (Labouchere)",
  dalembert_full: "ダランベール (D'Alembert)",
  paroli_full: "パロリ (Paroli)",
  betting_option: "ベッティングオプション:",
  red_full: "赤 (Red)",
  black_full: "黒 (Black)",
  even_full: "偶数 (Even)",
  odd_full: "奇数 (Odd)",
  high_full: "高い数字 (19-36)",
  low_full: "低い数字 (1-18)",
  initial_bet: "初期ベット額 (¥):",
  starting_balance: "開始残高 (¥):",
  max_bet: "最大ベット額 (¥):",
  labouchere_sequence: "ラブシェールシーケンス (カンマ区切り):",

  // シミュレーションセクション
  simulation: "シミュレーション",
  simulation_spins: "シミュレーションスピン数:",
  run_simulation: "シミュレーション実行",
  reset: "リセット",
  current_balance: "現在の残高",
  current_bet: "現在のベット額",
  total_spins: "総スピン数",
  wins: "勝利数",
  losses: "敗北数",
  win_rate: "勝率",

  // ベッティング履歴セクション
  betting_history: "ベッティング履歴",
  round: "ラウンド",
  number: "番号",
  bet_amount: "ベット額",
  result: "結果",
  balance: "残高",
  no_betting_history: "まだベッティング履歴がありません。",
  clear_history: "履歴をクリア",
  win: "勝利",
  loss: "敗北",

  // 結果分析セクション
  results_analysis: "結果分析",
  balance_change: "残高変化",
  bet_change: "ベット額変化",
  result_summary: "結果サマリー",
  run_simulation_to_see_results:
    "シミュレーションを実行して結果を確認してください。",
  max_consecutive_losses: "最大連続敗北",
  max_drawdown: "最大ドローダウン",
  max_balance: "最大残高",
  min_balance: "最小残高",

  // 戦略説明セクション
  strategy_explanation: "ベッティング戦略説明",
  martingale: "マーチンゲール (Martingale)",
  martingale_explanation:
    "最も古典的でシンプルなベッティングシステムです。負けるたびにベット額を2倍にし、勝ったら初期ベット額に戻します。理論的には1回の勝利ですべての損失を回復できますが、連続して負けるとベット額が指数関数的に増加するリスクがあります。",
  fibonacci: "フィボナッチ (Fibonacci)",
  fibonacci_explanation:
    "フィボナッチ数列（1, 1, 2, 3, 5, 8, 13, 21...）を使用するベッティングシステムです。負けた場合は数列の次の数字にベット額を増やし、勝った場合は数列で2ステップ戻ります。マーチンゲールよりベット額の増加が緩やかですが、連勝時の収益率は低くなります。",
  labouchere: "ラブシェール (Labouchere)",
  labouchere_explanation:
    "一連の数字シーケンス（例：1,2,3,4,5）を使用するキャンセレーションシステムです。ベット額はシーケンスの最初と最後の数字の合計です。勝った場合は使用した2つの数字をシーケンスから削除し、負けた場合はベット額をシーケンスの最後に追加します。すべての数字がキャンセルされると利益が発生します。複雑ですが柔軟な戦略です。",
  dalembert: "ダランベール (D'Alembert)",
  dalembert_explanation:
    "数学的均衡理論に基づくベッティングシステムです。負けた場合はベットユニットを1増やし、勝った場合は1減らします。マーチンゲールより保守的でベット額の増加が遅いですが、リスクも低くなります。勝敗確率が50%に近いときに最も効果的です。",
  paroli: "パロリ (Paroli)",
  paroli_explanation:
    "マーチンゲールの反対概念で「逆マーチンゲール」とも呼ばれます。勝った場合はベット額を2倍にし、負けた場合は初期ベット額に戻ります。通常、3連勝後にベット額をリセットします。連勝時に利益を最大化し、損失を最小限に抑える積極的な戦略です。",
  tips_and_warnings: "ヒントと注意事項",
  tip_1:
    "実際のカジノではテーブルリミットがあるため、マーチンゲール戦略の無限進行は不可能です。",
  tip_2: "ラブシェール戦略はシーケンスを短く保つほどリスクが低くなります。",
  tip_3:
    "フィボナッチ戦略はマーチンゲールよりベット額の増加が緩やかですが、損失回復にはより多くの勝利が必要です。",
  tip_4:
    "ダランベール戦略は保守的ですが、長期的に勝率が50%未満だと損失が発生します。",
  tip_5:
    "パロリ戦略は連勝時に利益を最大化できますが、連勝確率が低いため頻繁にリセットされます。",
  tip_6:
    "どのベッティングシステムも長期的にはカジノの数学的優位性を克服することはできません。",

  // シミュレーション結果
  simulation_results: "シミュレーション結果",
  starting_balance: "開始残高",
  final_balance: "最終残高",
  net_profit: "純利益",
  spins: "スピン数",
  bankruptcy: "破産しました！",
  error_occurred: "エラーが発生しました",

  // アラートメッセージ
  error_invalid_spins: "シミュレーションスピン数を正しく入力してください。",
  error_invalid_initial_bet: "初期ベット額を正しく入力してください。",
  error_invalid_balance: "開始残高を正しく入力してください。",
  error_invalid_max_bet: "最大ベット額を正しく入力してください。",
  error_invalid_labouchere:
    "ラブシェールシーケンスを正しい形式で入力してください（例：1,2,3,4,5）。",
  error_insufficient_balance:
    "残高不足のためシミュレーションが中断されました。",
  error_bet_exceeds_max:
    "ベット額が最大ベット額を超えたためシミュレーションが中断されました。",
  error_invalid_bet:
    "ベット額計算中にエラーが発生しました。ベット額が無効です。",
  error_bet_zero: "ベット額が0以下になりました。",

  // フッター
  footer:
    "© 2025 ルーレット戦略シミュレーター | 実際のギャンブルには適用しないでください",
};
