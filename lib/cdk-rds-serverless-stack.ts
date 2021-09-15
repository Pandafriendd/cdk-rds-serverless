import * as cdk from '@aws-cdk/core';

import * as ec2 from '@aws-cdk/aws-ec2';
import * as lambda from '@aws-cdk/aws-lambda';
import * as rds from '@aws-cdk/aws-rds';

export class CdkRdsServerlessStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    
    const vpc = new ec2.Vpc(this, 'MyVPC');
    
    const cluster = new rds.ServerlessCluster(this, 'ServerlessCluster', {
      engine: rds.DatabaseClusterEngine.AURORA_MYSQL,
      vpc,
      enableDataApi: true,   // Optional - will be automatically set if you call grantDataApiAccess()
    });
    
    
    
  }
}
