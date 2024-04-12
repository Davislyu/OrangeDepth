interface ChartExplanationItem {
  key: string;
  description: string;
}

export interface IChartExplanationObj {
  explanationText: string;
  summaryList: ChartExplanationItem[];
  footerSentence: string;
}
