pipeline {
    agent any
    // environment {
    //     registryCredential = 'dockerhub'
    // }

    stages {
        stage('Build') {
            steps {
               sh 'git pull https://github.com/haider2017/backendms.git'
               sh 'git checkout -b build1 master'
               sh 'echo moved to branch build1'
               sh 'npm install'
               sh 'vi merge-tw.txt'
               sh 'git commit -m ​ "merge-tw file created"'
               sh 'docker build -t backendms1 .'
            }
        }
        stage('Test') {
            steps {
                sh 'docker container rm -f backendms'
                sh 'docker container run -d -p 8001:8080 --name backendms backendms1'
            }
        }

        stage('Publish'){
            steps {
               sh 'git checkout master'
               sh 'git merge build1'
               sh 'git branch -d build1'
            }
        }
    //     stage('Publish') {
    //         steps{
    //             script {
    //                 docker.withRegistry( '', registryCredential ) {
    //                     sh 'docker push umermunirrr/test-node-app:latest'
    //                 }
    //             }
    //         }
    //     }
    // }
    }
}