---
title: Setting Up Phalcon PHP's Docs
date: 2017-09-10 05:00 UTC
author: Gary A. Newsome
category: development
tags: phalcon, open source, docs
---

I recently made my first open source contribution to the PhalconPHP docs. A small contribution, but never the less it felt nice.

This post is basically just to document my experience setting up the `docs` and the `docs-app` for [PhalconPHP](https://phalconphp.com/). *To note, I am using 2015 MacBookPro running macOS Sierra*.

I followed the setup guide at [https://blog.phalconphp.com/post/helping-with-documentation](https://blog.phalconphp.com/post/helping-with-documentation). Which worked really well and it got me close, but there were a few tweaks I needed to make to get things running right for me.

The major difference between the conventional setup and the way I did it is, I am not using Nanobox to serve the `docs-app`. I tried a couple of times, but it just wasn't working out for me. *I did use it for the `deploy` step.*

What I did, with the help of friend, boss, and Phalcon core team member [Paul Scarrone](https://twitter.com/PaulSCoder), was install [phalcon-devtools](https://github.com/phalcon/phalcon-devtools) globally instead. This allowed me to run the app via a local development server instead. So, onto the good stuff.

##### Installing Phalcon-Devtools

I used Composer for the install. `composer global require phalcon-devtools`

Which, installs at `~/.composer/vender/bin`.

Then in my `.bashrc`, I created the variable `COMPOSERBIN` which I set to the path `COMPOSERBIN="$HOME/.composer/vendor/bin"`.

Then you add the variable to your `PATH`, `export PATH=$COMPOSERBIN:$PATH`.

The final step to get this running was to create the `alias`, `alias phalcon=$COMPOSERBIN/phalcon.php`, 
this allows you to call the `phalcon` command from your terminal in any folder.

The other change I need to make was in the `.env` file. I changed the `APP_URL` line to `APP_URL=http://localhost:8000` instead of the default url listed in the documentation.

Now you can just `cd` into the `docs-app` folder and type `phalcon serve`, then visit `http://localhost:8000` in your browser of choice.

*A list of the available devtools commands can be found in the README.md at [phalcon-devtools](https://github.com/phalcon/phalcon-devtools) or by typing `phalcon --help` in your terminal.*

One final note, I actually cloned both the `docs` and the `docs-app` repos to my local machine. This allows me to work on the changes in the `docs-app` repo, then just copy/paste those changes into my `docs` repo.
