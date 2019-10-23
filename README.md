# Microservices Starter Theme

Micro-services written in Node.js using serverless & lambda starter project.

---

### Requirements

- [Install Node Version Manager](https://github.com/creationix/nvm)
- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Installation

```bash
# install & use node 10.16.3
nvm install && nvm run

# install dependencies
npm install

# Run local lambda http environment
npm run dev

# Run tests
npm run test

# Deploy
npm deploy
```

### Usage

- [Add email to SendGrid list](/src/signUpForm/README.md)
