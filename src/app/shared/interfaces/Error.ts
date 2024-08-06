// Error.ts
export interface Error {
  timestamp: Date; // Adjust type based on the actual structure of the timestamp
  errorCode: number;
  errorMessage: string;
  errorStacktrace: any; // Adjust type based on the actual structure of the stacktrace
  errorLevel: 'info' | 'warning' | 'error' | 'critical';
  errorType: 'functional' | 'technical';
  documentationUrl: string;
  tips: string;
}

// ErrorResponse.ts
