export interface ResponseHeader {
  requestReceivedTime: Date;
  responseTime: Date;
  hopCount: number;
  responseProcessingTimeInMs: number;
  requestId: String;
  responseCode: String;
  responseMessage: String;
  responseVersion: String;
  requestSourceService: String;
  traceId: String;
}
