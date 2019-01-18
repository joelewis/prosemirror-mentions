import { tagNode, mentionNode } from "./nodes";

/**
 *
 * @param {OrderedMap} nodes
 * @returns {OrderedMap}
 */
export function addMentionNodes(nodes) {
  return nodes.append({
    mention: mentionNode
  });
}

/**
 *
 * @param {OrderedMap} nodes
 * @returns {OrderedMap}
 */
export function addTagNodes(nodes) {
  return nodes.append({
    tag: tagNode
  });
}
