pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
               sh 'git pull https://github.com/haider2017/backendms.git'
               sh 'git branch -d build1'
               sh 'git checkout -b build1'
               sh 'echo moved to branch build1'
               sh 'npm install'
               sh 'docker build -t backendms1 .'
            }
        }
        stage('Test') {
            steps {
                sh 'docker stop backendms || true && docker rm backendms || true'//if container is running then stop it or else resume rest of the steps
                sh 'docker container run -d -p 8001:8080 --name backendms backendms1'
            }
        }

        stage('Publish'){
            steps {
                sh "echo version := 1.0.${env.BUILD_ID} >> version.txt"
                sh 'git add -A'
                sh 'git commit -m ​ "merge-tw file created"' 
                sh 'git checkout master'
                sh 'git merge build1'
                sh 'git branch -d build1'
                sh 'git push origin master'
            }
        }
    }
}