#!/bin/bash
# PostToolUse hook: Remind Claude to run the reviewer after writing/editing .mdx content files
FILE=$(jq -r '.tool_input.file_path // .tool_response.filePath' 2>/dev/null)
if echo "$FILE" | grep -q 'Website/.*\.mdx$'; then
  cat <<EOF
{"hookSpecificOutput":{"hookEventName":"PostToolUse","additionalContext":"IMPORTANT: You just wrote or edited an .mdx content file ($FILE). Run the genai-site-reviewer skill on this file before proceeding. Invoke /genai-site-reviewer on the file to check for formatting, frontmatter, naming, and editorial compliance."}}
EOF
fi
