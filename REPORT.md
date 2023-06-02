# <p style="text-align: center;">Sharif University of Technology</br>Department of Computer Engineering</br>Software Engineering Lab</p>

## Students Info:

### Ali Najibi, 98106123 </br>Alireza Honarvar, 98102551

## General Info:
In this project, we want to explore and create a simple microservice and deploy it on docker.
The next step of this experiment could be to incorporate kubernetes and create a cluster of microservices.

## Architecture
To create a simple microservice, we used the following elements:
- A front-end service that is responsible for receiving requests from the user and sending them to the back-end service.
- A gateway service that is responsible for routing front-end requests to back-end microservices.
- Multiple back-end services each responsible for a specific task.

In this experiment, we will have 1 front-end service, 1 gateway service, and 2 back-end services.

Note that in a real microservice project, the front-end, gateway and back-end services are usually separated and each one is deployed on a different git repository.

## Front-end Service
The front-end service is a simple web application that can serve two functionalities, namely, adding two numbers and subtracting two numbers.
These two functionalities are served through two different microservices on the back-end but the front-end application
is not aware of this separation and will just send its request to the gateway service.
The gateway service has the responsibility of handling the request and sending it to the appropriate back-end service.
 
### Implementation
The front-end service is implemented using React and the following is the steps:
```shell
mkdir "front-end"
cd "front-end"
npx create-react-app .
cd ..
git add .
git commit -m "Add front-end service"
```
There are some unnecessary files that are created by the create-react-app command and we will remove them and 
also complete the implementation of the front-end service.

It will accept two numbers from user, and perform the operation on them and show the result to the user.

## Back-end Services 1 (Addition)
This service is implemented using Node.js and Express.js.

### Implementation
- We will use port 8091 for the addition service.
```shell
mkdir "addition"
cd "addition"
npm init -y
npm install express --save
echo "/node_modules" >> .gitignore
```

## Back-end Services 2 (Subtraction)
This service is implemented using Node.js and Express.js.

### Implementation
- We will use port 8092 for the subtraction service.
```shell
mkdir "subtraction"
cd "subtraction"
npm init -y
npm install express --save
echo "/node_modules" >> .gitignore
```



## Gateway Service
The gateway service is responsible for routing requests from the front-end service to the appropriate back-end service.
The gateway service will be implemented using Node.js and Express.js.

### Implementation
- We will use port 8080 for the gateway service.
```shell
mkdir "gateway"
cd "gateway"
npm init -y
npm install express --save

```