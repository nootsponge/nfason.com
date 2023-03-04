pipeline {
    agent {
        docker { image 'node:16-alpine3.16' }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm install wrangler'
                withCredentials([string(credentialsId: '1ce86dad-1224-4efe-b29e-7b2e6191bf9b', variable: 'CLOUDFLARE_API_TOKEN')]) {
                    sh 'CLOUDFLARE_ACCOUNT_ID=073409c1e68d65ff785a7d0056db2c17 npx wrangler pages publish build --project-name nfason-com'
                }
            }
        }
    }
}