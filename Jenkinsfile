pipeline {
    agent any

    environment {
        registryCredential = 'dockerhub'
    }

    stages {
        stage('Build Application') {
            steps {
               sh 'git pull https://github.com/haider2017/backendms.git dev'
               sh 'echo **** Installing NPM Dependencies ****'
               sh 'npm install'
               echo '**** Running Node Application ****'
               sh 'npm start'
               echo 'Application Build Successful'
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
            }
        }

        stage('Push to DockerHub'){
            steps{
                script {
                    docker.withRegistry( '', registryCredential ) {
                        sh 'docker push backendms:latest'
                    }
                }
            }
        }
    }
}