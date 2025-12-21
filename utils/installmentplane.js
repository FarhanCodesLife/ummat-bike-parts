export function calculateInstallment(price, percent1, advDivide1, percent2, advDivide2) {
  const result = {};

  const toNum = (val, fallback = 1) => {
    const num = Number(val);
    return isNaN(num) || num <= 0 ? fallback : num;
  };

  const plans = [
    {
      key: "plan1",
      percent: toNum(percent1, 5),
      divide: toNum(advDivide1, 2),
      monthsMap: [
        [0, 3599, 1],
        [3600, 9699, 2],
        [9700, 18599, 3],
        [18600, 29699, 4],
        [29700, 43199, 5],
        [43200, Infinity, 6],
      ],
    },
    {
      key: "plan2",
      percent: toNum(percent2, 5),
      divide: toNum(advDivide2, 2),
      monthsMap: [
        [0, 3899, 2],
        [3900, 10999, 4],
        [11000, 21999, 6],
        [22000, 34999, 8],
        [35000, 50999, 10],
        [51000, Infinity, 12],
      ],
    },
  ];

  for (const plan of plans) {
    const total = price * (1 + plan.percent / 100);
    const months =
      plan.monthsMap.find(([min, max]) => total >= min && total <= max)?.[2] || 12;

    const advance = total / plan.divide;
    const remaining = total - advance;
    const monthly = remaining / months;
    const weekly = monthly / 4;
    const daily = monthly / 30 + 50;

    result[plan.key] = {
      total: Math.round(total),
      months: `${months} Months`,
      advance: Math.round(advance),
      monthly: Math.round(monthly),
      weekly: Math.round(weekly),
      daily: Math.round(daily),
      monthsRaw: months, // for totalMonths below
    };
  }

  // Total Months as number (not string)
  result.totalMonths = result.plan1.monthsRaw + result.plan2.monthsRaw;

  return result;
}
