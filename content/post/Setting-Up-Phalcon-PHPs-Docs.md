---
title: "Setting Up Phalcon PHPs Docs"
author: "Gary A. Newsome"
date: 2017-09-10T15:29:15-04:00
draft: false
tags: ["PhalconPHP", "PHP", "Open Source"]
---

I recently made my first open source contribution to the PhalconPHP docs. It was a small contribution, but nevertheless it felt nice, and it was a great way to start being an open source contributor. This post is basically just to document my experience setting up the `docs` and the `docs-app` for [PhalconPHP](https://phalconphp.com/). *To note, I am using 2015 MacBookPro running macOS Sierra*.

I started by following the setup guide at [https://blog.phalconphp.com/post/helping-with-documentation](https://blog.phalconphp.com/post/helping-with-documentation). Which worked really well and it got me close, but there were a few tweaks I needed to make to get things running on my end.

The main difference between the conventional setup and the way I did it was, not using Nanobox to serve the `docs-app`. I tried a couple of times, but it just wasn't working out for me. *I did use it for the deploy step though.* What I did, with the help of friend, boss, and Phalcon core team member [Paul Scarrone](https://twitter.com/PaulSCoder), was install [phalcon-devtools](https://github.com/phalcon/phalcon-devtools) instead. This allowed me to run the app via a local development server instead.

So, onto the good stuff.

##### Installing Phalcon-Devtools

I used Composer for the install. `composer global require phalcon-devtools` Composer is a dependency manager for PHP, and can be found at [https://getcomposer.org/](https://getcomposer.org/). This installs phalcon-devtools at `~/.composer/vender/bin`. Worth mentioning here, is the `global` flag. I installed this globally, so I can use it from anywhere on my computer in the future.

Next, in my `.bashrc` file, I created the variable `COMPOSERBIN` which I set to the path `COMPOSERBIN="$HOME/.composer/vendor/bin"`.

Then you add the variable to your PATH, `export PATH=$COMPOSERBIN:$PATH`.

The final step in the `.bashrc` was to create the alias, `alias phalcon=$COMPOSERBIN/phalcon.php`, 
this allows you to call the `phalcon` command from your terminal.

In the `docs-app`, the last change I need to make was in the `.env` file. I changed the `APP_URL` line to `APP_URL=http://localhost:8000` instead of the default url listed in the documentation.

Now you can just `cd` into the `docs-app` folder and type `phalcon serve`, then visit `http://localhost:8000` in your browser of choice.

*A list of the available devtools commands can be found in the README.md at [phalcon-devtools](https://github.com/phalcon/phalcon-devtools) or by typing `phalcon --help` in your terminal.*

One final note, I actually cloned both the `docs` and the `docs-app` repos to my local machine. This allows me to work on the changes in the `docs-app` repo, then just copy/paste those changes into my `docs` repo, where I commit the changes.
