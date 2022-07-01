---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Callout from '../../components/Callout.astro'
title: Stateless session management on the Edge
publishDate: 1 Jul 2022
name: toyamarinyon
description: I build Stateless session utility using signed and encrypted cookies to store data. Works with WebCrypt API on Cloudflare Workers.
---
On May 11 2022, Cloudflare announced D1 that database designed for Cloudflare Workers, and I've been very exciting because I thought it would be able to run complicated web application on the Edge.

But to do that, it need to be able to management session for authentication, authorization and others.

We can use Cloudflare R2 or Cloudflare Durable Objects to it, but the implementation is messy.

Therefore, I build Stateless session utility using signed and encrypted cookies to store data called WebCrypt Session. it works with WebCrypt API on Cloudflare Workers.

# WebCrypt Session

You can check out an example of WebCrypt Session in action by trying out our demo running here: [https://webcrypt-session.sat0shi.workers.dev](https://webcrypt-session.sat0shi.workers.dev)

Currently, everybody can sign in with any username.
I am going to built more practical sign-up / sign-in feature with this library when I’ll be able to access to CloudFlare D1.

# Acknowledgment
This package is greatly influenced by iron-session developed by @vvoyer. iron-session is quite cool library that it allows to manage a stateless session.

I'd like to use iron-session on CloudFlare worker, but it could not run it because it requires Node.js runtime.

So, I started to develop a library that it allows to manage a stateless session on Cloudflare Worker, using iron-session's api design and implementation as a reference.