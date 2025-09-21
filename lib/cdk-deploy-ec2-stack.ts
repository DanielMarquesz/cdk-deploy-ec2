import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Instance, InstanceClass, InstanceSize, InstanceType, MachineImage, Vpc, Port } from 'aws-cdk-lib/aws-ec2'

export class CdkDeployEc2Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const defaultVpc = Vpc.fromLookup(
      this,
      "MyDefaultVpc",
      {
        isDefault: true
      }
    )

    const instance = new Instance(
      this,
      "MyEc2Instance",
      {
        vpc: defaultVpc,
        machineImage: MachineImage.latestAmazonLinux2023(),
        instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),        
      }
    )

    instance.connections.allowFromAnyIpv4(Port.tcp(80))
  }
}
