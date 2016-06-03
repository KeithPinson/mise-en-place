![](https://raw.githubusercontent.com/KeithPinson/mise-en-place/master/src/tile-wide.png)

# Mise-en-place

<p>
<i>A boilerplate for front-end development.</i>
</p>

Web apps are a moving target. The state-of-art for building a web app
from scratch is ever shifting. It's not that HTML, javascript, and CSS
are changing with much swiftness, but the tools used with them; the
frameworks, builders, and libraries; are constantly on the move and it seems,
any effort to stay current is as big a task as building the app itself.

In an effort to bring some sanity back to my infrequent forays into
*from-scratch* Web apps, this project,
Mise-en-place (which means to get everything in place before we start cooking),
serves as my moving target.
It moves at its own pace&mdash;slower than the rest&mdash;but catching
up to the state-of-art when it can. This is a &quot;*clone and never 
merge kind of affair*&quot;, so if you choose to use this: **clone it, give it a title, 
and make it your own.** 

### Will Be Using:

   * Node.js
   * Grunt (Other good options, but will stick with this task-runner)
   * Angular
   * As much as possible, vanilla JS (avoiding jQuery)
   * Plain vanilla CSS
   * Karma
   * Git with no scaffolding tools
   * And a bunch of other stuff, look in [package.json](https://raw.githubusercontent.com/KeithPinson/mise-en-place/master/package.json) for clues
   
&nbsp;&nbsp;&nbsp; *(All subject to change.)*
        
Running:

    grunt build
    
will create a distribution in the *dist* folder.
    
        
## Before Starting

   * Be sure to install Node.js, [https://nodejs.org](https://nodejs.org)
   * Run `npm update -g npm`
   * Install grunt: `npm install -g grunt-cli`
   * Install rollup: `npm install -g rollup`
   * Install bublé: `npm install -g buble`
   * Using git make a clone of this project git, clone https:github.com/keithpinson/mise-en-place.git \<myproject\>
   * Run `npm install` to pull in the node modules
    
## Testing
    
Run test with Grunt:

    grunt test
    
## How Does All this Work?
    
Testing is central to our style of web development. We want a
"separation of concerns" to influence the structure of our programs, their
files, and the tests of those files. To do this we have to write modules, 
bundle them into single files (html,js,css), test them, and then create a 
distribution. All this bundling, transpiling, testing, etc. adds complexity
to the project.

At this time the complexity of the build is not simplified by the strength
of the build tools. So, how does this all work? 

Ideally, you shoud:

   - Add your module
   - Write the test for it 
   - Hook the module into a page
   - And, then run `grunt test`
   
If the configuration is broken the configuration files are a good place to
start looking for a solution.

<div style="background-color:#f0f0f0;margin-left:2em;margin-right:2em;padding:1em;">
To get an understanding of what's going on here, peruse the following 
configuration files:<br/>&nbsp;
   
   - <dl>package.json <br/><br/><dd>Contains the build dependencies. It is Node's <a src="http://gruntjs.com/configuring-tasks" title="NPM's package handling documentation">NPM</a> configuration file.</dd></dl>
    
   - <dl>Gruntfile.js <br/><br/><dd>Tells <a src="http://gruntjs.com/configuring-tasks" title="Grunt documentation">Grunt</a> what to build.</dd></dl>
    
   - <dl>rollup.config.js <br/><br/><dd><a src="http://rollupjs.org/guide" title="Rollup User's Guide">Rollup</a> bundles the module files into a single file.</dd></dl>
   
   - <dl>karma.conf.js <br/><br/><dd><a src="https://karma-runner.github.io/0.13/config/configuration-file.html" title="Karma's Configuration Document">Karma</a> is the test runner.</dd></dl>
</div>   
 

## License

The code is available under an MIT type [license](LICENSE.txt).
