DevOps Syvora Assignment

This repo is my solution for the Syvora DevOps Assignment.
I took a simple Node.js API, put it in Docker, set up CI/CD with GitHub Actions, and deployed it on Kubernetes using Helm.

--> What I Did

Wrote a Dockerfile + docker-compose to run the app.

Created a GitHub Actions workflow to build Docker image and push it to Docker Hub.

Used Minikube (local Kubernetes) to deploy the app.

Wrote a Helm chart for deployment.

Added Horizontal Pod Autoscaler (HPA) for scaling.

Thought about logging & monitoring (Prometheus + Grafana).

--> Run Locally
# Build image
docker build -t local/node-express-api .

# Run container
docker run -p 3000:3000 local/node-express-api


Open http://localhost:3000
.

Or with Docker Compose:

docker-compose up --build

--> CI/CD

On push to main, GitHub Actions:

Builds Docker image

Pushes to Docker Hub

Secrets needed in GitHub:

DOCKERHUB_USERNAME

DOCKERHUB_TOKEN

--> Kubernetes (Minikube)
minikube start
helm install my-api ./helm/node-express-api \
  --set image.repository=local/node-express-api \
  --set image.tag=latest
minikube service my-api-node-express-api --url

--> Autoscaling
kubectl apply -f hpa.yml
kubectl get hpa

--> Repo Contents
Dockerfile
docker-compose.yml
.github/workflows/   # CI/CD
helm/                # Helm chart
terraform/           # Optional IaC
hpa.yml              # Autoscaler
README.md


-->This project shows how to containerize, automate, and deploy an app with scaling and monitoring in mind.