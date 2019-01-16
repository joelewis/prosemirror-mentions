/**
 * See https://prosemirror.net/docs/ref/#model.NodeSpec
 */
export const mentionNode = {
    group: 'inline',
    inline: true,
    atom: true,

    attrs: {
        zuid: '',
        name: '',
        email: ''
    },

    selectable: false,
    draggable: false,

    toDOM: node => {
        return ['span', {
            'data-mention-zuid': node.attrs.zuid,
            'data-mention-name': node.attrs.name,
            'data-mention-email': node.attrs.email,
            'class': 'prosemirror-mention-node'
         }, '@' + node.attrs.name || node.attrs.email];
    },


    parseDOM: [{
        // match tag with following CSS Selector
        tag: 'span[data-mention-zuid][data-mention-name][data-mention-email]',
        
        getAttrs: dom => {
            var zuid = dom.getAttribute('data-mention-zuid');
            var name = dom.getAttribute('data-mention-name');
            var email = dom.getAttribute('data-mention-email');
            return {
                zuid: zuid,
                name: name,
                email: email
            };
        }
    }]
};

/**
 * See https://prosemirror.net/docs/ref/#model.NodeSpec
 */
export const tagNode = {
    group: 'inline',
    inline: true,
    atom: true,

    attrs: {
        tag: ''
    },

    selectable: false,
    draggable: false,

    toDOM: node => {
        return ['span', {
            'data-tag': node.attrs.tag,
            'class': 'prosemirror-tag-node'
         }, '#' + node.attrs.tag]
    },


    parseDOM: [{
        // match tag with following CSS Selector
        tag: 'span[data-tag]',
        
        getAttrs: dom => {
            var tag = dom.getAttribute('data-tag');
            return {
                tag: tag
            }
        }
    }]
};
