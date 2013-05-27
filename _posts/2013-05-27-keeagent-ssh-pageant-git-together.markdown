---
title: Using KeePass to Keep Your Passwords and SSH Private Keys Safe
category: programming
layout: post
---

## KeePass 2

I like to use different passwords for each site, and ideally each one is a
long meaningless randomly generated string of letters, numbers, and possibly
other symbols.  For this purpose I use KeePass.  With a few plugins, KeePass
fills in my website passwords very easily, generates the one-time-password
codes I need to add new machines to my Google account, and also allows me to
SSH into remote servers using a password-protected private key without entering
that password each time.

I use SpiderOak to keep my KeePass database synced and available across my machines -
Dropbox would work just as well if you're using that.

 * [KeePass](http://keepass.info) - For storing your passwords and ssh private keys securely

## KeeAgent Plugin

The normal way that people avoid typing their SSH key password all the time is to
run ssh-agent and ssh-add, which works pretty well.  Each time ssh-add asks for the
password I'd fire up KeePass and copy/paste the long random password into the terminal.
However, I thought I could do better, and at the same time have all my ssh keys nicely
organized in my KeePass database.

I stumbled on a great plugin for KeePass 2 that runs a pageant (the PuTTY equivalent
of ssh-agent) server, which seemed very promising but it doesn't work with OpenSSH,
only with putty based tools.

* [KeeAgent](http://lechnology.com/KeeAgent)

## ssh-pagent for OpenSSH

So I found another tool that runs a fake OpenSSH ssh-agent and translates the requests
to any running pageant process.

* [ssh-pageant](http://cuviper.github.io/ssh-pageant/)

## Plink for Git

Finally, for reasons unknown the ssh-pageant thing doesn't work with git for windows.

However, I found that I can configure git to use putty's plink for ssh connections,
and plink will read the keys from the KeeAgent directly, so it all works great.

To tell git to use plink, create a global environment variable GIT_SSH, set to the full
windows path to plink.exe, i.e. "C:\Program Files (x86)\putty\plink.exe"

Here's the links you need to get going:

 * [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/)

## KeePassDroid

There's a nice KeePass tool I run on my Android to access my KeePass database called
KeePassDroid.  This means that when I'm accessing secure websites from my phone I use
the same KeePass password to unlock the database, then I use Android's copy/paste
facilities to get the password into the app or browser that is requesting a password.

## Conclusion

I love KeePass - now I just have remember one password to unlock KeePass and I can
use those great secure randomly generated passwords for everywhere else.

Well, actually I still remember my Gmail password, my Windows password, and my
phone's unlock PIN separately.  But that's better then trying to have some system to
manage passwords for the dozens of sites I interact with occasionally (the system previously
being "use the same password for each site").

