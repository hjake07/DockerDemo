Hello This is a Docker Demo Where We Are Trying To Create a Container

Build: docker build -t myapp:latest .
Run: docker run --rm -d -P 8080:8080 myapp:latest
Browser: https://localhost:8080
---------------------------------------------------
Lab 3
step1:docker stack deploy -c docker-compose.yaml myapp-stack
step2:docker service scale myapp-stack_mywebsite1=7
step3:docker service scale myapp-stack_mywebsite2=2
step4:docker stack rm myapp-stack          