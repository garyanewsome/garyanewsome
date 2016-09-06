# SavvySoftWorks

page preview available at:

[https://garyanewsome.github.io/savvysoftworks_middleman](https://garyanewsome.github.io/savvysoftworks_middleman)

### Depends On
[https://bitbucket.org/thecodeavengers/inlinecomponents/pull-requests/2/pks-jsonp_all_the_things/diff](Depends on https://bitbucket.org/thecodeavengers/inlinecomponents/pull-requests/2/pks-jsonp_all_the_things/diff)

### Setup

SavvySoftWorks homepage built with [https://middlemanapp.com/](https://middlemanapp.com/) and [http://materializecss.com/](http://materializecss.com/)

Contact form handled by [http://www.sinatrarb.com/](http://www.sinatrarb.com/)

For the contact form to function properly you must nest Sinatra within its own folder and add a line to change the default port i.e. `set :port, 9494`

This will keep the Middleman server and the Sinatra server from conflicting on the same port.

Also of note, due to the nesting of Sinatra, you need to launch the Sinatra server using the `bundle exec` command.

`bundle exec ruby mailer.rb` from within the `mailer` folder.

mailer.rb uses actionmailer and active support gems.

### Mailcatcher
[https://mailcatcher.me/](https://mailcatcher.me/)

Launch from terminal with `mailcatcher` open a browser to `http://127.0.0.1:1080`

Mailacatcher will intercept outgoing mail, so you can test the contact form without blowing up your inbox.

### Testing

`bundle exec rake test`

Testing performed with `byebug` gem

