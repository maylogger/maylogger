This is a puyo puyo plugin for markdown-it markdown parser.

# Install
```
npm install markdown-it-puyo
```

# Usage
```
var MarkdownIt = require('markdown-it')
var puyo_plugin = require('markdown-it-puyo')
md = new MarkdownIt().use(puyo_plugin);

var result = md.render(`
puyo {


G
YY
GR
GGR
RR
}`)

console.log(result);
```

the result is following:

```
<div class="puyo">
<div class="puyo-G-container">
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-G-container"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-G-container"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-G-container"></span>
<span class="puyo-G-container"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
</div>
<div class="puyo-Y-container">
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-Y-container"></span>
<span class="puyo-Y-container"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
</div>
<div class="puyo-R-container">
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-empty"></span>
<span class="puyo-R-container"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-R-container"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<br/>
<span class="puyo-R-container"></span>
<span class="puyo-R-container"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
<span class="puyo-empty"></span>
</div>
</div>
```

and then you could write some css to show the result.