# Contributing to the Meta-Weekly data

Maintaining ``data.json`` on Github allows anyone to update or contribute to the website data on the site.

* [data.json](https://github.com/azu/Meta-Weekly/blob/master/data.json "data.json")

## How it works

Once a change has been approved, ``data.json`` is integrated into ``gh-page``.

* [deploy-gh-pages.sh](https://github.com/azu/Meta-Weekly/blob/master/script/deploy-gh-pages.sh "deploy-gh-pages.sh")

## Supported WebSite

WebSite/e-mail newsletter is associated with 

* JavaScript
* Web Frontend

## Supported changes

Currently the following feature information can be modified:

* **title** — WebSite name (used for the title of the table)
* **url** — WebSite URL
* **updated** — Frequency of update
    * "daily"
    * "weekly"
    * "fortnightly"
    * "monthly"
    * "other"
* **keywords** — Array of keyword
* **rss** — RSS URL
* **twitter** — Twitter Account URL
