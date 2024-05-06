export interface AppEvent {
  title: string;
  startDate: Date,
  startTime: Date | undefined,
  endDate: Date | undefined,
  shortDescription: string;
  featureImageUrl: string;
}
