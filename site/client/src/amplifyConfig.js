
import Amplify from 'aws-amplify'

let config = {
  Auth: {
    mandatorySignIn: true,
    region: 'us-east-1',
    userPoolId: 'us-east-1_8v6C3yzYm',
    userPoolWebClientId: '2h4p2n34tnscf40jk6aua8r4h1'
  }
}

Amplify.configure(config)
