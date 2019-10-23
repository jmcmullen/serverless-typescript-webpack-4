export interface LambdaExecutionContext {
  callbackWaitsForEmptyEventLoop: boolean;
  logGroupName: string;
  logStreamName: string;
  functionName: string;
  memoryLimitInMB: string;
  functionVersion: string;
  invokeid: string;
  awsRequestId: string;
  invokedFunctionArn: string;
}

declare class SignUpForm {
  constructor(options: { callback: void });
  callback: any;
}
