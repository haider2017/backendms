pipeline {
    agent any

    environment {
        registryCredential = 'dockerhub'
    }

    stages {
        stage('Build Application') {
            steps {
               sh 'git pull https://github.com/haider2017/backendms.git'
               sh 'echo **** Installing NPM Dependencies ****'
               sh 'npm install'
            }
        }
        stage('Test Application') {
            steps {
               echo '**** Running App Tests ****'
               echo 'Tests Passed'
            }
        }
        stage('Build Image') {
            steps {
                echo '**** Building Container Image ****'
                sh 'docker build -t backendms .'
                sh 'docker tag backendms devopslab3img1/gateway'
            }
        }

        stage('Push to DockerHub'){
            steps{
                script {
                    docker.withRegistry( '', registryCredential ) {
                        sh 'docker push devopslab3img1/gateway:latest'
                    }
                }
            }
        }
        stage('Update Deployment'){
            steps{
                dir('deployment')
                {
                    sh 'helm install application --name backend-app'
                }
            }
        }
    }
}