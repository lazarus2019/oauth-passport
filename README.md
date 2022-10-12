# &#11088; Login with Google, Github, Facebook w/ Express.js Server and Passport.js

<p>This project is a mock app that allows you to use OAuth2 login authentication with some of your favorite socials including Facebook, Google, Github,...updating</p>
<p>View the tutorial here: <a href="#">#</a></p>

![Team Retro](https://user-images.githubusercontent.com/62226062/195254092-0ff9e4e2-1bd6-4bd1-a40a-c462d8b504eb.png)

# 💻 Run the app

**NOTE: The app only run in localhost and your own domain, doesn't run in port that generate by vite (ex: 127.x.x.x)**

```
git clone https://github.com/lazarus2019/oauth-passport
cd oauth-passport

cd client
npm i
cd ../server
npm i


// start client (vite) with port 3001
npm run dev -- --port 3001

// start server (nodejs) with port 5000
npm start

```

## &#128161; Documents and Links I used in this project

<p>Login With Google Using React & Node - MERN Auth 2.0 <a href="https://www.youtube.com/watch?v=pdd04JzJrDw">https://www.youtube.com/watch?v=pdd04JzJrDw</a></p>
<p>React Social Login with Passport.js | React oAuth w/ Google, Facebook, Github <a href="https://www.youtube.com/watch?v=7K9kDrtc4S8">https://www.youtube.com/watch?v=7K9kDrtc4S8</a></p>
<p>passport-facebook <a href="https://www.passportjs.org/packages/passport-facebook/">https://www.passportjs.org/packages/passport-facebook/</a></p>
<p>Passport-GitHub2 <a href="https://www.passportjs.org/packages/passport-github2/">https://www.passportjs.org/packages/passport-github2/</a></p>
<p>passport-google-oauth20 <a href="https://www.passportjs.org/packages/passport-google-oauth20/">https://www.passportjs.org/packages/passport-google-oauth20/</a></p>

## Packages

[Passport packages](https://www.passportjs.org/packages/)

### Google

```
npm i passport-google-oauth20
```

**Setup**
[Create & setting request URL](https://console.cloud.google.com/apis/credentials/oauthclient/)

- Step 1: Go to google developer page above

![Ashampoo_Snap_2022 10 12_08h12m15s_003_](https://user-images.githubusercontent.com/62226062/195250292-476db716-4f02-4a2b-8f5f-b0c44c218f03.png)

- Step 2: Setting your app & setup request callback URL and client homepage

![Ashampoo_Snap_2022 10 12_08h12m46s_004_](https://user-images.githubusercontent.com/62226062/195250810-4a22208a-7c7a-44ec-a89c-0eb02b4d1c9e.png)

### Github

```
npm i passport-github2
```

**Setup**
[Create & setting request URL](https://github.com/settings/developers)

- Step 1: Go to github developer page above

  ![Ashampoo_Snap_2022 10 12_08h10m09s_001_](https://user-images.githubusercontent.com/62226062/195250303-c042be51-fd2e-4032-a6c9-04de24f80533.png)

- Step 2: Setup request URL and client homepage

![Ashampoo_Snap_2022 10 12_08h10m50s_002_](https://user-images.githubusercontent.com/62226062/195250299-a0225940-8b39-44b0-ba5b-9990b99529a1.png)

### Facebook

```
npm i passport-facebook
```

**Setup**
[Create & setting request URL](https://developers.facebook.com/)

**NOTE: YOU MUST SETUP YOUR OWN DOMAIN FOR USING THIS FEATURE**

- Step 1: Go to facebook developer page above

![Ashampoo_Snap_2022 10 12_08h15m34s_005_](https://user-images.githubusercontent.com/62226062/195250939-b5fa0cbb-0519-47b3-baff-31928010be90.png)

- Step 2: Setup request callback URL and client homepage

![Ashampoo_Snap_2022 10 12_08h16m41s_006_](https://user-images.githubusercontent.com/62226062/195250943-5bc85d10-ba82-4003-88e6-8ecdf7d6c772.png)

# &#128140; Questions? Feature Requests? Contact Me!

<p>&ensp;&raquo;&raquo; MAIL: <a href="mailto:freecodeweb2021@gmail.comm">freecodeweb2021@gmail.com</a></p>
<p>&ensp;&raquo;&raquo; FANPAGE: <a href="https://www.facebook.com/freecodeweb">https://www.facebook.com/freecodeweb</a></p>

# &#128075; Follow me!

<p>&ensp;&raquo;&raquo; YOUTUBE: <a href="https://tinyurl.com/freecodewebchannel">https://tinyurl.com/freecodewebchannel</a></p>
<p>&ensp;&raquo;&raquo; TIPS & TRICKS: <a href="https://bit.ly/3CUsd2J">https://bit.ly/3CUsd2J</a></p>
<p>&ensp;&raquo;&raquo; GITHUB: <a href="https://github.com/lazarus2019">https://github.com/lazarus2019</a></p>
<p>&ensp;&raquo;&raquo; WEBSITE: <a href="https://tinyurl.com/lazarus2018">https://tinyurl.com/lazarus2018</a></p>
<p>&ensp;&raquo;&raquo; LINK TREE: <a href="https://linktr.ee/freecodeweb">https://linktr.ee/freecodeweb</a></p>
 
# &#128373; Join our home now!
<p>&ensp;&raquo;&raquo; GROUP: <a href="https://www.facebook.com/groups/6366019480105972">https://www.facebook.com/groups/6366019480105972</a></p>

# &#128204; Copyright

<p>&copy; &#9889;<a style="font-style: italic;" href="https://www.facebook.com/nts.nguyen.3701/">Lazarus2019 - Krix Daniel</a>&#9889;</p>
