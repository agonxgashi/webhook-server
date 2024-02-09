# Webhook Server
#### This is a simple Node.js script that runs a server so you can receive webhooks on it. It generates a localtunnel link for you and when that url is hit by an incoming webhook, you can see the webhook body on console

---
### Installation
- Clone this repo on your machine and
- Open a terminal on the root directory of this project and run:
    ```bash
    npm install
    ```

### How to run and use it
- While on the root directory of this project, on your terminal, run the following command:
    ```bash
    npm start
    ```
- This should start the server. If everything goes successfully, you should see on your terminal something like this:
    ```
    Local server started on port: 8000
    Listening on: https://random-words.loca.lt
    ```
- The `https://random-words.loca.lt` url is the one you want your webhook to send data to. Configure your webhook to send data via `POST` http method
- When your webhook sends data to the server, you should see those data on your terminal

### Mentions
- Special thanks goes to [localtunnel](https://localtunnel.github.io/www/) for this project possible.