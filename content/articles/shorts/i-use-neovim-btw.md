---
title: A story of I use Neovim btw
date: "2025-09-11"
updatedAt: "2025-09-11"
excerpt: I'm still stuck on this stuff, even though it has been over a year. Was it worth it?
copyrightCover: 'Photo by <a href="https://unsplash.com/@theregisti?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">TheRegisti</a> on <a href="https://unsplash.com/photos/a-person-typing-on-a-keyboard-next-to-a-laptop-ziSzilQLSOM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
isRegional: false
---

# The Problem

My setup was pretty simple: macOS at the office and Arch Linux at home.
But one recurring problem kept slowing me down, and it is my daily driver editor, which is VS Code.
As much as I liked it, the editor was resource-hungry, eating up CPU and memory,
especially with Node.js projects, and also because I had to constantly jump between the keyboard and the mouse
which made my hands sore due to this, it's broken my pace of coding, I'm just telling this because it's
happened to me, if you not, then glad to hear that.

So, let me try to recap first what kind of issue I had before:

- VSCode eats so much memory, and you can imagine if you open alongside Chrome Dev Tools too :)
- Cross-OS issue editor, like you know the difference between cmd and ctrl
- My hands somehow got sore due to jumping between the mouse and the keyboard

For the last issue, I think it's just a skill issue; it seems I just can
register the keyboard shortcut in VSCode.

# The journey to find you (Neovim)

To solve the rest of the issue that I had, there is a thing that came to my mind:

> Does VSCode support keyboard layouts or mapping them based on JSON?

I'm figuring it out on the documentation and found this [this resource](https://code.visualstudio.com/docs/configure/keybindings)
but still, there are several cases in VSCode where you cannot totally change it because it's
link with the OS itself, you need to accept, and cannot change that behavior.

## A destiny perhaps(?)

Still in the same issue that I had, in between I find several folks in the X platform (formerly Twitter)
talking about Neovim and several Youtube recommendation coming like "Here's the reason why you need
to use Neovim" etc etc. It's make me curious about it.

After the research in the internet I find several battery-included about Neovim such as:

- [NvChad](https://nvchad.com/)
- [LunarVim](https://www.lunarvim.org/)
- [AstroNvim](https://astronvim.com/)
- [LazyVim](https://www.lazyvim.org/)

I'm not sure is there any more besides that I mention above, but I've tried those and I'm falling in love
with the LazyVim instead, the reason is only "the keymaps" are nearest the same as I have in the vscode.
Because, in that time I don't know yet how I setup my keymaps in neovim, so just try it one by one and "voila"
found the Lazyvim.

![first commit of neovim the image](./image-1.png)

So I guess all the issues that mentioned above has been resolved right? right?

## Learning curve

It's not easy as I think, to be honest it's really hard to start because you have a different keymaps,
UI and etc, like it's totally different world but I have an answerd for this so, instead of testing it
on a side or personal project, I jumped straigh into using it at work, this meant I had to adapt quickly,
so just like adding more pressure to helped me learn faster.

Along the way, I also started learning Lua, the scripting language that powers neovim configuration and start
to change the keymaps that coming from Lazyvim and writing my own small functions and tweaking configs
that it feels gave me a sense of _control over my editor._

Another game-changer for me was learning how to use [macros](https://neovim.io/doc/user/usr_10.html).
Instead of repeating the same actions for your code over and over, I could record a sequence once and
replay it as many times as needed. This drastically improved my speed when editing repetitive code patterns.

Last one, is one of the biggest turning points was understanding what LSP (Language Server Protocol) and
Treesitter could do. LSP brought several IDE features such as auto-completion, go-to definition,
and inline diagnostics, while Treesitter made syntax highlighting and code navigation much more
reliable. Together, they made the neovim feel modern and powerful.

It's feels like I know under the hood of the IDE built-in after I use neovim.

## Boring or maybe too much

Day by day when I still use lazyvim-battery-included to use neovim, it feels like there are several plugins
and keymaps that I really don't want to use it yet, so I'm just thinking that

> "How about I build it from scrach?"

I know it feels like I try to enter the unknown-area haha, but in my heart say "built it or lose it".

So, I just start to build my own-config for neovim, turns out there are two types of packages from Lazyvim:

- [The battery-included package](https://www.lazyvim.org/)
- [The plugin manager](https://github.com/folke/lazy.nvim)

At first, I was a bit confused about the difference between Lazy.nvim and LazyVim.org. Lazy.nvim
is actually a plugin manager it helps install and manage other plugins. Meanwhile, LazyVim.org
is a full neovim distribution built on top of Lazy.nvim, with lots of defaults and plugins preconfigured feels like battery-included right?
So to built it from scratch I decided to go with the bare plugin manager so I could understand
what was going on under the hood.

I keep my plugin list minimal, installing only the tools I really needed, this made my neovim feel lighweight.
As I grew more confident, I try to writing my own keymaps, autocmd, etc. This was the moment when the editor
truly felt like personal.

![enter image commit initiate the plugins](./image-2.png)

# And here we go

Nowadays, my neovim workflow no longer followed my old vscode config, I just felt like more more confident.
Moving from vscode to neovim turned out to be way more than just switching editors.
I went from copying configs and struggling with defaults, to building my own setup piece by piece.
Learning Lua, figuring out LSP and Treesitter, and keeping my plugins lean really shaped how I
use the editor. At some point, I stopped comparing it to vscode, neovim became its own thing for me.
And once I started writing my own keymaps, that’s when it finally felt like home.

You can check my own [dotfiles in here](https://github.com/adibfirman/dotfiles). Thanks for reading the story.
