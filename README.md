Shintaku
==================

Shintaku is a password vault in a Javascript SPA (single page app).

Your passwords are encrypted with 256 bit AES encryption before being sent over the internet to your Amazon S3 bucket. Your Amazon credentials are stored in your HTML5 capable browser's "local storage".

See it live at http://shintaku.supahiro.com, where it's hosted in an S3 bucket configured as a static web host. Add some Amazon IAM credentials and a bucket name and it's ready to roll. Since your IAM creds are stored in local storage, any other devices you wish to use to access will also need your IAM credentials entered.

