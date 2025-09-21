#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkDeployEc2Stack } from '../lib/cdk-deploy-ec2-stack';

const app = new cdk.App();
new CdkDeployEc2Stack(app, 'CdkDeployEc2Stack', {
  env: {
    account: '643091422691',
    region: 'us-east-1'
  }
});