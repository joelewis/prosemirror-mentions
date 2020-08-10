export interface PluginConfig {
  allowSpace: any;
  hashtagTrigger: any;
  getSuggestions: any;
  getSuggestionsHTML: any;
  zIndex: number;
}

export function getMentionsPlugin(configs: PluginConfig): any;
export function addMentionNodes(nodes: any): any;
export function addTagNodes(): any;
export function tagNode(): any;
export function mentionNode(): any;
