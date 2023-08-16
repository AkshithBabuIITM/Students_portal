# SSO Auth

## Intro

The module provides a common authentication platform (compliant with OAuth 2.0/Open ID Connect Protocol) for all student apps (web, mobile).

### What is SSO ?

SSO (Single Sign On) Its just a fancy way of saying, combine all apps login screen into one. With SSO, a user only has to enter their login credentials (username, password/OTP, etc.) one time on a single page to access all of their applications.

### What is OAuth / OIDC ?

OAuth (OpenAuth) is an open standard for authorization. OAuth works over HTTPS and authorizes devices, APIs, servers, and applications with access tokens rather than credentials.

OIDC (Open ID Connect) is a newer standard that extends OAuth, adding support for authentication. It doesn’t change any of the OAuth behaviors

> Authorization is all about finding out who is allowed to access certain data and functionality. Authentication is all about logging in.

Below image illustrates SSO Auth FLow.

![SSO Auth Flow](./SSO%20Auth%20flow.png)

## Useful Links

- https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc

- https://codeburst.io/building-a-simple-single-sign-on-sso-server-and-solution-from-scratch-in-node-js-ea6ee5fdf340

- https://systemweakness.com/hacking-jwt-d29f39e202d5

## Implementation Details

> BASE_URL = /portal/auth

From now on all urls are relative to the above mentioned BASE_URL

---

> **POST** /login

---

> **POST** /logout
