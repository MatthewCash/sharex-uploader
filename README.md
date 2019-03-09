# sharex-uploader

> Basic MongoDB + Express Image Uploader for ShareX

> This is only an example for how to setup a ShareX Uploader in Node. I have made it so that the code can easily be transferred for use in larger projects/websites. I would also recommend using a more advanced authentication method, but this one works well enough for development/testing.

## Server Installation Instructions

```bash
# install dependencies
$ npm install

# copy .env file
$ cp .env.example .env

# start server
$ npm start
```

## ShareX Installation Instructions

```php
1. Enter server URL into ShareX URL field
    # By default, this is http://127.0.0.1/api/image

2. Set authentication key in headers
    # By default, this is "ca03849frhyw98ptrphajat8op9sd"

3. Set File form name to "image"

4. Test
```

### Example Configuration

![test](https://matthew-cash.com/api/image/5c834167ea63f25aa17f16c2/raw)

Learn more about ShareX Custom Image Uploaders at the [ShareX Website](https://getsharex.com/docs/custom-uploader).
