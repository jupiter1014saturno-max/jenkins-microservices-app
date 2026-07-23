pipeline {
    agent any

    stages {

        stage('Clonar Proyecto') {
            steps {
                echo 'Obteniendo código desde GitHub'
            }
        }

        stage('Build') {
            steps {
                echo 'Construyendo aplicación'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Construyendo contenedores Docker'
            }
        }

        stage('Pruebas') {
            steps {
                echo 'Ejecutando pruebas'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Desplegando aplicación'
            }
        }
    }

    post {
        success {
            echo 'Pipeline ejecutado correctamente'
        }

        failure {
            echo 'Pipeline falló'
        }
    }
}