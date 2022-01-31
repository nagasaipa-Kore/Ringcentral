# Message Microservice

To run it yourself
1. Create a `config.json` file in the same structure of `config.json.template`
2. Get your app info from [Ringcentral](developer.ringcentral.com)
3. Install the packages. `npm install`
4. Start the program. `npm start`
5. The application will start at `localhost:9001`
```
curl --location --request POST 'localhost:9001' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'to=9173918046' \
--data-urlencode 'message=video demo yayy!'
```
