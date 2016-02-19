## Node web api template using Docker containers

Node api using express, mongo, and docker volume container to persist data when container is destroyed or re-created

### Run Command
```
docker-compose up
```

### Add some Users
```
curl -s -H "Content-Type: application/json" -X POST -d '{"name":"Test Tester", "age":"25"}' http://192.168.99.100/user
```
```
curl -s -H "Content-Type: application/json" -X POST -d '{"name":"Testing Tester", "age":"22"}' http://192.168.99.100/user
```

### To run manually:

Create the data container
```
docker create --name mongo-data -v /data/db busybox
```
Run Mongo container
```
docker run --name mongo --volumes-from mongo-data -d mongo
```
Build Node/Express image
```
docker build -t dcritchlow/web-api-storageplus
```
Run the Node/Express container
```
docker run -p 80:8080 -d --name web-api dcritchlow/web-api-storageplus
```