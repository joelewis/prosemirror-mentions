# ProseMirror Mentions

A [ProseMirror](https://prosemirror.net/) plugin that enables @mentions and #hashtags in a prosemirror view.

Alternative: [https://github.com/quartzy/prosemirror-suggestions](https://github.com/quartzy/prosemirror-suggestions)

[prosemirror-suggestions](https://github.com/quartzy/prosemirror-suggestions) is a lighter alternative that comes with the bare minimum without any bells and whistles. It is upto you to implement common UI behavior handling.

[prosemirror-mentions](https://github.com/joelewis/prosemirror-mentions) is a fully packed plugin. It comes with all batteries included: default dropdown UI, behaviour handling, support for async fetching of suggestions, etc. All you need to do is configure options to suit your needs.

## Installation

```bash
npm install prosemirror-mentions
```

## Usage

```js
import {addMentionNodes, addTagNodes, getMentionsPlugin} from 'prosemirror-mentions'

...
...

var schema = new Schema({
    nodes: addTagNodes(addMentionNodes(schema.spec.nodes)),
    marks: schema.spec.marks
});

...
...


/**
 * IMPORTANT: outer div's "suggestion-item-list" class is mandatory. The plugin uses this class for querying.
 * IMPORTANT: inner div's "suggestion-item" class is mandatory too for the same reasons
 */
var getMentionSuggestionsHTML = items => '<div class="suggestion-item-list">'+
  items.map(i => '<div class="suggestion-item">'+i.name+'</div>').join('')+
'</div>';

/**
 * IMPORTANT: outer div's "suggestion-item-list" class is mandatory. The plugin uses this class for querying.
 * IMPORTANT: inner div's "suggestion-item" class is mandatory too for the same reasons
 */
var getTagSuggestionsHTML = items => '<div class="suggestion-item-list">'+
  items.map(i => '<div class="suggestion-item">'+i.tag+'</div>').join('')+
'</div>';

var plugins = [/* A list of other plugins */]

var mentionPlugin = getMentionsPlugin({
    getSuggestions: (type, text, done) => {
      setTimeout(() => {
        if (type === 'mention') {
            // pass dummy mention suggestions
            done([{name: 'John Doe', id: '101', email: 'joe@gmail.com'}, {name: 'Joe Lewis', id: '102', email: 'lewis@gmail.com'}])
        } else {
            // pass dummy tag suggestions
            done([{tag: 'WikiLeaks'}, {tag: 'NetNeutrality'}])
        }
      }, 0);
    },
    getSuggestionsHTML: (items, type) =>  {
      if (type === 'mention') {
        return getMentionSuggestionsHTML(items)
      } else if (type === 'tag') {
        return getTagSuggestionsHTML(items)
      }
    }
});

plugins.unshift(mentionPlugin); // push it before keymap plugin to override keydown handlers
...
...
window.view = new EditorView(document.querySelector("#my-editor-div"), {
  state: EditorState.create({
    schema: schema,
    plugins: plugins
  })
});
```

Refer [example application](https://github.com/joelewis/prosemirror-mentions/tree/master/example) for 

## Development

```bash
# Build distributable
npm run build
npm run watch
```

## Authors
- [Joe Lewis](https://github.com/joelewis)

## License

MIT License