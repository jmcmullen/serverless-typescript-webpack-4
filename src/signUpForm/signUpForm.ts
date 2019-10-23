import * as λ from 'apex.js';
import { LambdaExecutionContext } from '../../typings/typings';

export default λ((event, context: LambdaExecutionContext): any => {
  console.log('this is running');

  const response = {
    statusCode: 200,

    headers: {},

    body: JSON.stringify({
      message: `Hello!!!! I am a function named "${context.functionName}"`,
    }),
  };

  return response;
});
